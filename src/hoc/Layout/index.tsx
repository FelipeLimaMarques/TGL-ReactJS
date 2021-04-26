import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import Header from '../../components/UI/Header/index';
import Footer from '../../components/UI/Footer/index';
import Drawer from '../../components/UI/Header/Drawer';

import Main from './styles';

const Layout: React.FC = props => {
    const isAuthenticated = useAppSelector(state => state.auth.currentUser !== null);
    const [showDrawer, setShowDrawer] = useState(false);

    const handleDrawerToggle: React.MouseEventHandler<HTMLElement> = () => {
        setShowDrawer(prevState => !prevState);
    }

    return (
        <React.Fragment>
            <Drawer show={showDrawer} handler={handleDrawerToggle}/>
            {isAuthenticated && <Header handler={handleDrawerToggle}/>}
                <Main>
                    {props.children}
                </Main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;