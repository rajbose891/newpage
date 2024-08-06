import { SButton, SFlex, SImage } from 'react-simple-ui-lib';
import { GoGraph, GoSearch } from 'react-icons/go';
import { MdOutlinePermIdentity } from 'react-icons/md';
import { PiIdentificationBadgeBold } from 'react-icons/pi';
import styles from './end.module.scss';

export function End() {
    return (
        <SFlex direction={'column'} width={'100%'}>
            <SFlex direction={'column'} align={'center'} justify={'center'}>
                <SFlex justify={'space-between'} width={'100%'}>
                    <SButton style={{ background: 'steelblue' }}>🔔</SButton>
                    <SButton style={{ background: 'steelblue' }}>⚙️</SButton>
                </SFlex>
                <SFlex>
                    <SButton>
                        <MdOutlinePermIdentity></MdOutlinePermIdentity>
                    </SButton>
                </SFlex>
                <h1 style={{ color: 'blue' }}>P.A.R</h1>
                <SButton style={{ background: 'skyblue' }}>
                    <SFlex width={400} height={10} justify={'space-between'}>
                        <PiIdentificationBadgeBold></PiIdentificationBadgeBold>
                        <h4 style={{ color: 'white' }}>200 Friends....</h4>
                        <GoSearch style={{ color: 'blue' }}></GoSearch>
                    </SFlex>
                </SButton>
            </SFlex>
            <SFlex justify={'space-between'} align={'start'}>
                <SButton style={{ background: 'lightpink' }}>
                    <h3 style={{ color: 'blue' }}>Activity</h3>
                    <h3 style={{ color: 'blue' }}>35h.</h3>
                </SButton>
                <br />
                <br />
                <SButton style={{ background: 'pink' }}>
                    <SFlex width={300} justify={'end'}>
                        <h4 style={{ color: 'blue' }}>year⬇️</h4>
                    </SFlex>
                </SButton>
            </SFlex>
            <SImage src={'/11.png'} backgroundSize={'cover'} width={'70%'} height={200} />
            <SButton style={{ background: 'palevioletred' }}>
                <SFlex width={400} height={20} justify={'space-between'}>
                    <h3 style={{ color: 'black' }}>12 Months...</h3>
                    <GoGraph style={{ color: 'black' }}></GoGraph>
                </SFlex>
            </SButton>
            <SFlex width={'75%'} height={10} justify={'start'} className={styles.last}>
                <h4>My Courses</h4>
            </SFlex>
            <SImage src={'/44.png'} backgroundSize={'cover'} width={'70%'} height={100} />
        </SFlex>
    );
}
