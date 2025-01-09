import React from 'react';
import { Link } from 'react-router-dom';

const MissingPage = () => {
    const styles = {
        container: {
            textAlign: 'center',
            marginTop: '50px',
        },
        heading: {
            fontSize: '2em',
            color: '#ff0000',
        },
        paragraph: {
            fontSize: '1.2em',
        },
        link: {
            fontSize: '1.2em',
            color: '#0000ff',
            textDecoration: 'none',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404 - Page Not Found</h1>
            <p style={styles.paragraph}>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" style={styles.link}>Go to Home</Link>
        </div>
    );
};

export default MissingPage;
