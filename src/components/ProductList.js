import Title from "./Title";
import { ProductConsumer } from "../Context";
import Product from "./Product";

const ProductList = () => {
  return (
    <div>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="Products"></Title>
          <div className="row">
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
