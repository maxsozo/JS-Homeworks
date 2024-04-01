let state = {
    cash: 1000,
    kiosk: {
      beer: { quantity: 100, price: 20 },
      chips: { quantity: 50, price: 15 },
      cigarettes: { quantity: 30, price: 25 }
    }
  };

  const subscribers = [];

  const subscribe = (subscriber) => {
    subscribers.push(subscriber);
  };

  const notifySubscribers = () => {
    subscribers.forEach(subscriber => subscriber());
  };

  const getState = () => state;

  const buyItem = (item, quantity, money) => {
    const itemPrice = state.kiosk[item].price;
    const cost = itemPrice * quantity;
    if (state.kiosk[item].quantity >= quantity && cost <= money) {
      state = {
        ...state,
        cash: state.cash + cost,
        kiosk: {
          ...state.kiosk,
          [item]: {
            ...state.kiosk[item],
            quantity: state.kiosk[item].quantity - quantity
          }
        }
      };
      notifySubscribers();
    }
  };

  const displayKioskState = () => {
    kiosk.innerHTML = '';
    Object.entries(getState().kiosk).forEach(([item, details]) => {
      const itemElement = document.createElement('div');
      itemElement.innerText = `${item}: ${details.quantity}шт. ${details.price} грн`;
      kiosk.appendChild(itemElement);
    });
    
    kioskInfo.innerText = `Кількість товару: Пивандр: ${getState().kiosk.beer.quantity}, Чіпсони: ${getState().kiosk.chips.quantity}, Сіги: ${getState().kiosk.cigarettes.quantity}`;
    
    document.title = `Каса: ${getState().cash} грн`;
  };

  buy.addEventListener('click', () => {
    const item = document.getElementById('item').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const money = parseInt(document.getElementById('money').value);
    buyItem(item, quantity, money);
  });

  subscribe(displayKioskState);
  displayKioskState();