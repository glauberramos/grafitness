var app = new Vue({
  el: "#app",
  data: {
    loading: {},
    activities,
    showResults: false,
    time: 30,
    interval: 15,
    finalList: [],
    currentSlide: "",
    temporaryList: [],
  },

  methods: {
    startFlow() {
      this.temporaryList = [...this.finalList];

      if (this.finalList.length > 0) {
        this.showResults = true;
        this.start(10, this.finalList, false);
      }
    },
    start(time, activities, currentActivity) {
      if (time > 0) {
        this.currentSlide = currentActivity
          ? `${currentActivity} <br /><br /><strong>${time}</strong>`
          : `Descançar, começa em <br /><br /><strong>${time}</strong><br /><br /> <small>Próximo:<br />${activities[0]}</small>`;

        setTimeout(() => {
          this.start(time - 1, activities, currentActivity);
        }, 1000);
      } else {
        if (currentActivity && activities.length > 0) {
          var audio = new Audio("beep-24.mp3");
          audio.play();
          this.start(this.interval, activities, false);
        } else if (activities.length > 0) {
          var audio = new Audio("beep-29.mp3");
          audio.play();
          var currentActivity = activities.shift();
          this.start(this.time, activities, currentActivity);
        } else {
          var audio = new Audio("beep-24.mp3");
          audio.play();
          this.currentSlide = "Terminou!";
          this.finalList = [...this.temporaryList];
          setTimeout(() => {
            this.showResults = false;
          }, 3000);
        }
      }
    },
  },
});
