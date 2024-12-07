const entradaTexto = document.getElementById('entradaTexto');
const botaoAdicionar = document.getElementById('botaoAdicionar');
const botaoInformar = document.getElementById('botaoInformar');
const container = document.getElementById('container');
let contadorLinhas = 0;

botaoAdicionar.addEventListener('click', () => {
    const texto = entradaTexto.value.trim();
    if (texto) {
        const paragrafo = document.createElement('p');
        paragrafo.textContent = texto;
        container.appendChild(paragrafo);
        contadorLinhas++;
        entradaTexto.value = '';
        entradaTexto.focus();
    } else {
        alert('Por favor, insira um texto.');
    }
});

botaoInformar.addEventListener('click', () => {
    alert(`${contadorLinhas} linha(s) foram adicionada(s).`);
});
