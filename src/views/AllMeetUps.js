import React, { useEffect, useState } from "react";

import { MeetupList } from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

export function AllMeetUps() {
  let [allMeetups, setAllMeetups] = useState([]);
  let [isLoading, setLoading] = useState(true);
  const setLoadingFalse = () => setLoading(false);
  // const setLoadingTrue = () => setLoading(true);

  useEffect(() => {
    fetch(
      "https://react-getting-started-eb817-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log("data", data);
        const allMeetupsData = addId(data);
        setAllMeetups(allMeetupsData);
        setLoadingFalse();
      });
  }, []);

  const addId = (resp) => {
    let tempObj = { ...resp };
    let keyArray = Object.keys(tempObj);
    let valuesArray = Object.values(tempObj);
    for (let i = 0; i < keyArray.length; i++) {
      valuesArray[i] = { ...valuesArray[i], id: keyArray[i] };
    }
    return valuesArray;
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section>
      <h1>All Meet Ups</h1>
      <MeetupList listItems={allMeetups} />
    </section>
  );
}

// export class AllMeetUps extends React.Component {
//   render() {
//     return (
//       <section>
//         <h1>All Meet Ups</h1>
//         <MeetupList listItems={DUMMY_DATA} />
//       </section>
//     );
//   }
// }
