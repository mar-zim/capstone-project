export default function validateLogin(values) {
  let errors = {}

  if (!values.email) {
    errors.email = 'Bitte gib eine E-Mail Adresse ein.'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Die E-Mail Adresse ist ungültig.'
  }
  if (!values.password) {
    errors.password = 'Bitte gib ein Passwort ein.'
  }
  return errors
}
