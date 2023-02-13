import { useState, useEffect, useRef } from 'react';
import * as packagesAPI from '../../utilities/packages-api';
import * as ordersAPI from '../../utilities/orders-api'
// import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
import PackageList from '../../components/PackageList/PackageList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
    const [thePackages, setThePackages] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [cart, setCart] = useState(null)
    const categoriesRef = useRef([]);
    const navigate = useNavigate()

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
            console.log('hi')
            setCart(cart)
            console.log(cart)
          }
        getCart()

    }, []);

    async function handleAddToOrder(packageItemId) {
        const cart = await ordersAPI.addPackageToCart(packageItemId)
        setCart(cart)
      }
    
      async function handleChangeQty(packageItemId, newQty) {
        const updatedCart = await ordersAPI.setPackageQtyInCart(packageItemId, newQty)
        setCart(updatedCart)
      }
    
      async function handleCheckout() {
        await ordersAPI.checkout()
        navigate('/orders')
      }


    return (
        <main className="NewOrderPage">
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
          <OrderDetail
            order={cart}
            handleChangeQty={handleChangeQty}
            handleCheckout={handleCheckout}
          />
        </main>
      );
    }