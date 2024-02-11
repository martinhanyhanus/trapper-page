let navLinks = [];
navLinks.push({ sectionId: "articles", sectionName: "Články" });
navLinks.push({ sectionId: "", sectionName: "placeholder" });
navLinks.push({ sectionId: "", sectionName: "placeholder" });
navLinks.push({ sectionId: "", sectionName: "placeholder" });

navLinks.forEach(function (navLink) {
	[
		document.getElementById("nav-links-desktop"),
		document.getElementById("nav-links-mobile")
	].forEach(function (navigationElement) {
		const link = document.createElement("a");
		if (navLink.sectionId !== "") {
			link.href = "#" + navLink.sectionId;
		}
		link.innerText = navLink.sectionName;

		navigationElement.appendChild(link);
	})
});

function showBurger() {
	var navLinks = document.getElementById("nav-links-mobile");
	if (navLinks.style.display === "block") {
		navLinks.style.display = "none";
	} else {
		navLinks.style.display = "block";
	}
}
