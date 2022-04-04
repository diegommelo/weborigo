<template>
  <div class="card">
    <div class="card-content">
      <div class="card-header mb-2">
        <div class="total-answers">
          <img src="@/assets/thumbs-up.png" class="icon" />
          {{totalCorrect}} / {{totalWords}}
        </div>
        <div class="total-answers">
          <img src="@/assets/thumbs-down.png" class="icon" />        
          {{totalIncorrect}} / {{totalWords}}
        </div>
      </div>
      <div class="card-body-content">
          <div class="card-image">
            <img :src="wordImage" class="img-fluid word-image" />
          </div>
          <div class="card-text">
            <p :class='answerClass'>{{word.alternative}}</p>
          </div>
        <div class="card-footer">
          <input type="text" class="mb-4" v-model="userAnswer" @keyup.enter="checkAnswer" />
          <button class="btn btn-primary" @click="checkAnswer">Let's see</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WordCard',
  data: function() {
    return {
      userAnswer: '',
      imageUrl: '@/assets/imgs/'
    }
  },
  props: {
    imageId: {
      type: Number,
      required: true
    },
    word: {
      type: Object,
      required: true
    },
    stateAnswer: {
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'words',
      'correct',
      'incorrect'
    ]),
    wordImage() {
      return require(`@/assets/imgs/${this.imageId}.jpg`);
    },
    totalWords() {
      return this.words.length;
    },
    totalCorrect() {
      return this.correct.length;
    },
    totalIncorrect() {
      return this.incorrect.length;
    },
    answerClass() {
      if (this.stateAnswer) {
        return 'correct'
      } else if (this.stateAnswer === false) {
        return 'incorrect'
      }
      return 'default'
    }
  },
  methods: {
    checkAnswer() {
      this.$emit('userAnswered', this.userAnswer)
      this.userAnswer = ''
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import '../scss/_base.scss';

  .card {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 80%;
    margin: 0 auto;
    border-radius: 40px;
    padding: 5%;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16);
  }
  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .card-body-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5rem;
    color: $orange;
  }
  .card-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
  }
  .card-text {
    text-align: center;
    font-weight: bold;
  }
  .card-image {
    display: flex;
    justify-content: center;
  }
  .card-image img {
    width: 300px;
    height: 220px;
    object-fit: cover;
    object-position: bottom;  
  }
  .word-image {
    filter: drop-shadow(-6px 6px 10px rgba(255, 103, 0, 0.12));
    border-radius: 10px;
  }
  .icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
  .total-answers {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .correct {
    color: $green;
  }
  .incorrect {
    color: $red;
  }



  @media screen and (min-width: 80rem) {
    .card {
      border-radius: 10px;
      padding: 2% 2% 0 2%;
      background-position: 30% 60%;
      background-repeat: no-repeat;
      background-size: 70%;    
      background-image: urL('@/assets/blob.svg');
    }
    .card-content {
      width: 80%;
      flex-direction: column-reverse;
    }
    .card-image img {
      height: 265px;
      width: 60%;
    }
    .card-header {
      justify-content: space-around;
      width: 55%;
      margin-top: 1rem;
    }
    .btn {
      width: 40%;
    }
  }

  @media screen and (min-width: 120rem) {
    .card {
      width: 60%;
      background-position: 30% 50%;
      background-repeat: no-repeat;
      background-size: 90%;         
    }
    .card-content {
      width: 90%;
    }
    .card-image img {
      height: 464px;
      width: 700px;
    }
    .card-header {
      font-size: 1.2rem;
    }

  }

</style>
