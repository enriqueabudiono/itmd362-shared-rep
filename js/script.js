var acc = document.getElementsByClassName("tabs");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var tabcontent = this.nextElementSibling;
    if (tabcontent.style.display === "block"){
      tabcontent.style.display = "none";
    } else {
      tabcontent.style.display = "block";;
    }
  });
}

/* Form JS */
document.getElementById("valForm").onsubmit = function() {checkForm()};

function checkForm() {
  var x = document.forms["sign_up_form"]["email_id"].value;
  if (x == "") {
    alert("Please enter in your email!");
    return false;
  }
}
