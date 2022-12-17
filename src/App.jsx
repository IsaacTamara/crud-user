import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './assets/components/FormUsers'
import UsersCard from './assets/components/UsersCard'

const BASE_URL = "https://users-crud.academlo.tech/"

function App() {

  const [users, setUsers] = useState()
  const [userUpdate, setUserUpdate] = useState()
  const [isShowForm, setIsShowForm] = useState(false)

  const getAllUsers = () => {
    const URL = `${BASE_URL}users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  const createUsers = (data) => {
    const URL = `${BASE_URL}users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        handlechangeShowModal()
      })
      .catch(err => console.log(err))
  }

  const deleteUser = (id) => {
    const URL = `${BASE_URL}users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUser = (id, data) => {
    const URL = `${BASE_URL}users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setUserUpdate()
        handlechangeShowModal()
      })
      .catch(err => console.log(err))
  }

  const handlechangeShowModal = () => {
    setIsShowForm(!isShowForm)
  }

  const handleClickNewUser = () => {
    handlechangeShowModal()
    setUserUpdate()
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <div className='header-container'>
        <h1 className='header__title'><span>Crud Users</span></h1>
        <button 
          onClick={handleClickNewUser} 
          className='header__btn'>
          <span>
            <i className='bx bxs-user-plus'></i>New user
          </span>          
        </button>
      </div>
      <FormUsers
        createUsers={createUsers}
        updateUser={updateUser}
        userUpdate={userUpdate}
        isShowForm={isShowForm}
        handlechangeShowModal={handlechangeShowModal}
      />
      <div className='users-container'>
        {
          users?.map(user => (
            <UsersCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserUpdate={setUserUpdate}
              handlechangeShowModal={handlechangeShowModal}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
