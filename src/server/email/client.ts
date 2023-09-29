import { env } from "@/data/env/env.mjs";
import { Resend } from "resend";

let client: Resend | null = null;

export function emailClient() {
  if (!client) {
    client = new Resend(env.RESEND_API_KEY);
  }

  return client;
}
