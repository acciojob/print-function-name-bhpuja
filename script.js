//your JS code here. If required.
function functionName() {
  alert(arguments.callee.name);
}

// Attach the function to the button click
document.getElementById('functionButton').addEventListener('click', functionName);
