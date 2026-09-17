import { useEffect, useState } from 'react';
import API from '../api/api.js';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [inStock, setInStock] = useState(true);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get('/products');
      setProducts(res.data);
    } catch (err) {
      alert('Failed to load products');
    }
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('inStock', inStock);

    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }

    try {
      await API.post('/products', formData);
      alert('Product created successfully!');
      fetchProducts();
      // Reset form
      setTitle(''); setDescription(''); setPrice(''); setCategory(''); setFiles([]);
    } catch (err) {
      alert(err.response?.data?.message || 'Product creation failed');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await API.delete(`/products/${id}`);
      fetchProducts();
    } catch (err) {
      alert('Failed to delete product');
    }
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '30px auto', padding: '0 20px' }}>
      <h1>Admin Product Management</h1>

      {/* Add Product Form */}
      <form onSubmit={handleCreateProduct} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', marginBottom: '40px' }}>
        <h3>Add New Product</h3>
        <input type="text" placeholder="Product Title" value={title} onChange={e => setTitle(e.target.value)} required style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px' }} />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px' }} />
        <input type="number" placeholder="Price (PKR)" value={price} onChange={e => setPrice(e.target.value)} required style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px' }} />
        <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} required style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px' }} />

        <label style={{ display: 'block', marginBottom: '15px' }}>
          <input type="checkbox" checked={inStock} onChange={e => setInStock(e.target.checked)} /> In Stock
        </label>

        <label style={{ display: 'block', marginBottom: '5px' }}>Product Images (Multiple):</label>
        <input type="file" multiple onChange={e => setFiles(e.target.files)} required style={{ display: 'block', marginBottom: '15px' }} />

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Save Product
        </button>
      </form>

      {/* Products Table */}
      <h3>Catalog Items</h3>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td><img src={item.images[0]} alt={item.title} width="50" height="50" style={{ objectFit: 'cover' }} /></td>
              <td>{item.title}</td>
              <td>Rs. {item.price}</td>
              <td>{item.category}</td>
              <td>{item.inStock ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => handleDelete(item._id)} style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}