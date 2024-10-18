export async function fetchData(){
let response = await fetch ('https://dummyjson.com/products');
    let data = await response.json();
    return data.products;
}




export default async function page (){

const mainData = await fetchData();

    return(
        <div>
            <h1>Server Api</h1>
            {
                mainData.map ((item)=>(
                    <h1 key={item.id}>{item.title}</h1>
                ))
            }
        </div>
    )
}
