import Fila from "../src/fila"

let f;


beforeEach(()=>{
	f = new Fila();
})

test("front",()=>{
	f.enqueue(1);
  f.enqueue(2);
  expect(f.front()).toEqual(1);
})

test("length",()=>{
	f.enqueue(1);
  f.enqueue(2);
  expect(f.length()).toEqual(2);
})

