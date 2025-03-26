export default {
  name: "order",
  title: "Orders",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Customer Name",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "text",
    },
    {
      name: "contact",
      title: "Contact Number",
      type: "string",
    },
    
    {
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Product Name", type: "string" },
            { name: "price", title: "Price", type: "number" },
            { name: "quantity", title: "Quantity", type: "number" },
            { name: "image", title: "Image", type: "image" },
          ],
        },
      ],
    },
  ],
};
