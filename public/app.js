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
    devoured: 0
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

// add event listener to 'devour button'
//   create a variable equal to 1 (or true)
//   on click use PUT axios 
//   append to other list
//   once devoured button is clicked and set to true, reload burger db
//   all items set to true go on right side (ul, "devoured"), all items set to false stay on left ("notDevoured")
document.getElementById('devourButton').addEventListener('click', event => {
  // console.log('test')
  //gab burger by primary id
  axios.put(`/api/burgers/$:id`, {
    //set state to true
    devoured: true
    .then(({ data }) => {
      // console.log data to check, not rendering anything
      // console.log(data)
      // append data to ul with id devoured
      let eatElem = document.createElement('li')
      // set innerHTML equal to test content of burger name
      eatElem.innerHTML = `
       ${document.getElementById('burger_name').value}
      `
      document.getElementById('devoured').append(eatElem)

    })
    .cath(err => console.error(err))
  })
})

//ALTERNATIVE LOGIC OPTIONS for solving
// do filter array
  // loops through array for objects set to not devour
  // put it on the unordered list "notDevoured"

// do an array that filters
  // keep ones that are devoured