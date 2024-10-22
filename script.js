const nome = 'Miguel';
const idade = 20;
const cursoDesejado = 'Ciência da Computação';
const idAluno = '123456';
const endereco = 'rua guaribas';

function enviar(){

    var nome = document.getElementById("username").value;
    var idade = document.getElementById("age").value;
    var endereco = document.getElementById("address").value;
    var idAluno = document.getElementById("student ID").value;
    var cursoDesejado = document.getElementById("desired course").value;

    if(nome == "Miguel"){
        alert('Cadastrado com Sucesso');
    }else{
        alert('Usuario ou senha incorreto');
    }

    if(idade == "20"){
        alert('Cadastrado com Sucesso');
    }else{
        alert('Usuario ou senha incorreto');
    }

    if(endereco == "rua guaribas"){
        alert('Cadastrado com Sucesso');
    }else{
        alert('Usuario ou senha incorreto');
    }

    if(idAluno == "123456"){
        alert('Cadastrado com Sucesso');
    }else{
        alert('Usuario ou senha incorreto');
    }

    if(cursoDesejado == "ciência da comptação"){
        alert('Cadastrado com Sucesso');
    }else{
        alert('Usuario ou senha incorreto');
    }
}