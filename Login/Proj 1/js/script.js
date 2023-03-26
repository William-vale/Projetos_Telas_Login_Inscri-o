document.getElementById("input-email").addEventListener("click", addEmail);
document.getElementById("input-password").addEventListener("click", addPassword);

function addEmail() {
    let adicionaEmail = '';

    adicionaEmail = `
        <span>Email</span>
        <input type="email" id="input-email">
    `;

    document.getElementById("classe-email").innerHTML = adicionaEmail;   
}

function addPassword() {
    let adicionaPassword = '';
    
    adicionaPassword += `
    <span>Senha</span>
    <input type="password" id="input-password">
    `;
    
    document.getElementById("classe-password").innerHTML = adicionaPassword;   

}