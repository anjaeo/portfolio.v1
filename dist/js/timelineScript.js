   //Dates
   var dates = ["08/2020", "10/2020", "12/2020", "03/2021"];
   //Experience corresponding to date
   var dateEvents = ["Internship<br>Software Dev<br><b>Birdie</b>",
                    "Bachelor's degree<br>Software Development<br><b>ECPI University</b>",
                    "Promoted to Robotic Process Automation(RPA) Technician<br><b>Capital One</b><br>Part-time Front-end Developer<br><b>OpsTel</b>",
                    "Promoted from Intern to Software Dev<br><b>Birdie</b>"]
  //For the purpose of stringifying MM/DD/YYYY date format
   var monthSpan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   var progressBarStops = [99];

   //Format MM/DD/YYYY into string
   function dateSpan(date) {
     var month = date.split('/')[0];
     month = monthSpan[month - 1];
     var year = date.split('/')[1];
     var day = 1;

     //Spit it out!
     return month + " " + year;
   }

   //Main function. Draw your circles.
   function makeCircles() {
     //Forget the timeline if there's only one date. Who needs it!?
     if (dates.length < 2) {
       $("#line").hide();
       $("#span").show().text(dateSpan(dates[0]));
       //This is what you really want.
     } else if (dates.length >= 2) {
       //Set day, month and year variables for the math
       var first = dates[0];
       var last = dates[dates.length - 1];

       var firstMonth = parseInt(first.split('/')[0]);
       var firstYear = parseInt(first.split('/')[1]);

       var lastMonth = parseInt(last.split('/')[0]);
       var lastYear = parseInt(last.split('/')[1]);

       //Integer representation of the last day. The first day is represnted as 0  210
       var lastInt = (((lastMonth - firstMonth) + 12) * (lastYear - firstYear)) * 30;

       //Draw first date circle
       $("#line").append('<div class="circle" id="circle0" style="right: ' + 99 + '%;"><div class="popupSpan">' + dateSpan(dates[0]) + '</div></div>');

       $("#mainCont").append('<span id="span0" class="center">' + dateEvents[0] + '</span>');

       //Loop through middle dates
       for (i = 1; i < dates.length - 1; i++) {
         var thisMonth = parseInt(dates[i].split('/')[0]);
         var thisYear = parseInt(dates[i].split('/')[1]);

         //Integer representation of the date
         var thisInt = (((lastMonth - thisMonth) + 12)  * (lastYear - firstYear)) * 30;

         //Integer relative to the first and last dates
         var relativeInt = thisInt / lastInt;

         progressBarStops.push(relativeInt * 100);

         //Draw the date circle
         $("#line").append('<div class="circle" id="circle' + i + '" style="right: ' + relativeInt * 100 + '%;"><div class="popupSpan">' + dateSpan(dates[i]) + '</div></div>');

         $("#mainCont").append('<span id="span' + i + '" class="right">' + dateEvents[i] + '</span>');
       }

       //Draw the last date circle
       $("#line").append('<div class="circle" id="circle' + i + '" style="right: ' + 0 + '%;"><div class="popupSpan">' + dateSpan(dates[dates.length - 1]) + '</div></div>');

       $("#mainCont").append('<span id="span' + i + '" class="right">' + dateEvents[i] + '</span>');

       progressBarStops.push(0);
     }

     $(".circle:first").addClass("active");
   }

   makeCircles();

   $(".circle").mouseenter(function() {
     $(this).addClass("hover");
   });

   $(".circle").mouseleave(function() {
     $(this).removeClass("hover");
   });

   $(".circle").click(function() {
     var spanNum = $(this).attr("id");
     selectDate(spanNum);
   });

   function selectDate(selector) {
     $selector = "#" + selector;
     $spanSelector = $selector.replace("circle", "span");
     var current = $selector.replace("circle", "");

     $(".active").removeClass("active");
     $($selector).addClass("active");

     if ($($spanSelector).hasClass("right")) {
       $(".center").removeClass("center").addClass("left")
       $($spanSelector).addClass("center");
       $($spanSelector).removeClass("right")
     } else if ($($spanSelector).hasClass("left")) {
       $(".center").removeClass("center").addClass("right");
       $($spanSelector).addClass("center");
       $($spanSelector).removeClass("left");
     };
   };

   console.log()