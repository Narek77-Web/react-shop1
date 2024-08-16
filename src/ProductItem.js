import { useState } from "react"



export function ProductItem({item}){

    const [showDetail, setShowDetail] = useState(false);


    return <div className="ProductItem shadow-md p-4 relative">
        <img className=" h-96 w-full" src={item.image} alt={item.title} />
        <div className=" text-center font-bold text-xl">{item.title}</div>
        <div className=" text-center italic font-bold">{item.category}</div>
        <div className=" italic">
            { item.description.length > 200 ? 
               <span>{item.description.slice(0, 200)}<button onClick={()=> setShowDetail(true)}>...</button></span>
              :
              item.description  
            }
        </div>
        <div className=" font-bold text-green-700">Price: {item.price}$</div>
        <button className=" bg-green-700 text-white px-4 py-2 absolute right-1 bottom-1 hover:bg-green-400 hover:text-green-700">add to cart</button>


      {
        showDetail  &&   <div className="Detail fixed top-0 right-0 bottom-0 left-0 bg-black/80 z-10 flex justify-center items-center flex-col">
            <div className=" absolute top-2 right-2 text-3xl text-white font-bold cursor-pointer" onClick={()=> setShowDetail(false)}>X</div>


            <div className=" text-center font-bold text-xl text-white italic max-w-[80%]">{item.title}</div>
            <div className=" text-center text-white italic max-w-[80%]">{ item.description}</div>

        </div>
      }


    </div>

}