import { Link } from 'react-router-dom'
import { ChangeLanguage } from '@/features/changeLanguage'
import { ReactComponent as Logo } from './logo.svg'
import styles from './styles.module.scss'

export const Header = () => <header className={styles.root}>
	<Link to='/' className={styles.logo}>
		<Logo width={64} />
		<h1 className={styles.logoTitle}>YouTogether</h1>
	</Link>
	<ChangeLanguage />
</header>
