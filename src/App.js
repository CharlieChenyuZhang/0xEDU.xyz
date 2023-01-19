import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import FileUpload from "@mui/icons-material/FileUpload";
import Button from "@mui/material/Button";
import ParticlesBg from "particles-bg";

function App() {
  const CATCH_PHRASE = "Convert your images to fun memes in seconds.";
  const DESCRIPTION =
    "We use Generative AI to create fun memes based on your images / NFTs to help you express your emotions and showcase your creativity.";

  const MsgContainer = styled.div`
    min-height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const HeaderMsg = styled.h1`
    font: "opensans-bold", sans-serif;
    color: #fff;
    letter-spacing: -2px;
    margin: 0 auto 18px auto;
    width: 80%;
  `;
  const SecondaryHeaderMsg = styled.h3`
    font: 27px/1.9em "librebaskerville-regular", serif;
    color: #ddd;
    margin: 0 auto;
    width: 70%;
  `;
  const ImagePreview = styled.img`
    width: 200px;
    height: 200px;
  `;
  const StepsContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
  `;
  const ResultContainer = styled.div``;
  const Step = styled.div`
    margin-right: 20px;
    margin-bottom: 10px;
    font-weight: bold;
  `;
  const ImageList = styled.div``;

  const [file, setFile] = useState();
  const handleFileUpload = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const itemData = [
    {
      img: "gifs/cat1.gif",
      title: "cat1",
    },
    {
      img: "gifs/cat2.gif",
      title: "cat2",
    },
    {
      img: "gifs/cat3.gif",
      title: "cat3",
    },
  ];

  return (
    <div className="">
      <header className="App-header">
        <MsgContainer>
          <HeaderMsg>{CATCH_PHRASE}</HeaderMsg>
          <SecondaryHeaderMsg>{DESCRIPTION}</SecondaryHeaderMsg>
        </MsgContainer>
        <ParticlesBg type="circle" bg={true} num={200} />
      </header>
      <div className="main">
        <StepsContainer>
          <Step>Pick an image</Step>
          <Button variant="contained" component="label">
            Upload
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={handleFileUpload}
            />
            <FileUpload></FileUpload>
          </Button>
        </StepsContainer>
        <StepsContainer>
          <Step>Preview</Step>
          <ImagePreview src={file} />
        </StepsContainer>
        <ResultContainer>
          <Step>AI Generated Memes</Step>
          <ImageList>
            {itemData.map((item) => (
              <ImagePreview src={file ? item.img : undefined} />
            ))}
          </ImageList>
        </ResultContainer>
      </div>
    </div>
  );
}

export default App;
