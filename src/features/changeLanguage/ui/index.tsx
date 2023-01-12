import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { BsTranslate } from 'react-icons/all'

export const ChangeLanguage = () => {
  const { i18n } = useTranslation()

  const availableLanguages = useMemo(() => i18n.languages, [])
  const currentLanguage = i18n.language

  const switchLanguage = () => {
    const inactiveLanguage = availableLanguages.filter(language => language !== currentLanguage)

    i18n.changeLanguage(inactiveLanguage[0])
  }

  const tooltipMessage = `${availableLanguages[0].toUpperCase()} / ${availableLanguages[1].toUpperCase()}`

  return <div className='w-'>
		<button onClick={switchLanguage}><BsTranslate/></button>
	</div>
}
