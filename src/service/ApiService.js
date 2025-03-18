import { compile } from "sass";

export function listarTurmas(){
    let dados;

    fetch('http://localhost:8080/turma')
    .then(Response => {
        Response.json()
        .then(data => {
            console.log(data)
           dados = data;
        })
    })

    return dados;
}