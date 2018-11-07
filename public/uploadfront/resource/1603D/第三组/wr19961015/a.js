// function Foo(){
//     getName=function(){
//         alert(1)
//     }
//     return this
// }
// Foo.getName=function(){alert(2)}
// Foo.prototype.getName=function(){alert(3)}
// var getName=function(){
//     alert(4)
// }
// function getName(){
//     alert(5)
// }
// //2411233
// Foo.getName()
// getName()
// Foo().getName()
// getName()
// new Foo.getName()
// new Foo().getName()
// new new Foo().getName()
const arr=[]
for(var i=0;i<10;i++){

    arr.push(function(){return console.log(i)})

}
arr[0]()//10
arr[1]()//10
arr[2]()//10