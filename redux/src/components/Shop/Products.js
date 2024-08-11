import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My first book',
    quantity: 1,
    description: 'My first book description',
  },
  {
    id: 'p2',
    price: 5,
    title: 'My second book',
    description: 'My second book description',
  },
  {
    id: 'p3',
    price: 9,
    title: 'My third book',
    description: 'My third book description',
  },
  {
    id: 'p4',
    price: 8,
    title: 'My fourth book',
    description: 'My fourth book description',
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
