// Creates the prds collection with public CRUD rules (MVP — no auth required).
// Upgrade rules via PocketBase admin UI when you add team auth.
migrate((db) => {
  const c = new Collection({
    name: "prds",
    type: "base",
    schema: [
      new SchemaField({ name: "projectId", type: "text",  required: true }),
      new SchemaField({ name: "title",     type: "text",  required: true }),
      new SchemaField({ name: "content",   type: "text",  required: false }),
      new SchemaField({ name: "status",    type: "text",  required: true }),
    ],
    // empty string = public (no auth required for MVP)
    listRule:   "",
    viewRule:   "",
    createRule: "",
    updateRule: "",
    deleteRule: "",
  });
  return Dao(db).saveCollection(c);
}, (db) => {
  return Dao(db).deleteCollection(
    Dao(db).findCollectionByNameOrId("prds")
  );
});
