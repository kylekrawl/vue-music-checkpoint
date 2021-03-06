import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: []
  },
  mutations: {
    setResults(state, data) {
      state.results = data
      console.log('itunes results from setResults: ', data)
    },
    setMyTunes(state, data) {
      // sort song array by rank
      data = data.sort(function(a, b){
        return b.rank - a.rank
      })
      state.myTunes = data
      console.log('! MYTUNES GET REQUEST SUCCESSFUL: ! myTunes results from setMyTunes: ', data, 'number of items: ', data.length)
    }
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, search) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + search.artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.getJSON(apiUrl).then(data => {
        console.log('iTunes data: ', data)
        var songs = data.results.map(function (song) {
          return {
            title: song.trackName,
            albumArt: song.artworkUrl100,
            artist: song.artistName,
            album: song.collectionName,
            albumPrice: song.collectionPrice,
            preview: song.previewUrl,
            fileType: song.kind,
            genre: song.primaryGenreName
          }
        })
        console.log('mapped iTunes songs: ', songs)
        commit('setResults', songs)
      })
    },
    getMyTunes({ commit, dispatch }) {
      var url = 'http://localhost:3000/api/mytunes'
      //this should send a get request to your server to return the list of saved tunes
      $.get(url)
        .then(data => {
          console.log('myTunes data from getMyTunes: ', data)
          commit('setMyTunes', data)
        })
    },
    addToMyTunes({ commit, dispatch }, song) {
      //this will post to your server adding a new track to your tunes
      var url = 'http://localhost:3000/api/mytunes'
      var data = {
        title: song.title,
        albumArt: song.albumArt,
        artist: song.artist,
        album: song.album,
        albumPrice: song.albumPrice,
        preview: song.preview,
        fileType: song.fileType,
        genre: song.genre,
        //playlistId: '5a14c1150d26d63be7193a88', // Needed for multiple playlist functionality (to be added)
        rank: song.rank
      }
      console.log('data to post: ', data)
      $.post(url, data)
        .then(res => {
          console.log('addToMyTunes response: ', res)
          dispatch('getMyTunes')
        })
    },
    removeTrack({ commit, dispatch }, payload) {
      var url = `http://localhost:3000/api/mytunes/${payload.song._id}`
      $.ajax({
        url: url,
        method: 'DELETE'
      })
        .then(res => {
          console.log('removeTrack response: ', res)
          //dispatch('getMyTunes')
          dispatch('rescaleTrackRanks', payload.songsToShift)
        })
      //Removes track from the database with delete
    },
    promoteTrack({ commit, dispatch }, payload) {
      //this should increase the position / upvotes and downvotes on the track
      var url = `http://localhost:3000/api/mytunes/${payload.song._id}`
      $.ajax({
        method: 'PUT',
        contentType: 'application/json',
        url: url,
        data: JSON.stringify(payload.song)
      })
        .then(res => {
          console.log('promoteTrack response: ', res)
          if (payload.conflictSong.hasOwnProperty('rank')) {
            payload.conflictSong.rank -= 1
            dispatch('demoteTrack', { song:payload.conflictSong, conflictSong:{} })
          } else {
            dispatch('getMyTunes')
          }
        })
    },
    demoteTrack({ commit, dispatch }, payload) {
      //this should decrease the position / upvotes and downvotes on the track
      var url = `http://localhost:3000/api/mytunes/${payload.song._id}`
      $.ajax({
        method: 'PUT',
        contentType: 'application/json',
        url: url,
        data: JSON.stringify(payload.song)
      })
        .then(res => {
          console.log('demoteTrack response: ', res)
          if (payload.conflictSong.hasOwnProperty('rank')) {
            payload.conflictSong.rank += 1
            dispatch('promoteTrack', { song:payload.conflictSong, conflictSong:{} })
          } else {
            dispatch('getMyTunes')
          }
        })
    },
    rescaleTrackRanks({ commit, dispatch }, songs) {
      console.log("songs to rescale: ", songs)
      if (songs.length > 0) {
        var song = songs.pop()
        var url = `http://localhost:3000/api/mytunes/${song._id}`
        song.rank -= 1
        $.ajax({
          method: 'PUT',
          contentType: 'application/json',
          url: url,
          data: JSON.stringify(song)
        })
          .then(res => {
            console.log('rescaleTrackRanks response: ', res)
            dispatch('rescaleTrackRanks', songs)
          })
      } else {
        console.log("! NO TRACKS LEFT TO RESCALE: ! About to dispatch getMyTunes from rescaleTracks")
        dispatch('getMyTunes')
      }
    }

  }
})

export default store