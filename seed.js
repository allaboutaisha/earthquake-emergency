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
        {packageName: 'Premium Package', details: '10 blankets, 10 jackets, 10 gloves, and 10 hats', category: categories[0], price: 900.00},
        {packageName: 'Standard Package', details: '5 blankets, 5 jackets, 5 gloves, and 5 hats', category: categories[0], price: 500.00},
        {packageName: 'Premium Package', details: '30 body soap, 20 shampoo/conditioner, 30 toothpaste, and 50 toilet paper, feminine care, and towelettes', category: categories[1], price: 500.00},
        {packageName: 'Standard Package', details: '10 body soap, 10 shampoo/conditioner, 15 toothpaste, and 25 toilet paper feminine care, and towelettes', category: categories[1], price: 300.00},
        {packageName: 'Premium Package', details: '100 ct of diapers, clothes, formula, and toys', category: categories[2], price: 800.00},
        {packageName: 'Standard Package', details: '50 ct of diapers, clothes, formula, and toys', category: categories[2], price: 400.00},
        {packageName: 'Premium Package', details: 'Tents to shelter 100 individuals', category: categories[3], price: 500.00},
        {packageName: 'Standard Package', details: 'Tents to shelter 50 individuals', category: categories[3], price: 250.00},
        {packageName: 'Premium Package', details: 'Hot meals and drinks to serve 80 people for one week', category: categories[4], price: 1400.00},
        {packageName: 'Standard Package', details: 'Hot meals and drinks to serve 40 people for one week', category: categories[4], price: 700.00},
        {packageName: 'Premium Package', details: '100 ct of bandaids, ointments, flashlights, and OTC medication', category: categories[5], price: 300.00},
        {packageName: 'Standard Package', details: '50 ct of bandaids, ointments, flashlights, and OTC medication', category: categories[5], price: 150.00},
    ]);
    console.log(packages)
    process.exit();

})(); 