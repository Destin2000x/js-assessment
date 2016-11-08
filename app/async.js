exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value, time) {
	   var testDeferred = new jQuery.Deferred();
	   if(!time)
	   	var time = 10;

	   setTimeout(function() {
	       testDeferred.resolve(value);
	   }, time);
	   return testDeferred.promise();

  },

  	manipulateRemoteData: function(url) {
		return Promise.resolve($.ajax(url)).then(function (value) {
		   var res = [];
		   var people = value.people;
		   for(var i=0;i<people.length;i++){
		     res.push(people[i].name);
		   }
		   return res.sort();
	 	})
	}
};
