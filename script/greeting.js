"use strict";
/**
* @author Edwin Choate
* @version 1.0.3
* @description A simple inline script that greets the user based on time of day
*/

(function(){
    
    const MORNING = 'morning', AFTERNOON = 'afternoon', EVENING = 'evening';
    const hour = new Date().getHours(); // 0 to 23
    let timeOfDay = '';

    if (hour >= 17 || hour < 3) 
        timeOfDay = EVENING; // 5pm to 3am
    else if (hour < 12)
        timeOfDay = MORNING; // 3am to noon
    else
        timeOfDay = AFTERNOON; // noon to 5pm
    
    if ([MORNING, AFTERNOON, EVENING].includes(timeOfDay))
        document.write(`Good ${timeOfDay}!`);
    else {
        console.error(
            `There was a problem with greeting.js\nhour: ${hour}\ntimeOfDay: ${timeOfDay}`
        );
    }

})();