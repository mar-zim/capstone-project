export default function validateAddProduct(values) {
  let errors = {}

  if (values.name && values.name.length < 3) {
    errors.name = 'Der Titel sollte etwas länger sein.'
  } else if (values.name && values.name.length > 20) {
    errors.name = 'Bitte wähle einen etwas kürzeren Titel.'
  }

  if (values.description && values.description.length < 3) {
    errors.description = 'Die Beschreibung sollte etwas länger sein.'
  } else if (values.description && values.description.length > 500) {
    errors.description = 'Das war jetzt etwas zu lang.'
  }

  if (values.dailyRate && !/^\d{1,4}$/.test(values.dailyRate)) {
    errors.dailyRate =
      'Bitte gib einen gültigen Betrag in ganzen € Schritten ein!'
  }

  if (values.weeklyRate && !/^\d{1,4}$/.test(values.weeklyRate)) {
    errors.weeklyRate =
      'Bitte gib einen gültigen Betrag in ganzen € Schritten ein!'
  }

  if (values.phone && !/^\d{4,15}$/.test(values.phone)) {
    errors.phone = 'Bitte gib eine gültige Telefon-Nummer ohne Leerzeichen ein!'
  }

  if (values.location && values.location.length < 2) {
    errors.location = 'Etwas länger sollte es gerne sein.'
  } else if (values.location && values.location.length > 30) {
    errors.location = 'So einen langen Stadtteil gibt es doch gar nicht.'
  }

  if (values.ownerNotes && values.ownerNotes.length < 3) {
    errors.ownerNotes =
      'Die Beschreibung zu deiner Erreichbarkeit sollte etwas länger sein.'
  } else if (values.ownerNotes && values.ownerNotes.length > 500) {
    errors.ownerNotes = 'Das war jetzt etwas zu lang.'
  }

  return errors
}
