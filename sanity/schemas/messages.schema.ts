const schema = {
  name: "message",
  title: "Message",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "createdAt",
      title: "Created at",
      type: "datetime",
    },
  ],
};
export default schema;
