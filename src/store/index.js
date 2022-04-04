import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../data/db'
import { getRandomAlternative } from './helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    db: db,
    remaining: [],
    correct: [],
    incorrect: [],
    current: {},
    words: []
  },
  getters: {
    remaining: state => state.remaining,
    correct: state => state.correct,
    incorrect: state => state.incorrect,
    current: state => state.current,
    words: state => state.db,
  },
  mutations: {
    setRemaining(state, payload) {
      state.remaining = payload
    },
    setCorrect(state, payload) {
      state.correct = payload
    },
    setIncorrect(state, payload) {
      state.incorrect = payload
    },
    setCurrent(state, payload) {
      state.current = payload
    }
  },
  actions: {
    getRandomWord({ commit, state }) {
      const random = Math.floor(Math.random() * state.remaining.length)
      let word = getRandomAlternative(state.remaining[random])
      commit('setCurrent', word)
      commit('setRemaining', state.remaining.filter((word, index) => index !== random))
    },
    loadWords({ commit, state }) {
      commit('setRemaining', state.db)
    },
    setCorrect({ commit, state }) {
      commit('setCorrect', [...state.correct, state.current])
    },
    setIncorrect({ commit, state }) {
      commit('setIncorrect', [...state.incorrect, state.current])
    },
    reset({ commit, state }) {
      commit('setRemaining', state.db)
      commit('setCorrect', [])
      commit('setIncorrect', [])
    }
  },
  modules: {
  }
})
