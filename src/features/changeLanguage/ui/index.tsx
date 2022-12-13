import {useTranslation} from 'react-i18next'
import {Button, Tooltip} from "antd";
import {BsTranslate} from "react-icons/all";
import {useMemo} from "react";

export const ChangeLanguage = () => {
    const {t, i18n} = useTranslation()

    const availableLanguages = useMemo(() => i18n.languages, [])
    const currentLanguage = i18n.language

    const switchLanguage = () => {
        const inactiveLanguage = availableLanguages.filter(language => language !== currentLanguage)

        i18n.changeLanguage(inactiveLanguage[0])
    }

    const tooltipMessage = `${availableLanguages[0].toUpperCase()} / ${availableLanguages[1].toUpperCase()}`

    return <Tooltip title={tooltipMessage}>
        <Button onClick={switchLanguage} icon={<BsTranslate/>} />
    </Tooltip>
}