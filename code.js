const inputNome = document.querySelector('input[name = "name"]')
const inputEmail = document.querySelector('input[email = "email"]')
const inputCelular = document.querySelector('input[celular = "celular"]')
const selectEstado = document.getElementById('estado')
const mensagem = document.querySelector('.validou')
const retorna = document.querySelector('.btnReturn')
const form = document.querySelector('form')
const inicio = document.querySelector('.inicio')
let isValidForm = false;

function validaNome() {
    isValidForm = true;
    if (inputNome.value === '') {
        alert('Preencha com seu nome Completo.')
        isValidForm = false;
        return;
    }
    console.log(inputNome.value)
}

function testaEmail() {
    const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    if (regexEmail.test(inputEmail.value)) {
        return true;
    } else {
        return false;
    }
}

function validaEmail() {
    if (inputEmail.value === '' || !testaEmail(inputEmail)) {
        alert('Preencha com um e-mail válido.')
        isValidForm = false;
        return;
    }
    console.log(inputEmail.value)
}

function testaCelular() {
    const regexCelular = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
    if (regexCelular.test(inputCelular.value)) {
        return true;
    } else {
        return false;
    }
}

function validaCelular() {
    if (inputCelular.value === '' || !testaCelular(inputCelular)) {
        alert('Preencha com um telefone-celular válido.')
        isValidForm = false;
        return;
    }
    console.log(inputCelular.value)
}

function validaEstado() {
    if (selectEstado.value === '') {
        alert('Preencha o campo de seu estado.')
        isValidForm = false;
        return;
    }
    console.log(selectEstado.value)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validaNome()
    validaEmail()
    validaCelular()
    validaEstado()

    if (isValidForm) {
        form.remove()
        mensagem.classList.remove("error-hidden")
        retorna.classList.remove("error-hidden")
        inicio.classList.add("error-hidden")
        console.log("validou enviou")

    }
})

retorna.addEventListener("click", () => {
    window.location.href = "index.html";
});






















