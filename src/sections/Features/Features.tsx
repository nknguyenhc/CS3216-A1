import personalised from '../../assets/logos/personalised.svg';
import community from '../../assets/logos/community.svg';
import insightful from '../../assets/logos/insightful.svg';
import personalisedImage from '../../assets/images/personalised.svg';
import communityImage from '../../assets/images/community.svg';
import insightfulImage from '../../assets/images/insightful.svg';

type FeatureType = {
  adjective: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  color: string;
};

const features: FeatureType[] = [
  {
    adjective: 'Personalised',
    title: 'Find jobs tailored to you, quickly and easily.',
    description:
      'With our best in class recommendation algorithm, see the most relevant internships in just seconds.',
    image: personalisedImage,
    icon: personalised,
    color: '#14AE5C',
  },
  {
    adjective: 'Community-backed',
    title: 'Reviews that help you decide.',
    description:
      'With our best in class recommendation algorithm, see the most relevant internships in just seconds.',
    image: communityImage,
    icon: community,
    color: '#BF6A02',
  },
  {
    adjective: 'Insightful',
    title: 'Manage your applications effortlessly.',
    description:
      'Our built-in application tracking system allows you to stay updated on your applications, and see where you stand among other applicants.',
    image: insightfulImage,
    icon: insightful,
    color: '#7F94E6',
  },
];

const Features = (): JSX.Element => {
  return (
    <div className="features">
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          feature={feature}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
};

const FeatureCard = ({
  feature,
  reverse,
}: {
  feature: FeatureType;
  reverse: boolean;
}): JSX.Element => {
  return (
    <div className={`feature-card ${reverse ? 'feature-card-reverse' : ''}`}>
      <div className="feature-card-text">
        <div className="feature-card-header">
          <img src={feature.icon} alt={feature.title} />
          <h3 style={{ color: feature.color }}>{feature.adjective}</h3>
        </div>
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>
      </div>
      <div className="feature-card-image">
        <img src={feature.image} alt="" />
      </div>
    </div>
  );
};

export default Features;
