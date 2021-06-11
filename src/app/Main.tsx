import { Switch, Route } from 'react-router-dom'
import ShowPage from 'app/showPage/ShowPage'
import AboutPage from 'app/aboutPage/AboutPage'
import ShowDetailsPage from 'app/detailsPage/ShowDetailsPage'
interface Props {

}

const Main = (props: Props) => {

    return (
        <>
            <Switch>
                <Route exact path='/' component={ShowPage} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/show/:id' component={ShowDetailsPage} />
            </Switch>
        </>
    )
}

export default Main
