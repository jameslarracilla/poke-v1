const users = [
  {
    id: '123',
    name: 'jose',
    lastname: 'Larracilla',
    username: 'joselar',
    password: 'password123',
    email: 'jose@larracilla',
  },
];

module.exports = (req, res) => {
  const { password, email } = req.body;
  const userFound = users.filter(
    (user) => user.email === email && user.password === password
  )[0];

  if (userFound) {
    const { password, email, ...rest } = userFound;
    const userToSend = rest;
    return res.status(200).json(userToSend);
  }

  return res.status(200).json({
    id: 'zzzz',
    name: 'Anónimo',
    lastname: 'Incógnito',
    username: 'Oculto',
  });
};
