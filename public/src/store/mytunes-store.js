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
    setResults(state, results) {
      state.results = results
      console.log('results: ', results)
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
      var url = 'http://localhost:3000/api/songs'
      //this should send a get request to your server to return the list of saved tunes
      $.get(url).then(data => {
        console.log('myTunes data: ', data)
      })
    },
    addToMyTunes({ commit, dispatch }, track) {
      //this will post to your server adding a new track to your tunes
    },
    removeTrack({ commit, dispatch }, track) {
      //Removes track from the database with delete
    },
    promoteTrack({ commit, dispatch }, track) {
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({ commit, dispatch }, track) {
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store
