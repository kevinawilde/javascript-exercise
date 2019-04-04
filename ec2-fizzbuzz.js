let fbObArr = [{
	denom: 3,
	message: 'fizz'
},{
	denom:5,
	message: 'buzz'
}];


let fizzbuzz = function(arr, limit){
	var returnValue= [];
	let denomArray = arr.map(x => x.denom);
	let messageArray = arr.map(x => x.message);

	for (let i = 1; i <=limit; i++){
		var value = false;
		let returnValue = [];
		for(let j = 0; j <= arr.length ; j++){
			if(i % denomArray[j] == 0){
				returnValue.push(messageArray[j]);
				value = true;
			} 
		}
		if(value == false){
			console.log(i);
		} else {
			console.log(returnValue.join(''));
		};
	}
}
fizzbuzz(fbObArr, 15);