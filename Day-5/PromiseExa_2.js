const res=fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>
        {
            return res.json()
            //console.log(data.json())
        }
    ).then(user=>
    {
        console.log(user)
    })
console.log(res)


/*function demo()
{
    return "India";
}
let x=demo()*/