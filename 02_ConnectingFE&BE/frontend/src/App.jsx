import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])

   useEffect(() => {
      axios.get()
   })
  return (
    <>
      <h1>Nihal or code</h1>
      <p>USERS: {users.length}</p>

      {
        users.map((user, index) => {
          <div key={user.name}>
            <h3>{user.email}</h3>
            <p>{user.profile}</p>
          </div>
})
      }
    </>
  )
}

export default App
