import{Routes, Route} from 'react-router-dom';
// import {useState, useEffect} from 'react';
import BlogDetails from './Pages/BlogDetails';
import BlogList from './Pages/BlogList';
function App() {
    // var [blogs, setBlogs] = useState([]);
    // useEffect(() => { 
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //    .then((response) => response.json())
    //    .then((data) => setBlogs(data));
    // });

return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/blogs" element={<BlogDetails />} />
      <Route path="something" element={something} />
    </Routes>
  );
}

export default App;