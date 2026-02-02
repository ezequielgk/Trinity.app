---
title: Trinity Launcher Installation
description: Complete guide for Linux systems to install Trinity Launcher for Minecraft Bedrock.
---

# Trinity Launcher Installation

## Complete guide for Linux systems

### Before you start
**Trinity Launcher** is distributed as a **Flatpak** package to ensure compatibility and security across all Linux distributions. Make sure you have Flatpak installed before continuing.

---

## 1. Install Flatpak
**Required package manager**

To install Flatpak on your Linux distribution, visit the official page and look for specific instructions for your system:

[Go to Flatpak.org](https://flatpak.org/setup/)

Once you have Flatpak installed and configured, proceed to the next step.

---

## 2. Install Trinity Launcher
**Choose your preferred method**

### Method A: From Testing-Beta Repository (RECOMMENDED)
This method installs Trinity Launcher directly from the testing-beta repository, giving you the latest versions and automatic updates.

Run these commands in order in your terminal:

1. **Add the Trinity repository**
   ```bash
   flatpak remote-add --if-not-exists trinity https://trinity-flatpak.codeberg.page/com.trench.trinity.launcher.flatpakrepo
   ```

2. **Install the KDE runtime (Qt6)**
   ```bash
   flatpak install flathub org.kde.Platform//6.9
   ```

3. **Install the Qt WebEngine base for Qt6**
   ```bash
   flatpak install flathub io.qt.qtwebengine.BaseApp//6.9
   ```

4. **Install Trinity Launcher**
   ```bash
   flatpak install com.trench.trinity.launcher
   ```

**Advantages**: Direct access to the latest beta versions, automatic updates when available, and simplified installation.

### Method B: From Software Store
First you must add the Trinity repository:

1. **Add repository**
   ```bash
   flatpak remote-add --if-not-exists trinity https://trinity-flatpak.codeberg.page/com.trench.trinity.launcher.flatpakrepo
   ```

2. Then search for and install "**Trinity Launcher**" from your software store (GNOME Software, KDE Discover, etc.).

> **Note**: You may need to restart your software store after adding the repository.

### Method C: AppImage (beta) - PORTABLE
Download Trinity Launcher as an AppImage file. This method doesn't require any package manager and works on most Linux distributions.

[Download AppImage (v2.6-beta)](https://github.com/Trinity-LA/Trinity-Launcher/releases/) *(Link placeholder based on context)*

**Follow these steps to install:**

1. **Install Gear Level**
   Open your software store (GNOME Software, KDE Discover, etc.) and search for "Gear Level". Install the application.

2. **Open the AppImage with Gear Level**
   Right-click on the downloaded `trinity.AppImage` file, select "Open With" and choose Gear Level.

3. **Unlock the AppImage**
   In Gear Level, click on the "Unlock" button to make the AppImage executable.

4. **Add to Applications Menu**
   Click on "Add to apps menu" button in Gear Level. Trinity Launcher will now appear in your applications menu.

**Advantages**: No root permissions required, portable across distributions, easy to manage and update manually.

---

## Remote Login (AppImage Only)
**Required for Microsoft account authentication**

If you want to log in with your Microsoft account, you need to use Remote Login. Follow these steps:

### Step 1: Enable Remote Login in Settings
1. **Open Settings**: Open the game and go to Settings.
2. **Enable Remote Login**: Go to Account Settings and enable Remote Login.
3. **Restart the Game**: Close the game completely and reopen it, then proceed to log in.

### Step 2: Complete Login in Browser
1. **Open Microsoft Link Page**: Open [microsoft.com/link](https://microsoft.com/link) in your browser.
2. **Enter the Code**: Enter the code that appeared in the game when you started the login process.
3. **Continue with Login**: Continue with your Microsoft account login as prompted.
4. **Complete the Process**: Just continue and the session will be started. In the game, close the login dialog and you're done!

Done! You are now logged in with your Microsoft account. **This process only needs to be done once.**

---

## 3. Run Trinity Launcher
**Start using the launcher**

Once installed, you can run Trinity Launcher in the following ways:

- **From Applications Menu**: Search for "Trinity Launcher" in your application launcher.
- **From Terminal**:
  ```bash
  flatpak run com.trench.trinity.launcher
  ```

---

## Need help with installation?

### Get help on Discord
[Join our Discord Server](https://discord.gg/ettXssJs4b)

### Installation issues?
If you encounter problems during installation, verify that you have the Flatpak repositories configured correctly and restart your session after installing Flatpak for the first time.

[View Repository on GitHub](https://github.com/Trinity-LA/Trinity-Launcher)
