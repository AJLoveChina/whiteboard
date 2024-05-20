import style from "./common.module.css";
export function Guide() {
  return (
    <>
      <h3>Step 1: clone the whiteboard you want</h3>
      <img
        className={style.guideImg}
        src={process.env.PUBLIC_URL + "/imgs/how-to-duplicate-board.png"}
        alt="how to duplicate board"
      />
      <h3>Step 2: rename board (it will be the name of cloned whiteboard</h3>
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
        Done. Finally, you can do whatever you want, because now it's your own
        whiteboard. Copy content to your existed whiteboard or anything else.{" "}
      </h3>
    </>
  );
}
