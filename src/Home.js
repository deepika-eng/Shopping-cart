import React from 'react'
import { useState } from 'react'
import ItemCard from './ItemCard'
import data from './data'


function Home() {
  //console.warn(data.productData)

  const [category, setCategory] = useState("")



const getProductInCategory=(category)=>{
      return data.productData.filter(item=>item.category===category)
}
  

  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <div className='m-4'>
         Select a category
        <select onChange={(e)=>setCategory(e.target.value)}>
          <option>Vegetables</option>
          <option >Fruits</option>
  
            {getProductInCategory().map((item,index)=>{
              console.log(item.id,category)
                 return (
                  

                     (<option key={item.id} value={item.id}>{item.name}</option>)
                
                 )
               })}


        </select>
      </div>
      <section className="py-4 container">
        <div className="row justify-content-center">

          {
            data.productData.map((item, index) => {
              console.log(item.id, category)
              return (
                <ItemCard
                  img={item.img}
                  title={item.name}
                  available={item.available}
                  price={item.price}
                  item={item}
                  key={index}
                  category={item.category}
                  vendor={item.vendor}
                />
              )
            })
          }
        </div>

      </section>
    </>
  )
}

export default Home