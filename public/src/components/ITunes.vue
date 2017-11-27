<template>
    <div class="container-fluid">
        <div class="row header-row header-row-background-default text-center">
            <h2 class="section-title text-center">Search Artists</h2>
            <div class="col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8">
                <div class="header-wrapper">
                    <form class="form-inline" @submit.prevent="getMusicByArtist">
                        <div class="form-group">
                            <input type="text" class="form-control" name="artist" placeholder="Artist Name" v-model="search.artist">
                            <button type="submit" class="btn btn-submit btn-main" id="get-music-button">Get Music</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="row songs-row songs-row-background-default">
            <div class="col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8">
                <div class="row">
                    <div v-for="song in songs" class="col-sm-6 flex v-center h-center">
                        <div class="song-wrapper panel panel-default text-center">
                            <div class="panel-body">
                                <i class="glyphicon glyphicon-plus pull-right" @click="addToMyTunes(song)"></i>
                                <img class="song-image" :src="song.albumArt">
                                <p class="song-title">{{song.title}}</p>
                                <p class="artist-name">{{song.artist}}</p>
                                <p class="album-title">{{song.album}}</p>
                                <audio :src="song.preview" controls></audio>
                                <p class="album-price">Album Price: ${{song.albumPrice}}</p>
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
        name: 'ITunes',
        data() {
            return {
                search: {}
            }
        },
        methods: {
            getMusicByArtist() {
                this.$store.dispatch('getMusicByArtist', this.search) //value from input
            },
            addToMyTunes(song) {
                console.log('Clicked to add: ', song.title)
                song.rank = this.$store.state.myTunes.length
                this.$store.dispatch('addToMyTunes', song)
            }
        },
        computed: {
            songs() {
                return this.$store.state.results
            }
        }
    }
</script>


<style>
</style>