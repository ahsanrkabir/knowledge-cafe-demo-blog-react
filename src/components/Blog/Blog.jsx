import PropTypes from "prop-types";
import { MdOutlineBookmarkBorder } from "react-icons/md";

const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
  // console.log(blog);
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="space-y-2">
      <img
        className="w-full"
        src={cover}
        alt={`cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img className="w-14" src={author_img} />
          <div>
            <h5 className="text-2xl font-bold">{author}</h5>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookMark(blog)}
            className="text-2xl"
          >
            <MdOutlineBookmarkBorder />
          </button>
        </div>
      </div>
      <h3 className="text-4xl font-bold">{title}</h3>
      {hashtags.map((hashtag, idx) => (
        <span key={idx}>
          <a href="">#{hashtag}</a>
        </span>
      ))}
      <div>
        <button
          onClick={() => handleMarkAsRead(reading_time)}
          className="text-[#6047EC] text-xl font-semibold underline"
        >
          Mark As Read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
