import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import Card from "../../components/card/Card";

function Home() {
  const context = useContext(CartContext);
  return (
    <>
      <section>
        <p className="title">All Products:</p>
      </section>
      <img className="index-first-bg" src="/hero-gradient.svg" alt="" />
      <main className="main-index">
        {context.shop.map((p) => (
          <Card key={p.id} {...p} />
        ))}
      </main>
    </>
  );
}

export default Home;
