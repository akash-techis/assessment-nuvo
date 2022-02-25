import React, {useState, useEffect} from 'react'

const Description = ({product, selected}) => {
     const [productDetails, setProductDetails] = useState("");
      useEffect(() => {
          if (product.id === selected) {
            setProductDetails("description");
          } else {
            setProductDetails(" description-hide");
          }
      }, [selected]);
  return (
    <div>
      <div className={productDetails} key={product.id}>
        <h2>${product.price}</h2>
        <h4>{product.description}</h4>
        <h3>rating: {product.rating.rate}</h3>
        <h3>count: {product.rating.count}</h3>
        <button>Add to Cart</button>
       
      </div>
    </div>
  );
}

export default Description