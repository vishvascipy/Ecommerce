// import React, { useState } from "react";

// function RatingAndReview({ product }) {
//     const [userReview, setUserReview] = useState({ user: "", comment: "", rating: 0 });
//     const [showReviewForm, setShowReviewForm] = useState(false);

//     const handleReviewSubmit = (e) => {
//         e.preventDefault();
//         const updatedProduct = { ...product };
//         updatedProduct.reviews = [...(product.reviews || []), userReview];
//         setUserReview({ user: "", comment: "", rating: 0 });
//         setShowReviewForm(false);
//     };

//     return (
//         <div>
//             <h5>Product Ratings and Reviews</h5>
//             <div>
//                 <p>Average Rating: {product.rating}</p>
//                 {(product.reviews || []).map((review) => (
//                     <div key={review.id}>
//                         <p>{review.user}: {review.comment}</p>
//                         <p>Rating: {review.rating}</p>
//                     </div>
//                 ))}
//             </div>
//             {showReviewForm ? (
//                 <div>
//                     <h6>Add Your Review</h6>
//                     <form onSubmit={handleReviewSubmit}>
//                         <label>UserName:</label>
//                         <input type="text" value={userReview.user} onChange={(e) => setUserReview({ ...userReview, user: e.target.value })} required /><br />
//                         <label>Comment:</label>
//                         <textarea value={userReview.comment} onChange={(e) => setUserReview({ ...userReview, comment: e.target.value })} required></textarea>
//                         <label>Rating:</label>
//                         <input type="number" min="1" max="5" value={userReview.rating} onChange={(e) => setUserReview({ ...userReview, rating: e.target.value })} required /><br />
//                         <button className="btn btn-info" type="submit">Submit</button>
//                         <button className="btn btn-info" type="button" onClick={() => setShowReviewForm(false)}>Cancel</button>
//                     </form>
//                 </div>
//             ) : (
//                 <button className="btn btn-primary" onClick={() => setShowReviewForm(true)}>Add a Review</button>
//             )}
//         </div>
//     );
// }

// export default RatingAndReview;

