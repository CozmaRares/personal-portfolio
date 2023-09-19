"use server";

import { Resend } from "resend";
import { env } from "@/env.mjs";
import { z } from "zod";
import ContactEmail from "@/email/ContactEmail";
import { createElement } from "react";
import { getErrorMessage } from "@/lib/utils";

const DataSchema = z.object({
  email: z.string().email(),
  message: z.string().min(1),
});

const resend = new Resend(env.RESEND_API_KEY);

export default async function sendEmail(formData: FormData): Promise<
  | {
      error: "zod";
      email?: string;
      message?: string;
    }
  | { error: "resend"; message: string }
  | { error: null }
> {
  const email = formData.get("email") as string | null;
  const message = formData.get("message") as string | null;

  const result = DataSchema.safeParse({ email, message });

  if (!result.success) {
    const formated = result.error.format();
    return {
      error: "zod",
      email: formated.email?._errors.join(". "),
      message: formated.message?._errors.join(". "),
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <portfolio@notifications.raru.dev>",
      to: "cozmarares11@gmail.com",
      subject: "Message from contact form",
      reply_to: email!,
      react: createElement(ContactEmail, {message:message!}),
    });
    return { error: null };
  } catch (error) {
    return { error: "resend", message: getErrorMessage(error) };
  }
}
