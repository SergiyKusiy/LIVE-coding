const timer = {
   minsPassed: 0,
   secondsPassed: 0,
   intervalID: null,
   startTimer() {
      this.intervalID = setInterval(() => {
      
         if (this.secondsPassed == 60) {
            this.secondsPassed = 0;
            this.minsPassed += 1
         }
         this.secondsPassed += 1;
      }, 1000)
   },
   getTime() {

   },
   stopTimer() {
      clearInterval(this.intervalID);
   },
   resetTimer() {

   },
};



const obj = {
   firstName: 'James',
   printName() {
      console.log(this);
   },
};
const func = obj.printName;
func();

// test
//  const timer = {
//    secondsPassed: 0,
//    minsPassed: 0,
//    time: 0,
//    startTimer() {
//      this.time = setInterval(() => {
//        this.secondsPassed += 1;
//        if (this.secondsPassed === 60) {
//          this.minsPassed += 1;
//          this.secondsPassed = 0;
//        }
//      }, 1000);
//    },
//    getTime() {
//      // if (this.secondsPassed) {
//        return `${this.minsPassed}:0${this.secondsPassed}`;
//      // }
//      // return `${this.minsPassed}:${this.secondsPassed}`;
//    },
//    stopTimer() {
//      clearInterval(this.time);
//    },
//    resetTimer() {
//      this.minsPassed = 0;
//      this.secondsPassed = 0;
//    },
//  };
 
//  timer.startTimer();
//  console.log(timer.getTime());