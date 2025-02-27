// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
modal.className = "hidden"

for (const heart of likeButtons) {
  heart.addEventListener('click', () => {
    mimicServerCall()
    .then(()=> {
      heart.className = "activated-heart"
    })
    .catch(() => {
      modal.style.visibility = "visible"
    })
  })
}
document.addEventListener('DOMContentLoaded', function() {

})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
