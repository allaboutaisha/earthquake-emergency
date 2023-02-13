import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
} 

export function addPackageToCart(packageItemId) { 
  return sendRequest(`${BASE_URL}/cart/packages/${packageItemId}`, 'POST');
}

export function setPackageQtyInCart(packageItemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { packageItemId, newQty });
}

// Updates the order's (cart's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}
