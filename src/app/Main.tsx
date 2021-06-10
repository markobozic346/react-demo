

import ShowPage from 'app/shows/ShowPage'
import Header from 'components/Header'
import Footer from 'components/Footer'
interface Props {

}

const Main = (props: Props) => {

    return (
        <>
            <Header />
            <ShowPage />
            <Footer />
        </>
    )
}

export default Main
