import { URL } from "../utils/BaseUrl";
import axios from "axios";

async function useGetApi(path) {
  let {data }= await axios.get(URL + path);
 

  return data;
}

export default useGetApi;
