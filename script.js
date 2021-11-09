const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const newYear = '1 Jan 2022'

function countDown() {
  const newYearDate = new Date(newYear)
  const currentDate = new Date()
  console.log(newYearDate - currentDate)
  const totalSecond = Math.floor((newYearDate - currentDate) / 1000)
  const days = Math.floor(totalSecond / 3600 / 24)
  const hours = Math.floor(totalSecond / 3600) % 24
  const minutes = Math.floor(totalSecond / 60) % 60
  const seconds = totalSecond % 60

  //   console.log(days, hours, minutes, seconds)

  daysEl.innerHTML = Time(days)
  hoursEl.innerHTML = Time(hours)
  minutesEl.innerHTML = Time(minutes)
  secondsEl.innerHTML = Time(seconds)
}

function Time(time) {
  return time < 10 ? `0${time}` : time
}

countDown()
setInterval(countDown, 1000)
