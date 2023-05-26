import { LabelHTMLAttributes, ReactNode, forwardRef } from "react";
import { SxProp } from "../../types";
import clsx from "clsx";
import {Label as LabelPrimitive} from '@radix-ui/react-form'
import { tw } from "typewind";

type LabelProps = {
    asChild?: boolean;
    children: ReactNode
    required?: boolean
} & SxProp & LabelHTMLAttributes<HTMLLabelElement>

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({asChild, children, required, sx}, ref) => {
    return <LabelPrimitive className={clsx(tw.text_md.font_bold, sx)} asChild={asChild} ref={ref}>
        {children}
        <span>{required && '*'}</span>
    </LabelPrimitive>
})