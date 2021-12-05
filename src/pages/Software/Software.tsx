import React from 'react';
import { SoftwareCard } from '../../components/Cards';
import { SoftwareCardType } from "../../components/Cards/SoftwareCard/SoftwareCard"
import './Software.scss';

const SoftList: SoftwareCardType[] = [
    { softName: '7z', softDescription: 'Бесплатный архиватор', linkToDownload: 'https://www.7-zip.org/a/7z2106-x64.exe' },
    { softName: '7z', softDescription: 'Бесплатный архиватор', linkToDownload: 'https://www.7-zip.org/a/7z2106-x64.exe' },
    { softName: '7z', softDescription: 'Бесплатный архиватор', linkToDownload: 'https://www.7-zip.org/a/7z2106-x64.exe' },
    { softName: '7z', softDescription: 'Бесплатный архиватор', linkToDownload: 'https://www.7-zip.org/a/7z2106-x64.exe' },
    { softName: '7z', softDescription: 'Бесплатный архиватор', linkToDownload: 'https://www.7-zip.org/a/7z2106-x64.exe' },
    { softName: '7z', softDescription: 'Бесплатный архиватор', linkToDownload: 'https://www.7-zip.org/a/7z2106-x64.exe' },
    { softName: '7z', softDescription: 'Бесплатный архиватор', linkToDownload: 'https://www.7-zip.org/a/7z2106-x64.exe' },
]

export const Software = (): JSX.Element => {

    return <div className="Software">
        {
            SoftList.map((soft) => <SoftwareCard {...soft} key={soft.softName} />)
        }
    </div>
}
