import {withProviders} from "./providers";
import {Routing} from "@/pages";
import {Header} from "@/widgets/header";
import {Layout} from "antd";

import '@/shared/config/i18n'

const App = () => {
    return <Layout>
        <Header/>
        <Routing/>
    </Layout>
}

export default withProviders(App)

