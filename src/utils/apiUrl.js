const nodeEnv = process.env.NODE_ENV

export const apiUrl = ['dev', 'dev '].includes(nodeEnv)
  ? 'http://localhost:3000'
  : 'https://hp-database-gonet.herokuapp.com'
