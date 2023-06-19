import { URL } from "../utils/BaseUrl";
import axios from "axios";

async function usePatchApi(path, body={}, headers = {}) {
  let {data} = await axios.patch(URL + path, body, headers);

  return data;
}

export default usePatchApi;
