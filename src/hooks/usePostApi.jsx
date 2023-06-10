import { URL } from "../utils/BaseUrl";
import axios from "axios";

async function usePostApi(path, body={}, headers = {}) {
  let data = await axios.post(URL + path, body, headers);

  if (data && data.data) {
    return data.data;
  }
  return data;
}

export default usePostApi;
