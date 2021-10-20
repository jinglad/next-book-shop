import { useRouter } from "next/dist/client/router";

const checkoutPage = () => {
  const [cart, setCart] = useContext(CartContext);
  const route = useRouter();

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    totalPrice += parseInt(element.price);
  }

  const handleSubmitOrder = () => {
    fetch("https://aeolian-bottlenose-earthquake.glitch.me/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: sessionStorage.getItem("email"),
        books: cart,
      }),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Order Submitted Successfully...");
          setCart([]);
          route.push("/");
        }
      });
  };
  return (
    <div className="container-fluid">
      <div style={{ margin: "50px 300px" }}>
        <h1 className="mb-5">Checkout</h1>
        {cart.length > 0 && (
          <div
            style={{
              padding: "20px",
              boxShadow: "0 0 30px lightgray",
              borderRadius: "10px",
            }}
          >
            <div
              className="row pb-2 text-secondary"
              style={{ borderBottom: "1px solid lightgray" }}
            >
              <div className="col-md-6">Description</div>
              <div className="text-center col-md-1">Quantity</div>
              <div className="offset-md-4 col-md-1">Price</div>
            </div>

            {cart.map((book) => (
              <div key={book._id} className="row py-2 font-weight-bold">
                <div className="col-md-6">{book.name}</div>
                <div className="col-md-1 text-center">1</div>
                <div className="offset-md-4 col-md-1">${book.price}</div>
              </div>
            ))}

            <div
              className="row pt-2 font-weight-bold"
              style={{ borderTop: "1px solid lightgray" }}
            >
              <div className="col-md-6">Total</div>
              <div className="text-center col-md-1">{cart.length}</div>
              <div className="offset-md-4 col-md-1">${totalPrice}</div>
            </div>
          </div>
        )}
        <div className="mt-3 float-right">
          <button
            onClick={handleSubmitOrder}
            className="btn btn-lg btn-primary"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default checkoutPage;
