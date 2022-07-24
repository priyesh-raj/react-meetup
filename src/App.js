import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { AllMeetUps } from "./views/AllMeetUps";
import { Favourites } from "./views/Favourites";
import { NewMeetUps } from "./views/NewMeetUps";

export class App extends React.Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetUps />} exact />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/new-meetup" element={<NewMeetUps />} />
        </Routes>
      </Layout>
    );
  }
}
