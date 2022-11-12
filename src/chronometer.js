class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() =>{
      this.currentTime++;
      if (typeof printTimeCallback === 'function'){
        printTimeCallback();
       }}, 1000);
     }
  

  getMinutes() {
    let minutes = this.currentTime/60
    let minutesFloor = Math.floor(minutes)
    return minutesFloor
  }

  getSeconds() {
    let seconds = this.currentTime%60
    return seconds
  }


//the lab states we can use .slice() to acheive this, and by searching I think it should be .slice(-2)

  computeTwoDigitNumber(value) {
    let stringed = JSON.stringify(value)
    if (stringed.length >1){
      return stringed
    } return 0 + stringed
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
