/*Dark Mode Javascript Starts*/
function changeMode() {
    var mybody = document.body;
    mybody.classList.toggle("mydark")
}
/*Dark Mode Javascript Ends*/
/* Weather Javascript Starts */

var x = document.getElementById("out")
var y = document.getElementById("address")
var z = document.getElementById('icon')

function geolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        x.innerText = "Geo Not Supported"
    }
}

function showPosition(data) {
    console.log(data)
    let lat = data.coords.latitude;
    let long = data.coords.longitude
    var url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            data.list.map((item) => {
                console.log(item.temp.day)
                y.innerText = `${item.temp.day}°C`
                z.innerHTML = `<img class='card-img-top' src='https://openweathermap.org/img/w/${item.weather[0].icon}.png' alt='weather'/>`
            })

        })
}
/* Weather Javascript Ends */

function mice() {
    document.getElementById('card').style.transform = "scale(1.1)"
}
function mice1() {
    document.getElementById('card').style.transform = "none"
}
function mice2() {
    document.getElementById('card1').style.transform = "scale(1.1)"
}
function mice3() {
    document.getElementById('card1').style.transform = "none"
}
function mice4() {
    document.getElementById('card2').style.transform = "scale(1.1)"
}
function mice5() {
    document.getElementById('card2').style.transform = "none"
}
function mice6() {
    document.getElementById('card3').style.transform = "scale(1.1)"
}
function mice7() {
    document.getElementById('card3').style.transform = "none"
}
function mice8() {
    document.getElementById('card4').style.transform = "scale(1.1)"
}
function mice9() {
    document.getElementById('card4').style.transform = "none"
}
function mice10() {
    document.getElementById('card5').style.transform = "scale(1.1)"
}
function mice11() {
    document.getElementById('card5').style.transform = "none"
}
function test() {
    document.getElementById('myModal').style.visibility = "visible"
}
function closeDiv() {
    document.getElementById('myModal').style.visibility = "hidden"
};


$(document).ready(function () {
    $("#myModal").modal('show');
});

let url = "http://localhost:1255/Products";


function getProduct() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            for (i = 0; i < data.length; i++) {
                let element = document.createElement('Option')
                let text = document.createTextNode(data[i].name)
                element.appendChild(text)
                element.value = data[i].id
                document.getElementById('product').appendChild(element)

            }
        })
}

// const productList = "http://localhost:1255/Products";


const productList = () => {
    const product_name = document.getElementById('product').value;
    while (list.length > 0) {
        list.remove(0)
    }
    fetch(`${productList}${product_name}`)
        .then((res) => res.json())
        .then((data) => {
            for (i = 0; i < data.length; i++) {
                let element = document.createElement('option')
                let text = document.createTextNode(data[i].product)
                element.appendChild(text)
                document.getElementById('list').appendChild(element)
            }
        })
}
