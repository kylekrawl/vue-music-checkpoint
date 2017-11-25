<template>
    <div class="container-fluid">
        <div class="row mytunes-row">
            <div class="col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8">
                <div class="row">
                    <div v-for="myTune in myTunes" class="col-sm-6 flex v-center h-center">
                        <div class="song-wrapper panel panel-default text-center">
                            <div class="panel-body">
                                <img class="song-image" :src="myTune.albumArt">
                                <p class="song-title">{{myTune.title}}</p>
                                <p class="artist-name">{{myTune.artist}}</p>
                                <p class="album-title">{{myTune.album}}</p>
                                <!--<audio :src="myTune.preview" controls></audio>-->
                                <p class="album-price">Album Price: ${{myTune.albumPrice}}</p>
                                <p class="song-rank">Rank: {{myTune.rank}}</p>
                                <i class="glyphicon glyphicon-chevron-up pull-right" @click="promoteTrack(myTune)"></i>
                                <i class="glyphicon glyphicon-chevron-down pull-right" @click="demoteTrack(myTune)"></i>
                                <i class="glyphicon glyphicon-trash pull-right" @click="removeTrack(myTune)"></i>
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
        mounted(){
            this.$store.dispatch('getMyTunes')
        },
        methods: {
            removeTrack(song) {
                console.log('Clicked to remove: ', song.title)
                this.$store.dispatch('removeTrack', song)
            },
            promoteTrack(song) {
                console.log('Clicked to promote: ', song.title)
                song.rank += 1
                this.$store.dispatch('promoteTrack', song)
            },
            demoteTrack(song) {
                console.log('Clicked to demote: ', song.title)
                song.rank -= 1
                this.$store.dispatch('demoteTrack', song)
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