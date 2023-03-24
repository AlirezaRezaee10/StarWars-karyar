export function saveData(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data))
}

export function getSavedData(key) {
  const data = window.localStorage.getItem(key)
  if (data !== null)
    return data
  return 0
}

export function removeSavedData(key) {
  window.localStorage.removeItem(key)
}