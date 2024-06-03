import { Link } from "react-router-dom";
import { GITHUB_LINK } from "../common/data";
import style from "./common.module.css";
import { useCallback, useState } from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { toast } from "./Toast";

export function Submit() {
  const [, copy] = useCopyToClipboard();
  const [email, setEmail] = useState<string>();

  const copyEmail = useCallback(() => {
    const email = atob("YWpsb3Zld29ybGRAZ21haWwuY29t");
    copy(email);
    setEmail(email);
    toast({ data: "Email copied!" });
  }, [copy]);
  return (
    <>
      <p className={style.thanksContainer}>
        <img src={process.env.PUBLIC_URL + "/imgs/jealous-svgrepo-com.svg"} />
        <span className={style.thanksTitle}>Thanks for your sharing!</span>
      </p>

      <h3>Share your template using any of the following methods:</h3>
      <ol>
        <li>
          Put your whiteboard link in <Link to={"/comment"}>comment</Link>
        </li>
        <li>
          Email your whiteboard link to my{" "}
          <button onClick={copyEmail}>email[Click]</button>
          <span>{email}</span>
        </li>
        <li>
          Share your whiteboard to my{" "}
          <button onClick={copyEmail}>email[Click]</button>
          <span>{email}</span>
          <br />
          <img
            onClick={(ev) => {
              if (ev.target && ev.target instanceof HTMLElement) {
                ev.target.style.width = "100%";
              }
            }}
            style={{ width: "300px" }}
            src={process.env.PUBLIC_URL + "/imgs/invite-viewer-by-email.png"}
            alt=""
          />
        </li>
        <li>
          Create Pull Request on <Link to={GITHUB_LINK}>Github</Link>
        </li>
      </ol>
    </>
  );
}
