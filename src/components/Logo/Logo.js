import React from 'react';
import { PropTypes } from 'prop-types';

function Logo({ height, src, alt }) {
    return <img style={{ height }} src={src} alt={alt} />;
}

Logo.propTypes = {
    height: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Logo;
