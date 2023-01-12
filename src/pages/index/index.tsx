import { useTranslation } from 'react-i18next'

const IndexPage = () => {
  const { t } = useTranslation()

  return (
		<section>
			{t('welcome')}
		</section>
  )
}

export default IndexPage
