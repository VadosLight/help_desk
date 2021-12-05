import React from "react";
import { useHistory } from "react-router";
import { Button } from "ui-neumorphism";
import { Icon } from "@mdi/react";
import {
    mdiHomeCircle,
    mdiDotsVerticalCircle,
    mdiArrowDownCircle,
    mdiEmailPlus,
    mdiBookOpenVariant
} from '@mdi/js';

import { useTheme } from "../../hooks";
import './MobileControlPanel.scss'

export const MobileControlPanel = (): JSX.Element => {
    const { isDark } = useTheme()
    const history = useHistory()


    return <div className="MobileControlPanel">
        <div className="MobileControlPanel__Content">
            <Button dark={isDark} onClick={() => { history.push('/applications') }}><Icon path={mdiEmailPlus} size={1} /></Button>
            <Button dark={isDark} onClick={() => { history.push('/manuals') }}><Icon path={mdiBookOpenVariant} size={1} /></Button>
            <Button dark={isDark} onClick={() => { history.push('/') }}><Icon path={mdiHomeCircle} size={1} /></Button>
            <Button dark={isDark} onClick={() => { history.push('/software') }}><Icon path={mdiArrowDownCircle} size={1} /></Button>
            <Button dark={isDark} onClick={() => {
                alert('Настройки временно недоступны')
            }}><Icon path={mdiDotsVerticalCircle} size={1} /></Button>
        </div>
    </div>
}