import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchUsers = async() => {
      try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data)
        setLoading(false)
      }
      catch(error){
        console.log("Error", error);
      }
    }
    fetchUsers()
  }, [])

  return(
    <div>
      <p>User List</p>
      {loading? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user)=>(
            <li key={user.id}>

              <p>{user.name}</p>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
  
}

export default App
