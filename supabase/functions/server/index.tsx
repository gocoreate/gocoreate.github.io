import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-cd73031e/health", (c) => {
  return c.json({ status: "ok" });
});

app.post("/make-server-cd73031e/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, company, phone, service, message } = body;

    if (!name || !email || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const id = crypto.randomUUID();
    const timestamp = new Date().toISOString();
    const key = `contact:${timestamp}:${id}`;

    const contactData = {
      id,
      name,
      email,
      company: company || "",
      phone: phone || "",
      service: service || "",
      message,
      submittedAt: timestamp,
    };

    await kv.set(key, contactData);

    return c.json({ success: true, message: "Contact saved successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

app.get("/make-server-cd73031e/contact", async (c) => {
  try {
    // Fetch all contacts (keys starting with "contact:")
    // Note: getByPrefix returns an array of values
    const contacts = await kv.getByPrefix("contact:");
    return c.json({ success: true, contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

Deno.serve(app.fetch);