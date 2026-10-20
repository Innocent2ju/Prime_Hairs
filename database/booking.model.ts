import mongoose, { Schema, Document, Model, model, models } from 'mongoose';
import { Product } from './products.model';

/**
 * Interface representing a Booking document in TypeScript.
 */
export interface IBooking extends Document {
  productId: mongoose.Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Mongoose schema for Booking.
 */
const BookingSchema = new Schema<IBooking>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Product ID is required'],
      index: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid email address',
      ],
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Pre-save hook to verify that the referenced Product exists before saving.
 */
BookingSchema.pre('save', async function () {
  const productExists = await Product.findById(this.productId);
  if (!productExists) {
    throw new Error(`Product with ID ${this.productId} does not exist.`);
  }
});

export const Booking: Model<IBooking> =
  models.Booking || model<IBooking>('Booking', BookingSchema);

export default Booking;
