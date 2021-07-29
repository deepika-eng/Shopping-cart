import React from 'react'

import ItemCard from './ItemCard'
import  data from './data'


function Home (){
    //console.warn(data.productData)
    return (
       <>
           <h1 className="text-center mt-3">All Items</h1>
           <section className="py-4 container">
               <div className="row justify-content-center">

                  {data.productData.map((item,index)=>{
                      return(
                        <ItemCard img={item.img} 
                        title={item.name} 
                        available={item.available} 
                          price={item.price} 
                           item={item}
                            key={index} 
                            category={item.category}
                          vendor={item.vendor}
                        />
                      )
                  })}

            
               </div>

           </section>
       </>
    )
}

export default Home