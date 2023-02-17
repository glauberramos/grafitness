var app = new Vue({
  el: "#app",
  data: {
    loading: {},
    activities,
    showResults: false,
    time: 25,
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
    playAudio(text) {
      var msg = new SpeechSynthesisUtterance();
      msg.voiceURI = "Google português do Brasil";
      msg.lang = "pt-BR";
      msg.localService = true;
      msg.text = text;
      window.speechSynthesis.speak(msg);
    },
    start(time, activities, currentActivity) {
      if (time > 0) {
        if (!currentActivity && time === 10) {
          this.playAudio("Próximo: " + activities[0]);
        }

        this.currentSlide = currentActivity
          ? `${currentActivity} <br /><br /><strong>${time}</strong>`
          : `Descansar, começa em <br /><br /><strong>${time}</strong><br /><br /> <small>Próximo:<br />${activities[0]}</small>`;

        setTimeout(() => {
          if (time - 1 > 0 && time - 1 < 10) {
            this.playAudio(time - 1);
          }

          this.start(time - 1, activities, currentActivity);
        }, 1000);
      } else {
        if (currentActivity && activities.length > 0) {
          this.playAudio("Descansar");
          this.start(this.interval, activities, false);
        } else if (activities.length > 0) {
          var currentActivity = activities.shift();
          this.playAudio(currentActivity);
          this.start(this.time, activities, currentActivity);
        } else {
          this.currentSlide = "Terminou!";
          this.playAudio("Terminou!");
          this.finalList = [...this.temporaryList];
          setTimeout(() => {
            this.showResults = false;
          }, 3000);
        }
      }
    },
  },
});
