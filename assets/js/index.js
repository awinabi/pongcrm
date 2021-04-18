import hello from './functions';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello from Webpack!';
  element.className = 'alert alert-info'
  return element;
}

document.body.appendChild(component());
console.log('call from module', hello(window.location));
