export const addNewMessage = (msg) => {
  console.log('adding message!', msg);
  return {
    type: 'addMessage',
    msg
  }
}
