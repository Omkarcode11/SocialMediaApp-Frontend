import { useState } from "react";

function usePhotoToUrl(userImg) {
  let imgUrl = "";

  let [imgString,setImgString] = useState('')
  const data = new FileReader();

  data.addEventListener("load", () => {
    // imgUrl = data.result;
    setImgString(data.result)
  });

  console.log(imgString);
  return imgString;
}

export default usePhotoToUrl;
