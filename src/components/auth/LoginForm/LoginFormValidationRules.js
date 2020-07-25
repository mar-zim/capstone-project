export default function validateLogin(values) {
  let errors = {}

  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Die E-Mail Adresse ist ungültig.'
  }
  return errors
}
