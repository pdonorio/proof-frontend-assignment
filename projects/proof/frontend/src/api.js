function ajaxRequest(method, url, data, responseHandler) {
  let ajaxUrl = url;
  let ajaxData = data;
  // Set the variables
  if (ajaxUrl === '') {
    alert('ajaxUrl can not be null/blank');
    return false;
  }
  const xhr = new XMLHttpRequest();
  // Open Http Request connection
  if (method === 'GET') {
    ajaxUrl = `${ajaxUrl}?${ajaxData}`;
    ajaxData = null;
  }
  xhr.open(method, ajaxUrl, true);
  xhr.responseType = 'json';
  if (data.token) {
    xhr.setRequestHeader('Authorization', `Bearer ${data.token}`);
  }
  // Set request header (optional if GET method is used)
  if (method === 'POST') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-ajaxUrlencoded');
  }
  // Assign (or define) response-handler/callback when ReadyState is changed.
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      responseHandler(xhr.response);
    }
  };
  // Send ajaxData
  xhr.send(JSON.stringify(ajaxData));
  return true;
}

function createUser(data, callback) {
  const url = 'http://localhost:8080/auth/profile';
  ajaxRequest('POST', url, data, callback);
}

function login(data, callback) {
  const url = 'http://localhost:8080/auth/login';
  ajaxRequest('POST', url, data, callback);
}

export function logout(data, callback) {
  const url = 'http://localhost:8080/auth/logout';
  ajaxRequest('GET', url, data, callback);
}

export function getProfile(data, callback) {
  const url = 'http://localhost:8080/auth/profile';
  ajaxRequest('GET', url, data, callback);
}

export function activateProfile(data, callback) {
  const { activateToken } = data;
  const url = `http://localhost:8080/auth/profile/activate/${activateToken}`;
  ajaxRequest('PUT', url, {}, callback);
}

export { ajaxRequest, createUser, login };
