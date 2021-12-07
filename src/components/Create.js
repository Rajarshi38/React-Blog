import { useState } from "react";
import { useNavigate } from "react-router";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState();
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const blog = { title, body, userId: author };
        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log("New Blog added");
            setIsPending(false);
            navigate("/");
        });
        console.log(blog);
    };

    return (
        <div className="create">
            <h1>Add a New Blog</h1>
            <form onSubmit={submitHandler}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    placeholder="Enter title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Content:</label>
                <textarea
                    placeholder="Enter Content Body"
                    required
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <input
                    type="text"
                    placeholder="Enter author name"
                    required
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled> Adding Blog....</button>}
            </form>
        </div>
    );
};

export default Create;
