load('api_ds3231.js');
load('api_timer.js');

let DS3231_I2C_addresss = 0x68 ; 

// Initialize DS3231 library
let rtc = DS3231.create(DS3231_I2C_addresss);

let setRtcDate = function(date, month, year) {
	rtc.setTimeDate(date);
	rtc.setTimeMonth(month);
	rtc.setTimeYear(year);
};

let setRtcTime = function(hours, minutes, seconds) {
	rtc.setTimeSeconds(seconds);
	rtc.setTimeMinutes(minutes);
	rtc.setTimeHours(hours);
};

setRtcDate(15,09,17);
setRtcTime(23,55,00);

Timer.set(1000 /* milliseconds */, true /* repeat */, function() {
	print('Time: ', rtc.getTimeHours(), ':', rtc.getTimeMinutes(), ':', rtc.getTimeSeconds() );
	print('Date: ', rtc.getTimeDate(), '-', rtc.getTimeMonth(), '-', rtc.getTimeYear(), ' Day of the week -', rtc.getTimeDayOfTheWeek());
}, null);



