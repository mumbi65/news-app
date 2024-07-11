import React, {useState, useEffect} from "react";
import NewsCard from "./newscard";

const NewsContainer = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch("https://newsdata.io/api/1/latest?apikey=pub_45351933a2e4773cdbf068cafdd24880cfa3c&language=en")
        .then((response)=> response.json())
        .then((data)=>{
                console.log(data)
                setNews(data.results)
            })
        .catch((err) => {
            console.error(err)
        })
    }, [])
    return(
        <>
        <div className="container">
            <div className="row justify-content-around">
                {
                    news.map((data, index) => {
                        return(
                            <div className="col-md-4 mb-4" key={index}>
                                <NewsCard news = {data}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default NewsContainer