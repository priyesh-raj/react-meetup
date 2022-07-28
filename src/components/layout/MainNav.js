import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavouritesContext } from "../../store/favourites-context";

import classes from "./MainNav.module.css";

export function MainNav() {
  const favCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>All Meetups</Link>
          </li>
          <li>
            <Link to={"/favourites"}>
              Favourites
              {favCtx.totalFavourites ? `| ${favCtx.totalFavourites}` : ""}
            </Link>
          </li>
          <li>
            <Link to={"/new-meetup"}>New Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// export class MainNav extends React.Component {
//   render() {
//     return (
//       <header className={classes.header}>
//         <div className={classes.logo}>React Meetups</div>
//         <nav>
//           <ul>
//             <li>
//               <Link to={"/"}>All Meetups</Link>
//             </li>
//             <li>
//               <Link to={"/favourites"}>Favourites |</Link>
//             </li>
//             <li>
//               <Link to={"/new-meetup"}>New Meetups</Link>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     );
//   }
// }
