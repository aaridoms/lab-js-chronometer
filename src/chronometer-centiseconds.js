class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      
      if (typeof printTimeCallback === 'function') {
        printTimeCallback(this.currentTime)
      }
    }, 1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)

    return minutes
  }

  getSeconds() {
    let seconds = this.currentTime % 60

    return seconds
  }

  getCentiseconds() {
    let centiseconds = this.currentTime
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
