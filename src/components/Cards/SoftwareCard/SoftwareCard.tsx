import React from "react";
import { Card, CardMedia, CardContent, CardAction, Body2, Button, H6 } from 'ui-neumorphism'
import { useTheme } from "../../../hooks";
import "./SoftwareCard.scss"

// assets
import defaultImage from '../../../assets/img/softwareDefault.png'

export type SoftwareCardType = {
    softName: string,
    softDescription: string,
    linkToDownload: string,
    linkToHeaderImage?: string,
}

export const SoftwareCard = ({
    softName,
    softDescription,
    linkToDownload,
    linkToHeaderImage = defaultImage,
}: SoftwareCardType): JSX.Element => {
    const { isDark } = useTheme();

    const handleClickDownload = () => {
        window.open(linkToDownload, '_blank')
    }

    const handleClickManual = () => {

    }

    return <Card dark={isDark} className="SoftwareCard">
        <CardMedia
            dark={isDark}
            src={linkToHeaderImage}
            className="SoftwareCard__CardMedia"
        />
        <CardContent>
            <H6>{softName}</H6>
            <Body2>{softDescription}</Body2>
        </CardContent>
        <CardAction>
            <Button text color='var(--primary)' onClick={handleClickDownload}>
                Скачать
            </Button>
            <Button text color='var(--primary)' onClick={handleClickManual}>
                Инструкция
            </Button>
        </CardAction>
    </Card>
}