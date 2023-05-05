/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};

export default function Child({ onUploadImage, image, removeimage }) {
  return (
    <>
      <div style={styles.preview}>
        <>
          <input name="car_file" type="file" onChange={onUploadImage} />
          {image.image === "" ? null : (
            <img
              style={styles.image}
              src={image.image}
              // src={`${process.env/.REACT_APP_BASE_URL}/file/${image.image}`}
              className="img-fluid"
              alt="thumb"
            />
          )}
          <button onClick={removeimage} style={styles.delete}>
            Remove This Image
          </button>
        </>
      </div>
    </>
  );
}
