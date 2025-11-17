fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        return res.json(); // Return the promise from res.json()
    })
    .then((data) => console.log(data)) // Now this will receive the parsed JSON data
    .catch((err) => console.log(err)); // Catch any errors