import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <h3 className={classes.price}>{price}</h3>
      </div>
      <div>
        <MealItemForm onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
