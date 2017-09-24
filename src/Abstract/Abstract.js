import React, { Component } from 'react';
import './Abstract.css';

import AbstractMenu from './AbstractMenu.js';
import AbstractText from './AbstractText.js';
import content from '../content/Abstract.json';

class Abstract extends Component {
  render() {
    return (
      <div className="abstract">
        <div className="container">
          <h1 className="abstract__title">Реферат по теме выпускной работы</h1>
          <div className="abstract__content">
            <h2 className="abstract__content-title">Содержание</h2>
            <AbstractMenu items={content} />
          </div>
          <AbstractText items={content} className={''} />
        </div>
      </div>
    );
  }
}

export default Abstract;