import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'my first books',
    description: 'first books i wrote',
  },
  {
    id: 'p2',
    price: 8,
    title: 'my second books',
    description: 'second books i wrote',
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((products)=>{
          return <ProductItem
            key={products.id}
            id={products.id}
            title={products.title}
            price={products.price}
            description={products.description}
          />
        })}


      </ul>
    </section>
  );
};

export default Products;
