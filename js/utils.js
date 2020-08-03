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