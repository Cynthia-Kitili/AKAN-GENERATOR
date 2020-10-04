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