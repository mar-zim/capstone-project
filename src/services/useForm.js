import PropTypes from 'prop-types'
import { useState } from 'react'

useForm.propTypes = {
  callbackFunction: PropTypes.func,
}

export default function useForm(callbackFunction) {
  const [values, setValues] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    callbackFunction(values)
    setValues('')
  }

  const handleChange = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  return {
    values,
    handleChange,
    handleSubmit,
  }
}
