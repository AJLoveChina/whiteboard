import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { useCopyToClipboard, useWindowSize } from "@uidotdev/usehooks";
import { useParams } from "react-router-dom";
import { Item, TEMPLATES_LIST } from "../common/data";
import style from "./common.module.css";
import { toast } from "./Toast";
import { inIframe } from "../common/function";
import { useCallback, useState } from "react";

export function Whiteboards() {
  return (
    <Grid container className={style.wbs}>
      {TEMPLATES_LIST.map((item) => {
        return (
          <Grid item lg={2} md={3} sm={4} xs={6} key={item.id}>
            <Whiteboard id={item.id} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export function SingleWhiteboard() {
  const { id } = useParams();
  if (!id) return null;
  return <Whiteboard id={id} />;
}

export function Whiteboard({ id }: { id: string }) {
  const item = TEMPLATES_LIST.find((item) => item.id === id);
  const [, copyClipboard] = useCopyToClipboard();
  const size = useWindowSize();
  const showDesc = size.width ? size.width >= 900 : true;
  const disableOpenBtn = inIframe();
  const [data, setData] = useState<string>();

  const copyContent = useCallback(
    (item: Item) => {
      if (data) {
        try {
          navigator.clipboard.write([
            new ClipboardItem({
              "text/plain": new Blob([""], { type: "text/plain" }),
              "text/html": new Blob([data], { type: "text/html" }),
            }),
          ]);
        } catch (ex) {
          return Promise.reject(ex);
        }
        return Promise.resolve(true);
      } else {
        return fetch(process.env.PUBLIC_URL + `/clipboard/${item.id}.json`)
          .then((res) => res.json())
          .then((res) => {
            console.log(res.data);
            setData(res.data);
            return navigator.clipboard.write([
              new ClipboardItem({
                "text/plain": new Blob([""], { type: "text/plain" }),
                "text/html": new Blob([res.data], { type: "text/html" }),
              }),
            ]);
          });
      }
    },
    [data]
  );
  if (!item) return null;

  return (
    <Card sx={{ maxWidth: 300 }} className={style.wb} key={item.img}>
      <div className={style.imgContainer}>
        <img src={item.img} title={item.title} />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {disableOpenBtn && item.title}
          {!disableOpenBtn && (
            <Link href={item.url} target="_blank" title="Open whiteboard">
              {item.title}
            </Link>
          )}
        </Typography>
        {showDesc && (
          <Typography
            variant="body2"
            color="text.secondary"
            className={style.desc}
          >
            {item.desc}
          </Typography>
        )}
      </CardContent>
      <CardActions className={style.btnsGroup}>
        <Button
          size="small"
          onClick={() => {
            copyClipboard(item.url);
            toast({
              data: "Whiteboard URL Copied!",
            });
          }}
          title="Copy whiteboard url"
        >
          Copy Url
        </Button>

        <Button
          size="small"
          onClick={async () => {
            copyContent(item)
              .then(() => {
                toast({
                  data: "Copied!  You can paste data to your own whiteboard directly",
                });
              })
              .catch(() => {
                toast({
                  data: "Failed! (Safari required click twice!)",
                });
              });
          }}
          title="Copy template content and paste it into your own whiteboard"
        >
          Copy Content
        </Button>
      </CardActions>
    </Card>
  );
}
