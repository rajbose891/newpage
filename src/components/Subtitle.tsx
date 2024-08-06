import { SButton, SFlex } from 'react-simple-ui-lib';
import { DiAndroid, DiCodeigniter, DiCompass } from 'react-icons/di';
import { CiAvocado } from 'react-icons/ci';
import { BiAtom } from 'react-icons/bi';
import { GiAbdominalArmor } from 'react-icons/gi';
import { ImAccessibility, ImAirplane } from 'react-icons/im';
import { GoSearch } from 'react-icons/go';

export function Subtitle() {
    return (
          <SFlex align={'start'} justify={'space-between'} width={'100%'} style={{ background: 'orangered' }}>
                <SFlex direction={'column'}>
                    <h4 style={{ color: 'black' }}>COURSES</h4>
                    <p>MBA</p>
                    <p>BBA</p>
                    <p>ITI</p>
                    <p>POLYTECH</p>
                </SFlex>
                <SFlex direction={'column'}>
                    <h4 style={{ color: 'black' }}>ACCOMODATIONS</h4>
                    <p>LAB</p>
                    <p>LAPTOP</p>
                    <p>PRACTICALS</p>
                    <p>STUDY MATERIALS</p>
                </SFlex>
                <SFlex direction={'column'}>
                    <h4 style={{ color: 'black' }}>About</h4>
                    <p>FAQ</p>
                    <p>BLOG</p>
                    <p>DESCRIPTION</p>
                    <p>ADD.</p>
                </SFlex>
            </SFlex>
    );
}
