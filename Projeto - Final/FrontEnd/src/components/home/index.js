import styled from 'styled-components';
import Header from './header';
import UncontrolledExample from './carrossel';
import SobreNos from '../home/sobrenoshome';
import Conquistas from './conquistas';
import Parcerias from '../home/parcerias';
import RodaPe from '../aboutus/footer';
import Icon from '../icon';

const ContainerHome = styled.div`
    // display: flex;
    background-color: #6B1C4B;
    justify-content: space-between;
`

function HomeCorpo() {
  return (
    <ContainerHome>
      <Header/>
      <UncontrolledExample/>
      <SobreNos/>
      <Conquistas/>
      <Parcerias/>
      <RodaPe/>
      <Icon/>
    </ContainerHome>
  );
}

export default HomeCorpo;