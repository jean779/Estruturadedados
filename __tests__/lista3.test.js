import Lista3 from "../src/lista3"

let l3;


beforeEach(()=>{
	l3 = new Lista3();
})

test("last",()=>{
	l3.add(1);
  l3.add(2);
  expect(l3.last()).toEqual(1);
})

test("toString",()=>{
	l3.add(1);
  l3.add(2);
  expect(l3.toString()).toEqual("2,1");
})
test("append",()=>{
	l3.append(1);
  l3.append(2);
  expect(l3.toString()).toEqual("1,2");
})
test("size",()=>{
	l3.add(1);
  l3.add(2);
  expect(l3.size()).toEqual(2);
})
test("isEmpty",()=>{
  expect(l3.isEmpty()).toEqual(true);
  l3.add(1);
  l3.add(2);
  expect(l3.isEmpty()).toEqual(false);
})
test("removeBeg",()=>{
  l3.add(1);
  l3.add(2);
  l3.removeBeginning();
  expect(l3.toString()).toEqual("1");
})

test("removeEnd",()=>{
  l3.add(1);
  l3.add(2);
  l3.removeEnd();
  expect(l3.toString()).toEqual("2");
})
