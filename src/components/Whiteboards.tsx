import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useCopyToClipboard, useWindowSize } from "@uidotdev/usehooks";
import { useParams } from "react-router-dom";
import { TEMPLATES_LIST } from "../common/data";
import style from "./common.module.css";
import { toast } from "./Toast";

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
  if (!item) return null;

  return (
    <Card sx={{ maxWidth: 300 }} className={style.wb} key={item.img}>
      <CardMedia sx={{ height: 200 }} image={item.img} title={item.title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.title}
        </Typography>
        {
          showDesc && <Typography
          variant="body2"
          color="text.secondary"
          className={style.desc}
        >
          {item.desc}
        </Typography>
        }
      </CardContent>
      <CardActions>
        <Button size="small" href={item.url} target="_blank">
          Open
        </Button>
        <Button
          size="small"
          onClick={() => {
            copyClipboard(item.url);
            toast({ data: "Copied!" });
          }}
        >
          Copy
        </Button>
      </CardActions>
    </Card>
  );
}
