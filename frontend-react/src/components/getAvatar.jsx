import React, { useState } from "react";
import PropTypes from "prop-types";
import "../scss/getAvatar.scss";

function GetAvatar({ updateAvatar, text = "Get avatar!" }) {
  const fr = new FileReader();
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);

  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      const formData = new FormData();
      formData.append("image", myFile);
      const token = localStorage.getItem("token");
      fetch("http://localhost:8080/profile/picture", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          if (response.status != 200) setError("No se pudo subir la imagen");
          else setSuccess(true);
        })
        .catch((error) => {
          setError(error.message);
        });
      fr.addEventListener("load", getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    updateAvatar(image);
  };

  return (
    <>
      {error && error}
      {success && <p>Imagen subida con éxito</p>}
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
    </>
  );
}

GetAvatar.propTypes = {
  updateAvatar: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default GetAvatar;
