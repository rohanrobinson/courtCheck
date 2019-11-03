var date =  new Date();   
var today = (date.getMonth() + 1) + '-' + (date.getDate());
document.getElementById("currentDate").innerHTML = today;

court2Info = ['Available for shootaround all day', 'Reserved from 3:45PM to 6:45PM', 
           'Reserved from 4:30PM to 10:30PM', 'Reserved from 3:45PM to 9:00PM'];

function getReservation(today, court2Info) {
  courtName = "Court 2: ";
           
  if (today.slice(3) == 3) {
    return courtName + court2Info[0];
  }       
  if (today.slice(3) == 4) {
    return courtName + court2Info[1];
  } 
  
  if (today.slice(3) == 5) {
    return courtName + court2Info[2];
  }
  
  if (today.slice(3) == 6) {
    return courtName + court2Info[3]
      }
           
}

document.getElementById("court2Status").innerHTML = getReservation(today, court2Info);


