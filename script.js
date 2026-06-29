// Aguarda o carregamento do DOM antes de executar os scripts
document.addEventListener("DOMContentLoaded", function() {

    // 1. REQUISITO OBRIGATÓRIO: Validação do Formulário (Roda apenas na página contato.html)
    const form = document.getElementById("form-contato");

    if (form) { // Só executa se o formulário existir na página atual
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o recarregamento

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            // Verifica se todos os campos estão preenchidos
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos do formulário antes de enviar.");
                return;
            }

            // Validação de formato de e-mail utilizando Expressão Regular (Regex)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Por favor, insira um e-mail com formato válido (exemplo: usuario@dominio.com).");
                return;
            }

            // Simulação de envio com sucesso
            alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
            form.reset(); // Limpa os campos
        });
    }

    // 2. REQUISITO ADICIONAL: Alternar Tema Claro/Escuro (Roda em todas as páginas)
    const themeButton = document.getElementById("theme-toggle");
    
    if (themeButton) {
        themeButton.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
        });
    }
});