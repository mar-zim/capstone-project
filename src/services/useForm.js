import PropTypes from 'prop-types'
import { useState } from 'react'

useForm.propTypes = {
  callbackFunction: PropTypes.func,
  validate: PropTypes.object,
}

export default function useForm(callbackFunction, validate) {
  const [values, setValues] = useState({})
  const [inputErrors, setInputErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    callbackFunction(values)
  }

  const handleChange = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  const handleBlur = () => {
    setInputErrors(validate(values))
  }

  return [values, inputErrors, handleChange, handleSubmit, handleBlur]
}
