var name = document.getElementsByClassName("tabs");
var i;

function active(){
	this.classList.toggle("active");
	var content = this.nextElementSibling;
	if (panel.style.display == "block"){
		panel.style.display == "none";
	} else {
		panel.style.display = "block";
	}
}
for(i = 0; i < name.length; i++) {
	name[i].addEventListener("click",active())
}

/* Form JS */
function valiForm() {
  var x = document.forms["sign_up_form"]["email_id"].value;
  if (x == "") {
    alert("Please enter in your email!");
    return false;
  }
}
