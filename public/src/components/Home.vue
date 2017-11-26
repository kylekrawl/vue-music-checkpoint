<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
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
  data () {
    return {
      
    }
  }
}
</script>


<style>
.my-tunes{
  display: inline-block;
  min-height: 500px;
  min-width: 100%;
  background: green;
}

.i-tunes{
  display: inline-block;
  background: red;
  min-height: 500px;
  min-width: 100%;
}

</style>
