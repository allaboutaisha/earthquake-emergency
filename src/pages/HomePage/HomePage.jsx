import { useState, useEffect, useRef } from 'react';
import * as packagesAPI from '../../utilities/packages-api';
import * as ordersAPI from '../../utilities/orders-api';
// import './HomePage.css';
import { Link } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
import PackageList from '../../components/PackageList/PackageList';
import CategoryList from '../../components/CategoryList/CategoryList';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function HomePage({ user, setUser, setCart }) {
    const [thePackages, setThePackages] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const categoriesRef = useRef([]);

    useEffect(function() {
        async function getPackages() {
            const packages = await packagesAPI.getAll();
            categoriesRef.current = packages.reduce((cats, packageItem) => {
                const cat = packageItem.category.name;
                return cats.includes(cat) ? cats : [...cats, cat];
            }, []);
            setActiveCat(categoriesRef.current[1]);
            setThePackages(packages);
        }
        getPackages();

        async function getCart() {
            const cart = await ordersAPI.getCart()
            setCart(cart)
          }
        getCart()

    }, []);

    async function handleAddToOrder(packageItemId) {
        const cart = await ordersAPI.addPackageToCart(packageItemId)
        setCart(cart)
      }

    return (
        <main className="HomePage">
          <aside>
            {/* <Logo /> */}
            <CategoryList
              categories={categoriesRef.current}
              activeCat={activeCat}
              setActiveCat={setActiveCat}
            />
            <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
            <UserLogOut user={user} setUser={setUser} />
          </aside>
          <PackageList
            thePackages={thePackages.filter(packageItem => packageItem.category.name === activeCat)}
            handleAddToOrder={handleAddToOrder}
          />
        </main>
      );
    }