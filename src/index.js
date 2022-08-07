module.exports = function check(str, bracketsConfig) {
  if (str.length%2){
    return false;
  }
  let testArray = []
  str.split('').forEach((k,index)=>{
    bracketsConfig.forEach(p=>{
      let f = testArray[testArray.length-1];
      if (p.indexOf(k) == 0 && f != p[1]){
        fillArray(p[0]);
      } else if ((p.indexOf(k) == 1 && f == p[0]) || (p.indexOf(k) == 0 && f == p[1])){
        emptyArray()
      } else if (p.indexOf(k) == 1 && f != p[1]){
        fillArray(p[0]);
      }
    })
  })

  function fillArray(val){
    testArray.push(val)
  }

  function emptyArray(){
      testArray.pop()
  }
  return testArray.length == 0
}
