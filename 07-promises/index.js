// let somePromise = Promise.resolve('Foo')

// somePromise
//   .then(res => console.log(res))
//     .catch(err => console.log(err))


// let ourPromise = new Promise((resolve, reject) => {
//   let isTrue = true;

//   if(isTrue) {
//     setTimeout(() => {
//       resolve(4);
//     }, 2000);
//   } else {
//     reject('error');
//   }
// });

// ourPromise
//   .then(res => {
//     res += 3;
//     console.log(res);
//   })
//     .catch(err => console.log(err));

// Fetch data from json placeholder with Promise

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(todos => todos.json())
    .then(todos => {
      let output = '';
      for(let todo of todos) {
        document.getElementById('todos').innerHTML = output += `<li>${todo.title}</li>`
      }
    })
      .catch(err => console.log(err));