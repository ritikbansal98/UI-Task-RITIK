import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import BottomTabs from './BottomTabs';
import TabNavigations from './TabNavigations';
import { Expertise } from '../Screens';



export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name={navigationStrings.TABS}
                component={BottomTabs}
            />
            <Stack.Screen name='Top Tabs'
                component={TabNavigations} />
            <Stack.Screen name={navigationStrings.EXPERTISE}
                component={Expertise} />
        </>
    )
}