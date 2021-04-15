// Authenticate
export const serverLogin = async (email, password) => {
  return fetch('https://loft-taxi.glitch.me/auth', {
    method: 'POST',
    body: JSON.stringify({
      "email": email,
      "password": password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json()).then(data => data.success);
};
// Card-info
export const paymentCard = async (cardNumber, expireDate, cardName, cvc, token) => {
  return fetch('https://loft-taxi.glitch.me/card', {
    method: 'POST',
    body: JSON.stringify({
      "cardNumber": cardNumber,
      "expireDate": expireDate,
      "cardName": cardName,
      "cvc": cvc,
      'token': token,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json()).then(data => data.success);
};

//Adress list
export const serverGetAddressList = async () => {
  return fetch('https://loft-taxi.glitch.me/addressList').then(res => res.json());
};

// Registration
export const serverRegistration = async (email, password, firstname, surname) => {
  return fetch('https://loft-taxi.glitch.me/register', {
    method: 'POST',
    body: JSON.stringify({
      "email": email,
      "password": password,
      "name": firstname,
      "surname": surname
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};

// Get coords 
export const getCoordsOnServer = async (address1, address2) => {
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`
  ).then(res => res.json())
}