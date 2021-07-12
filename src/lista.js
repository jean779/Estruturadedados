class Node {
	constructor(dado) {
		this.dado = dado;
		this.proximo = null;
  }
} 

class Lista{
  constructor(){
   this.head = new Node();
  }
  add(dado){
    let novo_no = new Node(dado);
    novo_no.proximo = this.head.proximo;
    this.head.proximo = novo_no;
  }
  appende(dado){
    let novo_no = new Node(dado);
    if(this.isEmpty()){
      this.head.proximo = new Node(dado);
    }else{
      let aux = this.head.proximo;
      while(aux.proximo !== null){
        aux = aux.proximo;
      }
      aux.proximo = novo_no;
    }
  }
  removeBeginning(){
    if(this.isEmpty()){
      throw new Error("A lista está vazia.");
    }else{
      let aux = this.head.proximo;
			this.head.proximo = aux.proximo;
    }
  }
  removeEnd() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		}
		let aux_a = this.head;
		let aux_b = this.head.proximo;
		while (aux_b.proximo !== null) {
			aux_a = aux_b;
			aux_b = aux_b.proximo;
		}
		aux_a.proximo = null;
		return aux_b.dado;
	}
  last() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		}
		let aux_a = this.head;
		let aux_b = this.head.proximo;
		while (aux_b.proximo !== null) {
			aux_a = aux_b;
			aux_b = aux_b.proximo;
		}
		return aux_b.dado;
	}
  first(){
    return this.head.proximo;
  }
  isEmpty(){
    return this.head.proximo === null;
  }
  size() {
		let cont = 0;
		let tmp = this.head.proximo;
		while (tmp !== null) {
			tmp = tmp.proximo;
			cont++;
		}
		return cont;
	}
  toString() {
		let aux = this.head.proximo;
		let result = "";
		while (aux !== null) {
			result += aux.dado + (aux.proximo ? "," : "");
			aux = aux.proximo;
		}
		return result;
	}

} export default Lista;