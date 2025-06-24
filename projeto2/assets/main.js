const form = document.getElementById('form-agenda');
const corpoTabela = document.querySelector('tbody');
const inputTelefone = document.getElementById('numero-contato');

let contatos = [];

inputTelefone.addEventListener('input', (e) => {
    const input = e.target;
    // Remove todos os caracteres que não são dígitos
    let value = input.value.replace(/\D/g, '');

    // Limita a 10 dígitos (DDD + 8 dígitos do número)
    value = value.substring(0, 10);

    // Aplica a máscara dinamicamente
    let formattedValue = '';
    if (value.length > 0) {
        formattedValue = `(${value.substring(0, 2)}`;
    }
    if (value.length > 2) {
        formattedValue = `(${value.substring(0, 2)}) ${value.substring(2, 6)}`;
    }
    if (value.length > 6) {
        formattedValue = `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6, 10)}`;
    }

    input.value = formattedValue;
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarContato();
});

corpoTabela.addEventListener('change', function(e) {
    if (e.target.type === 'checkbox') {
        const numeroTelefone = e.target.dataset.numero;
        const contato = contatos.find(c => c.numero === numeroTelefone);

        if (contato) {
            contato.favorito = e.target.checked;
            atualizaTabela();
        }
    }
});

function adicionarContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    const numeroExistente = contatos.some(contato => contato.numero === inputNumeroContato.value);

    if (numeroExistente) {
        alert(`O número: ${inputNumeroContato.value} já foi inserido.`);
    } else {
        const novoContato = {
            nome: inputNomeContato.value,
            numero: inputNumeroContato.value,
            favorito: false
        };
        contatos.push(novoContato);
        atualizaTabela();
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    corpoTabela.innerHTML = '';

    // Ordena a lista: favoritos primeiro, depois por ordem alfabética
    contatos.sort((a, b) => {
        if (b.favorito !== a.favorito) {
            return b.favorito - a.favorito;
        }
        return a.nome.localeCompare(b.nome);
    });

    contatos.forEach((contato) => {
        const classeLinha = contato.favorito ? 'favorito-row' : '';
        const isChecked = contato.favorito ? 'checked' : '';

        const linha = `<tr class="${classeLinha}"><td><input type="checkbox" data-numero="${contato.numero}" ${isChecked}></td><td>${contato.nome}</td><td>${contato.numero}</td></tr>`;
        corpoTabela.innerHTML += linha;
    });
}
