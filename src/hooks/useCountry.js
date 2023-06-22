import { useEffect, useState } from "react";

export default function useCountry(url) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filterCountries, setFilterCountries] = useState(countries);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw Error("it's not ok");
        } else {
          const data = await res.json();
          setCountries(data);
          setLoading(false);
          setFilterCountries(data);
        }
      } catch (err) {
        setError(err);
        console.log(err);
      }
    };

    fetchData();
  }, [url]);

  return {
    loading,
    error,
    countries,
    filterCountries,
    setFilterCountries,
  };
}
