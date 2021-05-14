const togglePw = document.querySelector('.password button')
const pwInput = document.querySelector('.password input')

togglePw.addEventListener('click', (e) => {
  e.preventDefault()
  switch (pwInput.type) {
    case 'password': {
      pwInput.type = 'text'
      togglePw.textContent = 'Hide'
      return
    }
    case 'text': {
      pwInput.type = 'password'
      togglePw.textContent = 'Show'
      return
    }
  }
})