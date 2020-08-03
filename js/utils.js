export const url_services = 'http://127.0.0.1:8000/services/';
export const url_projects = 'http://127.0.0.1:8000/projects/';
export const url_send_email = 'http://127.0.0.1:8000/email/';

export const getRequest = async url => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
        return error;
    }
};

export const postRequest = async (url, body) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const json = await response.json();
      return json;
    } catch (error) {
        return error;
    }
};

function validateName() {
  console.log('#####');
  var input = document.getElementById('input_name_helper');
  // input.style.display = 'block';
}

document.getElementById('input_name').addEventListener('blur', () => {
  var helper = document.getElementById('input_name_helper');
  var input = document.getElementById('input_name');

  if (input.value == '') {
    input.classList.add('form-error');
    helper.classList.remove('d-none');
  } else {
    input.classList.remove('form-error');
    helper.classList.add('d-none');
  }

});


document.getElementById('input_email').addEventListener('blur', () => {
  var helper = document.getElementById('input_email_helper');
  var input = document.getElementById('input_email');

  if (input.value == '') {
    input.classList.add('form-error');
    helper.classList.remove('d-none');
  } else {
    input.classList.remove('form-error');
    helper.classList.add('d-none');
  }

});

document.getElementById('textarea_message').addEventListener('blur', () => {
  var helper = document.getElementById('input_message_helper');
  var input = document.getElementById('textarea_message');

  if (input.value == '') {
    input.classList.add('form-error');
    helper.classList.remove('d-none');
  } else {
    input.classList.remove('form-error');
    helper.classList.add('d-none');
  }

});