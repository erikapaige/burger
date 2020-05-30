// WORKING APP.JS
// check connected to handlebars
// console.log('test')


// make addBurger button clickable
document.getElementById('addBurger').addEventListener('click', event => {
  event.preventDefault()
  // use console.log check to see if evenListener is working
  // console.log('test')

  // add POST axios request to add user's input to database
  axios.post('/api/burgers', {
    // pass database an object, from user's input
    burger_name: document.getElementById('burger_name').value,
    devoured: false
  })
    // update the burger list on page to reflect added burger
    .then(({ data }) => {
      let burgerElem = document.createElement('li')
      // set text content to be burger typed into the input
      burgerElem.innerHTML = `
      ${document.getElementById('burger_name').value}
      <button class="devour" data-id="${data.insertId}">Devour</button>
      `
      //append input onto burger list
      document.getElementById('devour').append(burgerElem)
    })
    .catch(err => console.error(err))
})


// click devoured button
// addEventListener('click', event => {
//   // filter the event object
//   // if click event equal to devour THEN do PUT
//   if (event.target.className === 'devour') {
//     // PUT only happens if click event is equal to devour button, matched to it's id
//     axios.put(`/api/burgers/${event.target.dataset.id}`, { devoured: true })
//       .then(({ data }) => {
//         // check data
//         // console.log(data)
//         // //grab targets parentNode
//         // event.target.parentNode.innerHTML=''
//         // let devourBurgElem = document.createElement('li')
//         // devourBurgElem.innerHTML = `${event.target.value}`
//         // //append devoured 
//         // document.getElementById('devoured').append(devourBurgElem)
//       })
//       .catch(err => console.log(err))
//   }
// })


// add event listener to 'devour button'
  //create a variable set to data.id from button
  // create a variable equal to 1 (or true)
  // on click use PUT axios 
  // append to other list
  // once devoured button is clicked and set to true, reload burger db
  // all items set to true go on right side, all items set to false stay on left
document.getElementById('devourButton').addEventListener('click', event => {
  let getId = data.id
  let id = 1
  axios.put(/)
})
})


ALTERNATIVE OPTIONS for solving
// do filter array
  // loops through array for objects set to not devour
  // put it on the unordered list "notDevoured"

// do an array that filters
  // keep ones that are devoured