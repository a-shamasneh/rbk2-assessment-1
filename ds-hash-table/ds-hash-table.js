var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      for(var i=0;i<_storage.length;i++){

       for(var j=0;j<_storage[i].length;j++){
         if(_storage[i][j][0]==key){
          return _storage[i][j][1]
        }
       }
       return "no key found "
      }
    },

    insert: function(key, value) {
      if(_storage.length!==0){
        for(var i=0;i<_storage.length;i++){
          for(var j=0;i<_storage[i].length;j++){
             if(_storage[i][j][0]==key){
              _storage[i][j][1]==value;
        }
          }
       
      }
      }
      else{
        var bucket=[];
        var tuple=[key,value];
        bucket.push(tuple);
        _storage.push(bucket);

      }
      
  };
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};

///  am not sure about my solution but i have knowledge about hash table how its work  what i under stand is 
/// let say hash table is represent array [[tuples],[[tuples]],[[tuples]] and each tuples is represnt key as index 0 and value as index 1