import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Library.css';

import content from './Library.json';

import DocumentPreview from '../DocumentPreview/DocumentPreview.js';
import '../DocumentPreview/DocumentPreview.css';

import article1 from '../../articles/1.pdf';
import article2 from '../../articles/2.pdf';
import article3 from '../../articles/3.pdf';
import article4 from '../../articles/4.pdf';


class Library extends Component {
  linkOpen(item) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    ReactDOM.render(
      <DocumentPreview top={scrollTop} />,
      document.getElementById('document')
    )

    const page = document.getElementById('root');
    page.style.position = 'fixed';
    page.style.left = 0;
    page.style.top = -scrollTop + 'px';
    page.style.filter = 'blur(5px)';
  }

  componentDidMount() {
    window.addEventListener('add', this.linkOpen())
  }

  render() {
    const { padding, className } = this.props;
    const paddingFixed = padding + 20
    const style = {
      paddingTop: paddingFixed,
    }

    const articles = [article1, article2, article3, article4];

    return (
      <div className="library" style={className === 'fixed' ? style : null}>
        <div className="container">
          <h1 className="library__title">Библиотека материалов по теме выпускной работы</h1>
          <div className="library__content">
            { content.map( (item, key) =>
              <div className="library__part" key={key}>
                <h2 className="library__part-title">{item.title}</h2>
                <ul>
                  { item.fill.map( (article, key) =>
                    <li key={key}>
                      <div onClick={this.linkOpen.bind(this, articles[article.link])}
                           target="_blank"
                           ref="noferrer"
                           className="library__article-title">
                        <span className="number">{article.number + '.'}</span>
                        <span className="text">{article.title}</span>
                        <p className="library__article-author"><strong>Авторы:</strong>{article.author}</p>
                        <p className="library__article-description"><strong>Описание:</strong>{article.description}</p>
                        <p className="library__article-source"><strong>Источник:</strong>{article.source}</p>
                      </div>
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
