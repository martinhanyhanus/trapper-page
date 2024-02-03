class Article {
	title;
	author;
	text;
	image;
	createdTimestamp;
	lastEditedTimestamp;

	constructor(
		title,
		author,
		text,
		image = "",
		editedAfterMinutes = 0,
	) {
		this.title = title;
		this.author = author;
		this.text = text;
		this.image = image;
		this.createdTimestamp = Date.now();
		if (editedAfterMinutes > 0) this.lastEditedTimestamp = Date.now() + editedAfterMinutes * 60000;
		else this.lastEditedTimestamp = Date.now();
	}

	get articleElement() {
		const wrapper = document.createElement("div");
		wrapper.className = "article";

		const article = document.createElement("div");
		article.classList.add("article-text");

		const title = document.createElement("h2");
		title.innerHTML = this.title;
		article.appendChild(title);

		const metadata = document.createElement("p");
		metadata.className = "metadata";
		metadata.innerHTML = "Autor: " + this.author + ", Vytvořeno: " + new Date(this.createdTimestamp).toLocaleString();
		if (this.createdTimestamp + 15 * 60000 < this.lastEditedTimestamp) {
			metadata.innerHTML += ", Editováno: " + new Date(this.lastEditedTimestamp).toLocaleString();
		}
		article.appendChild(metadata);

		const text = document.createElement("p");
		text.innerHTML = this.text;
		article.appendChild(text);

		wrapper.appendChild(article);

		if(this.image != "") {
			const image = document.createElement("img");
			image.className = "article-image";
			image.src = this.image;
			image.alt = this.title + " image";
			wrapper.appendChild(image);
		}

		return wrapper;
	}
}


let articles = [];
articles.push(new Article("Kremže", "Tandem", "Křemže byla. Trvala pár dní a něco se tam dělalo.", "http://tc.westerners.cz/wp-content/tc_logo.gif"));
articles.push(new Article("Halloween", "Edík", "Halloween byl, byly nějaké masky a dlouhá valná hromada.", "", 10));
articles.push(new Article("Díkuvzdání", "Edík", "Díkuvzdání bylo, byl sníh a hodně jídla.", "https://www.beavercity.cz/images/DSC_6904_1.jpg", 20));

articles.push(new Article("Kremže - copy", "Tandem", "Křemže byla. Trvala pár dní a něco se tam dělalo.", "assets/images/trappers-corral-logo-transparent.png"));
articles.push(new Article("Halloween - copy", "Edík", "Halloween byl, byly nějaké masky a dlouhá valná hromada.", "", 10));
articles.push(new Article("Díkuvzdání - copy", "Edík", "Díkuvzdání bylo, byl sníh a hodně jídla.", "assets/images/placeholder_top_background.jpg", 20));

articles.forEach(function (article) {
	document.getElementById("articles").appendChild(article.articleElement);
});
