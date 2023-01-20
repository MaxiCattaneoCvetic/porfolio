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
	{ h3: "Landing Page", img: "img/browser.png", text: "HTML5, CSS3", git: "https://github.com/MaxiCattaneoCvetic/Landing-Page", web: "https://maxicattaneocvetic.github.io/Landing-Page/" },
	{ h3: "User-Login", img: "img/user.png", text: "JS, HTML5, CSS3", git: "https://github.com/MaxiCattaneoCvetic/Login", web: "https://maxicattaneocvetic.github.io/Login/" },
	{ h3: "MergeWeb", img: "img/landing-page.png", text: "HTML5, CSS3", git: "https://github.com/MaxiCattaneoCvetic/Merge", web: "https://maxicattaneocvetic.github.io/Merge/" },
	{ h3: "Porfolio", img: "img/web-page.png", text: "JS, HTML5, CSS3", git: "https://github.com/MaxiCattaneoCvetic/porfolio", web: "https://maxicattaneocvetic.github.io/porfolio/" },
	{ h3: "Tiro al blanco", img: "img/tiro-al-blanco.png", text: "JS, HTML5, CSS3", git: "https://github.com/MaxiCattaneoCvetic/TiroAlBlanco", web: "https://maxicattaneocvetic.github.io/TiroAlBlanco/" }
];

const arrProyectsJava = [
	{ h3: "Landing Page", img: "img/browser.png", text: "HTML5, CSS3", git: "https://github.com/MaxiCattaneoCvetic/Landing-Page", web: "https://maxicattaneocvetic.github.io/Landing-Page/" },
	{ h3: "User-Login", img: "img/user.png", text: "JS, HTML5, CSS3", git: "https://github.com/MaxiCattaneoCvetic/Login", web: "https://maxicattaneocvetic.github.io/Login/" },
	{ h3: "MergeWeb", img: "img/landing-page.png", text: "HTML5, CSS3", git: "https://github.com/MaxiCattaneoCvetic/Merge", web: "https://maxicattaneocvetic.github.io/Merge/" },
	{ h3: "Porfolio", img: "img/web-page.png", text: "JS, HTML5, CSS3", git: "https://github.com/MaxiCattaneoCvetic/porfolio", web: "https://maxicattaneocvetic.github.io/porfolio/" },
	{ h3: "Tiro al blanco", img: "img/tiro-al-blanco.png", text: "JS, HTML5, CSS3", git: "https://github.com/MaxiCattaneoCvetic/TiroAlBlanco", web: "https://maxicattaneocvetic.github.io/TiroAlBlanco/" }
];

const  renderProyects = arrProyects =>{
	let tarjetasProyect = document.querySelector(".proyects_container");
	arrProyects.forEach(element => {
		tarjetasProyect.innerHTML += `
		<div class= "div_proyect">
		<h3 style= "font-weight:bolder">${element.h3}</h3>
		<img src="${element.img}" alt="">
		<p>${element.text}</p>
		<span></span><a href="${element.git}" class="proyect_link" target="_blank" ">GitHub</a> <a href="${element.web}" class="proyect_link" target="_blank" ">Web</a></span>
		</div> `
	});


}
renderProyects(arrProyects)

const  renderProyectsJava = arrProyectsJava =>{
	let tarjetasProyectjava = document.querySelector(".Java");
	arrProyectsJava.forEach(element => {
		tarjetasProyectjava.innerHTML += `
		<div class= "div_proyect">
		<h3 style= "font-weight:bolder">${element.h3}</h3>
		<img src="${element.img}" alt="">
		<p>${element.text}</p>
		<span></span><a href="${element.git}" class="proyect_link" target="_blank" ">GitHub</a> <a href="${element.web}" class="proyect_link" target="_blank" ">Web</a></span>
		</div> `
	});
}
	renderProyectsJava(arrProyectsJava)



//FORM

let validacionNombre = ()=>{
	let nombre = document.querySelector("#nombre").value
	let divERROR = document.querySelector(".nombreError")
	if(nombre.length < 3){
		divERROR.innerHTML = `EL nombre no puede contener menos de 3 caracteres`
		divERROR.setAttribute("style","color:red")
		return 1
	}else if(nombre.length >= 3){
		divERROR.innerHTML = ``;
		return nombre
	}
}
let validacionEmail = ()=>{
	let email = document.querySelector("#email").value
	let divERRORc = document.querySelector(".emailError")
	if(email.includes("@")){
		divERRORc.innerHTML = ``;
		return email
	}else if(!email.includes("@")){
		divERRORc.innerHTML = `Por favor incluya un correo en formato válido`
		divERRORc.setAttribute("style","color:red")
		return 1
	}
}

let validacionComments = () =>{
	let comments = document.querySelector("#comments").value
	let divERROR = document.querySelector(".commentsError")
	if(comments.length <= 1){
		divERROR.innerHTML = `Por favor ingrese un comentario valido`
		divERROR.setAttribute("style","color:red")
		return 1
	}else if(comments.length >1){
		divERROR.innerHTML =""
		return comments
	}
}

let normalizadorDatos = (nombre,email,comments) =>{
	let arrDatos =[]
	let nombreLW = nombre.toLowerCase();
	let emailLW = email.toLowerCase();
	let commentsLW = comments.toLowerCase()
	arrDatos.push(nombreLW);
	arrDatos.push(emailLW);
	arrDatos.push(commentsLW)
	console.log(arrDatos);
	let ok = true 
	agradecer(ok,nombre)
	return arrDatos
}
// si esta mal retornan 1

let msjAgradecer = (nombre)=>{
	let pAgradecer = document.querySelector(".agradecer")
	pAgradecer.innerHTML = `Muchas gracias por contactarme ${nombre} en breve me contactare contigo! `
	let form = document.querySelector("form")
	form.reset()
}

let msjClear =()=>{
	let pAgradecer = document.querySelector(".agradecer")
	pAgradecer.innerHTML = ``

}

let agradecer = (ok,nombre) =>{
	if(ok){
		msjAgradecer(nombre)
		setTimeout(msjClear,4000)
	}else{
		return
	}
}

let btnForm = document.querySelector(".form-btn")
btnForm.addEventListener(`click`, function (evento){
	evento.preventDefault()
	let form = document.querySelector("form")
	let nombreCk = validacionNombre()
	let emailCk = validacionEmail()
	let commentsCK = validacionComments()
	if(nombreCk != 1 && emailCk != 1 && commentsCK != 1){
		normalizadorDatos(nombreCk,emailCk,commentsCK);
		form.submit()
	}else{
		console.log("esta mal");
	}

})

let btnReset = document.querySelector(".r")
btnReset.addEventListener(`click`,function(){
	let divERRORc = document.querySelector(".emailError")
	let divERROR = document.querySelector(".nombreError")
	let divERRORcc = document.querySelector(".commentsError")
	divERROR.innerHTML ="";
	divERRORc.innerHTML ="";
	divERRORcc.innerHTML ="";

})


let btnMore = document.querySelector(".more")

btnMore.addEventListener(`click`, function (evento) {
	let informacion_proyectos = document.querySelector(".informacion_proyectos")
	informacion_proyectos.classList.toggle("ab")
	console.log("hiciste click");
	
})

