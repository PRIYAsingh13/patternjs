// ------1-----

// let num = 5;
// for(let i=1;i<=num; i++){
//     for(let j=1; j<=5;j++){
//         console.log('*')
//     }
// }

// ------2-------

// let num = 5;
// for(let i=1;i<=num; i++){
//     let stars =''
//     for(let j=1; j<=i;j++){
//         stars +='*'
//     }
//         console.log(stars)
//     }

// -----3-----

let num =5;

for(let i=1; i<=num;i++){
    let stars =''
    for(let j=1; j<=i;j++){
        if(i % 2 == 0){
            stars += 0
        }
        else{
            stars += 1
    }
}
console.log(stars)
}
