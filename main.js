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
  },

  methods: {
    start(time, activities, currentActivity) {
      if (time > 0) {
        this.currentSlide = currentActivity
          ? `${currentActivity} <br /><br /><strong>${time}</strong>`
          : `Começando em: <strong>${time}</strong><br /><br /> Próximo: ${activities[0]}`;

        setTimeout(() => {
          this.start(time - 1, activities, currentActivity);
        }, 1000);
      } else {
        if (currentActivity && activities.length > 0) {
          // var audio = new Audio('audio_file.mp3');
          // audio.play();
          this.start(this.interval, activities, false);
        } else if (activities.length > 0) {
          var currentActivity = activities.shift();
          this.start(this.time, activities, currentActivity);
        } else {
          this.currentSlide = "Terminou!";
          setTimeout(() => {
            this.showResults = false;
          }, 3000);
        }
      }
    },
  },
});
