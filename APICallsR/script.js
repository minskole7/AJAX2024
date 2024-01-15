// // function getInfo() {
// //     setTimeout(function () {
// //         console.log("user created")
// //         setTimeout(function () {
// //             console.log("get id")

// //             setTimeout(function () {
// //                 console.log("get info")
// //             }, 1000)
// //         }, 2000)
// //     }, 3000)
// // }
// // getInfo()


// let pro = new Promise(function(resolve,reject){
//     let a = 10 
//     let b = 5
//     if(a == b){
//         resolve('hello')
//     }
//     else{
//         console.log("bye")
//     }
// })

// // pro. 
// // then(function(str){
// //     console.log(str)
// // },function(str){
// //     console.log(str)
// // })

// // pro. 
// // then(function(str){
// //     console.log(str)
// // })
// // .catch(function(str){
// //     console.log(str)
// // })

// // pro. 
// // then(function(str){
// //     console.log(str)
// // })
// // .catch(function(str){
// //     console.log(str)
// // })
// // .finally(function(){
// //     console.log("i will always")
// // })

// // pro. 
// // then(function(str){
// //     console.log(str)
// //     return 1
// // })
// // .then(function(a){
// //     console.log(a)
// // })
// // .catch(function(str){
// //     console.log(str)
// // })
// // .finally(function(){
// //     console.log("i will always")
// // })

// function userCreated(){
//     return Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("user created")
//         },3000)

//     })
// }

// function userId(){
//     return Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("get Id")
//         },2000)

//     })
// }

// function userInfo(){
//     return Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("get Info")
//         },1000)

//     })
// }

// async function getUserInfo(){
//     let a = await userCreated()
//     console.log(a)
//     let b = await userId()
//     console.log(b)
//     let c = await userId()
//     console.log(c)
// }
// getUserInfo()





// // userCreated()
// // .then(function(str){
// //     console.log(str)
// //     return userId()
// // })
// // .then(function(str){
// //     console.log(str)
// //     return userInfo()
// // })
// // .then(function(str){
// //     console.log(str)
// // })
// // .catch(function(){
// //     console.log("Error occured !")
// // })
// // .finally(function(){
// //     console.log("i will always execute")
// // })


// let user = {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }


// let firstName = "chinmay"
// let lastName = "deshpande"

// console.log("My firstName is "+firstName+" my lastName is "+ lastName)
// console.log(`My firstName is ${firstName} and my lastName is ${lastName}`)


// document.querySelector('button').addEventListener('click',function(){
//     user.data.forEach(function(el){
//         document.write(`<h1>${el.first_name}${el.last_name}</h1>`)
//         document.write(`<p>${el.email}${el.id}</p>`)
//         document.write(`<img src=${el.avatar}>`)
//     })
// })


document.querySelector('button').addEventListener('click',function(){
    getUsers(2)
    getUsers(1)
})


function getUsers(page) {
    fetch(`https://reqres.in/api/users?page=${page}`)
        .then(function (response) {
            //console.log(response)
            return response.json()
        })
        .then(function (response) {
            console.log(response)
            response.data.forEach(el => {

                document.write(`<h1>${el.first_name}${el.last_name}</h1>`)
                document.write(`<p>${el.email}${el.id}</p>`)
                document.write(`<img src=${el.avatar}>`)

            });
        })
}
//getUsers(2)