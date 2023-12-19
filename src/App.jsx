import React from "react";



// function App(){
  
// var d = new Date(); // for now
// const currentTime = d.getHours(); // Get the current hour

// if (currentTime >= 0 && currentTime <= 12) {

//   ReactDOM.render(<h1 className="text-red-950">GOOD MORNING</h1>,document.getElementById("root"));
// } else if (currentTime > 12 && currentTime <= 18) {
  
//   ReactDOM.render(<h1 className="text-green-950">GOOD AFTERNOON</h1>,document.getElementById("root"));

// } else if (currentTime > 18 && currentTime <= 23) {
  
//   ReactDOM.render(<h1 className="text-blue-950 text-6xl  ">GOOD NIGHT</h1>,document.getElementById("root"));
// }
// return App();
// }


// export default App();



/*Chat gpt*/

// The issue you're encountering is likely due to the fact that you're calling ReactDOM.render inside your App component, which can interfere with the rendering flow. The ReactDOM.render function is typically called only once at the root of your application.


function App() {
  var d = new Date(); // for now
  const currentTime = d.getHours(); // Get the current hour

  if (currentTime >= 0 && currentTime <= 12) {
    return <h1 className="text-red-950">GOOD MORNING</h1>;
  } else if (currentTime > 12 && currentTime <= 18) {
    return <h1 className="text-green-950">GOOD AFTERNOON</h1>;
  } else if (currentTime > 18 && currentTime <= 23) {
    return <div><p className="text-blue-950 border-4  border-neutral-950  h-18	w-28	   " >GOOD NIGHT</p></div>;
  }
}

export default App;