import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _53c2a73a = () => interopDefault(import('..\\pages\\metodologia.vue' /* webpackChunkName: "pages_metodologia" */))
const _9ac535d8 = () => interopDefault(import('..\\pages\\portafolio.vue' /* webpackChunkName: "pages_portafolio" */))
const _369a6e4c = () => interopDefault(import('..\\pages\\sobreMi.vue' /* webpackChunkName: "pages_sobreMi" */))
const _0d0735f3 = () => interopDefault(import('..\\pages\\proyectos\\confeccionesLucelis.vue' /* webpackChunkName: "pages_proyectos_confeccionesLucelis" */))
const _eaa814f0 = () => interopDefault(import('..\\pages\\proyectos\\horarioCNCA.vue' /* webpackChunkName: "pages_proyectos_horarioCNCA" */))
const _572feda8 = () => interopDefault(import('..\\pages\\proyectos\\myWebsite.vue' /* webpackChunkName: "pages_proyectos_myWebsite" */))
const _37de98b7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/metodologia",
    component: _53c2a73a,
    name: "metodologia"
  }, {
    path: "/portafolio",
    component: _9ac535d8,
    name: "portafolio"
  }, {
    path: "/sobreMi",
    component: _369a6e4c,
    name: "sobreMi"
  }, {
    path: "/proyectos/confeccionesLucelis",
    component: _0d0735f3,
    name: "proyectos-confeccionesLucelis"
  }, {
    path: "/proyectos/horarioCNCA",
    component: _eaa814f0,
    name: "proyectos-horarioCNCA"
  }, {
    path: "/proyectos/myWebsite",
    component: _572feda8,
    name: "proyectos-myWebsite"
  }, {
    path: "/",
    component: _37de98b7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
