function loadusers() {
    const res=fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>
    {
        return res.json()
    }
    ).then(users=>
    {
        console.log(users)
        users.forEach(user => {
            console.log(`${user.name} - ${user.address.city} - ${user.email}`)
        })
    })
    console.log(res)
}

loadusers()