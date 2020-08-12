export const url_services = 'https://api-mikaelsantilio.herokuapp.com/services/';
export const url_projects = 'https://api-mikaelsantilio.herokuapp.com/projects/';
export const url_send_email = 'https://api-mikaelsantilio.herokuapp.com/email/';

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

// fade out
export function fadeOut(el){
  el.style.opacity = 1;
  
  (function fade() {
      if ((el.style.opacity -= .1) < 0) {
          el.style.display = 'none';
          el.classList.add('is-hidden');
      } else {
          requestAnimationFrame(fade);
      }
  })();
}

// fade in
export function fadeIn(el, display){
  if (el.classList.contains('is-hidden')){
      el.classList.remove('is-hidden');
  }
  el.style.opacity = 0;
  el.style.display = display || "block";
  
  (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
          el.style.opacity = val;
          requestAnimationFrame(fade);
      }
  })();
}
