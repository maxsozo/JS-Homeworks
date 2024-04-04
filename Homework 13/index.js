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
        checkBox.textContent = open ? "сховати" : "показати";
        parent.appendChild(checkBox);
    
        input.addEventListener("input", () => {
            if (typeof this.onChange === "function") {
                this.onChange(input.value);
            }
        });
    
        checkBox.addEventListener("click", () => {
            open = !open;
            input.type = open ? "text" : "password";
            checkBox.textContent = open ? "сховати" : "показати";
    
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
            checkBox.textContent = open ? "сховати" : "показати";
    
            if (typeof this.onOpenChange === "function") {
                this.onOpenChange(open);
            }
        };
    
        this.getOpen = function() {
            return open;
        };
      }

  const loginForm = document.createElement("form");
  document.body.appendChild(loginForm);

  const usernameInput = new Password(loginForm, false); 
  const passwordInput = new Password(loginForm, true); 

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  loginForm.appendChild(submitButton);


  function checkInputs() {
      const username = usernameInput.getValue();
      const password = passwordInput.getValue();
      submitButton.disabled = !(username && password);
  }

  usernameInput.onChange = checkInputs;
  passwordInput.onChange = checkInputs;

  checkInputs();

  loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); 
      const username = usernameInput.getValue();
      const password = passwordInput.getValue();
      console.log("Username:", username);
      console.log("Password:", password);
  });
}

{
    
function LoginForm(parent) {
  const form = document.createElement("form");
  parent.appendChild(form);

  this.usernameInput = new Password(form, false, 'user name');
  this.passwordInput = new Password(form, false, 'password');

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);

  let onChangeCallback = null;

  const checkInputs = () => {
      const username = this.usernameInput.getValue();
      const password = this.passwordInput.getValue();
      submitButton.disabled = !(username && password);
      if (onChangeCallback) {
          onChangeCallback(username, password);
      }
  };

  this.usernameInput.onChange = checkInputs;
  this.passwordInput.onChange = checkInputs;

  checkInputs();

  this.setSubmitCallback = function(callback) {
      onChangeCallback = callback;
  };

  this.getUsername = function() {
      return this.usernameInput.getValue();
  };

  this.getPassword = function() {
      return this.passwordInput.getValue();
  };

  form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (onChangeCallback) {
          onChangeCallback(this.usernameInput.getValue(), this.passwordInput.getValue());
      }
  }.bind(this));
}

function Password(parent, open, placeholder) {
  const input = document.createElement("input");
  input.placeholder = placeholder;
  input.type = open ? "text" : "password";
  parent.appendChild(input);

  const toggleButton = document.createElement("button");
  toggleButton.textContent = open ? `сховати ${placeholder}` : `показати ${placeholder}`;
  parent.appendChild(toggleButton);

  let onOpenChangeCallback = null;

  input.addEventListener("input", () => {
      if (typeof this.onChange === "function") {
          this.onChange(input.value);
      }
  });

  toggleButton.addEventListener("click", () => {
      open = !open;
      input.type = open ? "text" : "password";
      
      toggleButton.textContent = open ? `сховати  ${placeholder}` : `показати ${placeholder}`;

      if (typeof this.onOpenChange === "function") {
          this.onOpenChange(open);
      }
      if (onOpenChangeCallback) {
          onOpenChangeCallback(open);
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
      toggleButton.textContent = open ? "сховати" : "показати";

      if (typeof this.onOpenChange === "function") {
          this.onOpenChange(open);
      }
      if (onOpenChangeCallback) {
          onOpenChangeCallback(open);
      }
  };

  this.getOpen = function() {
      return open;
  };

  this.setOnOpenChange = function(callback) {
      onOpenChangeCallback = callback;
  };

  this.getInput = function() {
      return input;
  };
}

const loginForm = new LoginForm(document.body);
}