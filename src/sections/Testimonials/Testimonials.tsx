import reviewer1 from '../../assets/images/reviewer-1.svg';
import reviewer2 from '../../assets/images/reviewer-2.svg';
import reviewer3 from '../../assets/images/reviewer-3.svg';
import reviewer4 from '../../assets/images/reviewer-4.svg';
import reviewer5 from '../../assets/images/reviewer-5.svg';
import reviewer6 from '../../assets/images/reviewer-6.svg';
import reviewer7 from '../../assets/images/reviewer-7.svg';
import reviewer8 from '../../assets/images/reviewer-8.svg';
import reviewer9 from '../../assets/images/reviewer-9.svg';

type Testimonial = {
  text: string;
  name: string;
  yearField: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    text: 'Discovering InternTwine was the best thing that happened to me.',
    name: 'Deborah Beck',
    yearField: 'Y3 Computer Science',
    image: reviewer1,
  },
  {
    text: 'Using this platform transformed my job search experience. The streamlined application tracking and real-time updates kept me organised and informed every step of the way. Thanks to this tool, I landed my dream internship in record time!',
    name: 'Frank Doe',
    yearField: 'Y4 Computer Science',
    image: reviewer2,
  },
  {
    text: 'I was struggling to find the right job for months until I discovered InternTwine. Their personalised recommendations and easy-to-use interface made my search so much more efficient.',
    name: 'Mick Astley',
    yearField: 'Y3 New Media',
    image: reviewer3,
  },
  {
    text: 'I have been finding an internship for the last 6 months. When I started using InternTwine, I found my internship in less than a week.',
    name: 'Adam Smith',
    yearField: 'Y1 Psychology',
    image: reviewer4,
  },
  {
    text: 'I have been finding an internship for the last 6 months. When I started using InternTwine, I found my internship in less than a week.',
    name: 'David Goh',
    yearField: 'Y4 Accountancy',
    image: reviewer5,
  },
  {
    text: "This platform was a game-changer for my internship hunt. The intuitive tracking system made managing applications a breeze, and the insights provided helped me stay ahead of the competition. I couldn't have found my ideal position without it!",
    name: 'Lee Jia',
    yearField: 'Y3 Computer Science',
    image: reviewer6,
  },
  {
    text: 'Stop reading this. Use InternTwine now.',
    name: 'Ann Tan',
    yearField: 'Y2 Business',
    image: reviewer7,
  },
  {
    text: "InternTwine was a game-changer for my internship search. The platform's curated listings and detailed company profiles helped me find opportunities that perfectly aligned with my career goals.",
    name: 'Emily Chen',
    yearField: 'Y2 Medicine',
    image: reviewer8,
  },
  {
    text: 'I was having trouble finding internships that aligned with my interests and career goals. InternTwine completely changed the game for me. I landed a dream internship that has helped me gain valuable experience and build my professional network. Thank you, InternTwine!',
    name: 'Alex Wong',
    yearField: 'Y3 Science',
    image: reviewer9,
  },
];

const Testimonials = (): JSX.Element => {
  return (
    <div className="testimonials">
      <h2>See what our testers are saying</h2>
      <p>We've helped over a thousand people to find their internships.</p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: Testimonial;
}): JSX.Element => {
  return (
    <div className="testimonial-card">
      <p>{testimonial.text}</p>
      <div className="testimonial-card-footer">
        <img src={testimonial.image} alt={testimonial.name} />
        <div className="testimonial-card-author">
          <h3>{testimonial.name}</h3>
          <p>{testimonial.yearField}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
