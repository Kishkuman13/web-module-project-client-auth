import e from 'cors'
import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Friend from './Friend'

const initialFriendInfo = {
  name: '',
  age: '',
  email: ''
}

const FriendsList = () => {
  const [friends, setFriends] = useState([])
  const [friend, setFriend] = useState(initialFriendInfo)

  useEffect(() => {
    getFriends()
  }, [])

  const getFriends = () => {
    const axios = axiosWithAuth()
    axios.get('http://localhost:5000/api/friends')
      .then(res => {
        console.log(res)
        setFriends(res.data)
      })
      .catch(err => console.log(err))
  }

  const addFriend = () => {
    e.preventDefault()
    axiosWithAuth.post('http://localhost:5000/api/friends', friend)
  }

  const handleChange = (e) => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <div>
        <h2>Add Friend</h2>
        <form onSubmit={addFriend}>
          <label>
            Name
            <input
              type='text'
              name='name'
              value={friend.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Age
            <input
              type='number'
              name='age'
              value={friend.age}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type='email'
              name='email'
              value={friend.email}
              onChange={handleChange}
              required
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
      <div>
        {
          friends &&
          friends.map((friend, index) => {
            return <Friend friend={friend} key={index} />
          })
        }
      </div>
    </div>
  )
}

export default FriendsList
