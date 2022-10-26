import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/404";
import About from "./pages/About";
import AboutDetail from "./pages/About/Detail";
import Home from "./pages/Home";
import Post from "./pages/Post";
import PostId from "./pages/Post/[id]";
import CreatePost from "./pages/Post/Create";
import EditPost from "./pages/Post/Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}>
        <Route path="detail" element={<AboutDetail />} />
      </Route>
      <Route path="/post" element={<Post />} />
      <Route path="/post/:id" element={<PostId />} />
      <Route path="/post/create" element={<CreatePost />} />
      <Route path="/post/edit/:id" element={<EditPost />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
