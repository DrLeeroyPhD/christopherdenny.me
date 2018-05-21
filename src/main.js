import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Projects from './pages/Projects.vue'
import Contact from './pages/Contact.vue'

Vue.use(VueRouter)

let router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/about': {
    component: About
  },
  '/projects': {
    component: Projects
  },
  '/contact': {
    component: Contact
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
