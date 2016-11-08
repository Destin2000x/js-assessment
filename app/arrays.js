exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
  	// for(var i=0; i<arr.length;i++)
  	// {
  	// 	if(arr[i] === item)
  	// 		return i;
  	// }
  	// return -1;
  	return arr.indexOf(item);
  },

  sum: function(arr) {
  	var sum = 0;
  	  for(var i=0; i<arr.length;i++)
  	  {
  	  	sum = sum + arr[i];
  	  }
  	  return sum;
  },

  remove: function(arr, item) {

  	 for(var i=0; i<arr.length;i++)
  	{
  		if(arr[i] === item)
  		{
  			arr.splice(i, 1);
  			i--;
  		}
  	}
  	return arr;
  },

  removeWithoutCopy: function(arr, item) {
  	for(var i=0; i<arr.length;i++)
  	{
  		if(arr[i] === item)
  		{
  			arr.splice(i, 1);
  			i--;
  		}
  	}
  	return arr;
  },

  append: function(arr, item) {
  	arr.push(item);
  	return arr;
  },

  truncate: function(arr) {
  	arr.pop();
  	return arr;
  },

  prepend: function(arr, item) {
  	arr.unshift(item);
  	return arr;
  },

  curtail: function(arr) {
  	arr.shift();
  	return arr;
  },

  concat: function(arr1, arr2) {
  	return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
  	arr.splice(index, 0, item);
  	return arr;
  },

  count: function(arr, item) {
  	var sum = 0;
  	for(var i=0; i<arr.length;i++)
  	{
  		if(arr[i] === item)
  		{
  			sum++;
  		}
  	}
  	return sum;
  },

  duplicates: function(arr) {
  	var orderedArray = arr.slice();
  	var answerArray = [];
  	orderedArray.sort();
  	for(var i = 0; i < orderedArray.length; i++)
  	{
  		if((orderedArray[i+1] == orderedArray[i]) && (orderedArray[i] != answerArray[answerArray.length - 1]))
  		{
  			answerArray.push(orderedArray[i]);
  		}
  	}
  	return answerArray;
  },

  square: function(arr) {
  	arr.forEach(function(element, index, array){
  		array[index] = element*element;
  	})
  	return arr;
  },

  findAllOccurrences: function(arr, target) {
  	var answers = [];
  	for(var i = 0; i < arr.length; i++){
  		if(arr[i] === target)
  			answers.push(i);
  	}
  	return answers;
  }
};
