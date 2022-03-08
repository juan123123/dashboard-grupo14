import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiUrl } from '../utils/apiUrl'

const LastUser = () => {

  const  [ lastUser, setLastUser ] = useState([])

  const getUsers = () => {
    axios
      .get(`${apiUrl}/api/users`)
      .then(res => {
        const maxId = Math.max(...res.data.users.map(u => u.id))
        const user = res.data.users.find(u => u.id === maxId)
        setLastUser(user)
      })
  }

  useEffect(() => {
    getUsers()
  }, [])
   
  return (
    <div className='product'>
      <img 
        src={lastUser.userImage}
        alt='profile'
      />
      <h1>Last Registered User</h1>
      <h2>UserName: <span>{lastUser.fullname}</span></h2>
      <p>Email: <span>{lastUser.email}</span></p>
    </div>
  )
}

export default LastUser