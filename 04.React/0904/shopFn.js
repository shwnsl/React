function shopFn(price, action) {
    switch (action.type) {
      case 'hamburger':
        return action.price;
      case 'fried':
        return action.price;
      case 'cola':
        return action.price;        
      default:
        return price;
    }
  }

export default shopFn;