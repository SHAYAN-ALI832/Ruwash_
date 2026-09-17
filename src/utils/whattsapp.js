/**
 * Opens WhatsApp with a pre-filled order message for a product
 * @param {Object} product - Product details (title, price, category)
 * @param {string} phoneNumber - Target WhatsApp phone number (with country code, no +)
 */
export const openWhatsAppOrder = (product, phoneNumber) => {
  const message = 
    `Hello! I would like to order the following item:%0A%0A` +
    `*Product:* ${encodeURIComponent(product.title)}%0A` +
    `*Price:* Rs. ${product.price}%0A` +
    `*Category:* ${encodeURIComponent(product.category)}%0A%0A` +
    `Please confirm availability and share payment/delivery instructions.`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
};