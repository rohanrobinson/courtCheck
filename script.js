var date =  new Date();   
var today = (date.getMonth() + 1) + '-' + (date.getDate());
document.getElementById("currentDate").innerHTML = today;

court2Info=['Reserved 4:30 to 10:30 for Club Basketball practice', 'Reserved 3:45 to 9:00  for Club Basketball practice', 
           'Available all day for shooting around/pickup'];

function getReservation(today, court2Info) {
  console.log(today);
  if (today.slice(3) == 1) {
    return court2Info[0];
  } 
  
  if (today.slice(3) == 2) {
    return court2Info[1];
  }
  
  if (today.slice(3) == 3) {
    return court2Info[2]
      }
}

document.getElementById("court2Status").innerHTML = getReservation(today, court2Info);


