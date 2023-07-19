const scriptURL = 'https://script.google.com/macros/s/AKfycbxHDo0acrFhrXASAqOQ4eu8P7jVFKltNO7J43Rqc6lrqzyAVJhgLk3Xnu2p9vvymd1D/exec'
  const form = document.forms['submit-to-google-sheet']
  const message = document.getElementById("message");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML = "Thank Your Subscribing!";
        setTimeout(function(){
            message.innerHTML = "";
        }, 5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })