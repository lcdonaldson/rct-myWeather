const d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export const day = days[d.getDay()]
export const month = months[d.getMonth()]
export const date = d.getDate()

export const formatToF = (k) => {
    let temp = k.main.temp;
    let far = (temp - 273.15) * 1.8 + 32;
    console.log(far)
}