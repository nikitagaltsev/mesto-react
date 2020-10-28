class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
    .then(this._checkError);
  }

  addCard(name, link) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(this._checkError);
  }

  editUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return fetch(`${this._baseUrl}/cards/like/${id}`, {
        method: "PUT",
        headers: this._headers
        })
        .then(this._checkError);
    } else {
      return fetch(`${this._baseUrl}/cards/like/${id}`, {
        method: "DELETE",
        headers: this._headers
        })
        .then(this._checkError);
    }
  }
}

const api = new Api({
  baseUrl: 'https://nomoreparties.co/cohort11',
  headers: {
    authorization: 'f0b46149-76a0-417e-b09a-86d55af63e4b',
    'Content-Type': 'application/json'
  }
})

export default api;