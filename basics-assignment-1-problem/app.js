const app = Vue.createApp({
  data() {
    return {
      name: 'Angie',
      age: 30,
      universe: 'https://en.wikipedia.org/wiki/File:NASA-HS201427a-HubbleUltraDeepField2014-20140603.jpg'
    }
  },
  methods: {
    calculateAge() {
      return this.age + 5
    }, calculateNumber() {
      return Math.random();
    }

  }
})
app.mount("#assignment");