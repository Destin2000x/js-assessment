exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	obj.words = fn;
  	return obj.words();
  },

  alterObjects: function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
  	var answerArray = [];
  	for(var prop in obj) {
  		if(obj.hasOwnProperty(prop))
  		{
  			answerArray.push(prop + ': ' + obj[prop]);
  		}
  	}
  	return answerArray;
  }
};
