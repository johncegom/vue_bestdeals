export const range = function(begin, end) {
  var array = [],
  j = 0;
  for(var i = begin; i <= end; i++){
  array[j] = i;
  j++;
  }
  return array;
  }