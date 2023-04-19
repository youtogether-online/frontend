import { useTranslation } from 'react-i18next'
import { Form, Input } from '@/shared/ui'

export const EditPassword = () => {
  const { t } = useTranslation()

  return (
    <Form>
      <Form.Item label={t('password')}>
        <Input.Password />
      </Form.Item>
    </Form>
  )
}
