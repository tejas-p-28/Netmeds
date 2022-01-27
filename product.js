let url = "http://localhost:1255/healthcare";
function getSort() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            for (i = 0; i < data.length; i++) {
                let element = document.createElement('Option')
                let text = document.createTextNode(data[i].sort.type[i])
                element.appendChild(text)
                element.value = data[i].sort._id
                document.getElementById('sort').appendChild(element)

            }
        })
}