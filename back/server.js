const Client = require('pg').Client;
const usuario = new Client({
    user: "carrijojp",
    password: "130517",
    host: "127.0.0.1",
    port: 5432,
    database: "postgres"
})

getCarro()

async function getCarro() {
    try {
        console.log("Iniciando a conexão.");
        await usuario.connect()
        console.log("Conexão Bem Sucedida!")
        const resultado = await usuario.query("select * from carro")
        console.table(resultado.rows);
    }

    catch (ex) {
        console.log("Ocorreu erro no getCarro. Erro: " + ex);
    }

    finally {
        await usuario.end()
        console.log("Usuário Desconectado!");
    }
}
