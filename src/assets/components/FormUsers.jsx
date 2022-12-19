import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  birthday: ""
}

const validationEmail = {
  required: "Email is required",
  minLength: {
    message: "Email is too short",
    value: 4
  },
  maxLength: {
    message: "Email is too long",
    value: 100
  },
  pattern: {
    message: "Writ a valid email",
    value: /\S+@\S+\.\S+/
  }
}

const password = {
  required: "Password is required",
  minLength: {
    message: "Password is too short",
    value: 1
  },
  maxLength: {
    message: "Password is too long",
    value: 125
  },
}

const firstName = {
  required: "First name is required",
  minLength: {
    message: "First name is too short",
    value: 1
  },
  maxLength: {
    message: "First name is too long",
    value: 25
  },
}

const lastName = {
  required: "Last name is required",
  minLength: {
    message: "Last name is too short",
    value: 1
  },
  maxLength: {
    message: "Last name is too long",
    value: 25
  }
}

const FormUsers = ({ createUsers, userUpdate, updateUser, isShowForm, handlechangeShowModal }) => {

  const { handleSubmit, register, reset, formState: { errors } } = useForm()

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
    <div className={`container-form ${isShowForm && 'disable-form'}`}>
      <form className='form' onSubmit={handleSubmit(submitForm)}>
        <i onClick={handlechangeShowModal} className='form__x bx bx-x'></i>
        <h2 className='form__title'>{userUpdate ? "Edit User" : "New User"}</h2>
        <div className='form__div'>
          <label className='form__laber' htmlFor="email"><i class='bx bx-envelope' ></i> Email</label>
          <input className='form__input' type="email" placeholder='Enter your email' {...register("email", validationEmail)} />
          {
            errors.email && <p>{errors.email.message}</p>
          }
        </div>
        <div className='form__div'>
          <label className='form__laber' htmlFor="password"><i class='bx bx-lock'></i> Password</label>
          <input className='form__input' type="password" {...register("password", password)} placeholder='Enter your password' />
          {
            errors.password && <p>{errors.password.message}</p>
          }
        </div>
        <div className='form__div'>
          <label className='form__laber' htmlFor="first_name"><i class='bx bx-text' ></i> First Name</label>
          <input className='form__input' type="text" {...register("first_name", firstName)} placeholder='Enter your first name' />
          {
            errors.first_name && <p>{errors.first_name.message}</p>
          }
        </div>
        <div className='form__div'>
          <label className='form__laber' htmlFor="last_name"><i class='bx bx-text' ></i> Last Name</label>
          <input className='form__input' type="text" {...register("last_name", lastName)} placeholder='Enter your last name' />
          {
            errors.last_name && <p>{errors.last_name.message}</p>
          }
        </div>
        <div className='form__div'>
          <label className='form__laber' htmlFor="birthday"><i class='bx bx-gift' ></i> Birthday</label>
          <input className='form__input' type="date" {...register("birthday")} />
        </div>
        <button
          className={userUpdate ? 'btn-edit form__btn' : 'form__btn'}>
          {
            userUpdate ? <span><i className='bx bxs-edit'></i>{"Edit User"}</span>
              : <span><i className='bx bxs-user-plus'></i>{"Add User"}</span>}
        </button>
      </form>
    </div>
  )
}

export default FormUsers