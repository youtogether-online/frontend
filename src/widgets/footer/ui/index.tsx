import { styled } from '@/shared/config/stitches/stitches.config'
import { ReactComponent as Logo } from '@/widgets/footer/ui/vertical-logo.svg'

export const Footer = () => {
  return (
    <InnerRoot>
      <Root>
        <Logo />
      </Root>
    </InnerRoot>
  )
}

const InnerRoot = styled('footer', {
  background: '$backgroundFooter',
})

const Root = styled('div', {
  maxWidth: '$containerLg',
  width: '100%',
  margin: '0 auto',
  padding: '18px 0px',
})
