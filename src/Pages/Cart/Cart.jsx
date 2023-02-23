import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import { Button } from "@mui/material";

const Cart = (props) => {
  let { cart,sendFinalData } = props;

  const handelRemove = (id) => {
    cart = cart.filter((item) => item.id !== id);
  };

  return (
    <>
      <table>
        <tbody>
          {cart.length !== 0
            ? cart.map((item) => {
                return (
                  <tr>
                    <td>
                      <img
                        className={styles.thumbnail}
                        src={item.imageLink}
                        alt="ruby-slippers"
                      />
                    </td>
                    <td>
                      {" "}
                      <Link to={`/productdetail/${item.id}`}>
                        {item.productName}
                      </Link>
                    </td>
                    <td>{item.shortDescription}</td>
                    <td>Rs. {item.price}</td>
                    <td>{item.qty}</td>
                    <td>Rs. {item.price * item.qty}</td>
                    <td onClick={handelRemove(item.id)}>X</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>

      <Link to="/">
        <Button variant="contained">Return to shopping</Button>
      </Link>
      {/* <Link to="/thankyou"> */}
        <Button variant="contained" onClick={()=>sendFinalData()}>Check-out</Button>
      {/* </Link> */}
    </>
  );
};

export default Cart;
