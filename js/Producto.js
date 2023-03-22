export class Producto{
  #id
  name
  price
  constructor(name ,price ){
    this.#id=this.uniqueId()
    this.name=name
    this.price=price

    if(!name) throw("No name")
    if(!price) throw("No price")
  } 
  uniqueId(){
    return Math.floor(Math.random() * Math.floor(Math.random() * Date.now())).toString().substring(0,10)
  }
  getId(){
    return this.#id
  }
  getData(){
    return {
      ...this,
      id: this.getId()
    }
  }
}