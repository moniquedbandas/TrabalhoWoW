const nomeUsuario = document.getElementById("nome");
const dtNascimento = document.getElementById("nascimento");
const nrTelefone = document.getElementById("telefone");
const nomeEmail = document.getElementById("email");
const nomeLocal = document.getElementById("local");
const btCadastro = document.getElementById("cadastrar");

nrTelefone.addEventListener('keyup', formatarTelefone);
dtNascimento.addEventListener('keyup', formatarData);
btCadastro.addEventListener('click', function (event) {
    event.preventDefault();
    if (validarCampos()) {
        cadastrarUsuario();
    } else {
        alert("Preencha os campos corretamente.");
    }
});

function cadastrarUsuario() {
    if (validarEmail(nomeEmail) && validarTelefone(nrTelefone) && validarData(dtNascimento)) {
        alert("Cadastrado com sucesso!");
        document.querySelector("form").reset();
    }
}

function validarCampos() {
    const camposObrigatorios = document.querySelectorAll('input[required]');
    let todosPreenchidos = true;

    camposObrigatorios.forEach((campo) => {
        if (!campo.value.trim()) {
            todosPreenchidos = false;
        }
    });
    return todosPreenchidos;
}

function validarEmail() {
    const emailValidado = /^[a-zA-Z.0-9]+@[a-zA-Z](?:[a-zA-Z]{0,61}[a-zA-Z])?(?:\.[a-zA-Z](?:[a-zA-Z]{0,61}[a-zA-Z])?)*$/;
    if (!emailValidado.test(nomeEmail.value)) {
        alert("Formato de e-mail inválido");
        return false;
    }
    return true;
}

function validarTelefone() {
    const telefoneValidado = /^\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}$/;
    if (!telefoneValidado.test(nrTelefone.value)) {
        alert("Formato de telefone inválido");
        return false;
    }
    return true;
}
function formatarTelefone(e) {
    var v = e.target.value.replace(/\D/g, "");
    v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    e.target.value = v;
}

function validarData() {
    const dataValida = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dataValida.test(dtNascimento.value)) {
        alert("Data inválida.");
        return false;
    }
    return true;
}

function formatarData(d) {
    var j = d.target.value.replace(/\D/g, '');
    j = j.replace(/^(\d\d)(\d)/g, "$1/$2");
    j = j.replace(/(\d{2})(\d)/, "$1/$2");
    d.target.value = j;
}
