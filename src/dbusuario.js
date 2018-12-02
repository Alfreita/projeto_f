var usuario;
var id;
var cpf;

exports.getUsuario =()=>{
   return this.usuario;
};

exports.getId = () =>{
    return this.id;
};

exports.getCpf = () =>{
    return this.cpf;
};

exports.saveUsuario = (usuario,id,cpf)=>{
  this.usuario = usuario;
  this.id = id;
  this.cpf = cpf;
};