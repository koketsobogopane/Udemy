import { useRef } from 'react'

function HomePage() {
  const emailRef = useRef()
  const feedbackRef = useRef()

  function submitHandler(event) {
    event.preventDefault();

    const emailData = emailRef.current.value
    const feedbackData = feedbackRef.current.value

    const reqBody = {
        email: emailData,
        text: feedbackData
    }

    fetch('api/feedback', {
      method: 'Post',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
      <div>
        <label htmlFor = 'email'>Your email adress</label>
        <input type='email' id='email' ref={emailRef}/>
      </div>
      <div>
        <label htmlFor = 'feedback'>Tell us you thoughts</label>
        <textarea id = 'feedback' rows= '4' ref={feedbackRef}></textarea>
      </div>
      <button>Send feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
