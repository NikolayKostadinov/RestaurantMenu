import DesertList from "./deserts/DesertList";
import MainList from "./mains/MainList";
import SaladList from "./salads/SaladList";

const Menu = () => {
    return(
        <>
            <SaladList/>
            <MainList/>
            <DesertList/>
        </>
    )
}
export default Menu;