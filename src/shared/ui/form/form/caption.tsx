import { ReactNode, forwardRef } from "react"
import { SxProp } from "../../types"
import clsx from "clsx"
import { tw } from "typewind"

type CaptionProps = {
    children: ReactNode
} & SxProp

export const Caption = forwardRef<HTMLSpanElement, CaptionProps>(({children, sx}, ref) => {
    return <span className={clsx(tw.text_sm.text_fgMuted, sx)} ref={ref}>{children}</span>
})