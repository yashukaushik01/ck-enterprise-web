import React from 'react';
import { useParams } from 'react-router-dom';
import productJson from '../assets/product-details.json';

const ProductDetails = () => {

    const { productId } = useParams()
    const productList = productJson;
    const product = productList.find(x => x.id === productId);

    return (
        <div style={styles.container}>
            <div style={styles.productNameContainer}>
                <h1 style={styles.title}>{product?.name}</h1>
            </div>
            <div style={styles.imageContainer}>
                <img src={product.image} alt={product?.title} style={styles.image} />
            </div>
            {product.heading1 && <div style={styles.detailsContainer}>
                <h1 style={styles.title}>{product?.heading1}</h1>
                <p style={styles.description}>{product?.text1}</p>
            </div>}
            {product.heading2 && <div style={styles.detailsContainer}>
                <h1 style={styles.title}>{product?.heading2}</h1>
                <p style={styles.description}>{product?.text2}</p>
            </div>}
            {product.heading3 && <div style={styles.detailsContainer}>
                <h1 style={styles.title}>{product?.heading3}</h1>
                <p style={styles.description}>{product?.text3}</p>
            </div>}
            {product.heading4 && <div style={styles.detailsContainer}>
                <h1 style={styles.title}>{product?.heading4}</h1>
                <p style={styles.description}>{product?.text4}</p>
            </div>}
            {product.heading5 && <div style={styles.detailsContainer}>
                <h1 style={styles.title}>{product?.heading5}</h1>
                <p style={styles.description}>{product?.text5}</p>
            </div>}
        </div>
    );
};

// Styles
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        backgroundColor: '#f4f4f4',
    },
    imageContainer: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        maxWidth: '100%',
        maxHeight: '50vh',
        objectFit: 'contain',
    },
    productNameContainer: {
        flex: '1',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsContainer: {
        flex: '1',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '10px',
    },
    description: {
        fontSize: '1.2rem',
        marginBottom: '20px',
    },
    price: {
        fontSize: '1.5rem',
        marginBottom: '20px',
    },
    button: {
        padding: '15px 25px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

// Add hover effect for the button
styles.button = {
    ...styles.button,
    '&:hover': {
        backgroundColor: '#0056b3',
    },
};

export default ProductDetails;
