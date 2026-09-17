import { useEffect, useState } from 'react';
import API from '../api/api.js';
import ProductCard from '../components/productcard.jsx';

export default function Storefront() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get('/products');
      setProducts(res.data);
    } catch (err) {
      alert('Failed to load products from server.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h3 style={{ textAlign: 'center', marginTop: '50px' }}>Loading products...</h3>;
  }

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '30px 20px' }}>
      <h1 style={{ marginBottom: '24px', textAlign: 'center' }}>Featured Catalog</h1>
      
      {products.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No products available right now.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {products.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}