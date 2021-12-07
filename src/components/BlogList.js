import { Link } from "react-router-dom";

const BlogList = ({ blogs, deleteHandler }) => {
    // const blogs = props.blogs;

    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.userId}</p>
                    </Link>

                    {/* <button onClick={() => deleteHandler(blog.id)}>Delete</button> */}
                </div>
            ))}
        </div>
    );
};

export default BlogList;
