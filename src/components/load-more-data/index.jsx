import { useEffect, useState } from "react";
import './style.css';

export default function LoadMoreData() {

    // State for loading indicator
    const [loading, setLoading] = useState(false);

    // State for storing fetched products
    const [products, setProducts] = useState([]);

    // State to track pagination count
    const [count, setCount] = useState(0);

    // State to disable "Load More" button after reaching max
    const [disableButton, setDisableButton] = useState(false);

    // Fetch products from API
    async function fetchProducts() {
        try {
            setLoading(true);

            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
            const result = await response.json();

            if(result && result.products && result.products.length) {
                setProducts(prevData => [...prevData, ...result.products]);
            }

            console.log(result);
        } catch(e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    // Fetch products on component mount and whenever count changes
    useEffect(() => {
        fetchProducts();
    }, [count]);

    // Disable button when 100 products are loaded
    useEffect(() => {
        if(products.length >= 100) {
            setDisableButton(true);
        }
    }, [products]);

    // Show loading message
    if(loading) {
        return <div> Loading Data! Please Wait! </div>;
    }

    return (
        <div className="load-more-container">

            {/* Products grid */}
            <div className="product-container">
                {products.length ? 
                    products.map(item => (
                        <div className="product" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    )) 
                    : <p>No products found.</p>
                }
            </div>

            {/* Load more button */}
            <div className="button-container">
                <button 
                    disabled={disableButton} 
                    onClick={() => setCount(count + 1)}
                > 
                    Load More Products
                </button>

                {disableButton && <p> You have reached 100 products </p>}
            </div>

        </div>
    );
}
