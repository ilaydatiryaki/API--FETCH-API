# FETCH-API

What we can do with the Fetch API is to process data after it comes from a server. So what does this mean? Let's say you go somewhere and you order. If we wait at the counter after the person at the counter takes the order, we will prevent the next person from placing their order. Perhaps the next person's order could have been prepared much faster. In this case, we should not forget that when do we want to go and buy the products we ordered? After our order is prepared, of course. Here we actually use one of the new concepts, Promise.

#### Fetch Interfaces

*fetch(), this method is used to get a resource.

*Headers, represent response/request headers, allowing you to query them and take different actions depending on the results.

*Request, represents a resource request.

*Response, represents the response to a request.

#### Basic Fetch Usage

In order to use the Fetch API, it is necessary to give the url to which we will request the fetch method as a parameter.

```
fetch(url);
```

After the fetch() method, we add the then() promise method at the end of the method:

```
.then(function() {
})
```

For example, let's make a get request to the address “https://jsonplaceholder.typicode.com/todos”.

```
//// GET İsteği
fetch("https://jsonplaceholder.typicode.com/todos")
	.then((response) => response.json()) //parse json data
	.then(function (todos) {
		todos.forEach((todo) => {
			console.log(todo.title); //Başlıkları console' a yazdırma
		});
	});
  ```
  
Making a POST Request

  ```
//POST isteği ile verimizi servera gönderelim
let payload = {
    title: "Blog Title",
    body: "lorem ipsum",
    userId:1
  }
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));
  ```

The structure of fetch().then().then().catch() step by step:
 
![photo](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/fetch-api-ile-calismak/figures/fetch-diagram.jpg)
 
So how does this code block work? Let's take a look at it step by step:
 
```
fetch("https://jsonplaceholder.typicode.com/todos");
```

When we make a fetch request, it calls the then function.
  
```
.then((response) => response.json())
```
  
If everything goes well, the incoming data comes to us as a response in then. And we take the response as a parameter, we use the .json() method to get the json content.
 
```
 .then(function(todos){
    todos.forEach(todo => {
        console.log(todo.title);//Başlıkları console' a yazdırma
    });
})
```
  
This time inside the then() method, we wrote a function that will take the result from the previous method and display it in the console. This function takes a parameter named todos and we get the todos.title value from each todos with the help of the forEach method and print it to the console.

```
.catch((err) => console.log(err))
```
  
And finally, if an error occurs at any stage with the catch() method, we take this error as a parameter and print it to the console.
 
[source](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and 
[docs](https://www.w3schools.com/js/js_api_fetch.asp)
  
  
  

  
  


  
  
  
  
  
