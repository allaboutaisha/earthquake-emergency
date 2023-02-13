require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Package = require('./models/package');

(async function() {

    await Category.deleteMany({});
    const categories = await Category.create([
      {name: 'Winter Essentials', sortOrder: 10},
      {name: 'Toiletries and Hygiene', sortOrder: 20},
      {name: 'Baby essentials', sortOrder: 30},
      {name: 'Shelter Materials', sortOrder: 40},
      {name: 'Meals', sortOrder: 50},
      {name: 'First Aid', sortOrder: 60},
    ]);
  
    await Package.deleteMany({});
    const packages = await Package.create([
        {packageName: 'Premium', image: '', details: '10 blankets, 10 jackets, 10 gloves, 10 hats', category: categories[0], price: 900.00},
        {packageName: 'Standard', image: '', details: '5 jackets, 5 gloves, 5 hats', category: categories[0], price: 500.00},
        {packageName: 'Premium', image: '', details: '30 body soap, 20 shampoo/conditioner, 30 toothpaste, 50 toilet paper, feminine care, and towelettes', category: categories[1], price: 500.00},
        {packageName: 'Standard', image: '', details: '10 body soap, 10 shampoo/conditioner, 15 toothpaste, 25 toilet paper feminine care, and towelettes', category: categories[1], price: 300.00},
        {packageName: 'Premium', image: '', details: 'Diapers, clothes, formula, and toys (100ct)', category: categories[2], price: 900.00},
        {packageName: 'Standard', image: '', details: 'Diapers, clothes, formula, and toys (50ct)', category: categories[2], price: 500.00},
        {packageName: 'Premium', image: '', details: 'Tents to shelter 50 individuals', category: categories[3], price: 900.00},
        {packageName: 'Standard', image: '', details: 'Tents to shelter 25 individuals', category: categories[3], price: 500.00},
        {packageName: 'Premium', image: '', details: 'Hot meals and drinks to serve 50 people for one week', category: categories[4], price: 1400.00},
        {packageName: 'Standard', image: '', details: 'Hot meals and drinks to serve 25 people for one week', category: categories[4], price: 700.00},
        {packageName: 'Premium', image: '', details: 'Bandaids, ointments, flashlights, and OTC medication for 50 individuals', category: categories[5], price: 800.00},
        {packageName: 'Standard', image: '', details: 'Bandaids, ointments, flashlights, and OTC medication for 25 individuals', category: categories[5], price: 400.00},
    ]);
    console.log(packages)
    process.exit();

})(); 