import { URL } from "../utils/BaseUrl";
import axios from "axios";

async function usePutApi(path, body={}, headers = {}) {
  let {data} = await axios.put(URL + path, body, headers);

  return data;
}

export default usePutApi;
