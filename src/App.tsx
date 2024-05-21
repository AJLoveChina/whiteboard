import { createHashRouter, Link, RouterProvider } from "react-router-dom";
import "./App.css";
import { Guide } from "./components/Guide";
import { Header } from "./components/Header";
import { SingleWhiteboard, Whiteboards } from "./components/Whiteboards";
import style from "./components/common.module.css";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <div className={style.content}>
        <Link to="/guide">How to use template?</Link>
        <Whiteboards />
      </div>
    ),
  },
  {
    path: "/guide",
    element: (
      <div className={style.content}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <Guide />
      </div>
    ),
  },
  {
    path: "/wb/:id",
    element: (
      <div className={style.content}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <SingleWhiteboard />
      </div>
    ),
  },
]);

function App() {
  return (
    <div id="body">
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
