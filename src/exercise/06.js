// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // const usernameInputRef = React.useRef()
  // const [error, setError] = React.useState(null)
  const [username, setUsername] = React.useState('')
  function handleSubmit(event) {
    event.preventDefault()
    // const value = event.target.elements.usernameInput.value
    // const value = usernameInputRef.current.value
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const {value} = event.target
    setUsername(value.toLowerCase())
    // const isValid = value === value.toLowerCase()
    // setError(isValid ? null : 'Username must be lowercase')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          // ref={usernameInputRef}
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      {/* <div style={{color: 'red'}}>{error}</div> */}
      {/* <button disabled={Boolean(error)} type="submit"> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
