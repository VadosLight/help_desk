import React from 'react';
import { Typography } from 'ui-neumorphism'
import { useTheme } from '../../hooks';
import './Welcome.scss';

export const Welcome = (): JSX.Element => {
    const { isDark } = useTheme()

    return <div className="Welcome">
        <Typography dark={isDark}>
            {isDark ? 'dark' : 'light'}
        </Typography>
    </div>
}
