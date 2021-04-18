import hello from './functions';
import exampleApp from './components/ExampleApp';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello from Webpack!';
  element.className = 'alert alert-info'
  return element;
}

document.body.appendChild(component());
console.log('call from module', hello(window.location));

window.exampleApp = exampleApp;
