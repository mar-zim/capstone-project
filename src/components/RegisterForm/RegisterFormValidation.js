export default function validateRegister(values) {
  let errors = {}

  if (values.name && values.name.length < 3) {
    errors.name = 'Dein Name ist etwas zu kurz.'
  } else if (values.name && values.name.length > 15) {
    errors.name = 'Bitte wähle einen etwas kürzeren Namen.'
  }

  if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Die E-Mail Adresse ist ungültig.'
  }

  if (values.password && values.password.length < 6) {
    errors.password = 'Dein Passwort sollte mindestens 6 Zeichen lang sein!'
  }

  if (values.passwordcheck && values.passwordcheck !== values.password) {
    errors.passwordcheck = 'Deine Passwörter sind nicht identisch.'
  }

  return errors
}
