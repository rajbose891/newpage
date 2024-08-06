import { SButton, SFlex } from 'react-simple-ui-lib';
import { GoSearch } from 'react-icons/go';
import styles from './middle.module.scss';
import { FaBook } from 'react-icons/fa';

export function Middle() {
    return (
        <SFlex direction={'column'} align={'start'} width={'100%'}>
            <SFlex height={100} align={'start'}>
                <SButton style={{ background: 'pink' }}>
                    <SFlex width={550} height={10} justify={'space-between'}>
                        <GoSearch style={{ color: 'black' }}></GoSearch>
                        <h5 style={{ color: 'black' }}>your education.... </h5>
                    </SFlex>
                </SButton>
            </SFlex>
            <SFlex width={'100%'} justify={'start'} direction={'column'}>
                <SFlex className={styles.subject} justify={'space-between'}>
                    <h2 style={{ color: 'blue' }}>
                        INVEST MORE IN your <br />
                        EDUCATION ..............
                    </h2>
                    <h2 style={{ color: 'blue' }}>
                        <FaBook></FaBook>
                    </h2>
                </SFlex>

                <SFlex align={'start'} justify={'space-between'} paddingTop={40} width={'90%'}>
                    <SButton style={{ background: 'darkblue' }}>ALL</SButton>
                    <SButton style={{ background: 'darkblue' }}>IT & SOFTWARE</SButton>
                    <SButton style={{ background: 'darkblue' }}>MEDIA</SButton>
                    <SButton style={{ background: 'darkblue' }}>TRAINING</SButton>
                </SFlex>
                <SFlex paddingTop={40}>
                    <h3 style={{ color: 'black' }}>Most Popular....</h3>
                </SFlex>
                <br />
                <SFlex width={'100%'}>
                    <SFlex className={styles.myRole} direction={'column'}>
                        <h3 className={styles.course}>IT & SOFTWARE</h3>
                        <h3 className={styles.course}>DEVELOPMENT</h3>
                    </SFlex>
                    <SFlex className={styles.myRole} direction={'column'}>
                        <h3 className={styles.course}>BUSINESS</h3>
                        <h3 className={styles.course}>HOW TO GROW & EARN</h3>
                    </SFlex>
                </SFlex>
                <SFlex width={'100%'}>
                    <SFlex className={styles.myRole} direction={'column'}>
                        <h3 className={styles.course}>MEDIA TRAINING</h3>
                        <h3 className={styles.course}>Certified Six Sigma....</h3>
                    </SFlex>
                    <SFlex className={styles.myRole} direction={'column'}>
                        <h3 className={styles.course}>INTERIOR</h3>
                        <h3 className={styles.course}>HOW TO DESIGN ROOM 10 easy steps</h3>
                    </SFlex>
                </SFlex>
            </SFlex>
        </SFlex>
    );
}
