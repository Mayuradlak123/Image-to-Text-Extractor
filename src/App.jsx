import React, { useState, useEffect } from "react";
import Tesseract from "tesseract.js";
import TextWrapper from "./Components/TextWrapper";
import ImageWrapper from "./Components/ImageWrapper";
import axios from "axios";
import Footer from "./Components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "copy-to-clipboard";
const API_KEY = "13082abb6c84133ee65e65bade47cc37";
function App() {
  
  toast.success("Text Copied", { position: "top-center", type: "success" });
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [text, setText] = useState(null);

  const convertImageToText = async () => {
    setLoading(true);
    const result = await Tesseract.recognize(imageUrl, "eng");
    setText(result.data.text);
    setLoading(false);
  };

  const uploadFile = async (e) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${API_KEY}`,
        formData,
        config
      );
      setImageUrl(res.data.data.url);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (imageUrl != null) {
      convertImageToText();
    }
  }, [imageUrl]);
  const copyText = () => {
    toast.success("Text Copied",{position:'bottom-center'})
    copy(text);
  };
  return (
    <React.Fragment>
      <div className="App">
        <img
          src="https://i.ibb.co/d7pWr27/logo.png"
          className="logo"
          alt="logo"
          style={{ marginTop: "1rem" }}
        />
        <div className="container">
          {loading && <div className="loader"></div>}
          {text == null ? (
            <>
              <ImageWrapper loading={loading} uploadFile={uploadFile} />
            </>
          ) : (
            <>
              <div className="btn">
                <button
                  onClick={copyText}
                > 
                  copy 
                </button>
              </div>
              <TextWrapper text={text} />
            </>
          )}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
