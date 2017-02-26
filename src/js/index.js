/*eslint-disable no-unused-vars, no-console*/
import fonts from '../css/font.css';
import styles from '../css/app.css';
import moment from 'moment';
import * as Card from '../components/card/component';
moment.locale('es');

(function () {
  const list = [
    { label: 'Actualización:', id: 'when' },
    { label: 'Descripción:', id: 'desc' },
    { label: 'Temperatura:', id: 'temp' },
    { label: 'Humedad:', id: 'hum' }
  ];
  const getWeather = () => {
    return fetch('http://api.openweathermap.org/data/2.5/weather?q=Tres%20Cantos,es&lang=es&units=metric&appid=5c85055320cd6cf61674dd4f3b5d7fd7',
      {
        method: 'GET',
        cache: 'default'
      })
      .then(function(response) {
        return response.json();
      });
  };
  const updateWeather = () => {
    const when = moment().format('D MMMM YYYY, hh:mm:ss');
    getWeather()
      .then(function(json) {
        console.log(json);
        Card.update( card, {
          when,
          icon: json.weather[0].icon,
          desc: json.weather[0].description,
          temp: json.main.temp.toLocaleString() + 'ºC',
          hum: json.main.humidity + '%'
        });
    });
  };

  // Tarjeta del tiempo
  const card = Card.render({ title: `Tiempo en Tres Cantos`, list, btnLabel:'Actualizar', callback: updateWeather }, null);
  updateWeather();

  // Tarjeta con listado
  Card.render({
    title: `Otra tarjeta`,
    list: [{ label: 'Item 1'}, { label: 'Item 2'}, { label: 'Item 3'}],
    callback: function() { alert('click: esta es una tarjeta con listado');},
    theme: 'b'
  });

  // tarjeta simple
  Card.render({
    title: `Y otra más`,
    list: [],
    callback: function() { alert('click: esta es una tarjeta simple'); },
    theme: 'c'
  });
}());
