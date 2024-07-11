import React from "react";

const NewsCard = ({news}) => {
    return(
        <>
            <div className="card">
                <img src={news.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <h5>{news.author}</h5>
                    <p className="card-text">{news.description}</p>
                    <a href={news.link} className="btn btn-primary">Read more</a>
                </div>
            </div>
        </>
    )
}

export default NewsCard