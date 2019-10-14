var date =  new Date();   
var today = (date.getMonth() + 1) + '-' + (date.getDate());
document.getElementById("currentDate").innerHTML = today;

court2Info=['Reserved 3:45 to 9:00', 'Reserved 4:30 to 10:30', 
           'Reserved 3:45 to 9:00'];

function getReservation(today, court2Info) {
  courtName = "Court 2: ";
  if (today.slice(3) == 14) {
    return courtName + court2Info[0];
  } 
  
  if (today.slice(3) == 15) {
    return courtName + court2Info[1];
  }
  
  if (today.slice(3) == 16) {
    return courtName + court2Info[2]
      }
}

document.getElementById("court2Status").innerHTML = getReservation(today, court2Info);


