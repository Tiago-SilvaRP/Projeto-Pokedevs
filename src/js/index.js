const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {

        escondercartaopokedev();

        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

        DesativarPokedevNaListagem();

        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
    })
})
function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function DesativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove('ativo');
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function escondercartaopokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

