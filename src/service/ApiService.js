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

export async function criarTurma(turma){
    let dados;

    try{
        const response = await
        fetch('http://localhost:8080/turma', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "nm_turma": turma.nm_turma,
                    "ds_curso": turma.ds_curso,
                    "nr_ano_letivo": turma.nr_ano_letivo,
                    "qtd_capacidade": turma.qtd_capacidade,
                    "bt_ativo": turma.bt_ativo,
                    "dt_inclusao": turma.dt_inclusao
                }
            )
        });
    
        const data = await response.json();
        dados = data;
    }catch (error){
        console.log(error)
    }
   
    return dados;
}