const baseUrl = process.env.REACT_APP_BASE_URL;

const addTaskHelper = async (name) => {
  const res = await fetch(baseUrl,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, isComplete: false }),
    })
  const task = await res.json()
  return console.log('agregando task', task);
}


export default {
  addTaskHelper
}
