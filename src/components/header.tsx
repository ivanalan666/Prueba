import React from 'react';
import firebase from 'firebase';
import { firestore } from '../conection';
import Modal from './modal/modal';
import { Input, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function Header() {
    const classes = useStyles();
    const productRef = firestore.collection('product');
    const [show, setShow] = React.useState(false);
    const addProduct = async (e: any) => {
        e.preventDefault();
        await productRef.add({
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
    }

    return (
        <nav>
            <div className="logo">Pepe.</div>
            <ul >
                <li>Home</li>
                <li>Our Products</li>
                <li>About Us</li>
                <li>Contact</li>
                <li onClick={()=> setShow(true)}>Add Product</li>
            </ul>
            <div className="search">
                <i className="fa fa-search"></i>
                <i className="fa fa-shopping-basket"></i>
            </div>
            <Modal show={show} handleClose={()=> setShow(false)}>
            <form className={classes.root} noValidate autoComplete="off">
                <Input defaultValue="Hello world" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
                <Input defaultValue="Disabled" disabled inputProps={{ 'aria-label': 'description' }} />
                <Input defaultValue="Error" error inputProps={{ 'aria-label': 'description' }} />
            </form>
            </Modal>
        </nav>
        
    )
}
