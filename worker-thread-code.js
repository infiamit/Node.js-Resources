//const {  parentPort } = require('worker_threads');

//for (let i = 0; i < 20; i++) {
 
	console.time("test")
 
 
 //for (let index = 0; index < 10; index++) {
	
		bigList=Array(1000000).fill().map( () =>  Math.round(Math.random() * 1000000))
		//bigList.forEach( (o,i,a) => a[i]=Math.round(Math.random() * 1000000))
 
	 //console.log(bigList)
	
 	bigList.sort();

	 
 //}
	console.timeEnd("test")
//}

 
 
