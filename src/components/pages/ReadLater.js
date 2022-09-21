import { useContext } from 'react';
import themeContext from '../../context/ThemeContext/theme-context';
import Footer from '../UI/Footer';
import classes from './ReadLater.module.css'

const ReadLater = () => {
    const theme = useContext(themeContext);
    console.log('ReadLater', theme);
    return (
        <>
        <div className={classes['read-later']}>
            <h2 style={{color: theme.isDarkTheme && 'whitesmoke'}}>Your choices</h2>
        </div>
            <Footer />
        </>
    )
}

export default ReadLater;