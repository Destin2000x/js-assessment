exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	if(dirName === data.dir)
  	{
  		dirName = undefined;
  	}
  	var fileList = [];
  	for(var i = 0; i < data.files.length; i++)
  	{
  		if(typeof data.files[i] === 'object')
  		{
  			fileList = fileList.concat(this.listFiles(data.files[i], dirName));
  		}
  		else
  		{
  			if(typeof dirName == 'undefined')
  			{
  				fileList.push(data.files[i]);
  			}
  		}
  	}
  	return fileList;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
