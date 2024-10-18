async function getUser (id){
 let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data.result;
}

export default async function page({params})

{
    const user = await getUser(params.userid)
    return (
        <div className="text-center">
            <h1 className="text-2xl">User details</h1>
            <h4>Name:{user.name}</h4>
            <h4>Age:{user.age}</h4>
        </div>
    )
}