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