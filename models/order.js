const mongoose = require('mongoose')
const Schema = mongoose.Schema
const packageSchema = require('./packageSchema')

const lineItemSchema = new Schema({
    qty: {
        type: Number,
        default: 1
    },
    packageItem: packageSchema
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

lineItemSchema.virtual('extPrice').get(function() {
    return this.qty * this.packageItem.price
})

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    lineItems: [lineItemSchema],
    isPaid: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

orderSchema.virtual('orderTotal').get(function() {
    return this.lineItems.reduce((total, packageItem) => total + packageItem.extPrice, 0)
})

orderSchema.virtual('totalQty').get(function() {
    return this.lineItems.reduce((total, packageItem) => total + packageItem.qty, 0)
})

orderSchema.virtual('orderId').get(function() {
    return this.id.slice(-6).toUpperCase()
})

orderSchema.statics.getCart = function(userId) {
    return this.findOneAndUpdate(
        { user: userId, isPaid: false },
        { user: userId },
        { upsert: true, new: true }
    )
}

orderSchema.methods.addPackageToCart = async function(packageItemId) {
    const cart = this
    const lineItem = cart.lineItems.find(lineItem => lineItem.packageItem._id.equals(packageItemId))
    if (lineItem) {
        lineItem.qty += 1
    } else {
        const packageItem = await mongoose.model('Package').findById(packageItemId)
        cart.lineItems.push({ packageItem })
    }
    return cart.save()
}

orderSchema.methods.setPackageQty = function(packageItemId, newQty) {
    const cart = this
    const lineItem = cart.lineItems.find(lineItem => lineItem.packageItem._id.equals(packageItemId))
    if (lineItem && newQty <= 0) {
        lineItem.remove()
    } else if (lineItem) {
        lineItem.qty = newQty
    }
    return cart.save()
}

module.exports = mongoose.model('Order', orderSchema)