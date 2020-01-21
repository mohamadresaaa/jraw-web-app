import axios from "axios"
import store from "@/store"

// Set url and headers
const http = axios.create({
  baseURL: "http://localhost:300",
  headers: {
    "authorization": localStorage.getItem("access-jraw") || ""
  }
})

// Enabled loading
http.interceptors.request.use(config => {
  store.commit("setMainState", {
    resource: "loading",
    item: true
  })
  return config
}, error => {
  store.commit("setMainState", {
    resource: "loading",
    item: false
  })
  return Promise.reject(error)
})

// Disabled loading
http.interceptors.response.use(config => {
  store.commit("setMainState", {
    resource: "loading",
    item: false
  })
  return config
}, error => {
  store.commit("setMainState", {
    resource: "loading",
    item: false
  })
  return Promise.reject(error)
})

export default http
