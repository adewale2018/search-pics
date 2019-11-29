import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 3dc919119848f8a85e9ebe20fe8d0bcc5cfcbd4fedab5ba002de92450fcbebb9"
  }
});
