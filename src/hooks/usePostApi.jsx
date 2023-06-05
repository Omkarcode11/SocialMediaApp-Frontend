import { URL } from "../utils/BaseUrl";
import axios from "axios";

async function usePostApi(path, body) {
  let { data } = await axios.post(URL + path, body);
  return data;
}

export default usePostApi;
