function showContext() {
  console.log(this);
}

const user = {
  name: "John",
  age: 30,
};

// showContext() - output error

const bindUser = showContext.bind(user);

bindUser(); // { name: 'John', age: 30 }
