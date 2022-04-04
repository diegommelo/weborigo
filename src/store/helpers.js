function getRandomAlternative(word) {

    const random = Math.floor(Math.random() * 2)
    let answer = {}

    switch (random) {
      case 0:
        answer = {answer: word.english, alternative: word.serbian, imageId: word.imageId}
        break;
      case 1:
        answer = {answer: word.serbian, alternative: word.english, imageId: word.imageId}
        break;
    }

    return answer
  }

  export { getRandomAlternative }