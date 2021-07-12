import Stack from "../src/stack";
let s;
beforeEach(()=>{
	s = new Stack();
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
