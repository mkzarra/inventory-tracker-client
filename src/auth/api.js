import { apiUrl } from '../server'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else {
    throw new Error('Received status in 400 or 500 range')
  }
}

export const signUp = credentials => {
  return fetch(`${apiUrl}/sign-up`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.password_confirmation
      }
    })
  })
}

export const signIn = credentials => {
  return fetch(`${apiUrl}/sign-in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    })
  })
}

export const signOut = user => {
  return fetch(`${apiUrl}/sign-out`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const changePwd = (passwords, user) => {
  return fetch(`${apiUrl}/change-password`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    },
    body: JSON.stringify({
      passwords: {
        old: passwords.old,
        new: passwords.new
      }
    })
  })
}