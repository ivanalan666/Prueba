import React from 'react';
import { productCard } from '../data/product-data';
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firebaseApp, firestore } from '../conection';



const MainContent = () => {
    const productAmount = 25;
    const productRef = firestore.collection('product');
    const query = productRef.orderBy('createdAt').limit(productAmount);
    const [products] = useCollectionData(query, { idField: 'id' });
    console.log(products);
    const saveProduct = async (product: any) => {
        
    
    
        await productRef.add({
          ...product,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }

    const clickBtn = (e: any) => {
        e.preventDefault();
        productCard.forEach(product => {
            saveProduct(product);
        });
    }

    console.log(productCard);
    const listItems = products?.map(product => 
        <div className="card" key={product.id}>
            <div className="card_img">
                <img src={product.thumb} alt="..." />
            </div>
            <div className="card_header">
                <h2>{product.productName}</h2>
                <p>{product.description}</p>
                <p className="price">{product.price}<span>{product.currency}</span></p>
                <div className="btn">Add to Card</div>

            </div>
        </div>);
    return (
        <div className="main_content">
            <h3>Some Product</h3>
            {listItems}
        </div>
    )
}

export default MainContent;