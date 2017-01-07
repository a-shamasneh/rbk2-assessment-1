// your code here
var ExtendArray =function(){
	var reparr={};
	var element={};/// let say this object have keys and each key is represent index
	reparr.first=function(){
		///there is built in function (object.keys ) so this function return keys from object and push its to array 
		var arr = Object.keys(element);
		return arr[0];
	}
	reparr.last=function(){
		
		var arr = Object.keys(element);
		return arr[arr.length-1];
	}
	return reparr;
} 