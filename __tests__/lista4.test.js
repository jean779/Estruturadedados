import Lista from "../src/lista4"
let l;


beforeEach(()=>{
	l = new Lista();
})

test("invert",()=>{
	l.add(1);
  l.add(2);
  l.add(3);
  l.add(4);
  l.invert();
  expect(l.toString()).toEqual("1,2,3,4");
})

