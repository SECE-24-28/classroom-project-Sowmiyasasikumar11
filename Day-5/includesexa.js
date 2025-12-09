let empolyee=[{ena:"Arun",mob:111},
              {ena:"Ajay",mob:112},
              {ena:"Bala",mob:113},
              {ena:"Bharath",mob:221},
              {ena:"Chandru",mob:212},
              {ena:"Dinesh",mob:213}
]
let newEmp=empolyee.filter((emp)=>
{
    return emp.ena.includes("A")
})
console.log(newEmp)