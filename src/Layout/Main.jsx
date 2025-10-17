import React from 'react';
import { Outlet } from 'react-router-dom';
import Background from './Background';

const Main = () => {
    return (
        <div>
            <Background>
                <Outlet></Outlet>
            </Background>

        </div>
    );
};

export default Main;