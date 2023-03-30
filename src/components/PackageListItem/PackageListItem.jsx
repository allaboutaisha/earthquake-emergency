import './PackageListItem.css';
import { FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

export default function PackageListItem({ packageItem, handleAddToOrder, user }) {
    const navigate = useNavigate();
    return (
    <div className="PackageListItem">
      <div className="image flex-ctr-ctr">{packageItem.packageName === 'Premium Package' ? <FaStar style={{color: "gold"}} /> : <FaRegStar style={{color: "gold"}} />}</div>
      <div className="name">{packageItem.packageName}</div>
      <div className="details">{packageItem.details}</div>
      <div className="buy">
        <span>${packageItem.price.toFixed(2)}</span>
        {
          user ?
          <button className="btn-sm" onClick={() => handleAddToOrder(packageItem._id)}>
            ADD
          </button>
          :
          <button className="btn-sm" onClick={() => navigate('/auth')}>
            Sign In or Sign Up to Purchase
          </button>
        }
      </div>
    </div>
  );
}                   