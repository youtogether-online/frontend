import { useTranslation } from 'react-i18next'
import { styled } from '@/shared/config/stitches/stitches.config'
import { IconSearch } from '@/shared/ui'

export const SearchBar = () => {
  const { t } = useTranslation()

  return (
    <Label>
      <Input placeholder={t('header.search.placeholder')} />
      <IconSearch />
    </Label>
  )
}

const Label = styled('label', {
  'display': 'flex',
  'height': '100%',
  'borderRadius': '$secondary',
  'position': 'relative',

  '& svg': {
    width: '24px',
    height: '24px',
    position: 'absolute',
    top: '0',
    bottom: '0',
    margin: 'auto 0',
    right: '10px',
    color: '$textTertiary',
  },
})

const Input = styled('input', {
  'outline': '0px',
  'width': '100%',
  'border': 'none',
  'backgroundColor': 'inherit',
  'borderRadius': '8px',
  'padding': '4px 16px',
  'fontWeight': '400',
  'background': '$backgroundContainerDark',

  '&::placeholder': {
    color: '$textTertiary',
    fontWeight: '500',
    fontFamily: 'inherit',
  },
})
