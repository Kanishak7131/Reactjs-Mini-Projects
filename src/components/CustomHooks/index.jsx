import useFetch from "./useFetch"

export default function CustomHooks() {

    let { data, error, pending } = useFetch('https://dummyjson.com/products')
    return (<>
        {pending ? <h3>Pending ! Please wait</h3> : null}
        {error ? <h3>{error}</h3> : null}
        {data && data.products.length > 1 ? data.products.map((item) => <div key={item.id}>{item.title}</div>) : null}
    </>)
}