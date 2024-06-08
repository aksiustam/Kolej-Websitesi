"use server";

const fetchurl =
  "https://graph.instagram.com/v20.0/7669204796504727/media?access_token=IGQWROVmN3djdSbGlWRHBPbGhWNVlITzZAQckFwOUtZASWZAGaVQ1d3VUaWZAPS05USzVNMlpvVUdwVGZAzbTV2bEltekx6YzVjaHBNR0ZAvQkl2THA4blpSWUd3QnZArcHdUbUY5ZA0NMSE5SYjNSMkFqQTZAObU1JU0xGblEZD&fields=media_url,permalink,caption,media_type";

import axios from "axios";

export default async function getInstaPost() {
  try {
    const response = await axios.get(fetchurl);
    const data = response.data;

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
