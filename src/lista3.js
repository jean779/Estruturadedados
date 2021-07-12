class Node {
	constructor(dado) {
		this.dado = dado;
		this.proximo = null;
  }
} 

class Lista3{
  constructor(){
    this.arr = [];
    this.arr[0] = new Node();
  }
  add(dado){
    let novo_no = new Node(dado);
    novo_no.proximo = this.arr[0].proximo;
    this.arr.push(novo_no);
    this.arr[0].proximo = this.arr.indexOf(novo_no);
  }
  append(dado){
    let novo_no = new Node(dado);
    this.arr.push(novo_no);
    if(this.isEmpty()){
      this.arr[0].proximo = this.arr.indexOf(novo_no);
    }else{
      let aux =this.arr[this.arr[0].proximo];
      while(aux.proximo !== null){
        aux = this.arr[this.arr[0].proximo];
      }
      aux.proximo = this.arr.indexOf(novo_no);
    }
  }
  removeBeginning(){
    if(this.isEmpty()){
      throw new Error("A lista está vazia.");
    }else{
      let aux = this.arr[this.arr[0].proximo];
			this.arr[0].proximo = aux.proximo;
    }
  }
  removeEnd() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		}
		let aux_a = this.arr[0];
		let aux_b = this.arr[this.arr[0].proximo];
		while (aux_b.proximo !== null) {
			aux_a = aux_b;
			aux_b = this.arr[aux_b.proximo];
		}
		aux_a.proximo = null;
	}
  last() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		}
		let aux_a = this.arr[0];
		let aux_b = this.arr[this.arr[0].proximo];
		while (aux_b.proximo !== null) {
			aux_a = aux_b;
			aux_b = this.arr[aux_b.proximo];
		}
		return aux_b.dado;
	}
  isEmpty(){
    return this.arr[0].proximo === null;
  }
  size() {
		let cont = 0;
		let tmp = this.arr[this.arr[0].proximo];
		while (tmp.proximo !== null) {
			tmp = this.arr[tmp.proximo];
			cont++;
		}
		return cont+1;
	}
  toString() {
		let aux = this.arr[this.arr[0].proximo];
		let result = "";
		while (aux != null) {
			result += aux.dado + (aux.proximo ? "," : "");
			aux = this.arr[aux.proximo];
		}
		return result;
	} 
}

export default Lista3;