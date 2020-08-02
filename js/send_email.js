import { url_send_email, postRequest } from './utils.js';

function sendEmail(form) {
    event.preventDefault();

    var data = {};
    data.name = document.getElementById("input_name").value;
    data.from_email = document.getElementById("input_email").value;
    data.message = document.getElementById("textarea_message").value;

    var name = document.getElementById("input_name");
    var email = document.getElementById("input_email");
    var message = document.getElementById("textarea_message");


    validateContactForm(name, email, message);

    

    var btn_submit = document.getElementById("btn_enviar");

    btn_submit.innerHTML = 
        `<div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>`;

    var email = postRequest(url_send_email, data);
    email.then(result => {
        if ('success' in result) {
            console.log(result);
            btn_submit.innerHTML = 'Enviado';

        } else {
            console.log(result);
            btn_submit.innerHTML = 'Error';
        }

    });

    return false;
}

function validateContactForm(name_element, email_element, message_element) {

    if (validateInputText(name_element)) {
        // data.name = name_element.value;
        document.getElementById(name_element.id + '_helper').innerHTML = '';
    } else {
        document.getElementById(name_element.id + '_helper').innerHTML = 'Este campo é obrigatório.';
    };

    if (validateInputEmail(email_element)) {
        // data.name = email_element.value;
        document.getElementById(email_element.id + '_helper').innerHTML = '';
    } else {
        document.getElementById(email_element.id + '_helper').innerHTML = 'Insira um endereço de email válido.';
    };

    if (validateInputText(message_element)) {
        // data.name = message_element.value;
        document.getElementById(message_element.id + '_helper').innerHTML = '';
    } else {
        document.getElementById('input_message_helper').innerHTML = 'Este campo é obrigatório.';
    };
}

function validateInputText(element) {
    if (element.value == '') {
        element.classList.remove('form-success');
        element.classList.add('form-error');
        return false
    } else {
        element.classList.remove('form-error');
        element.classList.add('form-success');
        return true
    }
}

function validateInputEmail(element) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (element.value == '') {
        element.classList.add('form-error');
        return false
    }

    email_validate = re.test(String(element.value).toLowerCase());
    if (email_validate) {
        element.classList.add('form-success');
        return true            
    }
    return false
}

window.sendEmail = sendEmail;
