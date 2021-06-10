import { Switch, Route } from 'react-router-dom'
import ShowPage from 'app/shows/ShowPage'
import AboutPage from 'app/about/AboutPage'
import ShowDetails from './show/ShowDetails'
interface Props {

}

const Main = (props: Props) => {

    return (
        <>
            <Switch>
                <Route exact path='/' component={ShowPage} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/show/:id' component={ShowDetails} />
            </Switch>
        </>
    )
}

export default Main
