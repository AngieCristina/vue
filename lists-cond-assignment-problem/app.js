const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      tasks: [],
      taskListIsVisible: true
    };
  },
  methods: {
    addTask() {
    this.tasks.push(this.enteredValue);
    this.enteredValue= "";
        
    },
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible
    }
  },
  computed:{
    buttonCaption(){
      return this.taskListIsVisible ? 'Hide' : 'Show List'
    }
  }
});
app.mount('#assignment')