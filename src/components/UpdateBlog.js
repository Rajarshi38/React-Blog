import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetch from "../useFetch";
import { useNavigate } from "react-router";

const UpdateBlog = () => {
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [author, setAuthor] = useState();

    const [isPendingHere, setIsPendingHere] = useState(false);
    const navigate = useNavigate();

    // const {
    //     data: blog,
    //     isPending,
    //     error,
    // } = useFetch(`http://localhost:8000/blogs/${id}`);
    useEffect(() => {
        const url = `http://localhost:8000/blogs/${id}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setTitle(data.title);
                setBody(data.body);
                setAuthor(data.userId);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();

        // if (blog) {
        //     setBody(blog.body);
        //     setTitle(blog.title);
        //     setAuthor(blog.userId);
        // }
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        const blog = { title, body, userId: author };
        setIsPendingHere(true);

        fetch("http://localhost:8000/blogs/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log("New Blog added");
            setIsPendingHere(false);
            navigate("/");
        });
        console.log(blog);
    };

    return (
        <div className="update-blog">
            <h1>Update Blog - {id}</h1>
            <form onSubmit={submitHandler}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    required
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <label>Blog Content:</label>
                <textarea
                    placeholder="Enter Content Body"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <input
                    type="text"
                    placeholder="Enter author name"
                    value={author}
                    required
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPendingHere && <button>Add Blog</button>}
                {isPendingHere && <button disabled> Adding Blog....</button>}
            </form>
        </div>
    );
};

export default UpdateBlog;
