console.log('Client side javascript file is chungus')

fetch('http://localhost:3000/weather?address=!').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            return console.log(data.error)
        }
        console.log(data.location)
        console.log(data.forecast)
    })
})