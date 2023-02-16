import './PackageList.css';
import PackageListItem from '../PackageListItem/PackageListItem';

export default function PackageList({ thePackages, handleAddToOrder }) {
  const packages = thePackages.map(packageItem =>
    <PackageListItem
      key={packageItem._id}
      packageItem={packageItem}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="PackageList">
      {packages}
    </main>
  );
}