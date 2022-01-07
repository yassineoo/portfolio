import useStyles from './styles.js';
import React from 'react'
import Header from '../header/header.js'

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.home}>
        <div>
     
             <Header/>
        </div>
        </div>
    )
}

export default Home
