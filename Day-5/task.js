function loadusers() {
    const res=fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>
    {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json()
    }
    ).then(users=>
    {
        // Validate data type and limit iterations for security
        if (!Array.isArray(users)) {
            console.error('Invalid data format received')
            return
        }
        
        const maxUsers = Math.min(users.length, 100) // Limit to 100 users max
        console.log(`Processing ${maxUsers} users`)
        
        for (let i = 0; i < maxUsers; i++) {
            const user = users[i]
            if (user && user.name && user.address && user.email) {
                console.log(`${user.name} - ${user.address.city} - ${user.email}`)
            }
        }
    })
    .catch(error => {
        console.error('Error fetching users:', error.message)
    })
}

loadusers()