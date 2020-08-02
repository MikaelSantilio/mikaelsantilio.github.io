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