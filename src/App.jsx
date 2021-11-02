import React, { useState } from "react";
import axios from "axios";
import { storage } from "./firebase";
import { resizeImg } from "./service/file";
import FileInput from "./components/fileInput";
import Button from "./components/button";
import Spinner from "./components/spinner";
import Navbar from "./components/navbar";
import RecognitionResult from "./components/recognitionResult";
import "./App.css";

function App() {
  const [mealImage, setMealImage] = useState(null);
  const [mealData, setMealData] = useState(null);
  const [url, setUrl] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleFileChange = (e) => {
    setMealImage(e.target.files[0]);
    setMealData(null);
    setUrl("");
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
      }
    );

    /** set the image size to be max 1MB */
    const newImg = await resizeImg(mealImage);

    /** send the Img to the backend */
    const formData = new FormData();
    formData.append("image", newImg, mealImage.name);

    const { data } = await axios.post(
      "https://meal-detect-api.herokuapp.com/uploadImage",
      formData
    );

    setMealData(data);
    setIsFetching(false);
  };
  return (
    <div className="App">
      <Navbar />
      <div className="App-Content">
        <div className="App-File_Section">
          <FileInput onFileChange={handleFileChange} />
          <p className="filename">{mealImage && mealImage.name}</p>
          <Button
            onBtnClick={handleUpload}
            value="Upload"
            disabled={mealImage === null}
          />
        </div>
        <div className="App-Spinner">{isFetching && <Spinner />}</div>
        <div className="App-Image">{url && <img src={url} alt="none" />}</div>

        {mealData && (
          <div className="App-Recognition-Results">
            <RecognitionResult data={mealData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
