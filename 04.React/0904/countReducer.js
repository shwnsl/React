function countReducer(state, action) {
    switch (action.type) {
      case 'increment':
        return action.icon;
      case 'decrement':
        return action.icon;        
      default:
        return state;
    }
  }

export default countReducer;