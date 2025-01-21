/*const url = "https://restcountries.com/v3.1/all?fields=name,flags";
const promesa = fetch(url)
promesa.then((response) => response.text())
    .then(data => {
        //instrucciones


        let json = JSON.parse(data);
        console.log(json);
  
      json.forEach(element => {
        let caja=document.createElement("div")
        let name=document.createElement("p")
        let flag=document.createElement("img")
        name.innerText=element.name.common;
        flag.setAttribute("src",element.flags.png)
        flag.style.width="50"
         flag.style.height="50"
         caja.append(name,flag)
         document.body.appendChild(caja)
      });

    });*/

const url = "https://pokeapi.co/api/v2/pokemon/salamence";
const promesa = fetch(url)
promesa.then((response) => response.text())
    .then(data => {
        //instrucciones
 
 
        let json = JSON.parse(data);
        console.log(json);
     let ta=json.types[0]
     console.log(ta.type.name)  
  let title=document.createElement("p")
  title.innerText=json.name
let img=document.createElement("img")
let boton=document.createElement("button");
let sonido=document.createElement("audio")
sonido.setAttribute("src",json.cries.latest)
sonido.setAttribute("type","audio/ogg");
boton.appendChild(sonido);
boton.addEventListener('click',(e)=>{

sonido.play();
})
let habilidad=document.createElement("p")
let skills=json.abilities[0]
if(json.types.length>1){
  let t1=json.types[0]
  let t2=json.types[1]
  let type1=document.createElement("p")
  let type2=document.createElement("p")
  type1.innerText=t1.type.name
  type2.innerText=t2.type.name
  document.body.append(type1,type2)
}else{
  let t1=json.types[0]
  let type1=document.createElement("p")
  type1.innerText=t1.type.name
  document.body.append(type1)
}
habilidad.innerText=skills.ability.name
boton.innerText="boton"
document.body.append(boton)
img.setAttribute("src",json.sprites.front_default)
img.style.width="200px"
img.style.height="200px"
let caja=document.createElement("div")
caja.append(title,img,habilidad,boton)
document.body.appendChild(caja)
 
    });
function generarTarjeta(lista) {
  let tarjeta = document.createElement("div")
  let title = document.createElement("p")
  title.innerText = lista.name
  let img = document.createElement("img")
  let boton = document.createElement("button");
  let sonido = document.createElement("audio")
  sonido.setAttribute("src", lista.cries.latest)
  sonido.setAttribute("type", "audio/ogg");
  boton.appendChild(sonido);
  boton.addEventListener('click', (e) => {

    sonido.play();
  })
  let habilidad = document.createElement("p")
  habilidad.innerText = lista.abilities[0].name
  boton.innerText = "boton"
  document.body.append(boton)
  img.setAttribute("src", lista.sprites.front_default)
  img.style.width = "200px"
  img.style.height = "200px"
}