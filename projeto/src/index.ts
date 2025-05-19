 function component() {
    const element = document.getElementById('content');

    element.innerHTML = "<h1>Hello, World!</h1>";
    element.innerHTML += "<h1>Hello, World!</h1>";
    element.innerHTML += "<h1>Hello, World!</h1>";
    return element;
  }
component();