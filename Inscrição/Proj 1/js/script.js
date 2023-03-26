document.getElementById("input-nome").addEventListener("click", inputNome)
document.getElementById("input-telefone").addEventListener("click", inputTelefone)
document.getElementById("input-email").addEventListener("click", inputEmail)
document.getElementById("input-password").addEventListener("click", inputPassword)
document.getElementById("input-ConfirmarPassword").addEventListener("click", inputConfPassword)

function inputNome() {
    let nomeHtml = "";

    nomeHtml = `
        <span style="font-size: 14px">Nome Completo</span>
        <input type="text" id="input-nome">
    `;

    document.getElementById("nome").innerHTML = nomeHtml;
}

function inputTelefone() {
    let telefoneHtml = "";

    telefoneHtml = `
        <span style="font-size: 14px">Telefone</span>
        <input type="tel" id="input-telefone">
    `;

    document.getElementById("telefone").innerHTML = telefoneHtml;
}

function inputEmail() {
    let emailHtml = "";

    emailHtml = `
        <span style="font-size: 14px">Email</span>
        <input type="email" id="input-email">
    `;

    document.getElementById("email").innerHTML = emailHtml;
}

function inputPassword() {
    let passwordHtml = "";

    passwordHtml = `
        <span style="font-size: 14px">Senha</span>
        <input type="password" id="input-password">
    `;

    document.getElementById("password").innerHTML = passwordHtml;
}

function inputConfPassword() {
    let confPasswordHtml = "";

    confPasswordHtml = `
        <span style="font-size: 14px">Confirmar Senha</span>
        <input type="password" id="input-ConfirmarPassword">
    `;

    document.getElementById("confPassword").innerHTML = confPasswordHtml;
}

