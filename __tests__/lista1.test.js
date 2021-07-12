import Lista1  from "../src/lista1";
let s;
beforeEach(()=>{
	s = new Lista1();
})
test("isEmpty",()=>{
	s.push(1);
  s.push(2);
  expect(s.isEmpty()).toEqual(false);
})

test("toString",()=>{
	s.push(1);
  s.push(2);
  s.push(3);
  s.push(4);
  expect(s.toString()).toEqual("1,2,3,4");
})
test("top",()=>{
	s.push(1);
  s.push(2);
  s.push(3);
  s.push(4);
  expect(s.top()).toEqual(4);
})
test("pop",()=>{
	s.push(1);
  s.push(2);
  s.push(3);
  s.push(4);
  s.pop();
  expect(s.toString()).toEqual("1,2,3");
})
test("push",()=>{
	s.push(1);
  s.push(2);
  s.push(3);
  s.push(4);
  expect(s.toString()).toEqual("1,2,3,4");
})
