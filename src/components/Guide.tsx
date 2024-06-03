import Grid from "@mui/material/Grid";
import style from "./common.module.css";
import Alert from "@mui/material/Alert";
import Chip from "@mui/material/Chip";
export function Guide() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Alert icon={false}>Usage 1(Recommended with keyboard)</Alert>

          <h3>Step 1:click copy content</h3>
          <img
            className={style.guideImg}
            src={process.env.PUBLIC_URL + "/imgs/usage-1.png"}
            alt="click copy content"
          />

          <h3>Step 2:paste to your own whiteboard</h3>
          <p>
            open your own whiteboard, and type <Chip label="Ctrl + V" />
          </p>
        </Grid>

        <Grid item xs={12} md={6}>
          <Alert icon={false}>Usage 2</Alert>

          <h3>Step 1: clone the whiteboard you want</h3>
          <img
            className={style.guideImg}
            src={process.env.PUBLIC_URL + "/imgs/how-to-duplicate-board.png"}
            alt="how to duplicate board"
          />
          <h3>
            Step 2: rename board (it will be the name of cloned whiteboard
          </h3>
          <img
            className={style.guideImg}
            src={process.env.PUBLIC_URL + "/imgs/guide-rename-board.png"}
            alt="set name for cloned whiteboard"
          />
          <h3>Step 3: open cloned board</h3>
          <img
            className={style.guideImg}
            src={process.env.PUBLIC_URL + "/imgs/open-cloned-board.png"}
            alt="open cloned board"
          />

          <h3>
            Done. Finally, you can do whatever you want, because now it's your
            own whiteboard. Copy content to your existed whiteboard or anything
            else.{" "}
          </h3>
        </Grid>
      </Grid>
    </>
  );
}
