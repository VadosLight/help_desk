import React from 'react';
import { useWindowSize } from '../../hooks';
import { MobileControlPanel } from '../MobileControlPanel/MobileControlPanel';
import './Footer.scss';

export const Footer = () => {
    const ws = useWindowSize()

    return (
        <div className="Footer">
            {ws.device === 'mobile'
                ? <MobileControlPanel />
                : <div>Десктопный футер</div>}
        </div>
    )
}
