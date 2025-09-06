import useFetch from "./index"; // make sure path is correct

export default function UseFetchHookTest() {
    const { data, error, pending } = useFetch('https://dummyjson.com/products');

    console.log({ error, data, pending });

    return (
        <div>
            <h1>Use Fetch Hook</h1>

            {pending && <h2>Pending! Please wait...</h2>}

            {error && <h3>{error}</h3>}

            {data && data.products && data.products.length > 0 ? (
                data.products.map(productItem => (
                    <p key={productItem.id}>{productItem.title}</p> // use 'id' as key
                ))
            ) : null}
        </div>
    );
}
