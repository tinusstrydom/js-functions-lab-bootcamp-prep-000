// write your code below!
function happyHolidays(){
  return "Happy Holidays";
}
functions happyHolidaysTo(name){
  return `Happy Holidays, ${name}!`;
}
function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`;
}
function holidayCountdown(days, holiday){
  return `It's ${days} days until ${holiday}`;
}
happyHolidays();
happyHolidaysTo("Tinus");
happyHolidayTo("Chrismas", "Tinus");
holidayCountdown(240, "Christmas");
