import DonateHere from "../components/donatehere/index";
import { GlobalStyle } from "../assets/css/global";
import RodaPe from "../components/aboutus/footer";
import Icon from "../components/icon";
import Header from '../components/home/header'

function PagDonateHere(){
    return(
        <div>
            <DonateHere/>
            <RodaPe/>
            <Icon/>
            <GlobalStyle/>
        </div>
    )
}

export default PagDonateHere;

