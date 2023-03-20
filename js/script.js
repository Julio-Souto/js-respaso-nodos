const form = document.getElementById("formulario")
const nombre = document.getElementById("nombre")
const precio = document.getElementById("precio")
const tabla = document.querySelector(".tabla_inventario")
const campos = document.querySelector(".campos")
let total = 0

form.addEventListener("submit",(e) => {
  e.preventDefault()
  validateForm()
})

function validateForm(){
  if(/^\w+$/.test(nombre.value)&&/^[0-9]+(\.[0-9]{1,2})?€$/.test(precio.value)){
    if(document.querySelector(".error"))
      campos.removeChild(document.querySelector(".error"))
    addRow()
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

function addRow(){
  total += Number(precio.value.substring(0,precio.value.length-1))
  createRow(nombre.value,precio.value)
  addTotal()
}

function addTotal(){
  if(document.querySelector(".total"))
    tabla.removeChild(document.querySelector(".total"))
  createRow("Total",total+"€",true)
}

function createRow(value1, value2, total = false){
  let tr = document.createElement("tr")
  let td1 = document.createElement("td")
  let td2 = document.createElement("td")

  if(total)
    tr.classList.add("total")
  td1.appendChild(document.createTextNode(value1))
  td2.appendChild(document.createTextNode(value2))
  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.style.textAlign = "center"
  tabla.appendChild(tr)
}