---
title: Account deletion
description: How to delete your Rosanero account from the app or by email, even without the app, and what gets deleted and what does not.
eyebrow: Account deletion
updated: 2026-10-27
placeholder: false
toc:
  - { id: in-app, label: From the app }
  - { id: email, label: "Without the app: by email" }
  - { id: cosa, label: What gets deleted }
  - { id: resta, label: What is not deleted }
---

This page explains how to delete your account in **Rosanero**, the app for iPhone and Android by **Vincenzo Stira**, and what happens to your data. You can do it from the app in a few seconds, or by email, even without the app.

<h2 id="in-app">From the app</h2>

1. **Open Rosanero and sign in.** If you are not signed in yet, tap the person icon at the top right of the *Home* tab, or sign in from *Settings*. The button to delete your account only appears once you are signed in.
2. **Open the settings.** Tap the *Settings* tab, the last one in the bottom bar.
3. **Tap "Delete Account".** You will find it in the *Account* section.
4. **Confirm.** In the "Delete your account?" dialog, tap "Delete Account" again.

Deletion is immediate and final, and the app signs you out.

Already uninstalled the app or unable to sign in? Use the [email request](#email) below.

<h2 id="email">Without the app: by email</h2>

Write to [support@rosanero.app](mailto:support@rosanero.app?subject=Account%20deletion) with the subject **Account deletion** from the email address linked to the account.

If you signed in with Apple and chose "Hide My Email", the address linked to the account is an `@privaterelay.appleid.com` address. Tell us that address in your request: you will find it in your Apple Account settings, under *Sign in with Apple*. We write to that address to confirm.

We may ask you to confirm the request from the address linked to the account. We delete the account within 30 days and confirm by email once it is done.

<h2 id="cosa">What gets deleted</h2>

From the app, deletion is immediate; by email, it happens within 30 days. The following is deleted from our servers:

- your **profile**: name, email address, whether the email was verified and, if you signed in with Google, the link to your profile picture;
- your **linked identities** (Apple, Google, email and password), the tokens issued by Apple and Google, and the password hash;
- your **sessions**, each with the IP address and user agent recorded when it was opened.

Also:

- if you signed in with Apple, we revoke at Apple the authorisation you had granted;
- if you delete the account from the app, the app signs you out and removes the session token from your device;
- your devices' push notification registrations are unlinked from the account;
- verification codes (OTP) already sent are not deleted with the account, but they expire within 10 minutes.

If you signed in with Google, Rosanero may remain listed among the third-party apps connected to your Google Account. You can remove it at [myaccount.google.com/connections](https://myaccount.google.com/connections).

<h2 id="resta">What is not deleted</h2>

- **Suggestions and reports.** The requests we approved stay public on the board, no longer tied to any account. We remove them on request within 30 days, even if you do not delete your account: write to [support@rosanero.app](mailto:support@rosanero.app) giving their titles.
- **Firebase data.** The crash and usage data collected by Firebase is not linked to the account. Crash reports are kept for 90 days, usage events for 2 months; after that only aggregated reports remain, which do not identify anyone.
- **Push notifications.** Your devices' registrations, iPhone and Android, stay, no longer tied to any account, so you keep getting the notifications you turned on. To stop getting them, turn them off in the phone's settings or in the app, under *Settings → Notifications*. We delete a registration after 90 days in which the app is not opened, for example if you uninstall it.
- **Support emails.** The emails you send us, including the deletion request, are kept for 12 months from the last message.
- **Backups.** Every night we save a copy of the database on the same server and delete the copies older than 7 days: within 10 days of deletion, nothing of your account remains in the backups. There are no other copies.
- **Beta.** A beta sign-up is separate from the account. To leave the test, write to us at [support@rosanero.app](mailto:support@rosanero.app).
