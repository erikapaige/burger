// WORKING APP.JS
// check connected to handlebars
// console.log('test')

//interact with form from hbs

// make button clickable
document.getElementById('addBurger').addEventListener('click', event => {
  event.preventDefault()
  // use console.log check to see if evenListener is working
  // console.log('test')

  // add POST axios request to add user's input to database
  axios.post('/api/burgers', {
    //pass it an object, from user's input
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
addEventListener('click', event => {
  //class is taken from button class name
  if (event.target.className === 'devour') {
    axios.put(`/api/burgers/${event.target.dataset.id}`, { devoured: true })
      .then(({ data }) => {
        // console.log(data)
        const devElem = document.createElement('li')
        devElem.innerHTML = `${event.target.value}`
        document.getElementById('devoured').append(devElem)
      })
      .catch(err => console.log(err))
  }
})

// do filter array
  // loops through array for objects set to not devour
  // put it on the unordered list "notDevoured"

// do an array that filters
  // keep ones that are devoured

//make a new var that is an array, 1 that loops though is devoured adds to new array
//not devoured adds to another array 
