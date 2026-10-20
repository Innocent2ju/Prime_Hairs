import { Schema, Document, Model, model, models } from 'mongoose';

/**
 * Interface representing a Product document in TypeScript.
 */
export interface IProduct extends Document {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  price: number;
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Mongoose schema for Product.
 */
const ProductSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    overview: {
      type: String,
      required: [true, 'Overview is required'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },
    organizer: {
      type: String,
      required: [true, 'Organizer is required'],
      trim: true,
    },
    tags: {
      type: [String],
      required: [true, 'Tags are required'],
      validate: {
        validator: (v: string[]) => Array.isArray(v) && v.length > 0,
        message: 'At least one tag is required',
      },
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Pre-save hook to automatically generate a URL-friendly slug from the title
 * only if the title has changed or the slug is missing.
 */
ProductSchema.pre('save', function () {
  if (this.isModified('title') || !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
});

export const Product: Model<IProduct> =
  models.Product || model<IProduct>('Product', ProductSchema);

export default Product;
