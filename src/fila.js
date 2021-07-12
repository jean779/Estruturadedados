class Fila{
  constructor (tam = 5){
    this.dados = [];
		this.inicio = 0;
		this.fim = 0;
		this.maxSize = tam;
  }

  enqueue(dado){
      if(!this.isFull()){
        this.dados[this.fim++] = dado;
      }else{
        throw new Error("queue overflow");
      }
  }

  danqueue(){
    if(!this.isEmpty()){
      this.inicio++;
    }else{
      throw new Error("queue underflow");
    }
  }

  front(){
    if(!this.isEmpty()){
      return this.dados[this.inicio];
    }
  }
   
  clear(){
    this.inicio = 0;
    this.fim = 0;
  }
  
  isFull(){
    if(this.length() === this.maxSize){
      return true;
    }
      return false;
  }

  isEmpty(){
    if(this.length() === 0){
      return true;
    }
      return false;
  }

  length(){
    return this.fim - this.inicio;
  }





}export default Fila;