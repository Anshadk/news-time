import React from "react";

function NewsBoard({ news }) {
  return (
    <div className="container m-5 p-3">
      <div className="row">
        {news.map((article, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4">
              <img
                src={article.urlToImage || 'https://www.democracyandme.org/wp-content/uploads/2017/07/News-screen.jpg'}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description || 'Click on Read More to view more about the news'}</p>
                <a
                  href={article.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsBoard;
