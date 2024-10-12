class Console {
    constructor(str) {
      this.str = str
      this.logHistory = []
    }
    log(...args) {
      let myLog = ""
  
      for (const arg of args) {
        if (Array.isArray(arg)) {
          myLog += `Regular: [${arg.join(", ")}] `
        } else if (typeof arg === "object" && arg !== null) {
          myLog += `Fancy: ${JSON.stringify(arg)} `
        } else {
          myLog += `${arg} `
        }
      }
  
      myLog.slice(0, -2)
      const logEntry = myLog ? `"${this.str}: ${myLog}"` : myLog
      this.logHistory.push(logEntry)
      return logEntry
    }
    range(count) {
      if (count !== undefined) {
        const start = Math.max(this.logHistory.length - count)
        return this.logHistory.slice(start)
      }
      return this.logHistory
    }
    clearHistory() {
      this.logHistory = []
      return true
    }
    history() {
      return this.logHistory
    }
  }
  
  const myConsole = new Console("Regular")
  const fancyConsole = new Console("Fancy")
  

console.log(myConsole.log([0, 1, 2, 3])) // "Regular: [0,1,2,3]"
console.log(myConsole.log({ a:1, b:2 })) // "Fancy: {a:1, b:2}"
console.log(myConsole.log("ok : ", 1, 2, 3)) // "ok : 1, 2, 3"
