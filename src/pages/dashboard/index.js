
import React from 'react';
import { AuthHOC } from '../../components/HOC/authRequired';
import DashboardContainer from '../../features/dashbaord/DashboardContainer';

const DashboardPage = () => {
    return (
            <DashboardContainer/>
    )
}


export default AuthHOC(DashboardPage)