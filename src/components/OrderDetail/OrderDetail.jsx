import './OrderDetail.css';
import LineItem from '../LineItem/LineItem';

export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  const lineItems = order.lineItems.map(packageItem =>
    <LineItem
      lineItem={packageItem}
      isPaid={order.isPaid}
      key={packageItem._id}
      handleChangeQty={handleChangeQty}
    />
  );

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="Empty">Add Packages to Cart</div>
        }
      </div>
    </div>
  );
}