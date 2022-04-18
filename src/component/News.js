import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const capitalize = (e) => {
    return e[0].toUpperCase() + e.substring(1, e.length);
  };
  const [article, setarticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResult, settotalResult] = useState(1);

  useEffect(() => {
    document.title = `NewsMonkey - ${capitalize(props.category)}`;
    updateNews();
  }, []);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2ba488c039f0421396397e880cc9e963&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData, page);
    await setarticle(parsedData.articles);
    await settotalResult(parsedData.totalResults);
    await setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2ba488c039f0421396397e880cc9e963&page=${page+1}&pagesize=${props.pageSize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticle(article.concat(parsedData.articles));
    settotalResult(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <div className="my-3">
        <h3 className="text-center">
          NewsMonkey- Top {capitalize(props.category)} Headlines
        </h3>

        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== totalResult}
          loader={<Loading />}
        >
          <div className="d-flex flex-wrap justify-content-center">
            {article.map((e) => {
              return (
                <div key={e.url}>
                  <NewsItem
                    src={
                      e.urlToImage
                        ? e.urlToImage
                        : "https://image.shutterstock.com/image-vector/reading-latest-hot-news-online-600w-1780021199.jpg"
                    }
                    title={
                      e.title
                        ? e.title.length > 40
                          ? e.title.slice(0, 40)
                          : e.title
                        : "No title is available"
                    }
                    description={
                      e.description
                        ? e.description.length > 100
                          ? e.description.slice(0, 100)
                          : e.description
                        : "No Discription is available on this topic. Click on button to read more"
                    }
                    url={e.url}
                    author={e.author}
                    date={e.publishedAt}
                    mode = {props.mode}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 6,
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};
