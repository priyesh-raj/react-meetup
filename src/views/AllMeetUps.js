import React, { useEffect, useState } from "react";

import { MeetupList } from "../components/meetups/MeetupList";

export const DB_URL =
  "https://react-getting-started-eb817-default-rtdb.firebaseio.com/meetups.json";
export function AllMeetUps() {
  let [allMeetups, setAllMeetups] = useState([]);
  let [isLoading, setLoading] = useState(true);
  // const setLoadingFalse = () => setLoading(false);
  // const setLoadingTrue = () => setLoading(true);

  useEffect(() => {
    getMeetups().then((data) => {
      const allMeetupsData = addId(data);
      setAllMeetups(allMeetupsData);
      setLoading(false);
    });
    return () => {
      setAllMeetups([]);
    };
  }, []);

  const getMeetups = async () => {
    return fetch(DB_URL).then((resp) => {
      return resp.json();
    });
  };

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
