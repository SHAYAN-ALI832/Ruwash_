import { openWhatsAppOrder } from '../utils/whattsapp.js';

export default function ProductCard({ product }) {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
    }}>
      <div>
        <img 
          src={product.images[0] || 'https://via.placeholder.com/300'} 
          alt={product.title} 
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '6px',
            marginBottom: '12px'
          }} 
        />
        <span style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', fontWeight: 'bold' }}>
          {product.category}
        </span>
        <h3 style={{ margin: '8px 0', fontSize: '18px' }}>{product.title}</h3>
        <p style={{ color: '#555', fontSize: '14px', height: '40px', overflow: 'hidden' }}>
          {product.description}
        </p>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#2c3e50', margin: '12px 0' }}>
          Rs. {product.price}
        </p>
      </div>

      <button 
        onClick={() => openWhatsAppOrder(product, whatsappNumber)}
        disabled={!product.inStock}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: product.inStock ? '#25D366' : '#cccccc',
          color: '#ffffff',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          fontSize: '14px',
          cursor: product.inStock ? 'pointer' : 'not-allowed',
          transition: 'background-color 0.2s'
        }}
      >
        {product.inStock ? 'Order via WhatsApp' : 'Out of Stock'}
      </button>
    </div>
  );
}