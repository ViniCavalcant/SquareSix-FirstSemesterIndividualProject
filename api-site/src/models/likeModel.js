var database = require("../database/config")


var curtida = 1;
function cadastrar(idUsuario, idAutor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUsuario, idAutor);
    var instrucao = `
        INSERT INTO seguir (fkUsuario, fkAutor, curtida) VALUES ('${idUsuario}', '${idAutor}', '${1}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function likeFilme(idUsuario, idFilme) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUsuario, idFilme);
    var instrucao = `
        INSERT INTO curtida (fkUsuario, fkFilme, curtida) VALUES ('${idUsuario}', '${idFilme}', '${1}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscar():");
    var instrucao = `
    select filme.poster as poster,
	filme.nomeFilme as filme,
		count(curtida.curtida) as likes
				from curtida
					inner join filme
						on fkFilme = idFilme
							group by idFilme
								order by likes desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = { 
    cadastrar, 
    likeFilme,
    buscar
};