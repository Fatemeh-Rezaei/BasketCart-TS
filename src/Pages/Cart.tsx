import { useContext } from "react";
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";

import { CartContext } from "../context/CartContext";

import "./Cart.css";

export default function Cart() {
  const context = useContext(CartContext);

  return (
    <>
      {context.UserCart.length !== 0 ? ( // if shoppping cart is not empty
        <>
          <section className="cart-topbar">
            <p className="title">All Products In Basket:</p>
            <button onClick={context.removeAll}>
              Remove All Products <AiOutlineDelete className="delete-icon" />
            </button>
          </section>
          <main className="card-index">
            {context.UserCart.map((p) => (
              <div className="card">
                <img src={p.image} alt="" />
                <main>
                  <p>{p.title.slice(0, 13)} ...</p>
                  <div className="card-details">
                    <div>
                      {Array(Math.ceil(p.rating.rate))
                        .fill(0)
                        .map(() => (
                          <AiFillStar style={{ color: "orange" }} />
                        ))}
                      {Array(5 - Math.ceil(p.rating.rate))
                        .fill(0)
                        .map(() => (
                          <AiOutlineStar style={{ color: "orange" }} />
                        ))}
                    </div>
                    <p>{p.price} $</p>
                  </div>
                  <div className="product-count">
                    <p>Count: {p.count}</p>
                  </div>
                  <button onClick={() => context.removeProduct(p.id)}>
                    Remove From Basket
                  </button>
                </main>
              </div>
            ))}
          </main>
        </>
      ) : (
        <div className="emptyBasket">
          <img src="/empty.webp" alt="" />
          <p>Your Basket Is Empty :((</p>
        </div>
      )}
    </>
  );
}
