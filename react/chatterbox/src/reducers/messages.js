const initialState = ['message1', 'message2', 'message3'];

export default(state = initialState, payload) => {
  switch(payload.type){
    case 'addMessage':
      return [...state, payload.msg]

    default:
      return state;
  }
}
