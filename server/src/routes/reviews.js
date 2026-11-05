import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { getReviewsForListing, createReview } from '../controllers/reviewController.js';

const router = Router();

// Reading reviews is public; posting one requires a logged-in user.
router.get('/', getReviewsForListing);
router.post('/', requireAuth, createReview);

export default router;
