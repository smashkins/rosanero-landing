---
title: Eliminazione account
description: Come eliminare il tuo account Rosanero dall'app o via email, anche senza l'app, e cosa viene cancellato e cosa no.
eyebrow: Eliminazione account
updated: 2026-10-27
placeholder: false
toc:
  - { id: in-app, label: Dall'app }
  - { id: email, label: "Senza l'app: via email" }
  - { id: cosa, label: Cosa viene cancellato }
  - { id: resta, label: Cosa non viene cancellato }
---

Questa pagina spiega come eliminare il tuo account in **Rosanero**, l'app per iPhone e Android di **Vincenzo Stira**, e cosa succede ai tuoi dati. Puoi farlo dall'app in pochi secondi, oppure via email, anche senza l'app.

<h2 id="in-app">Dall'app</h2>

1. **Apri Rosanero e accedi.** Se non hai ancora effettuato l'accesso, tocca l'icona della persona in alto a destra nella scheda *Home*, oppure accedi da *Impostazioni*. Il pulsante per eliminare l'account compare solo dopo l'accesso.
2. **Apri le impostazioni.** Tocca la scheda *Impostazioni*, l'ultima nella barra in basso.
3. **Tocca "Elimina account".** Lo trovi nella sezione *Account*.
4. **Conferma.** Nella finestra "Eliminare l'account?" tocca di nuovo "Elimina account".

L'eliminazione è immediata e definitiva, e l'app ti disconnette.

Hai già disinstallato l'app o non riesci ad accedere? Usa la [richiesta via email](#email) qui sotto.

<h2 id="email">Senza l'app: via email</h2>

Scrivi a [support@rosanero.app](mailto:support@rosanero.app?subject=Eliminazione%20account) con oggetto **Eliminazione account** dall'indirizzo email collegato all'account.

Se hai effettuato l'accesso con Apple e hai scelto "Nascondi la mia email", l'indirizzo collegato all'account è un indirizzo `@privaterelay.appleid.com`. Indicacelo nella richiesta: lo trovi nelle impostazioni del tuo Account Apple, alla voce *Accedi con Apple*. Ti scriviamo a quell'indirizzo per confermare.

Possiamo chiederti di confermare la richiesta dall'indirizzo collegato all'account. Eliminiamo l'account entro 30 giorni e ti confermiamo via email quando è fatto.

<h2 id="cosa">Cosa viene cancellato</h2>

Dall'app la cancellazione è immediata; via email avviene entro 30 giorni. Dai nostri server vengono cancellati:

- il **profilo**: nome, indirizzo email, stato di verifica dell'email e, se accedevi con Google, il link alla tua immagine del profilo;
- le **identità collegate** (Apple, Google, email e password), i token rilasciati da Apple e Google e l'hash della password;
- le **sessioni**, ciascuna con l'indirizzo IP e lo user agent registrati quando è stata aperta.

Inoltre:

- se accedevi con Apple, revochiamo presso Apple l'autorizzazione che avevi concesso;
- se elimini l'account dall'app, l'app ti disconnette e rimuove il token di sessione dal dispositivo;
- le registrazioni per le notifiche push dei tuoi dispositivi vengono scollegate dall'account;
- i codici di verifica (OTP) già inviati non vengono cancellati con l'account, ma scadono entro 10 minuti.

Se accedevi con Google, Rosanero può restare nell'elenco delle app di terze parti collegate al tuo Account Google. Puoi rimuoverla da [myaccount.google.com/connections](https://myaccount.google.com/connections).

<h2 id="resta">Cosa non viene cancellato</h2>

- **Suggerimenti e segnalazioni.** Le richieste che abbiamo approvato restano pubbliche sulla bacheca, non più collegate ad alcun account. Le rimuoviamo su richiesta entro 30 giorni, anche se non elimini l'account: scrivi a [support@rosanero.app](mailto:support@rosanero.app) indicandone i titoli.
- **Dati di Firebase.** I dati di crash e di utilizzo raccolti da Firebase non sono collegati all'account. Le segnalazioni di crash sono conservate 90 giorni, gli eventi di utilizzo 2 mesi; dopo restano solo report aggregati, che non identificano nessuno.
- **Notifiche push.** Le registrazioni dei tuoi iPhone restano, non più collegate ad alcun account, così continui a ricevere le notifiche che hai attivato. Per non riceverle più, spegnile nelle impostazioni dell'iPhone. Cancelliamo la registrazione dopo 90 giorni in cui l'app non si apre, per esempio se la disinstalli.
- **Email al supporto.** Le email che ci scrivi, compresa la richiesta di cancellazione, sono conservate per 12 mesi dall'ultimo messaggio.
- **Backup.** Ogni notte salviamo una copia del database sullo stesso server e cancelliamo quelle più vecchie di 7 giorni: entro 10 giorni dalla cancellazione, nei backup non resta nulla del tuo account. Non esistono altre copie.
- **Beta.** L'iscrizione alla beta è separata dall'account. Per uscire dal test, scrivici a [support@rosanero.app](mailto:support@rosanero.app).
