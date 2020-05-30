// check connected to handlebars
// console.log('test')

//interact with form from hbs

// make button clickable
document.getElementById('addBurger').addEventListener('click', event =>{
  event.preventDefault()
  // use console.log check to see if evenListener is working
  // console.log('test')

  // add POST axios request to add user's input to database
  axios.post('/api/burgers', {
    //pass it an object, from user's input
    burger_name: document.getElementById('burger_name').value
    // devoured: document.getElementById
  })
    // update the burger list on page to reflect added burger
    .then(({ data }) =>{
      let burgerElem = document.createElement('li')
      // set text content to be burger typed into the input
      burgerElem.innerHTML = `
      ${document.getElementById('burger_name').value}
      <button class="devour" data-id="${data.insertId}">Devour</button>
      `
      //append input onto burger list
      document.getElementById('userBurgerName').append(burgerElem)
    })
    .catch(err => console.error(err)) 
})