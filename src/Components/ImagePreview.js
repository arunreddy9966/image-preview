import React, { useState } from 'react'

function ImagePreview() {
    let[profiepic,setprofilepic]= useState('./images/lordshiva.png')
  return (
    <div>
        <label>profile pic</label>
        <input type="file" accept="image/*" onChange={(eo)=>{
        console.log(eo.target.files);
        let selectedImagepath=URL.createObjectURL(eo.target.files[0]);
        setprofilepic(selectedImagepath);
        console.log(selectedImagepath);
        }}></input>
        <br></br>
        <img className="profilepreview" src= {profiepic}></img>
    </div>
  )
}

export default ImagePreview