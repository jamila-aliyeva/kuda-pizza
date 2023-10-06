import ProductsCard from "../components/card/ProductsCard";
import { products } from "../components/data/products";

const ProductsPage = () => {
  return (
    <section>
      <div>
        <div className="products-row">
          {products.map((pr, i) => {
            <ProductsCard {...pr} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
