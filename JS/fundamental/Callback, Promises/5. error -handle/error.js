setTimeout(() => {
    console.log("Hi I am running on 2 seconds")
}, 2000);

setTimeout(()=> {
    console.log("I am running in 1 seconds")
}, 1000);


function mainFun() {
 try {
    console.log(arjun)
 } catch (error) {
    console.log(error)
 }
}

mainFun()

setTimeout(()=> {
    console.log("I am running in 3 seconds")
}, 3000);