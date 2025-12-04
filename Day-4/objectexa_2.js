
let student={sna:"Praveen",age:19,demo:function(){
    console.log("Hello Everyone "+this.sna) //Praveen
}}
student.demo()
//------------------------------------------
let student2={sna:"parbu",age:20,samp:()=>{
    console.log("Hello Everyone "+student2.sna)  //fixed arrow function context
}}
student2.samp()