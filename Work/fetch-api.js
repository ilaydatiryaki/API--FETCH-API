// The Fetch API interface allows web browser to make HTTP requests to web servers.
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

fetch("data/settings.json").then( 
    //extracting data from JSON file
    response => response.json()
).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
})

let userListDOM = document.querySelector("#userList")

//pulled data via API
fetch("http://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(item => {
        let liDOM = document.createElement('li')
        liDOM.innerHTML = item.title
        userListDOM.appendChild(liDOM)
    })
})


