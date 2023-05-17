import "../css/Blog/blog.css";
import skogenSplittin from "../assets/skogen-splittin.jpg"; // Adjust the path as needed

function BlogItems() {
  return (
    <div className="blog-container">
      <div className="blog-item">
        <h2>Subject</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          magnam consequuntur corporis minima sequi, minus cupiditate vero
          blanditiis, nesciunt ducimus animi ex quasi reprehenderit nam
          doloremque, optio aliquid! Eos, placeat.
        </p>

        <img src={skogenSplittin} alt="" />
      </div>
    </div>
  );
}
export default BlogItems;
