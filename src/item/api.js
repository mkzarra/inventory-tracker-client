import { apiUrl } from '../server'
const store = require('../store')

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else {
    throw new Error ('Received status in 400 or 500 range')
  }
}

export const newItem = item => {
  return fetch(`${apiUrl}/items/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.user.token}`
    },
    body: JSON.stringify(item)
  })
}

export const getItemIndex = () => {
  return fetch(`${apiUrl}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.user.token}`
    }
  })
}

export const getItemByName = item => {
  return fetch(`${apiUrl}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.user.token}`
    },
    body: JSON.stringify(item.name)
  })
}

export const getItemByCategory = item => {
  return fetch(`${apiUrl}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.user.token}`
    },
    body: JSON.stringify(item.category)
  })
}

export const getItemByExpiration = item => {
  return fetch(`${apiUrl}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.user.token}`
    },
    body: JSON.stringify(item.expiration)
  })
}

export const getItemByVolume = item => {
  return fetch(`${apiUrl}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.user.token}`
    },
    body: JSON.stringify(item.volume)
  })
}

export const getItemByStorage = item => {
  return fetch(`${apiUrl}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.user.token}`
    },
    body: JSON.stringify(item.storage)
  })
}

export const updateItem = item => {
  return fetch(`${apiUrl}/items/${item.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.user.token}`
    },
    body: JSON.stringify(item)
  })
}

export const deleteItem = item => {
  return fetch(`${apiUrl}/items/${item.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.user.token}`
    }
  })
}