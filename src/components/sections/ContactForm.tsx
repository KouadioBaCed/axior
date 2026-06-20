"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { IconArrowRight, IconCheck } from "@/components/icons";
import { expertises } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  company: string; // honeypot — kept empty by humans, filled by bots
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  company: "",
};

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Veuillez indiquer votre nom.";
  else if (values.name.trim().length < 2) errors.name = "Nom trop court.";

  if (!values.email.trim()) errors.email = "Veuillez indiquer votre email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Adresse email invalide.";

  if (values.phone && !/^[+\d\s().-]{6,20}$/.test(values.phone))
    errors.phone = "Numéro de téléphone invalide.";

  if (!values.subject) errors.subject = "Veuillez choisir un sujet.";

  if (!values.message.trim()) errors.message = "Veuillez écrire un message.";
  else if (values.message.trim().length < 10)
    errors.message = "Message trop court (10 caractères min).";

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>(
    {},
  );
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const update = (key: keyof Fields, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (touched[key]) {
      setErrors(validate({ ...values, [key]: value }));
    }
  };

  const blur = (key: keyof Fields) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });
    if (Object.keys(found).length > 0) {
      const first = document.querySelector<HTMLElement>("[data-invalid='true']");
      first?.focus();
      return;
    }
    // Honeypot: a filled hidden field means a bot — fake success, send nothing.
    if (values.company.trim() !== "") {
      setStatus("success");
      setValues(empty);
      setTouched({});
      return;
    }

    setStatus("submitting");
    setServerError(null);
    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: JSON.stringify({
            Nom: values.name,
            Email: values.email,
            "Téléphone": values.phone || "—",
            Sujet: values.subject,
            Message: values.message,
            _subject: `[Contact AXIOR] ${values.subject} — ${values.name}`,
            _template: "table",
            _captcha: "false",
            _replyto: values.email,
          }),
        },
      );

      const data = (await res.json().catch(() => null)) as
        | { success?: boolean | string; message?: string }
        | null;

      const delivered =
        res.ok && (data?.success === true || data?.success === "true");
      // First submission to a not-yet-activated inbox: FormSubmit emails an
      // "Activate Form" link. The request succeeded, so we don't treat it as
      // an error for the sender.
      const needsActivation = res.ok && /activat/i.test(data?.message ?? "");

      if (!delivered && !needsActivation) {
        throw new Error(
          data?.message ?? "L’envoi a échoué. Veuillez réessayer.",
        );
      }

      setStatus("success");
      setValues(empty);
      setTouched({});
    } catch {
      setServerError(
        "L’envoi a échoué. Vérifiez votre connexion et réessayez.",
      );
      setStatus("error");
    }
  };

  const fieldClass = (key: keyof Fields) =>
    cn(
      "w-full rounded-xl border bg-white px-4 py-3 text-sm text-graphite-900 transition-colors placeholder:text-graphite-400 focus:outline-none focus:ring-2 focus:ring-brand/30 dark:bg-graphite-950 dark:text-white",
      errors[key] && touched[key]
        ? "border-red-400 focus:border-red-400"
        : "border-graphite-200 focus:border-brand dark:border-white/15",
    );

  return (
    <div className="card-surface p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand">
              <IconCheck className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-graphite-900 dark:text-white">
              Message envoyé&nbsp;!
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-graphite-600 dark:text-graphite-300">
              Merci pour votre confiance. Nos équipes vous recontacteront dans
              les plus brefs délais.
            </p>
            <Button
              className="mt-7"
              variant="outline"
              onClick={() => setStatus("idle")}
            >
              Envoyer un autre message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-5"
          >
            {/* Honeypot — hidden from humans, catches bots */}
            <div className="absolute -left-[9999px]" aria-hidden>
              <label htmlFor="company">Ne pas remplir</label>
              <input
                id="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.company}
                onChange={(e) => update("company", e.target.value)}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Nom complet"
                required
                error={touched.name ? errors.name : undefined}
              >
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Votre nom"
                  className={fieldClass("name")}
                  value={values.name}
                  data-invalid={Boolean(touched.name && errors.name)}
                  onChange={(e) => update("name", e.target.value)}
                  onBlur={() => blur("name")}
                />
              </Field>
              <Field
                label="Email"
                required
                error={touched.email ? errors.email : undefined}
              >
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="vous@exemple.com"
                  className={fieldClass("email")}
                  value={values.email}
                  data-invalid={Boolean(touched.email && errors.email)}
                  onChange={(e) => update("email", e.target.value)}
                  onBlur={() => blur("email")}
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Téléphone"
                error={touched.phone ? errors.phone : undefined}
              >
                <input
                  type="tel"
                  autoComplete="tel"
                  placeholder="+225 ..."
                  className={fieldClass("phone")}
                  value={values.phone}
                  data-invalid={Boolean(touched.phone && errors.phone)}
                  onChange={(e) => update("phone", e.target.value)}
                  onBlur={() => blur("phone")}
                />
              </Field>
              <Field
                label="Sujet"
                required
                error={touched.subject ? errors.subject : undefined}
              >
                <select
                  className={fieldClass("subject")}
                  value={values.subject}
                  data-invalid={Boolean(touched.subject && errors.subject)}
                  onChange={(e) => update("subject", e.target.value)}
                  onBlur={() => blur("subject")}
                >
                  <option value="">Sélectionnez un domaine…</option>
                  {expertises.map((e) => (
                    <option key={e.slug} value={e.title}>
                      {e.title}
                    </option>
                  ))}
                  <option value="Autre">Autre demande</option>
                </select>
              </Field>
            </div>

            <Field
              label="Votre message"
              required
              error={touched.message ? errors.message : undefined}
            >
              <textarea
                rows={5}
                placeholder="Décrivez votre projet ou votre besoin…"
                className={cn(fieldClass("message"), "resize-y")}
                value={values.message}
                data-invalid={Boolean(touched.message && errors.message)}
                onChange={(e) => update("message", e.target.value)}
                onBlur={() => blur("message")}
              />
            </Field>

            {status === "error" && serverError && (
              <p
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
              >
                {serverError} Vous pouvez aussi nous écrire directement à{" "}
                <a href="mailto:contact@axiorci.com" className="underline">
                  contact@axiorci.com
                </a>
                .
              </p>
            )}

            <div className="flex flex-col items-start gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-graphite-500">
                Vos données restent confidentielles et ne sont jamais partagées.
              </p>
              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="w-full sm:w-auto"
              >
                {status === "submitting" ? "Envoi en cours…" : "Envoyer le message"}
                {status !== "submitting" && (
                  <IconArrowRight className="h-5 w-5" />
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-graphite-800 dark:text-graphite-200">
        {label}
        {required && <span className="ml-0.5 text-brand">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-xs font-medium text-red-500">
          {error}
        </span>
      )}
    </label>
  );
}
