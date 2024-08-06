import { SButton, SFlex } from 'react-simple-ui-lib';
import { DiAndroid, DiCodeigniter, DiCompass } from 'react-icons/di';
import { CiAvocado } from 'react-icons/ci';
import { BiAtom } from 'react-icons/bi';
import { GiAbdominalArmor } from 'react-icons/gi';
import { ImAccessibility, ImAirplane } from 'react-icons/im';

export function Header() {
    return (
        <SFlex direction={'column'} style={{ background: 'lightgrey' }} width={100} align>
            <SButton style={{ background: 'steelblue' }}>
                <DiAndroid></DiAndroid>
            </SButton>
            <br />
            <SButton style={{ background: 'steelblue' }}>
                <DiCodeigniter></DiCodeigniter>
            </SButton>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SButton style={{ background: 'steelblue' }}>
                <DiCompass></DiCompass>
            </SButton>
            <SButton style={{ background: 'steelblue' }}>
                <CiAvocado></CiAvocado>
            </SButton>
            <SButton style={{ background: 'steelblue' }}>
                <BiAtom></BiAtom>
            </SButton>
            <SButton style={{ background: 'steelblue' }}>
                <GiAbdominalArmor></GiAbdominalArmor>
            </SButton>
            <br />
            <br />
            <br />
            <br />
            <br />
            <SButton style={{ background: 'steelblue' }}>
                <ImAccessibility></ImAccessibility>
            </SButton>
            <br />
            <SButton style={{ background: 'steelblue' }}>
                <ImAirplane></ImAirplane>
            </SButton>
        </SFlex>
    );
}
