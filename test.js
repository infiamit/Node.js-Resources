 
var b={"key2":"value2", "key3":"value3"}
var c={"key3":"value3", "key4":"value4"}
var x=[{"key2":"value2", "key3":"value3"},{"key2":"value4", "key3":"value5"}]

console.log("map vs ForEach with array of objects")
console.time("mapobj")
x.map(item=>{})
console.timeEnd("mapobj")

console.time("forEach")
x.forEach(element => {
 
});
console.timeEnd("forEach")
console.time("Map for filling array")
 var a=Array(1000000).fill().map( () => Math.round(Math.random() * 1000000))
 console.timeEnd("Map for filling array")

 console.time("Foreach for filling array")
 var z=Array(1000000).fill()
 z.forEach( (o,i,a) => a[i]=Math.round(Math.random() * 1000000))
 
 console.timeEnd("Foreach for filling array")
 
 console.log("////arrays")
 console.log(a.length)
console.time("a.len")
 for (let i = 0; i < a.length; i++) {
   
   
 }
 console.timeEnd("a.len")
 console.time("len")
 var length = a.length
 for (let i = 0; i <  length; i++) {
   
   
}
console.timeEnd("len")
console.time("while")
while(length--){

}
console.timeEnd("while")
console.time("map")
a.map(item=>item)
console.timeEnd("map")


console.log("////Objects")
 var d={}
 console.time("ForIn")
 for(const key in b){
   
   d[key]=b[key]
  
 }
  
 console.timeEnd("ForIn")
 d={}
 console.time("ForOF")
 for(const key of Object.keys(b)){
  d[key]=b[key]
}  
console.timeEnd("ForOF")
d={}
console.time("object assign")
d=Object.assign(b,c)
console.timeEnd("object assign")

d-{}
console.time("spread")
console.log("merge 2 object with spread")
d={...b,...c}
console.timeEnd("spread")