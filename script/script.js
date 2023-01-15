const typed = new Typed(`.typed`, {
strings: [
    `<i class="skill">Full Stack developer</i>`,
    `<i class="skill">Bussines Administrator</i>`,
],
stringsElement: "#cadenas-texto",
typeSpeed: 75,
startDelay: 300,
backSpeed: 75,
smartBackspace: true,
shuffle: false,
backDelay: 1500,
loop: true,
loopCount: false,
showCursor: true,
cursorChar: "|",
contentType: "html",
});

try{
	let btnNight = document.querySelector("#nightMode");
btnNight.addEventListener(`click`, function (evento) {
evento.preventDefault();
let body = document.querySelector("#bod");
body.classList.toggle("dark");
let nvBar = document.querySelector(".navbar");
nvBar.setAttribute("style", "border: 3px solid rgb(184, 178, 178);");
verClase()
});
}catch{
	console.log("BTN disable");
}


function verClase() {
	let body = document.querySelector("#bod");
	if(body.classList.contains("dark")){
		console.log("tiene la clase");
		let download_bt = document.querySelector(".cv-d")
		download_bt.setAttribute("style", "color: rgb(20, 109, 187);")
	}else if (!body.classList.contains("dark")){
		return
	}
}


// Proyects render

const arrProyects = [
{ h3: "Proyect 1", img: "img/yoda.jpg", text: "HTML5,CSS3", git: "https://github.com/MaxiCattaneoCvetic/Heddle", web: "https://maxicattaneocvetic.github.io/Heddle/" },
{ h3: "Proyect 2", img: "img/yoda.jpg", text: "HTML5,CSS3", git: "https://maxicattaneocvetic.github.io/Merge/", web: "https://github.com/MaxiCattaneoCvetic/Merge" },
{ h3: "Proyect 3", img: "img/yoda.jpg", text: "HTML5,CSS3,JS", git: "https://github.com/MaxiCattaneoCvetic/porfolio", web: "https://maxicattaneocvetic.github.io/porfolio/" },
{ h3: "Proyect 3", img: "img/yoda.jpg", text: "HTML5,CSS3,JS", git: "https://github.com/MaxiCattaneoCvetic/porfolio", web: "https://maxicattaneocvetic.github.io/porfolio/" }
];

const  renderProyects = arrProyects =>{
	let tarjetasProyect = document.querySelector(".proyects_container");
	arrProyects.forEach(element => {
		tarjetasProyect.innerHTML += `
		<div class= "div_proyect">
		<h3>${element.h3}</h3>
		<img src="${element.img}" alt="">
		<p>${element.text}</p>
		<span></span><a href="${element.git}" class="proyect_link" target="_blank" ">GitHub</a> <a href="${element.web}" class="proyect_link" target="_blank" ">Web</a></span>
		</div> `
	});


}
renderProyects(arrProyects)

