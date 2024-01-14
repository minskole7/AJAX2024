// function additionA(){
//     console.log("Hello A")
// }

// function additionB(){
//     console.log("Hello B")
// }

// additionA()
// additionB()


// function additionD(){
//     setTimeout(function(){
//         console.log("Time in")
//     },2000)
// }

// function additonE(){
//     console.log("E is called")
// }

// additionD()
// additonE()



// function getInfo(){

//     setTimeout(function(){
//         console.log("user created")
//     },3000)

//     setTimeout(function(){
//         console.log("get id")
//     },2000)

//     setTimeout(function(){
//         console.log("get info")
//     },1000)

// }
// getInfo()




function getInfo(){
    setTimeout(function(){
        console.log("user created")
        setTimeout(function(){
            console.log("get id")
            setTimeout(function(){
                console.log("get info")
            },1000)
        },2000)
    
    },3000)
}
//getInfo()


let pro = new Promise(function(resolve,reject){
    let a = 10 
    let b = 10

    if(a == b){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })



// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute")
// })

// pro
// .then(function(str){
//     console.log(str)
//     return "hello"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute")
// })


// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//         setTimeout(function(){
//             console.log("get info")
//             setTimeout(function(){
//                 console.log("get id")
//             },1000)
//         },2000)
//     },3000)
// }
// getInfo()


function userCreated(){
    let pro = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },3000)
    })
    return pro
}

function userId(){
    let pro = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get Id")
        },2000)
    })
    return pro
}
function getInfo(){
    let pro = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get Info")
        },1000)
    })
    return pro
}

// userCreated()
// userId()
// getInfo()


// userCreated()
// .then(function(str){
//     console.log(str)
//     return userId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(){
//     console.log("error occured")
// })
// .finally(function(){
//     console.log("I will always execute")
// })

// async await 

// async function getUserInformation(){
//     let one = await userCreated()
//     console.log(one)
//     let two = await userId()
//     console.log(two)
//     let three = await getInfo()
//     console.log(three)
// }
// getUserInformation()

