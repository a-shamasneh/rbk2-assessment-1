var Stack = function() {
	//your code is here
	var stack=Object.create(method);
	stack.storage={};
	stack.counter=0;
	 return stack;
};
var method={};
method.add=function(value){
	 	this.storage[counter]=value;
	 	this.counter++;
	 }
	 method.remove=function(){
	 	if(Object.keys(this.storage).length>0){
	 		var node=this.storage[this.counter];
	 		delete this.storage[this.counter];
	 		this.counter --;
	 		return node;
	 	}
	 	return "list empty";
	 }
	 method._storage=function(){
	 	return this.storage;
	 }