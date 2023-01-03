import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostidPage";
import Login from "../pages/Login";

export const privateRoutes = [
  { id: 1, path: "/about", element: <About />, exact: true },
  { id: 2, path: "/posts", element: <Posts />, exact: true },
  { id: 3, path: "/posts/:id", element: <PostIdPage />, exact: true },
];

export const publicRoutes = [
  { id: 1, path: "/login", element: <Login />, exact: true },
];
