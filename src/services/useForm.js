import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

useForm.propTypes = {
  callbackFunction: PropTypes.func,
  validate: PropTypes.object,
}

export default function useForm(callbackFunction, validate) {
  const [values, setValues] = useState({})
  const [inputErrors, setInputErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(inputErrors).length === 0 && isSubmitting) {
      callbackFunction(values)
    }
  }, [inputErrors, callbackFunction, isSubmitting, values])

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitting(true)
  }

  const handleChange = (event) => {
    event.persist()
    setInputErrors(validate(values))
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  return [values, inputErrors, handleChange, handleSubmit, setValues]
}
