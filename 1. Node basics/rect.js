module.exports = function(x,y,callback) {
  try {
    if(x < 0 || y < 0)
      throw new Error("the length and breadth of a rectangle should be greater than 0 l : " + x + " b : " + y);
    else {
      callback(null,{
        area :  function (){
          return x*y;
        },
        peri : function () {
          return 2*(x+y);
        }
      });
    }
  }
  catch(error) {
    callback(error,null);
  }
};
