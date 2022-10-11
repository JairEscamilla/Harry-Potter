export const apiUrl =
  process.env.NODE_ENV === 'dev '
    ? 'http://localhost:3000'
    : 'https://hp-database-gonet.herokuapp.com'
