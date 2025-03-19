import { compile } from "sass";

export async function listarTurmas(){
    let dados;

    try{
        const response = await fetch('http://localhost:8080/turma');
        const data = await response.json();
        dados = data;
    }catch (error){
        console.error(error);
    }
    
    return dados;
}

export async function excluirTurma(id){
    let dados;
    
    try{
        const response = await 
        fetch('http://localhost:8080/turma/' + id,{
            method: 'DELETE',
        });
        const data = await response.json();
        dados = data;
    }catch (error){
        console.error(error);
    }
    return dados;
}