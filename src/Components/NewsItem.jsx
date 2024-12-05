import image from '../assets/news.jpg'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src?src:image}
        style={{ height: "210px", width: "330px" }}
        className="card-img-top"
        alt="news-thumbnail"
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? (title.length > 50 ? title.slice(0, 50) + "..." : title) : "No Title Available"}
        </h5>
        <p className="card-text">{description?(description.length>90? description.slice(0,90)+"...":description):"No description avaiable"}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;