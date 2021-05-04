
//tudo que se repete nas paginas estara aqui
//o contexto foi colocado aqui pq quase todos componentes interagem com ele
//podemos ter informaçoẽs no contexto, e funçoes no context para
//atualizar informações, pra modifacar dados e tudo mais
import '../styles/global.css'


import {ChallengesProvider} from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {

  return (

    <ChallengesProvider>
      <Component {...pageProps} />
      </ChallengesProvider>
  )
}

export default MyApp
