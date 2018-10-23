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
  console.log(item)
  return fetch(`${apiUrl}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.user.token}`
    },
    item
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
    item: item.name
  })
}

export const getItemByCategory = item => {
  return fetch(`${apiUrl}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.user.token}`
    },
    item: item.category
  })
}

export const getItemByExpiration = item => {
  return fetch(`${apiUrl}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.user.token}`
    },
    item: item.expiration
  })
}

export const getItemByVolume = item => {
  return fetch(`${apiUrl}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.user.token}`
    },
    item: item.volume
  })
}

export const getItemByStorage = item => {
  return fetch(`${apiUrl}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.user.token}`
    },
    item: item.storage
  })
}

export const updateItem = data => {
  return fetch(`${apiUrl}/items/${data.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.user.token}`
    },
    data
  })
}

export const deleteItem = data => {
  return fetch(`${apiUrl}/items/${data.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.user.token}`
    }
  })
}