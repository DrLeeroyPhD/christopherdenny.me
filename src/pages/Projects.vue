<template>
  <div id="projects">
    <ul>
      <li v-for="website in websites"><a :href="website.link" target="_blank">{{ website.name }}</a></li>
    </ul>
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
        websites: {
          ooc: {
            name: "Origami of Code",
            link: "http://origamiofcode.org/",
            img: ""
          },
          
          pdx: {
            name: "PDX Fun",
            link: "http://www.pdxfun.me/",
            img: ""
          },
          
          pong: {
            name: "Pong",
            link: "http://christopherdenny.me/pong/",
            img: ""
          }
        }
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
</style>
