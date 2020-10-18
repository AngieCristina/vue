const app = Vue.createApp({
  data() {
    return {
      output1: '',
      output2: ''
    }
  },
  methods: {
    showAlert() {
      alert('Time to practice Event Binding')
    },
    updateInput1(event) {
      this.output1 = event.target.value;
    },
    updateInput2(event) {
      this.output2 = this.output1;
    }
  }
});
app.mount('#assignment');