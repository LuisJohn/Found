import { getAllItems } from "@/api";


const ListedItems = async () => {

    const items = true;
    const allItems = await getAllItems();
    

    return (

        <>
            {(items ? (
            <div className='gap-5 grid lg:grid-cols-3 flex-row justify-center mt-5 p-4'>
            {/* Items In Grid Sequence */}

            {allItems.map((item =>  (
                <div className="card card-compact w-100 bg-base-100 shadow-xl">
                <figure><img src={`${item.image}`}/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.description}</p>
                        <div className="card-actions justify-end">
                            <a href={`/item/${item.id}`} className="btn btn-primary">View Item</a>
                        </div>
                    </div>
                </div>
            )))}
            
            {/* Base <div> Ends Here! */}
        </div>
            ) : (
            <div className="flex flex-row justify-center align-middle mt-10">
                <span className="loading loading-ring loading-lg"></span>
                
            </div>
            ))}
        </>
        
        
    )
}

export default ListedItems;