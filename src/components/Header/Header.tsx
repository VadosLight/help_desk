import React from "react";
import { useHistory } from 'react-router'
import { useWindowSize } from "../../hooks";

export const Header = (): JSX.Element => {
    const histroty = useHistory()
    const ws = useWindowSize()

    return <div className='Header'>
        Header
    </div>
}