import { useState, useEffect, useRef } from 'react';
import * as packagesAPI from '../../utilities/packages-api';
import * as ordersAPI from '../../utilities/orders-api';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
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
    // const buttonStyle = {
    //     width: "30px",
    //     background: 'none',
    //     border: '0px'
    // };

    // const handleNextSlide = () => {
    //   this.slider.next();
    // };
    
    // const buttonProperties = {
    //   onClick: handleNextSlide,
    //   onTouchEnd: handleNextSlide,
    //   tabIndex: 0
    // };

    const properties = {
      arrows: false,
      swipe: true
    };

    // const slideRef = useRef(null);

    // const goToNext = () => {
    //   slideRef.current.next();
    // };

    const slideImages = [
        {
          url: 'https://static01.nyt.com/images/2023/02/10/multimedia/10quake-photos-update-08-gjhb/10quake-photos-update-08-gjhb-superJumbo.jpg?quality=75&auto=webp',
          caption: 'Emin Ozmen for The New York Times'
        },
        {
          url: 'https://static01.nyt.com/images/2023/02/09/world/09quake-photoupdate2-03/09quake-photoupdate2-03-superJumbo.jpg?quality=75&auto=webp',
          caption: 'Emily Garthwaite for The New York Times'
        },
        {
          url: 'https://static01.nyt.com/images/2023/03/07/multimedia/06turkey-quake-photos-chvp/06turkey-quake-photos-chvp-superJumbo.jpg?quality=75&auto=webp',
          caption: 'Bulent Kilic/Agence France-Presse — Getty Images'
        },
        {
          url: 'https://static01.nyt.com/images/2023/02/07/multimedia/07turkey-stack-3-tqzb/07turkey-stack-3-tqzb-superJumbo.jpg?quality=75&auto=webp',
          caption: 'Emin Ozmen for The New York Times'
        },
        {
          url: 'https://static01.nyt.com/images/2023/02/08/multimedia/08turkey-stack-1-wltg/08turkey-stack-1-wltg-superJumbo.jpg?quality=75&auto=webp',
          caption: 'Adem Altan/Agence France-Presse — Getty Images'
        },
        {
          url: 'https://static01.nyt.com/images/2023/02/06/multimedia/06turkey-quake-photos-01-pfgt/06turkey-quake-photos-01-pfgt-superJumbo.jpg?quality=75&auto=webp',
          caption: 'Sertac Kayar - Reuters'
        },
        {
          url: 'https://static01.nyt.com/images/2023/02/06/multimedia/06Turkey-earthquake-07-tkgv/06Turkey-earthquake-07-tkgv-superJumbo.jpg?quality=75&auto=webp',
          caption: 'Louai Beshara/Agence France-Presse — Getty Images'
        },
        {
          url: 'https://static01.nyt.com/images/2023/02/06/multimedia/06turkey-quake-photos-01-tcmv/06turkey-quake-photos-01-tcmv-superJumbo.jpg?quality=75&auto=webp',
          caption: 'Omer Yildiz/Anadolu Agency - Getty Images'
        },
        {
          url: 'https://ca-times.brightspotcdn.com/dims4/default/9c38251/2147483647/strip/true/crop/6000x4000+0+0/resize/2160x1440!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F43%2Fa4%2Ff87f91ca41dc8e677a68d847a812%2Fap23037521420199.jpg',
          caption: 'Ghaith Alsayed - AP'
        },
        {
          url: 'https://static01.nyt.com/images/2023/02/06/multimedia/06turkey-quake-photos-02-jbcm/06turkey-quake-photos-02-jbcm-superJumbo.jpg?quality=75&auto=webp',
          caption: 'Bakr Alkasem/Agence France-Presse — Getty Images'
        },
      ];

    return (
        <main className="HomePage">
          <div className="slide-container">
            <Slide {...properties}>
              {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                className="each-slide"
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                  height: '600px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundSize: 'cover'
                }}
                // onClick={goToNext}
                // onTouchEnd={goToNext}
                >
                <span style={{ position: 'absolute', top: '92%', padding: '10px', fontSize:'x-small', color: 'white' }}>
                  {slideImage.caption}
                </span>
                </div>
              </div>
            ))}
            </Slide>
          </div>
          <div className='AboutPage'>
            <h1>ABOUT</h1>
            <h2>Welcome to the earthquake emergency e-commerce. Browse this store to find a package you would like to send to those affected by the Turkiye and Syria earthquakes.</h2>
            <p>Early Monday morning, on February 6th, a 7.8 magnitude earthquake struck southeastern Turkiye and northwestern Syria. Later that day, a second 7.6 magnitude earthquake hit followed by its own series of aftershocks.  More than 40,000 lives have been lost in both countries and millions of people have been affected, leaving scores without shelter, food, and other basic necessities amid harsh weather conditions.</p>
          </div>
          <h1>SHOP BY CATEGORY</h1>
          <CategoryList
            categories={categoriesRef.current}
            activeCat={activeCat}
            setActiveCat={setActiveCat}
          />
          <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
          <UserLogOut user={user} setUser={setUser} />
          <h1>PACKAGES</h1>
          <PackageList
            thePackages={thePackages.filter(packageItem => packageItem.category.name === activeCat)}
            handleAddToOrder={handleAddToOrder}
          />
        </main>
      );
    }