var localStorageMock = (function () {
  var store = {'Contacts': '[{"id":1502979880283,"firstName":"Mario","lastName":"Nunes","email":"mnunes@fff.com","country":"Portugal"}]'}
  return {
    getItem: function (key) {
      return store[key]
    },
    setItem: function (key, value) {
      store[key] = value.toString()
    },
    clear: function () {
      store = {}
    },
    removeItem: function (key) {
      delete store[key]
    }
  }
})()
Object.defineProperty(window, 'localStorage', { value: localStorageMock })
