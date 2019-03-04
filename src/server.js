let apiUrl

const apiUrls = {
  production: 'deployedBackEnd', // change this when back end is deployed to heroku
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl;