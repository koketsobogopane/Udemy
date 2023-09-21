import { useState } from 'react'
import classes from './contact-form.module.css'
import Notification from "../ui/notification"

async function sendData(contactDetails){
    const response = await fetch('api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers:{
            "Content-Type": 'application/json'
        }
    })

    const data =  response
    if (!response.ok){
        throw new Error( data.message|| 'Something went wrong!')
    }
    
}

export default function ContactForm() {
    
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [requestStatus, setRequestStatus] = useState()

    
    async function submitDataHandler(event) {
        event.preventDefault()

        setRequestStatus('pending')
        
        
        
         try{
            await sendData({email: email, name: name, message: message})
            setRequestStatus('success')
         } catch (error){
            setRequestStatus('error')
         }
    }


    let notification; 

    if ( requestStatus === 'pending'){
        notification= {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on the way'
        }
    }
    if ( requestStatus === 'success'){
        notification= {
            status: 'success',
            title: 'success!',
            message: 'Your message has been successfully submitted!'
        }
    }
    if ( requestStatus === 'error'){
        notification= {
            status: 'error',
            title: 'error',
            message: 'Could not successfully submit you message!'
        }
    }

  return (
    <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={submitDataHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your email</label>
                    <input type="email" id='email' required value={email} onChange={(event)=> setEmail(event.target.value)} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Your name</label>
                    <input type="text" id='name' required value={name} onChange={(event)=> setName(event.target.value)}/>
                </div>
            </div>
            <div className={classes.control}>
                    <label htmlFor='message'>Your message</label>
                    <textarea  required id='message' rows='5' value={message} onChange={(event)=> setMessage(event.target.value)}></textarea>
                </div>

                <div className={classes.actions}>
                    <button>Send message</button>
                </div>
        </form>
    </section>
  )
}
