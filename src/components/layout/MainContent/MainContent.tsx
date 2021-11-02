import { Route, Switch } from 'react-router-dom'
import WelcomePage from '../../app/pages/welcomePage/WelcomePage'
import './MainContent.scss'
import EquipmentsPages from '../../app/pages/SaveEquipments/EquipmentsPages';
import CheckInformation from '../../app/pages/CheckInformation/CheckInformation';

const MainContent = () => {
    return (
        
            <main className='main-content' >
                <Switch>
                    <Route path='/' exact component={WelcomePage}/>
                    <Route path='/ingresar-equipos' exact component={EquipmentsPages}/>
                    <Route path='/consultas' exact component={CheckInformation}/>
                </Switch>
            </main>
       
    )
}

export default MainContent
