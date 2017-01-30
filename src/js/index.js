/*eslint-disable no-unused-vars*/
import styles from '../css/app.css';
import fonts from '../css/font.css';
import _ from 'lodash';
import moment from 'moment';
moment.locale('es');

const component = function () {
  const element = document.createElement('div');
  const head = document.createElement('header');
  const body = document.createElement('div');
  const foot = document.createElement('footer');
  const now = moment().format('D MMMM YYYY, hh:mm:ss');
  const list = ['Foo', 'Bar', 'Baz'];
  const txt = `<p>Texto multilínea 
  con variables y un listado HTML:
    <ul>
      <li>${list[0]}</li>
      <li>${list[1]}</li>
      <li>${list[2]}</li>
    <ul>
  </p>`;
  head.innerHTML = _.join(['Demo','webpack 2.2 beta', `(${now})`], ' ');
  body.innerHTML = txt;
  foot.innerHTML = '<button>Aceptar</button>';
  element.appendChild(head);
  element.appendChild(body);
  element.appendChild(foot);
  element.className = 'component';
  return element;
}

document.body.appendChild(component());
