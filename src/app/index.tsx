import { Routing } from '@/pages'
import { Header } from '@/widgets/header'
import { withProviders } from './providers'
import './styles.css'
import '@/shared/config/i18n'

const App = () => <div>
	<Header/>
	<Routing/>
</div>

export default withProviders(App)
