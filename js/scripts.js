var formData = function() {
  var date = parseInt(
    document.getElementById("Form").elements.namedItem("date").value
  );
  var month = parseInt(
    document.getElementById("Form").elements.namedItem("month").value
  );
  var year = parseInt(
    document.getElementById("Form").elements.namedItem("year").value
  );
  var gender = document.getElementById("Form").elements.namedItem("gender")
    .value;
  var dateOfBirth = new Date(year + "/" + month + "/" + date);
  var weekDay = dateOfBirth.getDay();
  
  if (date < 1 || date > 31) {
    return (document.getElementById("error").innerHTML =
      "Invalid Data");
  }if (month < 1 || month > 12 || (month == 2 && date > 29)) {
    return (document.getElementById("error").innerHTML =
      "Invalid  Data");
  
  } else if (year === NaN || year ==="") {
    document.getElementById("error").innerHTML =
      "Invalid Data";

  }


  var maleAkan = ["Kwasi","Kwadwo", "Kwabena", "Kwaku","Yaw","Kofi", "Kwame"];

  var femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  var daysOfTheWeek = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday","Saturday" ];

  var association=["Universe","Peace","Ocean","Spider","Earth","Fertility","God"];

  if (weekDay === 0 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
      "You were born on a : " +
      daysOfTheWeek[weekDay] +
      ("  .Your Akan name is : " + maleAkan[weekDay])+ (".It is associated with: " +association[0]));

  }else if (weekDay === 0 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
    "You were born on a : " +
      daysOfTheWeek[weekDay] +
      ("  .Your Akan name is : " + femaleAkan[weekDay])+ (".It is associated with: " +association[0]));
           

  } else if (weekDay === 1 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
    "You were born on a : " +
    daysOfTheWeek[weekDay] +
    ("  .Your Akan name is : " + maleAkan[weekDay])+ (".It is associated with: " +association[1]));

  }else if (weekDay === 1 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
    "You were born on a : " +
      daysOfTheWeek[weekDay] +
      ("  .Your Akan name is : " + femaleAkan[weekDay])+ (".It is associated with: " +association[1]));

  } else if (weekDay === 2 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
    "You were born on a : " +
    daysOfTheWeek[weekDay] +
    ("  .Your Akan name is : " + maleAkan[weekDay])+ (".It is associated with: " +association[2]));

  }else if (weekDay === 2 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
    "You were born on a : " +
      daysOfTheWeek[weekDay] +
      ("  .Your Akan name is : " + femaleAkan[weekDay])+ (".It is associated with: " +association[2]));  


  } else if (weekDay === 3 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
    "You were born on a : " +
    daysOfTheWeek[weekDay] +
    ("  .Your Akan name is : " + maleAkan[weekDay])+ (".It is associated with: " +association[3]));
     

  }else if (weekDay === 3 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "You were born on a : " +
      daysOfTheWeek[weekDay] +
      ("  .Your Akan name is : " + femaleAkan[weekDay])+ (".It is associated with: " +association[3]));


  } else if (weekDay === 4 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
    "You were born on a : " +
    daysOfTheWeek[weekDay] +
    ("  .Your Akan name is : " + maleAkan[weekDay])+ (".It is associated with: " +association[4]));

  }else if (weekDay === 4 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "You were born on a : " +
      daysOfTheWeek[weekDay] +
      ("  .Your Akan name is : " + femaleAkan[weekDay]) +(".It is associated with: " +association[4]));

  } else if (weekDay === 5 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
    "You were born on a : " +
    daysOfTheWeek[weekDay] +
    ("  .Your Akan name is : " + maleAkan[weekDay])+ (".It is associated with: " +association[5]));
     

  }else if (weekDay === 5 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "You were born on a : " +
      daysOfTheWeek[weekDay] +
      ("  .Your Akan name is : " + femaleAkan[weekDay])+ (".It is associated with: " +association[5]));


  } else if (weekDay === 6 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
    "You were born on a : " +
    daysOfTheWeek[weekDay] +
    ("  .Your Akan name is : " + maleAkan[weekDay])+ (".It is associated with: " +association[6]));

  }else if (weekDay === 6 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "You were born on a : " +
      daysOfTheWeek[weekDay] +
      ("  .Your Akan name is : " + femaleAkan[weekDay])+ (".It is associated with: " +association[6]));

  
  } 
}
