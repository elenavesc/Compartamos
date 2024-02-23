import Header from"./header";
import Forms from "./forms";
import Footer from "./footer";

import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage"
import AboutUs from "./pages/AboutUs";
import FormPage from "./pages/FormPage";
import SimilarProfile from "./pages/SimilarProfiles";

import { Route, Routes } from "react-router-dom";

function App() {
    const updateAvatarAuthor = (image) => {
        const clonData = { ...data };
        clonData.image = image;
        setData(clonData);
        setSavedData((data) => ({
          ...data,
          image: image,
        }));
      };
     
    return (
        <div>
            <Header />
            <main>
            
                <Routes>
                  <Route path="/" element={<LandingPage/>}/>
                  <Route path="/forms"element={<FormPage updateAvatarAuthor={updateAvatarAuthor}/>}/>
                  <Route path="/card" element={<ProfilePage/>}/>
                  <Route path="/aboutUs" element={<AboutUs/>}/>
                  <Route path="/similar" element={<SimilarProfile/>}/>
                </Routes>
            
            </main>
            
            <Footer/>
        </div>
    )
}

export default App;