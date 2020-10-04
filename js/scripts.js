let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var formData = function() {
    var date = parseInt( document.getElementById("Form").elements.namedItem("date").value );
    var month = parseInt(document.getElementById("Form").elements.namedItem("month").value );
    var year = parseInt(document.getElementById("Form").elements.namedItem("year").value);
    var century=parseInt(document.getElementById("Form").elements.namedItem("century").value);
    var gender = document.getElementById("Form").elements.namedItem("gender")
      .value;  
    
      CC = century
      YY = year
      MM = month
      DD = date
      dayOfTheWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;    
      var weekDay = dayOfTheWeek.getDay(); 

  var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua","Ama"];
  var  maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi","Kwame"];
  var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  if (dayOfTheWeek == 0 && gender == "female") {
    akanName = femaleAkanNames[0];
} else if (dayOfTheWeek == 0 && gender == "male") {
    akanName = maleAkanNames[0];


} else if (dayOfTheWeek == 1 && gender == "female") {
    akanName = femaleAkanNames[1];
} else if (dayOfTheWeek == 1 && gender == "male") {
    akanName = maleAkanNames[1];


} else if (dayOfTheWeek == 2 && gender == "female") {
    akanName = femaleAkanNames[2];
} else if (dayOfTheWeek == 2 && gender == "male") {
    akanName = maleAkanNames[2];


} else if (dayOfTheWeek == 3 && gender == "female") {
    akanName = femaleAkanNames[3];
} else if (dayOfTheWeek == 3 && gender == "male") {
    akanName = maleAkanNames[3];


} else if (dayOfTheWeek == 4 && gender == "female") {
   akanName = femaleAkanNames[4];
} else if (dayOfTheWeek == 4 && gender == "male") {
    akanName = maleAkanNames[4];


} else if (dayOfTheWeek == 5 && gender == "female") {
   akanName = femaleAkanNames[5];
} else if (dayOfTheWeek == 5 && gender == "male") {
    akanName = maleAkanNames[5];


} else if (dayOfTheWeek == 6 && gender == "female") {
    akanName = femaleAkanNames[6];
} else if (dayOfTheWeek == 6 && gender == "male") {
    akanName = maleAkanNames[6];
}

var result = document.getElementById("reveal-result").innerHTML = "You were born on a " + bornDay + " so your akan name is " + akanName + "!"
document.getElementById("akanForm").reset();
});




