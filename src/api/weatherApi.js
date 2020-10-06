// Api calls to open weather api's will go here

export const weatherApi = () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?zip=85552,us&appid=3a5bf1eb2a22106bac2d6d95c02695fb", {
            "method": "GET"
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
}


