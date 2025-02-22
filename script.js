document.getElementById('cadastroForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    
    try {
        const response = await fetch('cadastrar.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                telefone: telefone
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Limpar formulário
            this.reset();
            
            // Redirecionar para a página de sucesso
            window.location.href = 'cadastrado.html';
        } else {
            alert('Erro ao cadastrar: ' + data.message);
        }
    } catch (error) {
        alert('Erro ao enviar dados: ' + error.message);
    }
}); 