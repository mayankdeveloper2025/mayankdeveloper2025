import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
function BlogList() {
var [blogs, setBlogs] = useState([]);
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
   .then((response) => response.json())
   .then((data) => setBlogs(data));
}, []);

return (
    <div>
        <h1> Blog Posts</h1>
        <ul>
            {blogs.map((blog) => (
                <li key={blog.id}>
                    <Link to="/blogs">{blog.title}</Link>
                </li>
            ))}
        </ul>
        <Link to="something">Something</Link>
        <Outlet />
    </div>
);

}

export default BlogList;