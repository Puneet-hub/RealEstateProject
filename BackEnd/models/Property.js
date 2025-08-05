import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  location: String,
  price: Number,
  bedrooms: Number,
});

const Property = mongoose.model('Property', propertySchema);

export default Property;
