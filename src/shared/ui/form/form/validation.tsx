import { ReactNode, forwardRef } from "react";
import { SxProp } from "../../types";
import clsx from "clsx";
import { FormMessage } from "@radix-ui/react-form";
import { tw } from "typewind";
import { VariantProps, cva } from "cva";

const validationVariants = cva([tw.text_sm], {
    variants: {
        variant: {
            error: [tw.text_dangerFg],
            warning: [tw.text_attentionFg],
            success: [tw.text_successFg]
        }
    }
})

type ValidationProps = {
    children: ReactNode
    asChild?: boolean
} & SxProp & VariantProps<typeof validationVariants>

export const Validation = forwardRef<HTMLSpanElement, ValidationProps>(({children, asChild, sx}, ref) => {
    return <FormMessage ref={ref} asChild={asChild} className={clsx(validationVariants({}), sx)}>{children}</FormMessage>
})