import Lista from "../src/lista"
let l;


beforeEach(()=>{
	l = new Lista();
})

test("isEmpty",()=>{
  expect(l.isEmpty()).toEqual(true);
  l.add(1);
  l.add(2);
  l.add(3);
  expect(l.isEmpty()).toEqual(false);
})

