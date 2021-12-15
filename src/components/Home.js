import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch("https://blog-server2.herokuapp.com/blogs");

    // const blogHandler = (index, newContext) => {
    //     const newBlog = blogs.map((blog) => {
    //         if (blog.id === index) {
    //             const updatedBlog = {
    //                 ...blog,
    //                 title: newContext,
    //             };
    //             console.log(updatedBlog);
    //             return updatedBlog;
    //         }
    //         return blog;
    //     });

    //     setBlogs(newBlog);
    // };

    // const addNewBlog = (id, title, author, body) => {
    //     setBlogs((blogs) => [
    //         ...blogs,
    //         {
    //             title: title,
    //             author: author,
    //             body: body,
    //             id: id,
    //         },
    //     ]);
    // };

    // const deleteHandler = (id) => {
    //     const newBlog = blogs.filter((blog) => blog.id !== id);

    //     setBlogs(newBlog);
    // };

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading.....</div>}
            {blogs && <BlogList blogs={blogs} />}

            {/* <button className="newBtn" onClick={() => setName("Dhiman")}>
                Change Name
            </button>
            <button className="newBtn" onClick={() => setName("Debanik")}>
                Change Name Again
            </button> */}
        </div>
    );
};

export default Home;
