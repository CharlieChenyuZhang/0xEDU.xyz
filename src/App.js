import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import FileUpload from "@mui/icons-material/FileUpload";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function App() {
  const HeaderMsg = styled.div`
    font-style: italic;
    font-size: 3em;
    font-weight: 900;
  `;
  const SecondaryHeaderMsg = styled.div`
    margin-bottom: 60px;
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
    <div className="App">
      <header className="App-header">
        <HeaderMsg>NFM</HeaderMsg>
        <SecondaryHeaderMsg>Non-fungible Memes</SecondaryHeaderMsg>
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
      </header>
    </div>
  );
}

export default App;
