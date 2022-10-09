i = 0
j = 0
var jogadores = [];
var salvarValorJ = 1

function cadastrarJogadores() {
    teste = document.getElementById("nomeJogador").value;
    var cadastrou = 0
    if (i == 0) {
        var jogador = {
            nome: document.getElementById("nomeJogador").value,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            pontos: 0,
            vencedor: ""
        }



        jogadores.push(jogador)
        document.getElementById("nomeJogador").value = "";



        i = i + 1
        cadastrou = 1
        j = j + 1
        cadastrarJogador(jogadores)



    } else {


        j = salvarValorJ
        erro = 0
        if (erro == 0) {


            for (j = j - 1; j >= 0; j--) {



                if ((jogadores[j].nome) == (teste) && erro == 0) {
                    alert("Este jogador já foi cadastrado \nVerifique se o nome está correto")
                    erro = 1
                    document.getElementById("nomeJogador").value = "";
                }
            }
        }
        if (erro == 0) {


            var jogador = {
                nome: document.getElementById("nomeJogador").value,
                vitorias: 0,
                empates: 0,
                derrotas: 0,
                pontos: 0,
                vencedor: ""
            }


            jogadores.push(jogador)
            document.getElementById("nomeJogador").value = "";
            i = i + 1
            salvarValorJ = salvarValorJ + 1
            cadastrarJogador(jogadores)
            cadastrou = 1


        }

    }
    if (cadastrou == 1) {







    }
}




function calculaPontos(k) {
    var pontos = (jogadores[k].vitorias * 3) + (jogadores[k].empates * 1);
    jogadores[k].pontos = pontos;



}

















function cadastrarJogador(jogadores) {


    var conversor = ""
    for (var k = 0; jogadores.length > k; k++) {

        conversor += "<tr><td>" +
            jogadores[k].nome + "</td>" +
            "<td>" +
            jogadores[k].vitorias + "</td>" +
            "<td>" +
            jogadores[k].empates + "</td>" +
            "<td>" +
            jogadores[k].derrotas + "</td>" +
            "<td>" +
            jogadores[k].pontos + "</td>" +
            "<td>" +
            jogadores[k].vencedor + "</td>" +
            "<td> <button onClick = 'adicionarVitoria(" + k + ")'> Vitória </button></td>" +
            "<td> <button onClick = 'adicionarEmpate(" + k + ")' > Empate </button></td>" +
            "<td> <button onClick = 'adicionarDerrota(" + k + ")' > Derrota </button></td>" +
            "</tr>"
        var nomeHtml = document.getElementById("tabelaJogadores");
        console.log(nomeHtml)
        nomeHtml.innerHTML = conversor;
    }
}

function adicionarVitoria(k) {
    jogadores[k].vitorias++
    calculaPontos(k)
    cadastrarJogador(jogadores)
}

function adicionarEmpate(k) {
    jogadores[k].empates++
    calculaPontos(k)
    cadastrarJogador(jogadores)
}

function adicionarDerrota(k) {
    jogadores[k].derrotas++
    calculaPontos(k)
    cadastrarJogador(jogadores)
}


function ganhador() {
    var n = 0
    jogadores[n].vencedor = "a";
    var pontosVencedor = jogadores[n].pontos
    for (var m = 1; jogadores.length > m; m++) {
        if (jogadores[m].pontos >= jogadores[n].pontos) {
            pontosVencedor = jogadores[m].pontos
        }
        n++
    }
    for (var p = 0; jogadores.length > p; p++) {
        if (jogadores[p].pontos == pontosVencedor) {
            jogadores[p].vencedor = "<img src=https://media.discordapp.net/attachments/863259740808806421/1024131464876544112/unknown.png?width=438&height=473  width = '20 %'>"
        } else {
            jogadores[p].vencedor = ""
        }
        cadastrarJogador(jogadores)

    }

}



function zerarTudo() {

    for (var k = 0; jogadores.length > k; k++) {
        console.log(jogadores[k])
        jogadores[k].vitorias = 0
        jogadores[k].empates = 0
        jogadores[k].derrotas = 0
        jogadores[k].pontos = 0
        jogadores[k].vencedor = ""

        cadastrarJogador(jogadores)
    }
}