import Header from"./header";
import Forms from "./forms";
import Footer from "./footer";

function App() {
    const updateAvatarProject = (image) => {
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
            <Forms 
            updateAvatarProject={updateAvatarProject}
            />
            <Footer/>
        </div>
    )
}

export default App;