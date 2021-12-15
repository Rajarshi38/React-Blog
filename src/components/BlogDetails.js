import { useParams } from "react-router";
import useFetch from "../useFetch";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const {
        data: blog,

        isPending,
        error,
    } = useFetch("https://blog-server2.herokuapp.com/blogs/" + id);
    const navigate = useNavigate();

    const deleteHandler = () => {
        fetch("https://blog-server2.herokuapp.com/blogs/" + blog.id, {
            method: "DELETE",
        }).then(() => {
            navigate("/");
        });
    };

    return (
        <div className="blog-details">
            {isPending && <div> Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h4>Written by {blog.userId}</h4>
                    <div>{blog.body}</div>
                    <button onClick={deleteHandler}>Delete</button>
                    <Link to={`/blog/${blog.id}/update`}>
                        <button>Update Blog</button>
                    </Link>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;
