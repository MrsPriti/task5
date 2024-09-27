// Array to store testimonial data
const testimonials = [
    {
        text: "On the other hand, we denounce with righteous indignation and dislike men who are beguiled and demoralized by the charms of pleasure moments.",
        name: "James N. Johnson",
        title: "CEO & Founder",
        image: "author1.png",
        rating: 4.5
    },
    {
        text: "Those who fail to understand the beauty of life may struggle with negative emotions. However, we choose to live with purpose and passion.",
        name: "Sarah K. Parker",
        title: "Marketing Manager",
        image: "author2.png",
        rating: 5
    },
    {
        text: "Success in life is not to be measured by what you accomplish, but by the opposition you have encountered.",
        name: "Michael T. Dean",
        title: "CTO",
        image: "author3.png",
        rating: 4
    }
];

// Track the current testimonial index
let currentTestimonial = 0;

// Function to update testimonial content
function updateTestimonial(index) {
    const testimonial = testimonials[index];
    document.querySelector('.testimonial-right blockquote p').textContent = testimonial.text;
    document.querySelector('.author-image').src = testimonial.image;
    document.querySelector('.author-details h4').textContent = testimonial.name;
    document.querySelector('.author-details p').textContent = testimonial.title;
    
    // Update star rating
    const ratingContainer = document.querySelector('.rating');
    ratingContainer.innerHTML = ''; // Clear previous stars
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        if (i <= Math.floor(testimonial.rating)) {
            star.innerHTML = '&#9733;'; // Full star
        } else if (i - testimonial.rating < 1) {
            star.innerHTML = '&#9733;'; // Half star
        } else {
            star.innerHTML = '&#9734;'; // Empty star
        }
        ratingContainer.appendChild(star);
    }
}

// Event listeners for prev and next buttons
document.querySelector('.prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
    updateTestimonial(currentTestimonial);
});

document.querySelector('.next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
    updateTestimonial(currentTestimonial);
});

// Initialize the first testimonial
updateTestimonial(currentTestimonial);
