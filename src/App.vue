<template>
  <div id="app">
    <img src="@/assets/logo.png" class="logo" />
    <WordCard :word="current" :imageId="current.imageId" :stateAnswer="isAnswerCorrect" @userAnswered="checkAnswer"  />
  </div>
</template>

<script>
import WordCard from './components/WordCard.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      isAnswerCorrect: null
    }
  },
  components: {
    WordCard
  },
  methods: {
    ...mapActions([
      'getRandomWord',
      'loadWords',
      'setCorrect',
      'setIncorrect',
      'reset'
    ]),
    checkAnswer(event) {
      if (this.remaining.length > 0) {
        if (event.toLowerCase() === this.current.answer.toLowerCase()) {
          this.setCorrect()
          this.isAnswerCorrect = true
        } else {
          this.isAnswerCorrect = false
          this.setIncorrect()
        }
        setTimeout(() => {
          this.getRandomWord()
          this.isAnswerCorrect = null
        }, 1500)      
      } else {
        this.reset()
        this.getRandomWord()
      }
    },
    init() {
      this.loadWords()
      this.getRandomWord()
    }
  },
  created: function () {
    this.init()
  },
  computed: {
    ...mapGetters([
      'words',
      'remaining',
      'current'
    ])
  }

}
</script>

<style lang="scss">
@import './scss/_variables.scss';

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: $font-size;
}

#app {
  background-color: $orange; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}
.logo {
  max-width: 100%;
  margin-bottom: 2rem;
}

@media screen and (min-width: 80rem) {
  .logo {
    width: 20%;
  }
}

@media screen and (min-width: 120rem) {
  body {
    font-size: 1.3rem;
  }

}

</style>
