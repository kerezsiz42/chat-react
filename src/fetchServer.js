const fetchServer = (endpoint, params) => {
  return fetch(process.env.REACT_APP_API+endpoint, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params)
  }).then(response => response.json());
}

module.exports = fetchServer;