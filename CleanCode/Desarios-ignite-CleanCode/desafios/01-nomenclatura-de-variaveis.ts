// Nomenclatura de variáveis

const list = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getDataByNumberOfFollowers(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const users = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (users.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  //Significa que estamos transformando a resposta da requisição em um formato JSON para poder manipular os dados de forma mais fácil.
  const responseUsers = await users.json()

  const orderList = list.sort((title, follower) =>  follower.followers - title.followers); 

  const category = orderList.find(i => responseUsers.followers > i.followers)

  const result = {
    githubUsername,
    category: category.title
  }

  return result
}

getDataByNumberOfFollowers({ query: {
  username: 'josepholiveira'
}}, {})