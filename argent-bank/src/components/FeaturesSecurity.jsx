import '../index.css';
import iconSecu from '../assets/icon-security.png'

function FeaturesSecurity() {
    return (
        <div className="feature-item">
            <img
                src={ iconSecu }
                alt="Chat Icon"
                className="feature-icon"
            />
            <h3 className="feature-item-title">Security you can trust</h3>
            <p>We use top of the line encryption to make sure your data and money
            is always safe.</p>
        </div>
    )
}

export default FeaturesSecurity