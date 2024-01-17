async function getInfo(id) {
    const response = await fetch(`https://reqres.in/api/${id}`);
    //console.log(response)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
};


function getTimer(s){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('hello')
        },s)
    })
}

async function getResolved(){
    let user = await Promise.any([
    Promise.reject("bye"),
    getTimer(1),
    getInfo(1), 
    ])
    console.log(user)
}
getResolved()



// Promise.any([
//     Promise.reject("bye"),
//     getTimer(10000),
//     getInfo(1),    
// ])
// .then(function(res){
//     console.log(res)
// })

// async function allValues(){
//     let q1 = await Promise.allSettled([
//         getTimer(1),
//         getInfo(1),
//         Promise.reject("bye")
//     ])
//     console.log(q1)
// }
// allValues()

// Promise.allSettled([
//     getTimer(1),
//     getInfo(1),
//     Promise.reject("bye")
// ])
// .then(function(response){
//     console.log(response)
// })



// Promise.race([
//     getInfo(1),
//     getTimer()
// ])
// .then(function(response){
//     console.log(response)
// })
// .catch(function(str){
//     console.log(str)
// })

// async function getResult(){
//     try{
//         let i = await Promise.race([
//             getInfo(1),
//             getTimer(1)
//         ])
    
//         console.log(i)
//     }
//     catch {
//         console.log("error found")
//     }
    
    

// }
// getResult()







// Promise.all([
//     getInfo(1),
//     getInfo(28888),
//     getInfo(3)
// ])
// .then(function(response){
//     console.log(response)
// })
// .catch(function(str){
//     console.log(str)
// })

// async function getUser(){
//     try {
//         let users = await Promise.all([
//             getInfo(1),
//             getInfo(288),
//             getInfo(3)
//         ])
//         console.log(users)
//     }
//     catch {
//         console.log("Error occured")
//     }
// }
// getUser()


// Program 2









