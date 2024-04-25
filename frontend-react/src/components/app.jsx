import Header from "./header";
import Forms from "./forms";
import Footer from "./footer";

import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import AboutUs from "./pages/AboutUs";
import FormPage from "./pages/FormPage";
import SimilarProfile from "./pages/SimilarProfiles";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import "../scss/app.scss";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import QUESTIONS from "../data/questions.json";

const QUESTION_IDS = QUESTIONS.map((oneQuestion) => [oneQuestion.id, ""]);
const EMPTY_DATA = { image: "", ...Object.fromEntries(QUESTION_IDS) };

function App() {
  const [data, setData] = useState(EMPTY_DATA);

  const updateAvatarAuthor = (image) => {
    const clonData = { ...data };
    clonData.image = image;
    setData(clonData);
    setSavedData((data) => ({
      ...data,
      image: image,
    }));
  };

  const updateAnswer = (questionId, selectedAnswer) => {
    setData({ ...data, [questionId]: selectedAnswer });
  };

  return (
    <div className="main">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/forms"
            element={
              <FormPage
                questions={QUESTIONS}
                updateAnswer={updateAnswer}
                data={data}
                updateAvatarAuthor={updateAvatarAuthor}
              />
            }
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/similar" element={<SimilarProfile />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
