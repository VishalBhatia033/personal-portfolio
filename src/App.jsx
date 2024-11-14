import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import {logData} from "./store/authSlice"
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
function App() {
  const [loading,setloading]=useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("data.json")
      .then((response) => {
        let userData=response.data;
        dispatch(logData({userData}));
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      
      {loading?<Loading/>:<> <Nav /> <Outlet /> <Footer /></>}
     
    </>
  );
}

export default App;
