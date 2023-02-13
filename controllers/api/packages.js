const Package = require('../../models/package');

module.exports = {
    index,
    show
};

async function index(req, res) {
    const packages = await Package.find({}).sort('packageName').populate('category').exec();
    packages.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json(packages);
}

async function show(req, res) {
    const package = await Package.findById(req.params.id);
    res.json(package);
}