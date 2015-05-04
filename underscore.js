	var _ = (function() {
	     return {
	         average: function (data) { 

	         var i = 0;
	         var total = 0;
	         while (i<data.length)
	         	{
	         	total += data[i];
	         	i++;
	         	}
	         return (total/data.length);

	         	},
	         contains: function(data,value) { 

	         var i = 0;
	         
	         while (i<data.length)
	         	{
	         	if (data[i] === value)
	         	{
	         		return true;
	         	}

	         	i++;
	         	}
	         return false;

	        	 },
	         first: function (data) {

	         	return data[0];
	          	},

	         last: function(data) { 
	         	return data[data.length-1];
	        	 },
	         max: function (data) { 

	         var i = 0;
	         var max = 0;
	         while (i<data.length)
	         	{
	         	if (data[i] > max)
	         	max = data[i];
	         	i++;
	         	}
	         return (max);

	         	},
	         min: function(data) { 

	         var i = 0;
	         var min = data[0];
	         while (i<data.length)
	        	 {
	         	if (data[i] < min)
	         	min = data[i];
	         	i++;
	         	}
	         return (min);

	        	 },
	         shuffle: function (data) { 

	         	var result = [];
	         	while(data.length > 0)
	         	{
			 		var rand = Math.floor((Math.random()*data.length));
			 	//console.log(rand);
			 		result.push(data[rand]);
			 		data.splice(rand,1)

			 		// var temp = data[i]
			 		//data[i] = rand;
			 		//data[rand] = temp;
				}
	         return result;
	            },	         

	         sample: function( data, value) {

	         value= value || 1;	
	         var result = [];

	         while(value > 0)


	         	{
			 	var rand = Math.floor((Math.random()*data.length));
			 	result.push( data[rand]);
			 //console.log(rand);
			 	value--;

				}
	         return (result);
	          },

	         difference: function (arr1, arr2) 
	         {
	         	var i = 0;
	         	while (i < arr1.length)
	         	{

	         		var j = 0;
	         		while (j < arr2.length)
	         		{

	         			if (arr1[i] == arr2[j])
	         			{
	         			    arr1.splice(i,1);
	         			}
	         		j++;
	         		}

	         		i++;

	         	}
	         	return arr1;
	          },
	         indexof: function(data,value) 
	         { 
	         	var i = 0;
	         	var index = 0;
	        
	         	while (i<data.length)
	        	 {
	         		if (data[i] === value)
	     			{
	         			index = i;
	         			return index;
	     			}
	     			else
	     			{
	     				index = -1;
	     			}
	         		i++;
	         	}
	         			return index; 
	     		},


	          pluck: function (obj,prop)
	          { 
	          		var i = 0;
	         		var results = [];
	        
	         	   for(item in obj)
	        	    { 		
	        	 	results.push(obj[item].name);
	         		i++;
	     		  }
	     		return results;

	            },

	         	each: function (arr,action){

	         		for(var i = 0; i < arr.length; i++)
	         		{
	         		action(arr[i]);
	         		}

	         		},

	         	compact: function (arr){

	         		for(var i = 0; i < arr.length; i++)
	         		{
	         		if (arr[i] == null)
	         		{
	         			    arr.splice(i,1);
	         		}
	         		}
	         		return arr;
	                },

	         map: function (arr,action){

	         	for(var i =0; i<arr.length; i++)
	         	{
	         		arr[i] = action(arr[i]);
	         		
	         	}
	         	return arr;
	         },
	      	
	      	 filter: function (arr,filter){
	      	 	var result = [];

	      	 	for(var i = 0; i<arr.length; i++)
	      	 	{

	      	 		if(filter(arr[i]) === true)
	      	 		{
	      	 			result.push(arr[i]);
	      	 		}

	      	 	}
	      	 	return result;
	      	 },

	      };

	})();

	//var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
	//console.log( _.max([1,2,3,4,5,10]));
	//console.log(_.sample([1, 2, 3, 4, 5, 6]));
	//console.log(_.pluck(stooges, 'name'));
	//console.log(_.compact([1, "hello", undefined,3, undefined]));
	//_.each([1, 2, 3], console.log);
	//var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
	//console.log(evens);
    //console.log(_.map(["dogs", "before", "cats"], function(str){ return str.toUpperCase(); }));



