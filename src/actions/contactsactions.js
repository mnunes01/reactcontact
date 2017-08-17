import dispatcher from '../dispatcher'

export function createContact (values) {
  dispatcher.dispatch({
    type: 'CREATE_CONTACT',
    values: {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      country: values.country
    }
  })
}

export function deleteContact (id) {
  dispatcher.dispatch({
    type: 'DELETE_CONTACT',
    id
  }
  )
}
export function saveContact (values) {
  dispatcher.dispatch({
    type: 'SAVE_CONTACT',
    values: {
      id: values.id,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      country: values.country
    }
  }
  )
}
