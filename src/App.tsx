import { SFlex } from 'react-simple-ui-lib';
import { Header } from './components/header.tsx';
import { Middle } from './components/middle/Middle.tsx';
import { End } from './components/end/End.tsx';
import { Subtitle } from './components/Subtitle.tsx';

export default function App() {
    return (
        <SFlex direction={'column'} style={{ background: 'ghostwhite' }} width={'100%'} padding={30}>
            <SFlex justify={'space-between'} width={'100%'}>
                <Header></Header>
                <Middle></Middle>
                <End></End>
            </SFlex>
            <Subtitle></Subtitle>
        </SFlex>
    );
}
