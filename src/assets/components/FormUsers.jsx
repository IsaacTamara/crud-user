import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  birthday: ""
}

const FormUsers = ({ createUsers, userUpdate, updateUser, isShowForm, handlechangeShowModal }) => {

  const { handleSubmit, register, reset } = useForm()

  const submitForm = (data) => {
    if (userUpdate) {
      updateUser(userUpdate.id, data)
    } else {
      createUsers(data)
    }
    reset(defaultValues)
  }

  useEffect(() => {
    reset(defaultValues)
    if (userUpdate) {
      reset(userUpdate)
    }
  }, [userUpdate])

  return (
    <div className={`container-form ${isShowForm &&'disable-form'}`}>
      <form className='form' onSubmit={handleSubmit(submitForm)}>
        <i onClick={handlechangeShowModal} className='form__x bx bx-x'></i>
        <h2 className='form__title'>{userUpdate ? "Edit User" : "New User"}</h2>
        <div className='form__div'>
          <label className='form__laber' htmlFor="email">Email</label>
          <input className='form__input' type="email" placeholder='Enter your email' {...register("email")} />
        </div>
        <div className='form__div'>
          <label className='form__laber' htmlFor="password">Password</label>
          <input className='form__input' type="password" {...register("password")} placeholder='Enter your password' />
        </div>
        <div className='form__div'>
          <label className='form__laber' htmlFor="first_name">First Name</label>
          <input className='form__input' type="text" {...register("first_name")} placeholder='Enter your first name' />
        </div>
        <div className='form__div'>
          <label className='form__laber' htmlFor="last_name">Last Name</label>
          <input className='form__input' type="text" {...register("last_name")} placeholder='Enter your last name' />
        </div>
        <div className='form__div'>
          <label className='form__laber' htmlFor="birthday">Birthday</label>
          <input className='form__input' type="date" {...register("birthday")} />
        </div>
        <button 
          className='form__btn'>
            {
              userUpdate ? <span><i className='bx bxs-edit'></i>{"Edit User"}</span> 
                : <span><i className='bx bxs-user-plus'></i>{"Add User"}</span>}
          </button>
      </form>
    </div>
  )
}

export default FormUsers