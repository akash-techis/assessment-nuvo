import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import API from "../API"
import Select from '../components/Select';
import Description from '../components/Description';

const api = new API();

const Home = () => {
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState(null);
   
    const limit=5
    useEffect(()=>{
        api
            .fetchProducts({limit})
            .then((response)=>{
                setProducts(response.data);
                setSelected(response.data[0].id)
                console.log(response.data)
                 
            })
            
    }, []);

   
  return (
    <div>
      <Heading />
     
      <div className="items">
        <div class = "home-description">
        {products.map((product) => (
          <Select key={product.id} product={product} selected={selected} setSelected={setSelected}/>
          

        ))}
        </div>
        <div className="description">
          {products.length > 0 && (
            <>
              {products.map((product) => (
                <Description
                  key={product.id}
                  product={product}
                  selected={selected}
                />
                // <div className={productDetails} key={product.id}>
                //   <h2>{product.price}</h2>
                // </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home