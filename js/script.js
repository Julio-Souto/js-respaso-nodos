const form = document.getElementById("formulario")
const nombre = document.getElementById("nombre")
const precio = document.getElementById("precio")
const tabla = document.querySelector(".tabla_inventario")
const campos = document.querySelector(".campos")

form.addEventListener("submit",(e) => {
  e.preventDefault()
  validateForm()
})

function validateForm(){
  if(/^\w+$/.test(nombre.value)&&/^[0-9]+\.[0-9]{1,2}€$/.test(precio.value)){
    if(document.querySelector(".error"))
      campos.removeChild(document.querySelector(".error"))
    createRow()
  }
  else{
    if(document.querySelector(".error"))
      campos.removeChild(document.querySelector(".error"))
    const error = document.createElement("p")
    error.classList.add("error")
    error.appendChild(document.createTextNode("Nombre no valido "+nombre.value+" o Precio no valido "+precio.value))
    error.style.fontWeight = "bold"
    error.style.color = "tomato"
    campos.appendChild(error)
    console.log("Nombre no valido "+nombre.value+" o Precio no valido "+precio.value)
  }
}

function createRow(){
  let tr = document.createElement("tr")
  let td1 = document.createElement("td")
  let td2 = document.createElement("td")

  td1.appendChild(document.createTextNode(nombre.value))
  td2.appendChild(document.createTextNode(precio.value))
  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.style.textAlign = "center"
  tabla.appendChild(tr)
}