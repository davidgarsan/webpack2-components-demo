/*eslint-disable no-unused-vars, no-console*/
import styles from './component.css';
import template from './template.ejs';
import moment from 'moment';
moment.locale('es');

/**
 * @desc Renders a Card component.
 * @param data - component data.
 * @param parent - container element.
 * @return {string} - Template string.
 *
 * @example
 */

function render({ title = 'Cargando', list, btnLabel = 'Aceptar', callback }, parent) {
  const container = parent || document.body;
  const div = document.createElement('div');
  div.innerHTML = template({ title, list, btnLabel, style: styles.component });
  const element = div.firstChild;
  container.append(element);
  element.querySelector('button').onclick = callback;
  return element;
} 

function update(element, { when, icon, desc, temp, hum }) {
  element.querySelector('header img').src = `http://openweathermap.org/img/w/${icon}.png`;
  element.querySelector('.when').innerHTML = when;
  element.querySelector('.desc').innerHTML = desc;
  element.querySelector('.temp').innerHTML = temp;
  element.querySelector('.hum').innerHTML = hum;
}

export {
  render,
  update
}