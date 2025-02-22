<?php
header('Content-Type: application/json');
require_once 'config.php';

try {
    $dados = json_decode(file_get_contents('php://input'), true);
    
    $stmt = $pdo->prepare("INSERT INTO usuarios (nome, email, telefone) VALUES (:nome, :email, :telefone)");
    
    $stmt->bindParam(':nome', $dados['nome']);
    $stmt->bindParam(':email', $dados['email']);
    $stmt->bindParam(':telefone', $dados['telefone']);
    
    $stmt->execute();
    
    echo json_encode(['success' => true, 'message' => 'Usuário cadastrado com sucesso!']);
} catch(PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Erro ao cadastrar: ' . $e->getMessage()]);
}
?> 