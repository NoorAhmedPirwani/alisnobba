import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import styles from './ProductsList.module.css';
import AddToCartButton from '../../Components/AddToCartButton/AddToCartButton';


const ProductsList = (props)=>{

   const{productitems,itemadd} = props;
   const {id} = useParams();
   // eslint-disable-next-line eqeqeq, no-unused-vars
   const myItem = productitems.find(item => item.id == id);

    return(
        <>
        <table >
            <tbody >{productitems.length !== 0 ? productitems.map((item)=>{
            return <tr key={item.id}>
                    <td><img className={styles.thumbnail} src={item.imageLink} alt="ruby-slippers" /></td>
                    <td> <Link to={`/productdetail/${item.id}`}>{item.productName}</Link></td>
                    <td>{item.shortDescription}</td>
                    <td>Rs. {item.price}</td>
                    <td><AddToCartButton product={item} itemadd={itemadd} /></td>
                    </tr>}) : null }
        </tbody>
        </table>
        </>
    );
};

export default ProductsList;