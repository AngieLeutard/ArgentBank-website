import '../index.css';

import FeaturesChat from '../components/FeaturesChat';
import FeaturesMoney from '../components/FeaturesMoney';
import FeaturesSecurity from '../components/FeaturesSecurity';

function Features() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeaturesChat />
            <FeaturesMoney />
            <FeaturesSecurity />
      </section>
    )
}

export default Features