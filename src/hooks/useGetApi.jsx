import { URL } from "../utils/BaseUrl";
import axios from "axios";

async function useGetApi(path,headers={}) {
  let {data} = await axios.get(URL + path,headers);
 

  return data
}

export default useGetApi;
