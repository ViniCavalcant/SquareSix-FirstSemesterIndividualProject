var likeModel = require('../models/likeModel');

function cadastrar(req, res) {
    // var nome = req.body.nome;
    // var email = req.body.email;
    // var senha = req.body.senha;
    // var telefone = req.body.telefone;

    var idUsuario = req.params.idUsuario;
    var idFilme = req.body.idFilme;





    // console.log("telefone que chegou novo: " + telefone);


    likeModel.cadastrar(idUsuario, idFilme)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                if (erro.errno == 1062) {
                    console.log('chave duplicada');
                    res.status(406).send('duplicado');
                } else {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao registrar o seu like! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }

            }
        );

}

function likeFilme(req, res) {
    // var nome = req.body.nome;
    // var email = req.body.email;
    // var senha = req.body.senha;
    // var telefone = req.body.telefone;

    var idUsuario = req.params.idUsuario;
    var idFilme = req.body.idFilme;







    // console.log("telefone que chegou novo: " + telefone);


    likeModel.likeFilme(idUsuario, idFilme)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                if (erro.errno == 1062) {
                    console.log('chave duplicada');
                    res.status(406).send('duplicado');
                } else {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao registrar o seu like! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }

            }
        );

}

function buscar(req, res) {
    
    likeModel.buscar().then((resposta)=>{
        if (resposta.length > 0) {
            res.status(200).json(resposta);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch((erro)=>{
        console.log(erro);
        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar,
    likeFilme,
    buscar
}