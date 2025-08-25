import axios from 'axios'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner'; 


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
        <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
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
