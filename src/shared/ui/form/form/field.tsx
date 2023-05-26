import { ReactNode, forwardRef } from 'react';
import { SxProp } from "../../types";
import clsx from 'clsx';
import * as Form from '@radix-ui/react-form'
import { tw } from 'typewind';

type FieldProps = {
    children: ReactNode;
    name: string
} & SxProp

export const Field = forwardRef<HTMLDivElement, FieldProps>(({children, name, sx}, ref) => {
    return <Form.Field name={name} className={clsx(tw.flex.flex_col.gap_1.justify_between.items_baseline, sx)} ref={ref}>{children}</Form.Field>
})