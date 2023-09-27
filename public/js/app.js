console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const celcius = document.querySelector('#celcius')
const farenheit = document.querySelector('#farenheit')


// let url = https://api.openweathermap.org/data/2.5/weather?lat=latitude&lon=${longitude}&appid=1dd95465ce6f4060ef8c3b1e0bdc57bf&units=metric

 let selectedUnit = 'imperial'

 const fetchTEmperature = (location, selectedUnit) =>{
    const url = `http://localhost:3000/weather?address=${location}&units=${selectedUnit}`
    console.log({location})
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
   
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
 }

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    console.log({location})

    // messageOne.textContent = 'Loading...'
    // messageTwo.textContent = ''

    // fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    //     response.json().then((data) => {
    //         if (data.error) {
    //             messageOne.textContent = data.error
    //         } else {
    //             messageOne.textContent = data.location
    //             messageTwo.textContent = data.forecast
    //         }
    //     })
    // })

    fetchTEmperature(location, selectedUnit)
})
celcius.addEventListener('click', ()=>{
    const location = search.value
  selectedUnit = 'metric'
    fetchTEmperature(location, selectedUnit)}
  )

farenheit.addEventListener('click', ()=>{
    const location = search.value
    selectedUnit = 'imperial'
    
        fetchTEmperature(location, selectedUnit)
})