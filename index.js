const accessToken = localStorage.getItem('accessToken')
if (accessToken != null && accessToken !== '') {
  console.log('accesssss=', accessToken)
  const loginButton = document.getElementById('login-button')
  loginButton.classList.add('hide')
  loginButton.classList.remove('show')
  const logoutButton = document.getElementById('logout-button')
  logoutButton.classList.add('show')
  logoutButton.classList.remove('hide')
  getCustomerDetails(accessToken)
} else {
  const loginButton = document.getElementById('login-button')
  loginButton.classList.add('show')
  loginButton.classList.remove('hide')
  const logoutButton = document.getElementById('logout-button')
  logoutButton.classList.add('hide')
  logoutButton.classList.remove('show')
}
function getCustomerDetails(accessToken) {
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const responseText = xhttp.responseText
      console.log('responseText=', responseText)
      if (responseText != null && responseText !== '') {
        const customer = JSON.parse(responseText)
        console.log('customer=', customer)
        const welcomeName = document.getElementById('welcome-name')
        welcomeName.textContent = 'Welcome ' + customer.firstName
      }
    }
  }
  xhttp.open('GET', 'http://localhost:9999/customer')
  xhttp.setRequestHeader('Authorization', 'Bearer ' + accessToken)
  xhttp.send()
}
function handleLogout() {
  console.log('handleLogout')
  localStorage.clear()
  window.location.href = 'index.html'
}
