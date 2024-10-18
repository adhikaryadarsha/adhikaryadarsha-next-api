import Link from "next/link";

async function fetchData (){
 let data = await fetch('http://localhost:3000/api/users');
    data = data.json();
    return data;
}

export default async function Page(){
    const userData = await fetchData();
    return (
        <div>
            <h1 className="text-center text-3xl mt-5">User list</h1>
            {
                userData.map((item)=>(
                    <Link href={`userlist/${item.id}`}> <h2 className="text-center text">{item.name}</h2></Link>
                   
                ))
                
                
            }
            
         
            </div>
        
    )
}