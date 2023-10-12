const schema = {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "name",
      title: "User name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "email",
      title: "User email",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "createdAt",
      title: "User created at",
      type: "datetime",
    },
  ],
};

export default schema;
