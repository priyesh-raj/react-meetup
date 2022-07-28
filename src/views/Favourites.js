import { useContext } from "react";
import { MeetupList } from "../components/meetups/MeetupList";
import { FavouritesContext } from "../store/favourites-context";

export function Favourites() {
  const favoutiresCtx = useContext(FavouritesContext);

  let content;

  if (favoutiresCtx.totalFavourites === 0) {
    content = <p>No Favourites Added</p>;
  } else {
    content = <MeetupList listItems={favoutiresCtx.favourites} />;
  }

  return (
    <div>
      <h3>My Favourites</h3>
      {content}
    </div>
  );
}
