import {Button, Layout} from "antd";
import styles from './styles.module.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from './logo.svg'
import {useTranslation} from "react-i18next";
import {ChangeLanguage} from "@/features/changeLanguage";

const actions = [
    {
        id: 'profile' as const,
        label: 'profile',
    }
]

export const Header = () => {
    const {t, i18n} = useTranslation()


    return <Layout.Header className={styles.root}>
        <Link to='/' className={styles.logo}>
            <Logo width={64} />
            <h1 className={styles.logoTitle}>YouTogether</h1>
        </Link>
        <ChangeLanguage />
    </Layout.Header>
}