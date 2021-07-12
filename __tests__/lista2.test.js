import Lista2 from "../src/lista2"

let f2;

beforeEach(()=>{
	f2 = new Lista2();
})
test("lenght",()=>{
  expect(f2.length()).toEqual(0);
  f2.enqueue(1);
  f2.enqueue(2);
  f2.enqueue(3);
  expect(f2.length()).toEqual(3);
})

test("isEmpty",()=>{
  expect(f2.isEmpty()).toEqual(true);
  f2.enqueue(1);
  f2.enqueue(2);
  f2.enqueue(3);
  expect(f2.isEmpty()).toEqual(false);
})

test("isFull",()=>{
  f2.enqueue(1);
  f2.enqueue(2);
  f2.enqueue(3);
  f2.enqueue(4);
  f2.enqueue(5);
  expect(f2.isFull()).toEqual(true);
})

test("enqueue",()=>{
  f2.enqueue(1);
  f2.enqueue(2);
  f2.enqueue(3);
  expect(f2.toString()).toEqual("1,2,3");
})
test("enqueue",()=>{
  f2.enqueue(1);
  f2.enqueue(2);
  f2.enqueue(3);
  expect(f2.toString()).toEqual("1,2,3");
})

test("danqueue",()=>{
  f2.enqueue(1);
  f2.enqueue(2);
  f2.enqueue(3);
  f2.danqueue();
  expect(f2.toString()).toEqual("2,3");
})