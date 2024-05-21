import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createHashRouter, Link, RouterProvider } from "react-router-dom";
import "./App.css";
import { Comment } from "./components/Comment";
import style from "./components/common.module.css";
import { Guide } from "./components/Guide";
import { Header } from "./components/Header";
import { Toast } from "./components/Toast";
import { SingleWhiteboard, Whiteboards } from "./components/Whiteboards";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <div className={style.content}>
        <Link to="/guide">
          <Button variant="text">How to use template?</Button>
        </Link>
        <Link to="/comment">
          <Button variant="text">Comments/Leave a message</Button>
        </Link>
        <Whiteboards />
      </div>
    ),
  },
  {
    path: "/guide",
    element: (
      <div className={style.content}>
        <div>
          <Link to="/">
            <Button variant="text">Home</Button>
          </Link>
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
          <Link to="/">
            <Button variant="text">Home</Button>
          </Link>
        </div>
        <SingleWhiteboard />
      </div>
    ),
  },
  {
    path: "/comment",
    element: (
      <div className={style.content}>
        <div>
          <Link to="/">
            <Button variant="text">Home</Button>
          </Link>
        </div>
        <Comment />
      </div>
    ),
  },
]);

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id="body">
        <Header />
        <Toast />
        <RouterProvider router={router}></RouterProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
