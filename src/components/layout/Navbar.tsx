"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import {
  IconMenu,
  IconClose,
  IconArrowRight,
  IconChevronDown,
} from "@/components/icons";
import { navLinks, type NavItem } from "@/lib/site";
import { expertises } from "@/lib/data";
import { cn } from "@/lib/utils";

const expertiseBySlug = new Map<string, (typeof expertises)[number]>(
  expertises.map((e) => [e.slug, e]),
);

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function isItemActive(pathname: string, item: NavItem) {
  if (isActive(pathname, item.href)) return true;
  return item.children?.some((c) => isActive(pathname, c.href)) ?? false;
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-graphite-100 bg-white/85 backdrop-blur-md shadow-soft dark:border-white/10 dark:bg-graphite-950/85"
          : "border-b border-transparent bg-white/60 backdrop-blur-sm dark:bg-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo priority />

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active = isItemActive(pathname, link);

            if (link.children) {
              const isExpertise = link.menu === "expertises";
              return (
                <li key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    aria-haspopup="true"
                    onClick={(e) => e.currentTarget.blur()}
                    className={cn(
                      "relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      active
                        ? "text-brand"
                        : "text-graphite-600 hover:text-graphite-900 dark:text-graphite-300 dark:hover:text-white",
                    )}
                  >
                    {link.label}
                    <IconChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown */}
                  <div
                    className={cn(
                      "invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
                      isExpertise ? "w-[20rem]" : "w-[15rem]",
                    )}
                  >
                    <div className="overflow-hidden rounded-2xl border border-graphite-100 bg-white p-2 shadow-card dark:border-white/10 dark:bg-graphite-900">
                      {isExpertise
                        ? link.children.map((child) => {
                            const slug = child.href.split("/").pop() ?? "";
                            const data = expertiseBySlug.get(slug);
                            const Icon = data?.icon;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={(e) => e.currentTarget.blur()}
                                className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-50 dark:hover:bg-white/5"
                              >
                                {Icon && (
                                  <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand">
                                    <Icon className="h-5 w-5" />
                                  </span>
                                )}
                                <span className="min-w-0">
                                  <span className="block text-sm font-semibold text-graphite-900 dark:text-white">
                                    {child.label}
                                  </span>
                                  {data?.tagline && (
                                    <span className="block truncate text-xs text-graphite-500 dark:text-graphite-400">
                                      {data.tagline}
                                    </span>
                                  )}
                                </span>
                              </Link>
                            );
                          })
                        : link.children.map((child) => {
                            const Icon = child.icon;
                            const childActive = isActive(pathname, child.href);
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={(e) => e.currentTarget.blur()}
                                className={cn(
                                  "group/item flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                                  childActive
                                    ? "bg-brand-50 text-brand"
                                    : "text-graphite-700 hover:bg-brand-50 hover:text-brand dark:text-graphite-200 dark:hover:bg-white/5",
                                )}
                              >
                                {Icon && (
                                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand">
                                    <Icon className="h-4 w-4" />
                                  </span>
                                )}
                                <span className="flex-1">{child.label}</span>
                                <IconArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                              </Link>
                            );
                          })}
                      {isExpertise && (
                        <Link
                          href={link.href}
                          onClick={(e) => e.currentTarget.blur()}
                          className="mt-1 flex items-center justify-between rounded-xl bg-graphite-50 px-3 py-2.5 text-sm font-medium text-graphite-700 transition-colors hover:text-brand dark:bg-white/5 dark:text-graphite-200"
                        >
                          Tous les domaines
                          <IconArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-brand"
                      : "text-graphite-600 hover:text-graphite-900 dark:text-graphite-300 dark:hover:text-white",
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Démarrer un projet
            <IconArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-graphite-200 text-graphite-800 transition-colors hover:border-brand hover:text-brand lg:hidden dark:border-white/15 dark:text-white"
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-graphite-100 bg-white lg:hidden dark:border-white/10 dark:bg-graphite-950"
          >
            <ul className="container flex max-h-[70vh] flex-col gap-1 overflow-y-auto py-4">
              {navLinks.map((link) => {
                const active = isItemActive(pathname, link);

                if (link.children) {
                  const subOpen = openSub === link.href;
                  return (
                    <li key={link.href}>
                      <div className="flex items-stretch gap-1">
                        <Link
                          href={link.href}
                          className={cn(
                            "flex flex-1 items-center rounded-xl px-4 py-3 text-base font-medium transition-colors",
                            active
                              ? "bg-brand-50 text-brand"
                              : "text-graphite-700 hover:bg-graphite-50 dark:text-graphite-200 dark:hover:bg-white/5",
                          )}
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          aria-label={subOpen ? "Réduire" : "Développer"}
                          aria-expanded={subOpen}
                          onClick={() =>
                            setOpenSub((v) => (v === link.href ? null : link.href))
                          }
                          className="flex w-12 items-center justify-center rounded-xl text-graphite-500 transition-colors hover:bg-graphite-50 dark:hover:bg-white/5"
                        >
                          <IconChevronDown
                            className={cn(
                              "h-5 w-5 transition-transform duration-300",
                              subOpen && "rotate-180",
                            )}
                          />
                        </button>
                      </div>

                      <AnimatePresence initial={false}>
                        {subOpen && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden pl-3"
                          >
                            {link.children.map((child) => {
                              const slug = child.href.split("/").pop() ?? "";
                              const Icon =
                                child.icon ?? expertiseBySlug.get(slug)?.icon;
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-graphite-600 transition-colors hover:bg-brand-50 hover:text-brand dark:text-graphite-300 dark:hover:bg-white/5"
                                  >
                                    {Icon && (
                                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand">
                                        <Icon className="h-4 w-4" />
                                      </span>
                                    )}
                                    {child.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        active
                          ? "bg-brand-50 text-brand"
                          : "text-graphite-700 hover:bg-graphite-50 dark:text-graphite-200 dark:hover:bg-white/5",
                      )}
                    >
                      {link.label}
                      <IconArrowRight className="h-4 w-4 opacity-50" />
                    </Link>
                  </li>
                );
              })}
              <li className="mt-3 px-1">
                <Button href="/contact" className="w-full" size="lg">
                  Démarrer un projet
                  <IconArrowRight className="h-4 w-4" />
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
