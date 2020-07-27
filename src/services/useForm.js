import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

useForm.propTypes = {
  submitFunction: PropTypes.func,
  validate: PropTypes.object,
}

export default function useForm(submitFunction, validate) {
  const [values, setValues] = useState({})
  const [inputErrors, setInputErrors] = useState({})

  useEffect(() => {
    setInputErrors(validate(values))
  }, [values, validate])

  const handleSubmit = (event) => {
    event.preventDefault()
    submitFunction(values)
  }

  const handleChange = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  return [values, inputErrors, handleChange, handleSubmit]
}
