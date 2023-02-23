import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./ThankYou.module.css";

const ThankYou = (props) => {

    const emptyCart =()=>{
        fetch("")
    }
  return (
    <>
      <div className={styles.card}>
        <h1>
          Thanks for your order if you want to start demo again{" "}
          <Link to="/">
            <Button variant="contained" onClick={emptyCart}>Stays Over</Button>
          </Link>
          
        </h1>
      </div>
    </>
  );
};
export default ThankYou;
