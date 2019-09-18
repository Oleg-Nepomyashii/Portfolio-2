iconMenu.onclick = function myMenu(){
	const menu = document.getElementById("myNav");

	if (menu.className === "topnav") {
		menu.className += " responsive";
	} else {
		menu.className = "topnav";
	}
}
