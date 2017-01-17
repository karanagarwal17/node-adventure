  var rect = module.require('./rect.js');

  function solverect (x,y) {
    console.log("solving for length : " + x + " and breadth : " + y);
    rect(x,y,function(err,rectangle){
      if(err)
        console.log(err);
      else {
        console.log("the area of the rectangle is " + rectangle.area() + " and perimeter is : " + rectangle.peri());
      }
    });
  }

solverect(3,4);
