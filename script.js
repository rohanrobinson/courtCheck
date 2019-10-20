var date =  new Date();   
var today = (date.getMonth() + 1) + '-' + (date.getDate());
document.getElementById("currentDate").innerHTML = today;

court2Info = ['Reserved from 12:00PM to 5:00PM','Available for shootaround all day', 'Reserved from 3:45PM to 9:00PM', 
           'Reserved from 4:30PM to 10:30PM', 'Reserved from 3:45PM to 9:00PM','Available for shootaround all day'];

function getReservation(today, court2Info) {
  courtName = "Court 2: ";
           
  if (today.slice(3) == 19) {
    return courtName + court2Info[0];
  }       
  if (today.slice(3) == 20) {
    return courtName + court2Info[1];
  } 
  
  if (today.slice(3) == 21) {
    return courtName + court2Info[2];
  }
  
  if (today.slice(3) == 22) {
    return courtName + court2Info[3]
      }
           
  if (today.slice(3) == 23) {
    return courtName + court2Info[4]
  }
           
  if (today.slice(3) == 24) {
    return courtName + court2Info[5]
  }
}

document.getElementById("court2Status").innerHTML = getReservation(today, court2Info);


