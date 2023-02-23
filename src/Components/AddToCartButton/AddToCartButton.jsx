import React, { useState } from 'react';
import styles from './AddToCartButton.module.css';

function QuantityInput(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.input}>
      <button className={styles.btncart2} onClick={() => setQuantity(quantity !== 0 ? quantity - 1 : quantity)}>-</button>
      <input type="text" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
      <button className={styles.btncart2} onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
}

const AddToCartButton = (props) => {
  const { itemadd, product,q } = props;
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <QuantityInput q={q} setQuantitys={setQuantity} />
      {/* itemadd(product, quantity) */}
      <button className={styles.btncart} onClick={() => { itemadd(product, quantity) }}>Add to Cart</button>
    </div>
  );
}

export default AddToCartButton;