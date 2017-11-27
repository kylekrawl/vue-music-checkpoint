<template>
  <div class="home">
    <h1 class="main-title text-center">.songs</h1>
    <my-tunes class="my-tunes"></my-tunes>
    <i-tunes class="i-tunes"></i-tunes>
  </div>
</template>

<script>
  import ITunes from './ITunes'
  import MyTunes from './MyTunes'
  export default {
    name: 'Home',
    components: {
      MyTunes,
      ITunes
    },
    data() {
      return {

      }
    }
  }
</script>


<style>
  /*
------------------
Base Styles
------------------
*/

  body {
    background: #000;
    color: #fff;
    font-family: 'Jura', sans-serif;
  }

/*
------------------
Components
------------------
*/

  .my-tunes {
    display: inline-block;
    min-height: 300px;
    min-width: 100%;
    background: #000;
  }

  .i-tunes {
    display: inline-block;
    background: #000;
    min-height: 500px;
    min-width: 100%;
  }

/*
-------------------
Grid / Flexbox
-------------------
*/

  .flex {
    display: flex;
  }

  .flex.v-center {
    align-items: center;
  }

  .flex.h-center {
    justify-content: center;
  }

/*
------------------
Header Row
------------------
*/

.header-row {
    color: #fff;
}

.background-default {
    background: #000;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url("../assets/leaf-motif.png") center no-repeat;
    background-size: cover;
}

.main-title {
    font-size: 5em;
    margin-bottom: 30px;
    font-family: 'Forum', cursive;
}

.section-title {
    font-size: 3em;
    margin-bottom: 30px;
    font-family: 'Forum', cursive;
}

.header-wrapper {
    height: 100px;
    padding-top: 10px;
}

/*
------------------
Songs Row
------------------
*/

.songs-row {
    min-height: 400px;
    padding-top: 30px;
}

.songs-row-background-default {
    background: #262626
}

.song-wrapper {
    margin-top: 5px;
    color: #000;
    width: 90%;
    height: 450px;
    padding: 10px;
}

.song-wrapper-background-default {
    background: #000;
}

.song-image {
    height: 150px;
    border: 2px solid #fff;
    border-radius: 2%;
    margin: 10px;
}

.song-title {
    font-size: 1.2em;
}

.artist-name {
    font-size: 1.1em;
}

.album-name {
    font-size: 1em;
}

.album-price {
    font-size: 0.9em;
    margin: 15px 0;
}

/*
------------------
Buttons
------------------
*/

.btn-main {
    background: #000;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 2px;
}

.btn-main:active,
.btn-main:focus {
    outline: none;
}

.btn-main:hover {
    background: #333333;
    color: #fff;
}

/*
------------------
Controls
------------------
*/

audio {
    display: block;
    max-width: 100%;
    margin: 0 auto;
}

video {
    width: 300px;
    max-width: 100%;
    margin-bottom: 30px;
}
</style>