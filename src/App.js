import React, { useState } from "react";
import axios from "axios";
import { storage } from "./firebase";
import { resizeImg } from "./service/file";
import FileInput from "./components/fileInput";
import Button from "./components/button";
import Spinner from "./components/spinner";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  // axios.post("http://localhost:3001/image").then((d) => console.log(d.data));
  const [mealImage, setMealImage] = useState(null);
  const [url, setUrl] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const handleFileChange = (e) => {
    setMealImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    setIsFetching(true);

    /** upload image to firebase and get back the image url  */
    const uploadToFirebase = storage
      .ref(`images/${mealImage.name}`)
      .put(mealImage);
    uploadToFirebase.on(
      "state_changed",
      (snapshot) => {},
      (error) => console.log(error),
      async () => {
        const url = await storage
          .ref("images")
          .child(mealImage.name)
          .getDownloadURL();

        setUrl(url);
        setIsFetching(false);
      }
    );

    /** set the image size to be max 1MB */
    const newImg = await resizeImg(mealImage);
    console.log(newImg);
    console.log(mealImage);

    /** send the Img to the backend */

    const formData = new FormData();
    formData.append("image", newImg, mealImage.name);

    // const result = await axios.post(
    //   "http://localhost:3001/uploadImage",
    //   formData
    // );

    // console.log(result);
  };
  return (
    <div className="App">
      <Navbar />
      <FileInput onFileChange={handleFileChange} />
      <Button onBtnClick={handleUpload} value="Upload" />
      {isFetching && <Spinner />}
      {url && (
        <img src={url} alt="none" style={{ width: "15rem", height: "15rem" }} />
      )}
    </div>
  );
}

export default App;
