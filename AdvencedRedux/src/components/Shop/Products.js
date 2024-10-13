import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>

        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          title="Laptop"
          price={999.99}
          description="High-performance laptop for all your computing needs."
        />

        <ProductItem
          title="Smartphone"
          price={799.49}
          description="Latest model smartphone with a stunning display and fast processor."
        />

        <ProductItem
          title="Headphones"
          price={149.99}
          description="Noise-cancelling over-ear headphones with crystal-clear sound."
        />

        <ProductItem
          title="Coffee Maker"
          price={89.99}
          description="Brew the perfect cup of coffee with this automatic coffee maker."
        />

        <ProductItem
          title="Gaming Chair"
          price={249.00}
          description="Ergonomic gaming chair for comfort during long gaming sessions."
        />

      </ul>

    </section>
  );
};

export default Products;
