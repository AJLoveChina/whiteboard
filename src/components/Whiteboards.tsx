import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { TEMPLATES_LIST } from "../common/data";
import style from "./common.module.css";

export function Whiteboards() {
  return (
    <Grid container className={style.wbs}>
      {TEMPLATES_LIST.map((item) => {
        return (
          <Grid item lg={2} md={3} sm={4} xs={6}>
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
          </Grid>
        );
      })}
    </Grid>
  );
}
