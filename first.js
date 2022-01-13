
function changeMode() {
    var mybody = document.body;
    mybody.classList.toggle("mydark")
}


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



function getProduct(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('Option')
            let text = document.createTextNode(data[i].name)
            element.appendChild(text)
            element.value = data[i].id
            document.getElementById('product').appendChild(element)

        }
    })
}

// const getHotel = () => {
//     const cityId = document.getElementById('city').value;
//     while(hotels.length>0){
//         hotels.remove(0)
//     }
//     fetch(`${hotelUrl}${cityId}`)
//     .then((res) => res.json())
//     .then((data) => {
//         for(i=0;i<data.length;i++){
//             let element = document.createElement('option')
//             let text = document.createTextNode(`${data[i].name} | ${data[i].city_name}`)
//             element.appendChild(text)
//             document.getElementById('hotels').appendChild(element)
//         }
//     })
// }

let productList = () => {
    let productId = document.getElementById('list').value;
    while(list.length>0){
        list.remove(0)
    }
    fetch(`${url}${productId}`)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')
            let text = document.createTextNode(data[i].product_name)
            element.appendChild(text)
            document.getElementById('list').appendChild(element)
        }
    })
}
