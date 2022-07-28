import React, { useContext } from "react";
import { FavouritesContext } from "../../store/favourites-context";
import { Card } from "../ui/Card";

import classes from "./MeetupItem.module.css";

export function MeetupItem(props) {
  const favouritesCtx = useContext(FavouritesContext);

  const isFavourite = favouritesCtx.isFavourite(props.id);

  const handleToggleFavourites = () => {
    if (isFavourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      favouritesCtx.addFavourite(props);
    }
  };

  return (
    <div className={classes.item}>
      <Card>
        <figure className={classes.image}>
          <img src={props.item.imgUrl} alt="" />
        </figure>
        <section className={classes.content}>
          <h3>{props.item.title}</h3>
          <address>{props.item.address}</address>
          <p>{props.item.description}</p>
        </section>
        <section className={classes.actions}>
          <button onClick={handleToggleFavourites}>
            {isFavourite ? "Remove From Favourites" : "Add To Favourites"}
          </button>
        </section>
      </Card>
    </div>
  );
}
