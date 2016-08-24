var Module = (function(){

	//variables declared within scope
	var name = "John";

	//initialize function
	var init = function(){
		//write initialization code here
	}

	//simple function
	var getName = function(){
		return name;
	}

	//simpe function with parameter
	var setName = function(newname){
		name=newname;
		return name;
	}


	return {
		init:init,
		getName:getName,
		setName:setName
	}
})();