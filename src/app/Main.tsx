import { Switch, Route } from 'react-router-dom'
import ShowPage from 'app/shows/ShowPage'
import AboutPage from 'app/about/AboutPage'
interface Props {

}

const Main = (props: Props) => {

    return (
        <>
            <Switch>
                <Route exact path='/' component={ShowPage} />
                <Route exact path='/about' component={AboutPage} />

            </Switch>
        </>
    )
}

export default Main
