import styled from "styled-components";

const Book = ({ book , addToCart}) => {
  const { name, author, image } = book;

  const img = `https://aeolian-bottlenose-earthquake.glitch.me/${image}`;

  return (
    <div className="col-md-6 col-lg-4">
      <BookContainer>
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p>{author}</p>
        <div className="d-flex justify-content-between mt-2">
          <h2 style={{ fontWeight: 600, color: "#6946f4" }}>$234</h2>
          <div>
            <button onClick={() => addToCart(book)} className="btn btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      </BookContainer>
    </div>
  );
};

export default Book;

const BookContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 50px;
  padding: 20px;
  box-shadow: 0 0 10px lightgray;
  border-radius: 10px;
  & img {
    object-fit: contain;
    background-color: lightgray;
    width: 100%;
    height: auto;
    padding: 25px;
    border-radius: 10px;
    margin-bottom: 5px;
  }
  & h3{
      font-size: 20px;
  }
  & p {
    margin: 0;
  }
`;
