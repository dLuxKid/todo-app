import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  title: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
