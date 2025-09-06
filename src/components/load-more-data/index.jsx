import { useState, useEffect, useCallback } from "react";
import './style.css';

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  // Wrap fetchProducts in useCallback so reference is stable
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
      const result = await response.json();

      if (result.products && result.products.length) {
        setProducts(prev => [...prev, ...result.products]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [count]);

  // Fetch products whenever count changes, using the stable fetchProducts function
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Disable load more button once 100 products are loaded
  useEffect(() => {
    if (products.length >= 100) {
      setDisableButton(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading Data! Please Wait!</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products.length > 0 ? (
          products.map(item => (
            <div className="product" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>

        {disableButton && <p>You have reached 100 products</p>}
      </div>
    </div>
  );
}
