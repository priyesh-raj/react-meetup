import React from "react";
import { useNavigate } from "react-router-dom";
import { NewMeetupForm } from "../components/meetups/NewMeetupForm";

export function NewMeetUps() {
  const navigate = useNavigate();

  async function addMeetup(meetupData) {
    await fetch(
      "https://react-getting-started-eb817-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
      }
    );
    navigate("/", { replace: true });
  }

  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </div>
  );
}
// class NewMeetUps extends React.Component {
//   async addMeetup(meetupData) {
//     await fetch(
//       "https://react-getting-started-eb817-default-rtdb.firebaseio.com/meetups.json",
//       {
//         method: "POST",
//         body: JSON.stringify(meetupData),
//       }
//     );
//   }

//   render() {
//     return (
//       <div>
//         <NewMeetupForm onAddMeetup={this.addMeetup} />
//       </div>
//     );
//   }
// }
// export default NewMeetUps;
// export default withRouter(NewMeetUps);
