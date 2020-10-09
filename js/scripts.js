

function formData(){
  var  daysOfTheWeek= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var akanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  var association=["Universe","Peace","Ocean","Spider","Earth","Fertility","God"];
  var cc = parseInt(document.getElementById("century").value.slice(0,2));
  var yy = parseInt(document.getElementById("born").value.slice(2,4));
  var dd = parseInt(document.getElementById("born").value);
  var mm = parseInt(document.getElementById("born").value);
  var method =  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7
  var weekDay = daysOfTheWeek[method.toFixed()];
  var gender = parseInt(document.getElementById("gender").value);
  alert("confirm you have filled in all data");
 
  
  if (weekDay === 'Sunday'&&gender == 2) {
    document.getElementById("output").value = "You were born on Sunday: Your Akan Name is: " + akanMale[0] + ".It is associated with: "+ association[0];
    return true;
  }

  else if (weekDay === 'Sunday' && gender == 3) {
    document.getElementById("output").value = "You were born on Sunday: Your Akan Name is: " + akanFemale[0]+ ".It is associated with: "+ association[0];
    return true;
  
  }
  else if (weekDay === 'Monday'&&gender == 2) {
    document.getElementById("output").value = "You were born on Monday: Your Akan Name is: " + akanMale[1] + ".It is associated with: "+ association[1];
    return true;
  }
  else if (weekDay === 'Monday'&& gender == 3) {
    document.getElementById("output").value = "You were born on Monday: Your Akan Name is: " + akanFemale[1]+ ".It is associated with: "+ association[1];
    return true;
  }
  else if (weekDay === 'Tuesday'&& gender == 3) {
    document.getElementById("output").value = "You were born on Tuesday: Your Akan Name is: " + akanFemale[2]+ ".It is associated with: "+ association[2];
    return true;
  }
  else if (weekDay === 'Tuesday'&&gender == 2) {
    document.getElementById("output").value = "You were born on Tuesday: Your Akan Name is: " + akanMale[2]+ ".It is associated with: "+ association[2];
    return true;
  }
  else if (weekDay === 'Wednesday'&& gender == 2) {
    document.getElementById("output").value = "You were born on Wednesday: Your Akan Name is: " + akanMale[3]+ ".It is associated with: "+ association[3];
    return true;
  }
  else if (weekDay === 'Wednesday'&& gender == 3) {
    document.getElementById("output").value = "You were born on Wednesday: Your Akan Name is: " + akanFemale[3]+ ".It is associated with: "+ association[3];
    return true;
  }
  else if (weekDay === 'Thursday'&&gender == 2) {
    document.getElementById("output").value = "You were born on Thursday: Your Akan Name is: " + akanMale[4]+ ".It is associated with: "+ association[4];
    return true;
  }else if (weekDay === 'Thursday'&& gender == 3) {
    document.getElementById("output").value = "You were born on Thursday: Your Akan Name is: " + akanFemale[4]+ ".It is associated with: "+ association[4];
    return true;
  }
  else if (weekDay === 'Friday'&&gender == 2) {
    document.getElementById("output").value = "You were born on Friday: Your Akan Name is: " + akanMale[5]+ ".It is associated with: "+ association[5];
    return true;
  }
  else if (weekDay === 'Friday'&&gender == 3) {
    document.getElementById("output").value = "You were born on Friday: Your Akan Name is: " + akanFemale[5]+ ".It is associated with: "+ association[5];
    return true;
  }
  else if (weekDay === 'saturday'&&gender == 2) {
    document.getElementById("output").value = "You were born on Saturday: Your Akan Name is: " + akanMale[6]+ ".It is associated with: "+ association[6];
    return true;
  }
  else if(weekDay === 'Saturday'&&gender == 3) { {
      document.getElementById("output").value = "You were born on Saturday: Your Akan Name is: " + akanFemale[6]+ ".It is associated with: "+ association[6];
      return true;
    }
  }
}



