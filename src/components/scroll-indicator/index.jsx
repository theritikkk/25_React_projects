import { useEffect, useState } from "react";
import './scroll.css'

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // fixed typo
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Fetch data from the provided URL
  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  // Calculate scroll percentage
  function handleScrollPercentage() {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrollPercentage((scrollTop / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage); // properly remove listener
    };
  }, []);

  if (errorMessage) {
    return <div> Error! {errorMessage} </div>;
  }

  if (loading) {
    return <div> Loading Data! Please wait... </div>;
  }

  return (
    <div>
      {/* Fixed header with scroll indicator */}
      <div className="top-container">
        <h1> Custom Scroll Indicator </h1>

        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Data listing */}
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
