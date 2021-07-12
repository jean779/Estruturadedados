class Stack{
  constructor (size = 10){
    this.maxSize = size;
    this.dados = [];
    this.topo = -1;   
  }
 
  push(dado){
      if(!this.isFull()){
        this.topo++;
        this.dados[this.topo] = dado;
      }else{
        throw new Error("stack overflow");
      }
  }

  pop(){
    if(!this.isEmpty()){
      this.topo--;
    }else{
      throw new Error("stack underflow");
    }

  }

  isEmpty(){
    return this.length === -1;    
  }

  top(){
    if(!this.isEmpty()){
     return this.dados[this.topo];
    }else{
      return null;
    }
  }

  isFull(){
   return this.length === this.maxSize;    
  }
        
  length(){
    return this.topo + 1;
  }


  clear(){
    this.dados = [];
    this.topo = -1;
  }

  toString(){
    this.dados;
    let resultado = "";
    for(let i = 0; i<=this.topo; i++){  
      resultado +=  this.dados[i];
        if(i<this.topo){
          resultado += ",";
        }
    }
    return resultado;
  }

}
export default Stack;
