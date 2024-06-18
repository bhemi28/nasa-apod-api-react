import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModel] = useState(false);

  function handleToggleModal() {
    setShowModel(!showModal);
  }

  useEffect(() => {
    async function getApiData() {
      const NASA_API = import.meta.env.VITE_APOD_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API}`;

      const date = new Date().toDateString();
      const localKey = `NASA-${date}`;

      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("fetched from cache!");

        return;
      }

      localStorage.clear();

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("fetched from api!");
      } catch (err) {
        console.log(err.message);
      }
    }

    getApiData();
  }, []);

  return (
    <main className=" relative bg-zinc-800 w-screen h-screen">
      {data ? (
        <Main data={data} />
      ) : (
        <div className="h-full w-full text-6xl text-zinc-200 flex items-center justify-center">
          <i className="ri-rocket-2-fill animate-bounce"></i>
        </div>
      )}
      {data && <Footer handleToggleModal={handleToggleModal} data={data} />}
      {showModal && (
        <Sidebar handleToggleModal={handleToggleModal} data={data} />
      )}
    </main>
  );
}

export default App;
