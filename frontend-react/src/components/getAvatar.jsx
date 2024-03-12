import React from "react";
import PropTypes from "prop-types";
import '../scss/getAvatar.scss';

function GetAvatar({ updateAvatar, text = "Get avatar!" }) {
  
  const fr = new FileReader();

  
  const myFileField = React.createRef();
  
  const uploadImage = (ev) => {
    
    
    if (ev.currentTarget.files.length > 0) {
      
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener("load", getImage);
      fr.readAsDataURL(myFile);
    }
    
  };

  const getImage = () => {
    
    const image = fr.result;

    
    updateAvatar(image);
  };

  return (
    <label className="button">
      {text}
      <input
        type="file"
        accept="image/*"
        ref={myFileField}
        style={{ display: "none" }}
        onChange={uploadImage}
      />
    </label>
  );
}

GetAvatar.propTypes = {
  updateAvatar: PropTypes.func.isRequired, 
  text: PropTypes.string, 
};

export default GetAvatar;