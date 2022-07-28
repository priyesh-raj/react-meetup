import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (meetup) => {},
  removeFavourite: (meetupId) => {},
  isFavourite: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
  const [favourites, setFavourites] = useState([]);

  const addFavoutitesHandler = (meetup) => {
    setFavourites((prevState) => {
      return prevState.concat(meetup);
    });
  };

  const removeFavouritesHandler = (meetupId) => {
    setFavourites((prevState) => {
      return prevState.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const isFavouriteHandler = (meetupId) => {
    return favourites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favourites: favourites,
    totalFavourites: favourites.length,
    addFavourite: addFavoutitesHandler,
    removeFavourite: removeFavouritesHandler,
    isFavourite: isFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}
