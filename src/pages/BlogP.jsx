import BlogItems from "../components/BlogItems";
import BlogPosts from "../components/blog/BlogPosts";

function BlogP() {
  return (
    <div>
      <h1>Blog</h1>
      <h2 className="wip">
        ⚠️ This blog is a work in progress.
        <br />
        Follow progress here:{" "}
        <a href="https://github.com/troskan/BlogManagementAPI" target="_blank">
          Github
        </a>{" "}
      </h2>

      <BlogItems />
      <BlogPosts />
    </div>
  );
}

export default BlogP;
