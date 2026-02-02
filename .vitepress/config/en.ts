import type { DefaultTheme, LocaleConfig } from "vitepress";

import type { CustomConfig, ThemeConfig } from "../theme/types";

import { sections } from "../theme/plugins/section";
import { resolveBaseUrl } from "../theme/utils";

export const SITE_NAME = "Trinity Projects";
export const META_DESCRIPTION = "An open source launcher for Minecraft Bedrock with the ability to manage multiple instances, worlds, textures and mods.";

export const searchLocale: Record<string, Partial<Omit<DefaultTheme.LocalSearchOptions, "locales">>> = {
  root: {
    translations: {
      button: {
        buttonText: "Search",
        buttonAriaLabel: "Search",
      },
      modal: {
        resetButtonTitle: "Reset search",
        backButtonTitle: "Close search",
        noResultsText: "No results for",
        footer: {
          selectText: "to select",
          selectKeyAriaLabel: "enter",
          navigateText: "to navigate",
          navigateUpKeyAriaLabel: "up arrow",
          navigateDownKeyAriaLabel: "down arrow",
          closeText: "to close",
          closeKeyAriaLabel: "escape",
        },
      },
    },
  },
};

export const config: LocaleConfig<ThemeConfig> = {
  root: {
    label: "English",
    lang: "en",
    description: META_DESCRIPTION,

    head: [["meta", { property: "og:site_name", content: SITE_NAME }]],

    themeConfig: {
      nav: getNav(),
      sidebar: {
        "/": defaultSidebar(),
      },
      outline: {
        label: "On this page",
        level: "deep",
      },
      docFooter: {
        prev: "Previous page",
        next: "Next page",
      },
      editLink: {
        pattern: "https://github.com/TrinityLauncherApp/website/edit/main/website/:path",
        text: "Suggest changes to this page",
      },
      sections,
    },
  },
};

function defaultSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Projects",
      collapsed: false,
      items: [
        {
          text: "Minecraft Bedrock",
          collapsed: false,
          items: [
            { text: "Overview", link: "/launchers/minecraft/overview" },
            { text: "Installation", link: "/launchers/minecraft/installation" },
            { text: "Usage", link: "/launchers/minecraft/usage" },
            { text: "Features", link: "/launchers/minecraft/features" },
            { text: "Configuration", link: "/launchers/minecraft/configuration" },
            { text: "Troubleshooting", link: "/launchers/minecraft/troubleshooting" },
          ]
        },
        {
          text: "Hytale Launcher",
          collapsed: true,
          items: [
            { text: "Overview", link: "/launchers/hytale/overview" },
            { text: "Installation", link: "/launchers/hytale/installation" },
            { text: "Usage", link: "/launchers/hytale/usage" },
            { text: "Features", link: "/launchers/hytale/features" },
            { text: "Configuration", link: "/launchers/hytale/configuration" },
            { text: "Troubleshooting", link: "/launchers/hytale/troubleshooting" },
          ]
        }
      ]
    },
    {
      text: "Documentation",
      collapsed: false,
      items: [
        {
          text: "General Concepts",
          collapsed: false,
          items: [
            { text: "Instances", link: "/docs/concepts/instances" },
            { text: "Profiles", link: "/docs/concepts/profiles" },
            { text: "Synchronization", link: "/docs/concepts/synchronization" },
            { text: "Backups", link: "/docs/concepts/backups" },
          ]
        },
        {
          text: "Configuration",
          collapsed: false,
          items: [
            { text: "Global Settings", link: "/docs/configuration/global-settings" },
            { text: "Advanced Options", link: "/docs/configuration/advanced-options" },
          ]
        }
      ]
    },
    {
      text: "Guides",
      collapsed: false,
      items: [
        { text: "Getting Started", link: "/guides/getting-started/" },
        { text: "Common Issues", link: "/guides/common-issues/" },
        {
          text: "Troubleshooting",
          collapsed: true,
          items: [
            { text: "Diagnosis", link: "/guides/troubleshooting/diagnosis/" },
            { text: "Logs & Reports", link: "/guides/troubleshooting/logs-reports" },
          ]
        },
        { text: "Backups & Recovery", link: "/guides/backups/" },
        { text: "Synchronization", link: "/guides/synchronization/" }
      ]
    },
    {
      text: "Developers",
      collapsed: true,
      items: [
        { text: "Overview", link: "/dev/overview" },
        {
          text: "Shared Technical Concepts",
          collapsed: true,
          items: [
            { text: "Core Architecture", link: "/dev/shared-technical-concepts/core-architecture" },
            { text: "Instance System", link: "/dev/shared-technical-concepts/instance-system" },
            { text: "Configuration Internals", link: "/dev/shared-technical-concepts/configuration-internals" },
            { text: "File & Directory Layout", link: "/dev/shared-technical-concepts/file-layout" },
            { text: "Cross-launcher Components", link: "/dev/shared-technical-concepts/cross-launcher-components" },
          ]
        },
        {
          text: "Minecraft Bedrock (Technical)",
          collapsed: true,
          items: [
            { text: "Architecture", link: "/dev/minecraft-technical/architecture" },
            { text: "Instance Handling", link: "/dev/minecraft-technical/instance-handling" },
            { text: "Resource & Mods", link: "/dev/minecraft-technical/resource-mods-management" },
            { text: "Configuration System", link: "/dev/minecraft-technical/configuration-system" },
            { text: "Logging & Diagnostics", link: "/dev/minecraft-technical/logging-diagnostics" },
            { text: "Build Process", link: "/dev/minecraft-technical/build-process" },
          ]
        },
        {
          text: "Hytale (Technical)",
          collapsed: true,
          items: [
            { text: "Architecture", link: "/dev/hytale-technical/architecture" },
            { text: "Authentication Flow", link: "/dev/hytale-technical/authentication-flow" },
            { text: "Instance Management", link: "/dev/hytale-technical/instance-management" },
            { text: "Configuration System", link: "/dev/hytale-technical/configuration-system" },
            { text: "Logging & Diagnostics", link: "/dev/hytale-technical/logging-diagnostics" },
            { text: "Build Process", link: "/dev/hytale-technical/build-process" },
          ]
        },
        {
          text: "Development Setup",
          collapsed: true,
          items: [
            { text: "Requirements", link: "/dev/development-setup/requirements" },
            { text: "Local Env Setup", link: "/dev/development-setup/local-environment-setup" },
            { text: "Build & Run", link: "/dev/development-setup/build-run" },
            { text: "Debugging", link: "/dev/development-setup/debugging" },
          ]
        },
        {
          text: "Contributing",
          collapsed: true,
          items: [
            { text: "How to Contribute", link: "/dev/contributing/how-to-contribute" },
            { text: "Code Style", link: "/dev/contributing/code-style" },
            { text: "Commit Strategy", link: "/dev/contributing/commit-strategy" },
            { text: "Pull Requests", link: "/dev/contributing/pull-requests" },
            { text: "Issues & Bugs", link: "/dev/contributing/issues-bug-reports" },
          ]
        }
      ]
    },
    {
      text: "About Trinity",
      collapsed: true,
      items: [
        { text: "Community Values", link: "/about/community-values" },
        { text: "Open Source Philosophy", link: "/about/open-source-philosophy" },
        { text: "License", link: "/about/license" },
      ]
    }
  ];
}

function getNav(): DefaultTheme.NavItem[] {
  return [
    { text: "Projects", link: "/projects" },
    { text: "Documentation", link: "/docs/concepts/instances" },
    { text: "Guides", link: "/guides/getting-started/" },
    { text: "Download", link: "/download/" },
    { text: "Back to Home", link: "/" }
  ];
}


