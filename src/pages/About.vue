<template>
  <div id="about" class="sidebar">
    <h1>MEET THE DEVELOPER</h1>
    <hr>
    <p>
      BLAH BLAH BLAH WHOO YAY 
      I'M COOL, I CODE, HIRE ME. WHAT <br>
      MORE DO YOU NEED TO KNOW? 
      I'M ALSO INCREDIBLY HANDSOME, <br>
      SO CLIENT WILL BE POURING IN 
      JUST TO GET A CHANCE TO TALK <br>
      WITH ME. FUNNY, DID I MENTION FUNNY? <br>
      CAUSE YO BOI HERE GOT 
      HUMOR FO DAYZ. <br>
      SO LIKE, WHAT MORE DO YOU NEED? <br>
      I LITERALLY DO IT ALL. JOB ME PLS.
    </p>
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
  #about{
    font-family: 'Open Sans', sans-serif;
    text-align: right;
  }
  
  #about h1{
    font-size: 3em;
  }
</style>
