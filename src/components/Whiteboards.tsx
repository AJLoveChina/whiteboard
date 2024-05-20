import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import style from "./common.module.css";

const list = [
  {
    img: process.env.PUBLIC_URL + "/imgs/world-map.png",
    url: "https://zoom.us/wb/doc/QasS9btCQweutOjjaFV06Q",
    title: "World Map",
    desc: "",
  },
];

export function Whiteboards() {
  return (
    <div className={style.wbs}>
      {list.map((item) => {
        return (
          <Card sx={{ maxWidth: 300 }} className={style.wb}>
            <CardMedia
              sx={{ height: 140 }}
              image={item.img}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.desc}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={item.url}>
                Open
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
