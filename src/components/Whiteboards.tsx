import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import style from "./common.module.css";
import { TEMPLATES_LIST } from "../common/data";

export function Whiteboards() {
  return (
    <div className={style.wbs}>
      {TEMPLATES_LIST.map((item) => {
        return (
          <Card sx={{ maxWidth: 300 }} className={style.wb} key={item.img}>
            <CardMedia
              sx={{ height: 200 }}
              image={item.img}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={style.desc}
              >
                {item.desc}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={item.url} target="_blank">
                Open
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
