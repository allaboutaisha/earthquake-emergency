// import OrderDetail from '../../components/OrderDetail/OrderDetail';
// import { useState } from 'react';

// export default function Cart({ user, setUser, handleChangeQty, handleCheckout }) {
export default function Cart({ user, setUser, handleChangeQty, handleCheckout }) {
    // const [cart, setCart] = useState(null)

    // create a new get function to get the entire cart

    // async function getCart() {
    //     const cart = await ordersAPI.getCart()
    //     setCart(cart)
    //   }
    // getCart()

    // async function handleAddToOrder(packageItemId) {
    //     const cart = await ordersAPI.addPackageToCart(packageItemId)
    //     setCart(cart)
    //   }

    // async function handleChangeQty(packageItemId, newQty) {
    //     const updatedCart = await ordersAPI.setPackageQtyInCart(packageItemId, newQty)
    //     setCart(updatedCart)
    //   }
    
    //   async function handleCheckout() {
    //     await ordersAPI.checkout()
    //     navigate('/orders')
    //   }

    return (
        // <main className="Cart">
        //   <OrderDetail
        //     order={cart}
        //     handleChangeQty={handleChangeQty}
        //     handleCheckout={handleCheckout}
        //   />
        // </main>
        <h1>This is the Cart</h1>
      );
}

