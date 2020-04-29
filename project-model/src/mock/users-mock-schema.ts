export const schema = {
  type: 'object',
  properties: {
    user: {
      type: 'array',
      minItems: 10,
      maxItems: 10,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            chance: 'guid',
          },
          name: {
            type: 'string',
            faker: 'name.firstName',
          },
          email: {
            type: 'string',
            faker: 'internet.email',
          },
        },
        required: ['id', 'name', 'email'],
      },
    },
  },
  required: ['user'],
}
