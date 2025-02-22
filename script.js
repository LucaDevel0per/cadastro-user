document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    
    // Por enquanto, apenas exibir os dados na lista
    const listaUsuarios = document.getElementById('listaUsuarios');
    const novoUsuario = document.createElement('li');
    novoUsuario.textContent = `Nome: ${nome} | Email: ${email} | Telefone: ${telefone}`;
    listaUsuarios.appendChild(novoUsuario);
    
    // Limpar formulário
    this.reset();
}); 