import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { arts } from './arts.js'

ReactDOM.render(
  <React.StrictMode>
    <Card name={arts[0].name} email={arts[0].email} imgfile={arts[0].artfilepath} />
    <Card name={arts[1].name} email={arts[1].email} imgfile={arts[1].artfilepath} />
    <Card name={arts[2].name} email={arts[2].email} imgfile={arts[2].artfilepath} />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
