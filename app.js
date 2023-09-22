// app.js
const {Solar,SolarMonth, Lunar, LunarYear, HolidayUtil} = require('lunar-javascript')

// console.log(Lunar.fromDate(new Date()).toFullString())
// console.log(Solar.fromYmd(2016, 1, 1).toFullString())

// console.log(HolidayUtil.getHoliday(2020, 5, 2) + '')

  
var lunarYear = LunarYear.fromYear(2020);
var months = lunarYear.getMonthsInYear();
// console.log(SolarMonth.fromYm(2023, 12).getDays())
console.log(months[1].getMonth())
// for(var i=0, j=months.length; i<j; i++){
//   console.log(months[i].toString());
// }
App({})
