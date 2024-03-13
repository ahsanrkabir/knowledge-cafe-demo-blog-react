import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-full md:w-1/3 bg-[#1111110D] mt-5 px-4 space-y-3">
      <div>
        <h2 className="text-[#6047EC] text-2xl font-bold">
          Spent Time On Read: {readingTime}
        </h2>
      </div>
      <h2 className="text-2xl font-bold">
        BookMarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
