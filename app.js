var countdown = setInterval(function (){
var currentDate = new Date().getTime()
var EidDate = new Date(2024,5,17).getTime()
var result = EidDate-currentDate

var months = result/2.628e+9
var monthsResult = Math.floor(months)

var weeks = result/6.048e+8
var weeksResult = Math.floor(weeks)

var days = result/8.64e+7
var daysResult = Math.floor(days)

var hours = (result/3.6e+6)
var hoursResult = Math.floor(hours)

var minutes = (result/60000)
var minutesResult = Math.floor(minutes)

var seconds = (result/1000)
var secondsResult = Math.floor(seconds)

document.getElementById("box").innerHTML = `${monthsResult}m ${weeksResult}w ${daysResult}d ${hoursResult}h ${minutesResult}m ${secondsResult}s`


})