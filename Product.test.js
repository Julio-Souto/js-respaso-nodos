import { Producto } from "./js/Producto"

test("Comprobacion nombre no vacio", () => {
  const p1 = () => {
    new Producto()
  }
  expect(p1).toThrow("No name")
})

test("Comprobacion precio no vacio", () => {
  const p1 = () => {
    new Producto("a")
  }
  expect(p1).toThrow("No price")
})

test("Comprobacion datos validos", () => {
  const data = { name:"a",price:10 }
  const p1 = new Producto(data)
  
  expect(p1.getData).toEqual(data)
})