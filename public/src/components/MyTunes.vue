<template>
    <div class="container-fluid background-default">
        <div class="row mytunes-row">
            <h2 class="section-title text-center">myTunes</h2>
            <div class="col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8">
                <div class="row">
                    <div v-for="myTune in myTunes" class="col-sm-6 flex v-center h-center">
                        <div class="song-wrapper panel panel-default text-center">
                            <div class="panel-body">
                                <p class="song-rank text-right">{{myTunes.length - myTune.rank}}</p>
                                <i class="glyphicon glyphicon-trash pull-right" @click="removeTrack(myTune)"></i>
                                <i class="glyphicon glyphicon-chevron-down pull-right" @click="demoteTrack(myTune)"></i>
                                <i class="glyphicon glyphicon-chevron-up pull-right" @click="promoteTrack(myTune)"></i>
                                <img class="song-image" :src="myTune.albumArt">
                                <p class="song-title">{{myTune.title}}</p>
                                <p class="artist-name">{{myTune.artist}}</p>
                                <p class="album-title">{{myTune.album}}</p>
                                <audio :src="myTune.preview" controls></audio>
                                <p class="album-price">Album Price: ${{myTune.albumPrice}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyTunes',
        data() {
            return {

            }
        },
        mounted() {
            this.$store.dispatch('getMyTunes')
        },
        methods: {
            removeTrack(song) {
                console.log('Clicked to remove: ', song.title)

                var songsToShift = []
                for (var i = 0; i < this.$store.state.myTunes.length; i++) {
                    var compareSong = this.$store.state.myTunes[i]
                    if (compareSong.rank > song.rank) {
                        songsToShift.push(compareSong)
                    }
                }

                this.$store.dispatch('removeTrack', { song, songsToShift })
            },
            promoteTrack(song) {
                console.log('Clicked to promote: ', song.title)
                if (song.rank < this.$store.state.myTunes.length - 1) {
                    song.rank += 1
                    var conflictSong = {}
                    for (var i = 0; i < this.$store.state.myTunes.length; i++) {
                        var compareSong = this.$store.state.myTunes[i]
                        if (compareSong.rank == song.rank && compareSong._id != song._id) {
                            conflictSong = compareSong
                            break
                        }
                    }
                    console.log('song: ', song, ' conflict: ', conflictSong)

                    this.$store.dispatch('promoteTrack', { song, conflictSong })
                }
            },
            demoteTrack(song) {
                console.log('Clicked to demote: ', song.title)
                if (song.rank > 0) {
                    song.rank -= 1
                    var conflictSong = {}
                    for (var i = 0; i < this.$store.state.myTunes.length; i++) {
                        var compareSong = this.$store.state.myTunes[i]
                        if (compareSong.rank == song.rank && compareSong._id != song._id) {
                            conflictSong = compareSong
                            break
                        }
                    }
                    console.log('song: ', song, ' conflict: ', conflictSong)

                    this.$store.dispatch('demoteTrack', { song, conflictSong })
                }
            }
        },
        computed: {
            myTunes() {
                return this.$store.state.myTunes
            }
        }
    }
</script>

<style>
</style>