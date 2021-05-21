import Head from 'next/head';
import { ExperienceBar } from "../componentes/ExperienceBar";
import {Profile} from '../componentes/Profile';
import {CompleteChallenges} from '../componentes/CompleteChallenges';

import styles from '../styles/pages/Home.module.css'
import { Countdown } from '../componentes/Countdown';
import { ChallengeBox } from '../componentes/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
          <title>Inicio | move.fast</title>
      </Head>

      <ExperienceBar />
      <CountdownProvider>
      <section>
        <div>
          <Profile/>
          <CompleteChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
      </CountdownProvider>
    </div>
  )
}
