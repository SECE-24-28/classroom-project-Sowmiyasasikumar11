let mob={brand:"Apple",model:"Iphone 14",color:"Black",price:80000}

mob.price=45000
console.log(mob)

console.log(mob.color)
console.log(mob["brand"])

delete mob.brand
console.log(mob)

delete mob["color"]
console.log(mob)