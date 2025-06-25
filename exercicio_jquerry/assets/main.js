$(document).ready(function() {
    // Evento de submissão do formulário
    $('#form-tarefa').on('submit', function(e) {
        // Previne o comportamento padrão do formulário (recarregar a página)
        e.preventDefault();

        // Pega o valor do campo de input
        const nomeDaTarefa = $('#nome-tarefa').val();

        // Cria um novo elemento <li> com o texto da tarefa
        const novoItemDaLista = $(`
            <li>
                <div class="checkbox-tarefa"></div>
                <span>${nomeDaTarefa}</span>
                <div class="botoes-tarefa">
                    <button type="button" class="btn-apagar">Apagar</button>
                </div>
            </li>
        `);

        // Adiciona o novo item à lista <ul>
        $('#lista-tarefas').append(novoItemDaLista);

        // Limpa o campo de input após adicionar a tarefa
        $('#nome-tarefa').val('');
    });

    // Delegação de evento para o checkbox de CONCLUIR
    $('#lista-tarefas').on('click', '.checkbox-tarefa', function() {
        // Adiciona a classe que aplica o efeito de riscado no texto
        $(this).closest('li').toggleClass('tarefa-concluida');
    });

    // Delegação de evento para o botão de APAGAR
    $('#lista-tarefas').on('click', '.btn-apagar', function() {
        // Animação de fadeOut e depois remove o elemento
        $(this).closest('li').fadeOut(function() {
            $(this).remove();
        });
    });
});
