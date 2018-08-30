const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
 


 
 
 


console.log("this is the main thread")
console.time("time Taken")
for (let i = 0; i < 1; i++) {
	
	 
	let w = new Worker(__dirname + '/worker-thread-code.js', {workerData: null});
 
	  
 
	
}
console.log("yes async")
console.timeEnd("time Taken")


 

 
 