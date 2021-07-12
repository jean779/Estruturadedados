import Lista from "../src/lista"
class Lista1{
  constructor (size = 10){
    this.maxSize = size;
    this.dados = new Lista();  
  }
 
  push(dado){
      if(!this.isFull()){ 
        this.dados.appende(dado);
      }else{
        throw new Error("stack overflow");
      }
  }

  pop(){
    if(!this.isEmpty()){
      this.dados.removeEnd();
    }else{
      throw new Error("stack underflow");
    }

  }
  isEmpty(){
    return this.dados.size() === 0;    
  }

  top(){
    if(!this.isEmpty()){
     return this.dados.last();
    }else{
      return null;
    }
  }

  isFull(){
   return this.dados.size() === this.maxSize;    
  }
        
  length(){
    return this.dados.size();
  }

  clear(){
   this.dados = new Lista();
  }

  toString(){
    return this.dados.toString();
  }

}export default Lista1;