import { useState, useEffect, createContext, useContext } from "react";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:5000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, SetCurrentCity] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error fetching data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      SetCurrentCity(data);
    } catch {
      alert("There was an error fetching data");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside CitiesProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities };
