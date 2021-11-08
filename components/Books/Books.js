import { useContext } from "react";
import { cartContext } from "../../pages/_app";
import { addToBasket } from "../Redux/Slices/basketSlices";
import Book from "./Book";

const Books = ({ books }) => {
  const [cart, setCart] = useContext(cartContext);
  // const dispatch = useDispatch();


  const addToCart = (book) => {
    const newCart = [...cart];
    const index = newCart.find((item) => item._id === book._id);
    // console.log(index);
    if (!index) {
      newCart.push(book);
    } else {
      alert("Book is already exist in cart...");
    }
    setCart(newCart);

    // dispatch(addToBasket(book));
  };
  return (
    <div className="container-fluid mt-5">
      <div className="row mx-5">
        {books.map((book) => (
          <Book key={book._id} book={book} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Books;
