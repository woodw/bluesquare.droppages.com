$(document).ready(function () {
	//alert('Hello Goodby');
	if(sessionStorage.lastname.length > 0)
	{
		//alert(sessionStorage.lastname);
	}
	//alert(localStorage.lastname);
	$('#time_data').html('<h5>Clock</h5><p>Date: '+getCalendarDate()+'<br />Time: '+getClockTime()+'</p>');
});

//<!-- Copyright 2002 Bontrager Connection, LLC
function getCalendarDate()
{
   var months = new Array(13);
   months[0]  = "January";
   months[1]  = "February";
   months[2]  = "March";
   months[3]  = "April";
   months[4]  = "May";
   months[5]  = "June";
   months[6]  = "July";
   months[7]  = "August";
   months[8]  = "September";
   months[9]  = "October";
   months[10] = "November";
   months[11] = "December";
   var now         = new Date();
   var monthnumber = now.getMonth();
   var monthname   = months[monthnumber];
   var monthday    = now.getDate();
   var year        = now.getYear();
   if(year < 2000) { year = year + 1900; }
   var dateString = monthname +
                    ' ' +
                    monthday +
                    ', ' +
                    year;
   return dateString;
} // function getCalendarDate()

function getClockTime()
{
   var now    = new Date();
   var hour   = now.getHours();
   var minute = now.getMinutes();
   
   var ap = "AM";
   if (hour   > 11) { ap = "PM";             }
   if (hour   > 12) { hour = hour - 12;      }
   if (hour   == 0) { hour = 12;             }
   if (hour   < 10) { hour   = "0" + hour;   }
   if (minute < 10) { minute = "0" + minute; }
   
   var timeString = hour +
                    ':' +
                    minute +                
                    " " +
                    ap;
   return timeString;
} // function getClockTime()

//-->