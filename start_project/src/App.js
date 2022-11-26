import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./shared/pages/HomePage";
import Navbar from "./shared/components/Navbar";
import AuthPage from "./user/pages/AuthPage";
import BoardPage from "./board/pages/BoardPage";
import SingleBoardPage from "./board/pages/SingleBoardPage";
import CommunityPage from "./community/pages/CommunityPage";
import SingleCommunityPage from "./community/pages/SingleCommunityPage";
import ErrorPage from "./shared/pages/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="auth" element={<AuthPage></AuthPage>}></Route>
        <Route path="board" element={<BoardPage></BoardPage>}></Route>
        <Route
          path="board/:id"
          element={<SingleBoardPage></SingleBoardPage>}
        ></Route>
        <Route
          path="community"
          element={<CommunityPage></CommunityPage>}
        ></Route>
        <Route
          path="community/:id"
          element={<SingleCommunityPage></SingleCommunityPage>}
        ></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
