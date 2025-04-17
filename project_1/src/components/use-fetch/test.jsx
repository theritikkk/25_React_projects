import useFetch from "."



export default function UseFetchHookTest() {

    const {data, error, pending} = 

        useFetch('https://dummyjson.com/products', {}    

    );

    console.log(error, data, pending);

    return <div>
        <h1> Use Fetch Hook </h1>

        {
            pending ? <h2> Pending ! Please wait. </h2> : null
        }

        {
            error ? <h3> {error} </h3> : null
        }

        {
            data && data.products && data.products.length ?
            ( data.products.map( 
                productItem => <p key={productItem.key}> 
                    {productItem.title} 
                </p> 
            ) )
            : null
        }

    </div>
}