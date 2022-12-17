import React from 'react'

const UsersCard = ({user, deleteUser, setUserUpdate,handlechangeShowModal}) => {

  const handleChangeClickUpdate = () => {
    setUserUpdate(user)
    handlechangeShowModal()
  }

  return (
    <article className='user'>
      <h2 className='user__title'>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className='user__list'>
        <li className='user__item'><span>Email: </span> {user.email}</li>
        <li className='user__item'><span> Birthday: </span><i className='bx bxs-gift'>{` ${user.birthday}`}</i></li>
      </ul>
      <div className='user__container-bnt'>
        <button className='user__bnt' onClick={() => deleteUser(user.id)}>
          <i className='bx bxs-trash' ></i>
        </button>
        <button className='user__bnt' onClick={handleChangeClickUpdate}>
          <i  className='bx bx-pencil'></i>
        </button>
      </div>
    </article>
  )
}

export default UsersCard