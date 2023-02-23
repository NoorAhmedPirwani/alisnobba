import { useParams } from "react-router-dom";
import styles from './ProductDetail.module.css';
import AddToCartButton from '../../Components/AddToCartButton/AddToCartButton';


const ProductDetail = (props) => {
    const{productitems,itemadd} = props;
    const {id} = useParams();
    // eslint-disable-next-line eqeqeq
    const myItem = productitems.find(item => item.id == id);
    
    return(
        <>
        <div className={styles.card}>
            <h1>{myItem.productName}</h1>
            <p>{myItem.longDescription}</p>
            <div className={styles.internal}>
            <img src={myItem.imageLink} alt="ruby-slippers" />
            <div className={styles.moreinternal}>
            <h2>Rs. {myItem.price}</h2>
            <AddToCartButton product={myItem} itemadd={itemadd} />
            </div>
            </div>
        </div>
        </>
    );
}
export default ProductDetail;