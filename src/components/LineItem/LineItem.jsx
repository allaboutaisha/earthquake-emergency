import './LineItem.css';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
    console.log(lineItem.packageItem.category)
  return (
    <div className="LineItem">
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineItem.packageItem.packageName}:<br/>{lineItem.packageItem.details}</span>
        <span>{lineItem.packageItem.price.toFixed(2)}</span>
      </div>
      {/* <div className="flex-ctr-ctr">{lineItem.packageItem.details}</div> */}
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.packageItem._id, lineItem.qty - 1)}
            >−</button>
          }
        <span>{lineItem.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.packageItem._id, lineItem.qty + 1)}
            >+</button>
        }
      </div>
      <div className="ext-price">${lineItem.extPrice.toFixed(2)}</div>
    </div>
  );
}