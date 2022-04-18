import React from "react";

export default function NewsItem(props) {
  let { src, title, description, url, author, date } = props;
  let dating = new Date(date);
  let time =
    dating.getDate() + "-" + dating.getMonth() + "-" + dating.getFullYear();
  let myStyle = {
    backgroundColor: props.mode === "dark" ? "#08071c" : "#d8eef5",
    color: props.mode === "dark" ? "white" : "black",
  };
  return (
    <div className="container d-flex justify-content-center" style={myStyle}>
      <div
        className="card d-flex flex-column"
        style={{
          width: "18rem",
          maxHeight: "37rem",
          minHeight: "32rem",
          margin: "5px",
          backgroundColor: props.mode === "dark" ? "#132839" : "#ffffff",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <img src={src} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "unknown"} on {time} at{" "}
              {dating.getHours() + ":" + dating.getMinutes()}
            </small>
          </p>
          <a href={url} target="_blank" className="btn btn-primary">
            Read Article
          </a>
        </div>
      </div>
    </div>
  );
}
