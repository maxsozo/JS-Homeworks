{
    function Person(name, surname) {

    this.name = name;
    this.surname = surname;
        this.getFullName = function() {
                if (this.fatherName) {
                    return `${this.name} ${this.fatherName} ${this.surname}`;
                } else {
                    return `${this.name} ${this.surname}`;
                }
        }
    }

    const a = new Person("Вася", "Пупкін")
    const b = new Person("Ганна", "Іванова")
    const c = new Person("Єлизавета", "Петрова")

    console.log(a.getFullName()) // Вася Пупкін
    a.fatherName = 'Іванович' 

    console.log(a.getFullName())// Вася Іванович Пупкін

    console.log(b.getFullName()) // Ганна Іванова
}

{
    function Person(name, surname) {

        this.name = name;
        this.surname = surname;
    }

    Person.prototype.getFullName = function() {
        if (this.fatherName) {
            return `${this.name} ${this.fatherName} ${this.surname}`;
            } else {
                return `${this.name} ${this.surname}`;
              }
    }
    
        const a = new Person("Вася", "Пупкін")
        const b = new Person("Ганна", "Іванова")
        const c = new Person("Єлизавета", "Петрова")
    
        console.log(a.getFullName()) // Вася Пупкін
        a.fatherName = 'Іванович' 
    
        console.log(a.getFullName())// Вася Іванович Пупкін
    
        console.log(b.getFullName()) // Ганна Іванова
}

{
    function createStore(reducer) {
      function Store() {
        let state = reducer(undefined, {});
        let subscribers = [];
      
        this.getState = function() {
        return state;
        } 
        this.subscribe = function(cb) {
          subscribers.push(cb);
          return () => (subscribers = subscribers.filter((c) => c !== cb));
        };
      
        this.dispatch = function(action) {
          const newState = reducer(state, action);
          if (newState !== state) {
            state = newState;
            for (let cb of subscribers) cb();
          }
        };
      }
        return new Store();
    }
      
      const initialState = {
        cash: 1000,
        kiosk: {
          beer: { quantity: 100, price: 20 },
          chips: { quantity: 50, price: 15 },
          cigarettes: { quantity: 30, price: 25 },
        },
      };
      
      const reducer = (state = initialState, action) => {
        switch (action.type) {
          case "BUY_ITEM":
            const { item, quantity, cost } = action.payload;
            return {
              ...state,
              cash: state.cash + cost,
              kiosk: {
                ...state.kiosk,
                [item]: {
                  ...state.kiosk[item],
                  quantity: state.kiosk[item].quantity - quantity,
                },
              },
            };
          default:
            return state;
        }
      };
      
      const store = createStore(reducer);
      
      const buyItem = (item, quantity, money) => {
        const currentState = store.getState();
        const selectedProduct = currentState.kiosk[item];
        if (selectedProduct && selectedProduct.quantity >= quantity) {
          const itemPrice = selectedProduct.price;
          const cost = itemPrice * quantity;
          if (cost <= money) {
            store.dispatch({
              type: "BUY_ITEM",
              payload: {
                item,
                quantity,
                cost
              }
            });
          }
        } else {
          console.log(`Товар ${item} відсутній у баби Зіни.`);
        }
      };
      
      const displayKioskState = () => {
        const state = store.getState();
        kiosk.innerHTML = "";
        Object.entries(state.kiosk).forEach(([item, details]) => {
          const itemElement = document.createElement("div");
          itemElement.innerText = `${item}: ${details.quantity}шт. ${details.price} грн`;
          kiosk.appendChild(itemElement);
        });
      
        kioskInfo.innerText = `Кількість товару: Пивандр: ${
          state.kiosk.beer.quantity
        }, Чіпсони: ${state.kiosk.chips.quantity}, Сіги: ${
          state.kiosk.cigarettes.quantity
        }`;
      
        document.title = `Каса: ${state.cash} грн`;
      };
      
      buy.addEventListener("click", () => {
        const item = document.getElementById("item").value;
        const quantity = parseInt(document.getElementById("quantity").value);
        const money = parseInt(document.getElementById("money").value);
        buyItem(item, quantity, money);
      });
      
      const unsubscribe = store.subscribe(displayKioskState);
      displayKioskState();
}

{
    function Password(parent, open) {
        const input = document.createElement("input");
        input.type = open ? "text" : "password";
        parent.appendChild(input);
    
        const checkBox = document.createElement("button");
        checkBox.textContent = open ? "сховати пароль" : "показати пароль";
        parent.appendChild(checkBox);
    
        input.addEventListener("input", () => {
            if (typeof this.onChange === "function") {
                this.onChange(input.value);
            }
        });
    
        checkBox.addEventListener("click", () => {
            open = !open;
            input.type = open ? "text" : "password";
            checkBox.textContent = open ? "сховати пароль" : "показати пароль";
    
            if (typeof this.onOpenChange === "function") {
                this.onOpenChange(open);
            }
        });
    
        this.setValue = function(value) {
            input.value = value;
        };
    
        this.getValue = function() {
            return input.value;
        };
    
        this.setOpen = function(newState) {
            open = newState;
            input.type = open ? "text" : "password";
            checkBox.textContent = open ? "сховати пароль" : "показати пароль";
    
            if (typeof this.onOpenChange === "function") {
                this.onOpenChange(open);
            }
        };
    
        this.getOpen = function() {
            return open;
        };
    }

    let p = new Password(document.body, true);
    
    p.onChange = data => console.log(data);
    p.onOpenChange = open => console.log(open); 
    
    p.setValue('qwerty');
    console.log(p.getValue());
    
    p.setOpen(false);
    console.log(p.getOpen());
}