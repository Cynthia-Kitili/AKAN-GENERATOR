var form= document.getElementById("form");
akanForm.addEventListener("submit", (e) => {
    e.preventDefault();


var formData= function() {
    var date = parseInt(document.getElementById("Form").elements.namedItem("date").value
    );
    var month = parseInt(document.getElementById("Form").elements.namedItem("month").value
    );
    var year = parseInt(document.getElementById("Form").elements.namedItem("year").value
    );
    var gender = document.getElementById("Form").elements.namedItem("gender")
      .value;
    var dayOfTheWeek=
