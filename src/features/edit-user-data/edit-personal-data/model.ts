import { sample } from 'effector'
import { createForm } from 'effector-forms'
import { z } from 'zod'
import { getSessionQuery } from '@/entities/session'
import { createRule } from '@/shared/lib/create-zod-rule'

export const editPersonalDataForm = createForm({
  fields: {
    username: {
      init: '',
      rules: [
        createRule<string>({
          name: 'username',
          schema: z.string().min(5),
        }),
      ],
    },
    firstName: {
      init: '',
      rules: [
        createRule<string>({
          name: 'firstName',
          schema: z.string(),
        }),
      ],
    },
    lastName: {
      init: '',
      rules: [
        createRule<string>({
          name: 'lastName',
          schema: z.string(),
        }),
      ],
    },
  },
  validateOn: ['submit'],
})

sample({
  clock: getSessionQuery.finished.success,
  fn: (sessionData) => {
    const { username, lastName, firstName } = sessionData.result
    return { username, lastName, firstName }
  },
  target: editPersonalDataForm.setForm,
})
