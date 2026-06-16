import { useState, useEffect } from 'react'

// A typing animation that types a word, deletes it, then types the next one.
// It shows useState + useEffect working together with a timer.
function Typewriter() {
  const words = ['components', 'hooks', 'React Router', 'localStorage']

  const [text, setText] = useState('')          // what is shown right now
  const [wordIndex, setWordIndex] = useState(0) // which word we are on
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]

    // speed: faster when deleting, pause when a word is fully typed
    let delay = isDeleting ? 60 : 120
    if (!isDeleting && text === current) delay = 1200

    const timer = setTimeout(() => {
      if (!isDeleting && text === current) {
        setIsDeleting(true)                       // start deleting
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setWordIndex((i) => i + 1)                // move to next word
      } else {
        // add or remove one letter
        setText(
          isDeleting
            ? current.substring(0, text.length - 1)
            : current.substring(0, text.length + 1)
        )
      }
    }, delay)

    return () => clearTimeout(timer)   // cleanup before next run
  }, [text, isDeleting, wordIndex])

  return (
    <span className="type-text">
      {text}
      <span className="cursor">|</span>
    </span>
  )
}

export default Typewriter
