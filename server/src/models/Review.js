import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    listing: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    // Reviews support light formatting (bold, links, line breaks), so the body
    // is stored as an HTML string and rendered as HTML by the client.
    body: { type: String, required: true }
  },
  { timestamps: true }
);

export const Review = mongoose.model('Review', reviewSchema);
