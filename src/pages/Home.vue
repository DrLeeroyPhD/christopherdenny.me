<template>
  <div id="home">
    <h1>CHRISTOPHER</h1>
    <h1>DENNY</h1>
    <h2>Web Developer</h2>
  </div>
</template>

<script>
  // Import components

  export default {
    components: {
      // Imported components
    },
    data () {
      return {
        // Component data
      }
    },
    methods: {
      // Component methods
    },
    route: {
      activate (transition) {
        // When page is loaded
        // Previous page `transition.from.path`
        transition.next()
      },
      deactivate (transition) {
        // When page left
        transition.next()
      }
    }
  }
</script>

<style>
  /* Component style */
  #home{
    text-align: right;
    font-family: 'Open Sans', sans-serif;
  }
  
  #home h1{
    font-size: 3em;
    margin-top: 25px;
    margin-bottom: -25px;
    letter-spacing: 10px;
    font-weight: bolder;
  }
  
  #home h2{
    letter-spacing: 3px;
  }
</style>
