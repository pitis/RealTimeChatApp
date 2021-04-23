const users = []

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase()
  room = room.trim().toLowerCase()

  const existingUser = users.find(
    user => user.room === room && user.name === name
  )

  if (existingUser) {
    return { error: 'Username is taken' }
  } else {
    user = { id, name, room }
    users.push(user)
    return { user }
  }
}

const removeUser = id => {
  const user = users.findIndex(user => user.id === id)

  if (user !== -1) return users.splice(user, 1)[0]
}

const getUser = id => users.find(user => user.id === id)

const getUsersInRoom = room => users.filter(user => user.room === room)

module.exports = { addUser, removeUser, getUser, getUsersInRoom }
