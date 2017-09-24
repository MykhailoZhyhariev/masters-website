import React, { Component } from 'react';
import './Library.css';

import content from '../content/Library.json';

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: content
    }
  }

  render() {
    const { items } = this.state;

    return (
      <div className="library">
        <div className="container">
          <h1 className="library__title">Библиотека материалов по теме выпускной работы</h1>
          <div className="library__content">
            { items.map( (item, key) =>
              <div className="library__part" key={key}>
                <h2 className="library__part-title">{item.title}</h2>
                <ul>
                  { item.fill.map( (article, key) =>
                    <li key={key}>
                      <a href={article.link} target="_blank" ref="noferrer" className="library__article-title">
                        <span className="number">{article.number + '.'}</span>
                        <span className="text">{article.title}</span>
                        <p className="library__article-author"><strong>Авторы:</strong>{article.author}</p>
                        <p className="library__article-description"><strong>Описание:</strong>{article.description}</p>
                        <p className="library__article-source"><strong>Источник:</strong>{article.source}</p>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Library;