import Lista from "../src/lista"

class Lista2{
  constructor (tam = 5){
    this.dados = new Lista();
		this.maxSize = tam;
  }

  enqueue(dado){
      if(!this.isFull()){
        this.dados.appende(dado);
      }else{
        throw new Error("queue overflow");
      }
  }

  danqueue(){
   if(!this.isEmpty()){
     this.dados.removeBeginning();
    }else{
      throw new Error("queue underflow");
    }
  }

  front(){
    if(!this.isEmpty()){
      return this.dados.first();
    }
  }

  clear(){
    this.dados =  new Lista();
  }
  
  isFull(){
   return this.length() === this.maxSize;
  }

  isEmpty(){
    return this.length() === 0;
  }

  length(){
    return this.dados.size();
  }
  
  toString(){
    return this.dados.toString();
  }


}export default Lista2;