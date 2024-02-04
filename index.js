function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    
if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
  alert("Leap Year.")
} else if (year % 4 === 0 && year % 100 !== 0) {
  alert("Leap Year.")
} else {
  alert("Not leap year.")
}
return isLeap;
/**************Don't change the code below****************/    

}

isLeap(1977)