

var d = new Date()
d.getHours()
console.log(d.getHours())




var time = $(".description")
for (let i = 0; i < time.length; i++) {
    var timeArr = time[i];
    var timeEl = JSON.stringify(timeArr)
    console.log(timeEl.dataValue)
}
