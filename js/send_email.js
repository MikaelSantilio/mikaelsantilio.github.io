const setData = async (url, body) => {
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

function sendEmail(form) {
    event.preventDefault();

    var data = {};
    data.name = document.getElementById("input_name").value;
    data.from_email = document.getElementById("input_email").value;
    data.message = document.getElementById("textarea_message").value;

    var btn_submit = document.getElementById("btn_enviar");

    btn_submit.innerHTML = 
        `<div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>`;

    var email = setData('http://127.0.0.1:8000/email/', data);
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

