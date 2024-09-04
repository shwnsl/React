function moneyFn(state, action) {
    switch (action.type) {
      case 'get':
        return state - action.price;
      case 'send':
        return state + action.price;     
      default:
        return state;
    }
  }

export default moneyFn;