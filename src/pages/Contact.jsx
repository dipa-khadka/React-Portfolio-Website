import { useState, useEffect } from 'react'
import './pages.css'

function Contact() {
  useEffect(() => { document.title = 'Contact | Dipa & Sujit' }, [])

  // One useState for each input box (these are "controlled inputs").
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [saved, setSaved] = useState(null)   // the last message we saved

  // On load, show the last message that was saved before (from localStorage).
  useEffect(() => {
    const lastMsg = localStorage.getItem('contactMessage')
    if (lastMsg) {
      setSaved(JSON.parse(lastMsg))
    }
  }, [])

  const handleSend = () => {
    // Simple check so empty messages are not saved.
    if (name.trim() === '' || message.trim() === '') {
      alert('Please fill in both fields.')
      return
    }
    const entry = { name, message }
    localStorage.setItem('contactMessage', JSON.stringify(entry))  // save it
    setSaved(entry)
    setName('')
    setMessage('')
  }

  return (
    <section className="page">
      <h1>Contact Us</h1>
      <p className="lead">Send us a message — it gets saved in your browser.</p>

      <div className="card contact-form">
        <label>Your name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Message</label>
        <textarea
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="btn" onClick={handleSend}>Save message</button>
      </div>

      {/* Show the saved message ONLY if one exists (conditional rendering) */}
      {saved && (
        <div className="card saved-msg">
          <h3>Last saved message</h3>
          <p><strong>{saved.name}</strong> said:</p>
          <p>{saved.message}</p>
        </div>
      )}
    </section>
  )
}

export default Contact
