import {withProviders} from "./providers";
import {Routing} from "../pages";
import {Header} from "../widgets/header";

const App = () => {
    return <div className='App'>
        <Header/>
        <Routing/>
    </div>
}

export default withProviders(App)

