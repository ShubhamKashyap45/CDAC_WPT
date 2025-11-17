// Arrow functions (since JS6)
// 1. No Parameter with 1step

const square = n=> n**2;



// 	Syn:		() => statement		    
// 				refvar = () => statement

const add = (a,b)=>a+b;


// 2. No Parameter with no.of steps
// 	Syn:		() => { statements }
  
const sub=(a,b)=>{
   return a-b;
}

// 3. 1 Parameter with 1 step
// 	Syn:		param => statement
  const a = a=> a+2;

// 4. 1 Parameter with no.of steps
// 	Syn:		param => {statements }

const num = n=>{
    console.log(n);
    document.write(n);
}

// 5. No.of Parameter with 1step
// 	Syn:		(params) => statement

const mul = (a,b,c)=> a*b*c;

// 6. No.of Parameter with no.of steps
// 	Syn:		(params) => { statements }  

const div= (num1,num2)=>{
    console.log(num1,num2);
    return num1/num2;
}