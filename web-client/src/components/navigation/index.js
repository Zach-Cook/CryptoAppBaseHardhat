import React from 'react';
import { NavigationFrame, NavigationInner, TitleText } from './styles/navigation';

export default function Navigation({children, ...restProps}){

    return <NavigationFrame {...restProps}>{children}</NavigationFrame>

}

Navigation.NavigationInner = function NavigationNavigationInner({children, ...restProps}) {
    return <NavigationInner {...restProps}> {children}</NavigationInner>
}

Navigation.TitleText = function NavigationTitleText({children, ...restProps}) {
    return <TitleText {...restProps}> {children}</TitleText>
}