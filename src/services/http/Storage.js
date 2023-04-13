export function saveData(key, data) {
  const value = JSON.stringify(data)
  const item = {
    data : value,
    expiry: new Date().getTime() + 1200000
  }
  window.localStorage.setItem(key, JSON.stringify(item))
}

export function getSavedData(key) {
  const now = new Date().getTime()
  const strData = window.localStorage.getItem(key)
  if (!strData)
    return null
  const item = JSON.parse(strData)
  if (now > item.expiry){
    return null
  }
  return item.data
}