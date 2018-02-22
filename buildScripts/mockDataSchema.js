var schema = {
  "type": "object",
  "properties": {
    "loans": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "paid_at": {
            "type": "date",
            "faker": "date.past"
          },
          "financed_amount": {
            "type": "number",
            "faker": "finance.amount"
          }
        },
        "required": ["id", "paid_at", "financed_amount"]
      }
    },
  },
  "required": ["loans"]
};

module.exports = schema;

