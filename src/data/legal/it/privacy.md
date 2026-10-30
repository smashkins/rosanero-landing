---
title: Informativa sulla privacy
description: Quali dati personali tratta l'app Rosanero, perché, e quali diritti hai.
eyebrow: Legale · Privacy
updated: 2026-10-31
placeholder: false
toc:
  - { id: sez-1, label: "1. Titolare del trattamento" }
  - { id: sez-2, label: "2. Uso senza account" }
  - { id: sez-3, label: "3. Quali dati trattiamo" }
  - { id: sez-4, label: "4. Finalità e base giuridica" }
  - { id: sez-5, label: "5. Da dove arrivano i dati" }
  - { id: sez-6, label: "6. A chi comunichiamo i dati" }
  - { id: sez-7, label: "7. Trasferimenti fuori dal SEE" }
  - { id: sez-8, label: "8. Conservazione" }
  - { id: sez-9, label: "9. Cancellare l'account" }
  - { id: sez-10, label: "10. I tuoi diritti" }
  - { id: sez-11, label: "11. Minori" }
  - { id: sez-12, label: "12. Modifiche" }
---

Rosanero è un'applicazione **non ufficiale** dedicata ai tifosi del Palermo F.C. Non è affiliata, sponsorizzata o approvata dal Palermo F.C. né da alcuna lega o federazione. Questa informativa spiega quali dati personali trattiamo quando usi l'app, perché, e quali diritti hai.

<h2 id="sez-1">1. Titolare del trattamento</h2>

Il titolare del trattamento è **Vincenzo Stira**, contattabile all'indirizzo email [support@rosanero.app](mailto:support@rosanero.app), a cui puoi rivolgere qualsiasi richiesta relativa ai tuoi dati.

Non è stato nominato un responsabile della protezione dei dati (DPO), non ricorrendone i presupposti di legge.

<h2 id="sez-2">2. Puoi usare Rosanero senza account</h2>

Partite, risultati e classifiche sono consultabili **senza registrarsi**, e anche la bacheca dei suggerimenti funziona senza account. Se non crei un account non trattiamo alcun dato identificativo: restano solo i dati tecnici e diagnostici descritti al § 3.3, la registrazione per le notifiche push (§ 3.6), le informazioni tecniche necessarie a consegnarti i contenuti e, se usi la bacheca, ciò che ci invii lì (§ 3.4).

<h2 id="sez-3">3. Quali dati trattiamo</h2>

### 3.1 Dati dell'account

Se crei un account, trattiamo:

- **nome** e **indirizzo email**, e lo stato di verifica dell'email;
- il **link all'immagine del profilo** che fornisce Google, se accedi con Google: conserviamo solo l'indirizzo, l'app non scarica né mostra l'immagine;
- la **password**, se scegli l'accesso con email e password: non viene mai conservata in chiaro, ma solo come hash crittografico;
- i **codici di verifica a 6 cifre** (OTP) inviati per email, conservati solo come hash per i 10 minuti in cui sono validi;
- gli **identificativi delle identità collegate** (Apple, solo su iPhone; Google; email e password) e i relativi token rilasciati dal provider.

Se accedi con **Sign in with Apple** e scegli "Nascondi la mia email", riceviamo un indirizzo di inoltro anonimo `@privaterelay.appleid.com` e non il tuo indirizzo reale.

### 3.2 Dati di sessione

Per tenerti connesso trattiamo un **token di sessione**, la sua scadenza, e — registrati dal server all'apertura della sessione — l'**indirizzo IP** e lo **user agent** del dispositivo. Sul tuo dispositivo il token è conservato così: su iPhone, nel **Portachiavi (Keychain)** di sistema; su Android, cifrato con una chiave custodita nell'**Android Keystore** ed escluso dai backup del dispositivo. L'app riceve inoltre un token di breve durata, tenuto solo in memoria, per accedere ai contenuti riservati.

### 3.3 Dati diagnostici e di utilizzo

Le versioni distribuite dell'app includono **Firebase Crashlytics** e **Firebase Analytics** di Google:

- su iPhone, le versioni dell'App Store e di TestFlight e le build di test distribuite con Firebase App Distribution;
- su Android, le versioni di Google Play e le build di test distribuite con Firebase App Distribution.

**Crashlytics** raccoglie le segnalazioni di crash (lo stack trace e lo stato dell'app al momento dell'errore), il modello del dispositivo, la versione del sistema, la versione dell'app e un identificativo dell'installazione.

**Analytics** raccoglie gli eventi di utilizzo automatici, per esempio le sessioni, la prima apertura e il tempo di utilizzo. L'app registra anche eventi propri, che descrivono come la usi: per esempio le schermate che apri e i comandi principali che tocchi. Questi eventi indicano solo la schermata, il comando o l'opzione scelta, mai dati personali, e l'app non collega Analytics al tuo account. Su iPhone Analytics registra anche se hai attivato *Novità dall'app* (§ 3.6), per inviare alcuni annunci a gruppi di utenti scelti in base a come usano l'app. Analytics usa un identificativo dell'istanza dell'app generato dalla libreria; Google ricava dall'indirizzo IP una posizione approssimativa, a livello di paese o città.

Analytics è attivo dall'installazione. Puoi spegnerlo quando vuoi, su iPhone e su Android, in *Impostazioni → Privacy → Condividi statistiche d'uso*: da spento l'app non invia più nulla ad Analytics e l'identificativo salvato sul dispositivo viene azzerato, quindi se lo riaccendi riparte con uno nuovo, non collegato al precedente. Crashlytics non ha un interruttore: anche alle segnalazioni di crash puoi opporti scrivendoci.

Non raccogliamo l'identificativo pubblicitario: su Android è disattivato, su iPhone l'app non chiede il permesso di tracciamento. Non usiamo questi dati per pubblicità e non li incrociamo con i dati del tuo account. Li usiamo anche per scegliere a chi inviare alcuni annunci (§ 3.6), solo se hai lasciato attivo *Condividi statistiche d'uso* e, su iPhone, attivato *Novità dall'app*. Le build di sviluppo interne non configurano Firebase e non inviano nulla.

### 3.4 Bacheca dei suggerimenti

In *Impostazioni → Suggerimenti e segnalazioni* puoi inviare suggerimenti e segnalazioni di bug e votare le richieste degli altri, con o senza account. Quando invii una richiesta, al servizio **FeedbackThread** arrivano: il tipo (suggerimento o segnalazione), il titolo e il testo che scrivi, la piattaforma, la versione dell'app e un identificativo. Se hai effettuato l'accesso, l'identificativo è quello del tuo account; altrimenti è un identificativo casuale, generato e conservato sul tuo dispositivo. Anche i tuoi voti sono registrati con lo stesso identificativo. Il tuo nome e la tua email non vengono inviati a FeedbackThread.

Le richieste sono moderate prima della pubblicazione: nessun altro le vede finché non le approviamo. Una richiesta approvata, con titolo e testo, diventa **pubblica** sulla bacheca dell'app, su iPhone e su Android, senza il tuo nome. Per questo non scrivere nel titolo o nel testo dati personali, tuoi o di altri.

**Risposte private.** Su una richiesta che hai inviato dall'app possiamo risponderti in privato, e tu puoi risponderci: la conversazione la leggiamo solo tu e noi, e non diventa mai pubblica. Per riconoscere il tuo dispositivo, FeedbackThread gli assegna un'identità anonima, un identificativo con la sua chiave di accesso conservati sul dispositivo, e conserva i messaggi della conversazione e il punto fino a cui li hai letti. Su iPhone, quando esci dall'account o lo elimini, l'app chiude quell'identità e ne crea una nuova: da quel dispositivo le conversazioni precedenti non sono più raggiungibili. Su Android l'identità è quella dell'installazione: resta la stessa se esci dall'account, entri con un altro o lo elimini, e le conversazioni restano raggiungibili da quel telefono finché non disinstalli l'app o ne cancelli i dati.

### 3.5 Iscrizione alla beta dal sito

Se ti iscrivi alla beta pubblica dalla pagina [Beta pubblica](/beta/) del sito, trattiamo l'**indirizzo email** che inserisci, la **piattaforma** che scegli (iPhone o Android), il **modello del telefono**, la lingua della pagina e il momento dell'iscrizione. Il modello ci serve a verificare che l'app si possa installare e a provarla su dispositivi diversi. Questi dati ci arrivano per email all'indirizzo support@rosanero.app, tramite **Resend**, e li usiamo solo per invitarti al test e per scriverti durante la beta: mai per newsletter o pubblicità. La beta è su invito: se la tua richiesta non viene accolta, la cancelliamo subito dopo averla valutata. Per invitarti inseriamo il tuo indirizzo email in **TestFlight** (Apple), per iPhone; per Android, in **Firebase App Distribution** (Google) o nell'elenco dei tester di **Google Play** (Google). Questi servizi ricevono il tuo indirizzo email e ti mandano l'invito. Firebase App Distribution conserva i dati del tester (l'email e i dati del dispositivo su cui installi la build di test) finché non ti rimuoviamo dai tester. Per prevenire abusi il server usa anche l'**indirizzo IP** della richiesta, solo per il tempo necessario a limitare gli invii ripetuti.

### 3.6 Notifiche push

L'app può inviarti **notifiche push**, per esempio sulle partite. Scegli tu quali tipi ricevere. Per consegnarle usiamo il nostro servizio di notifiche, sul nostro server, e il servizio che porta le notifiche sul telefono: su iPhone **Apple Push Notification service** (APNs), di Apple; su Android **Firebase Cloud Messaging** (FCM), di Google. Le notifiche delle risposte private ai tuoi suggerimenti le invia invece FeedbackThread (vedi sotto).

A ogni apertura, anche se non hai ancora attivato le notifiche, l'app registra la sua installazione sul nostro server. Per ogni installazione conserviamo:

- un **identificativo dell'installazione**, casuale, creato dall'app e salvato sul dispositivo: se reinstalli l'app, ne crea uno nuovo;
- la **piattaforma** (iPhone o Android), il **token per le notifiche** che Apple (su iPhone) o Google (su Android, con FCM) assegna all'app su quel dispositivo, l'identificativo dell'app e, su iPhone, l'ambiente APNs a cui appartiene il token (di test o di produzione);
- la **squadra** di cui ricevi le notifiche;
- la **lingua** delle notifiche, tra quelle dell'app, ricavata da quella del dispositivo;
- la **versione dell'app**;
- lo **stato del permesso** per le notifiche (per esempio concesso, negato o non ancora chiesto);
- le tue **preferenze**: quali tipi di notifiche vuoi ricevere;
- la **data e l'ora dell'ultima registrazione**;
- se hai effettuato l'accesso, il **collegamento al tuo account**. Quando esci dall'account o lo elimini, il collegamento viene rimosso e l'installazione resta anonima.

Per ogni notifica inviata registriamo anche l'esito della consegna (per esempio inviata, scaduta o rifiutata da Apple o da Google). Per prevenire abusi il server usa l'**indirizzo IP** della richiesta solo in memoria, per il tempo necessario a limitare le richieste ripetute.

Usiamo questi dati solo per le notifiche, e te le inviamo solo se hai concesso il permesso e hai lasciato attivo quel tipo. Apple, su iPhone, e Google, su Android, ricevono il token e il contenuto della notifica, non il tuo nome né la tua email. Su Android tutte le notifiche passano da Firebase Cloud Messaging; su iPhone solo alcuni annunci (vedi sotto).

Le notifiche delle **risposte private** (§ 3.4) le invia **FeedbackThread**: su iPhone attraverso APNs, su Android attraverso Firebase Cloud Messaging. Se hai concesso il permesso e lasci attivo *Risposte ai tuoi suggerimenti* in *Impostazioni → Notifiche*, l'app comunica a FeedbackThread il token per le notifiche del telefono, collegato alla sua identità anonima; su Android lo fa solo dopo che hai aperto almeno una volta la bacheca dei suggerimenti. La notifica dice solo che è arrivata una risposta, mai il suo testo, che leggi nell'app. Se spegni quell'interruttore l'app chiede a FeedbackThread di cancellare il token; su iPhone lo chiede anche quando esci dall'account o lo elimini, mentre su Android il token resta collegato all'installazione (§ 3.4) e smette di funzionare se disinstalli l'app.

Su iPhone alcuni **annunci** di *Novità dall'app* possono invece arrivare da **Firebase Cloud Messaging** (FCM), il servizio di notifiche di Google, sempre attraverso APNs. Ci serve per scrivere a un gruppo di utenti scelto in base a come usano l'app (per esempio chi apre spesso le classifiche), con i dati di Analytics (§ 3.3). Solo mentre *Novità dall'app* è attivo, l'app registra l'iPhone presso FCM: Firebase riceve il token per le notifiche dell'iPhone e gli associa un proprio identificativo. Se spegni *Novità dall'app*, l'app chiede a Firebase di cancellare quella registrazione. Se spegni *Condividi statistiche d'uso*, non fai più parte dei gruppi a cui questi annunci sono destinati.

Anche su Android alcuni **annunci** possono arrivare dalla console di Firebase invece che dal nostro server, a un gruppo di utenti scelto allo stesso modo, con i dati di Analytics (§ 3.3). Firebase usa la registrazione presso FCM che l'app ha già per tutte le notifiche, senza altri dati. Su Android questi annunci non dipendono dall'interruttore *Novità dall'app* dell'app: se spegni *Condividi statistiche d'uso* non fai più parte dei gruppi a cui sono destinati, e puoi bloccarli spegnendo *Novità dall'app* nelle impostazioni del telefono (*Impostazioni → App → Rosanero → Notifiche*).

Puoi spegnerle tutte nelle impostazioni del telefono (su iPhone *Impostazioni → Notifiche → Rosanero*, su Android *Impostazioni → App → Rosanero → Notifiche*), oppure per tipo nell'app, in *Impostazioni → Notifiche*. Da spente non ti inviamo nulla, ma l'app continua a registrare l'installazione con il nuovo stato, così le notifiche ripartono se le riattivi. Su Android le impostazioni del telefono elencano anche i singoli tipi: spegnerne uno lì nasconde le sue notifiche, ma per non riceverle affatto spegnilo nell'app.

<h2 id="sez-4">4. Perché trattiamo questi dati e su quale base giuridica</h2>

<div class="table-wrap">

| Finalità | Dati | Base giuridica (art. 6 GDPR) |
|---|---|---|
| Creare e gestire il tuo account, tenerti connesso | § 3.1, § 3.2 | Esecuzione del contratto — lett. b) |
| Verificare l'email e consentire il recupero della password | § 3.1 | Esecuzione del contratto — lett. b) |
| Sicurezza: prevenire abusi, accessi non autorizzati e limitare le richieste ripetute | § 3.2 | Legittimo interesse — lett. f) |
| Statistiche d'uso: capire quali schermate e funzioni si usano | § 3.3 (Analytics) | Legittimo interesse — lett. f) |
| Diagnosticare crash e malfunzionamenti | § 3.3 (Crashlytics) | Legittimo interesse — lett. f) |
| Gestire suggerimenti e segnalazioni, rispondere e pubblicare sulla bacheca quelli approvati | § 3.4 | Legittimo interesse — lett. f) |
| Invitarti alla beta e scriverti durante il test | § 3.5 | Consenso — lett. a) |
| Inviarti le notifiche push che hai attivato | § 3.6 | Legittimo interesse — lett. f) |
| Scegliere, in base all'uso dell'app, a chi inviare alcuni annunci | § 3.3, § 3.6 | Legittimo interesse — lett. f) |

</div>

Ai trattamenti basati sul legittimo interesse puoi opporti (§ 10): alle statistiche d'uso con l'interruttore *Condividi statistiche d'uso* o scrivendoci, alle segnalazioni di crash scrivendoci, alle notifiche spegnendole, alla scelta dei destinatari di alcuni annunci spegnendo *Condividi statistiche d'uso* o, su iPhone, *Novità dall'app*.

Non trattiamo dati appartenenti alle categorie particolari dell'art. 9 GDPR e non prendiamo decisioni automatizzate che producano effetti giuridici nei tuoi confronti.

<h2 id="sez-5">5. Da dove arrivano i dati</h2>

Direttamente da te, oppure — quando scegli di accedere con Apple (su iPhone) o con Google — **dal provider**, che ci comunica un identificativo, l'indirizzo email associato e, se disponibili, il nome e (solo Google) il link all'immagine del profilo. Non riceviamo mai la tua password del provider.

<h2 id="sez-6">6. A chi comunichiamo i dati</h2>

Non vendiamo i tuoi dati e non li cediamo per finalità di marketing di terzi. Li trattano per nostro conto, come responsabili o titolari autonomi, i seguenti fornitori:

- **Apple** (su iPhone) e **Google**, come provider di identità, per l'accesso;
- **Resend**, per l'invio delle email di verifica e di recupero password e per inoltrarci le iscrizioni alla beta;
- **Apple (TestFlight)** e **Google (Firebase App Distribution e Google Play)**, quando ti invitiamo alla beta;
- **Google (Firebase)**, per diagnostica, analisi di utilizzo e l'invio di notifiche push con Firebase Cloud Messaging: su Android tutte, compresi alcuni annunci inviati dalla console di Firebase, su iPhone solo questi annunci;
- **Apple (Apple Push Notification service)**, per consegnare le notifiche push sull'iPhone;
- **FeedbackThread**, per la bacheca dei suggerimenti, le risposte private e le loro notifiche;
- il **fornitore di hosting** dell'infrastruttura su cui gira il servizio.

Gli altri utenti dell'app vedono le richieste che approviamo sulla bacheca (§ 3.4).

Possiamo inoltre comunicare dati all'autorità giudiziaria o ad altre autorità competenti quando un obbligo di legge lo imponga.

<h2 id="sez-7">7. Trasferimenti fuori dallo Spazio economico europeo</h2>

Alcuni dei fornitori sopra elencati hanno sede negli Stati Uniti. Quando ciò comporta un trasferimento di dati fuori dal SEE, questo avviene sulla base delle **clausole contrattuali tipo** approvate dalla Commissione europea o di una **decisione di adeguatezza**, secondo quanto previsto dal capo V del GDPR.

<h2 id="sez-8">8. Per quanto tempo li conserviamo</h2>

- **Dati dell'account**: finché l'account esiste. Se lo elimini, i dati collegati vengono cancellati insieme a esso (vedi § 9). Restano solo nei backup notturni del database, conservati sullo stesso server: cancelliamo quelli più vecchi di 7 giorni, quindi entro 10 giorni non ne resta traccia.
- **Sessioni**: fino alla scadenza o alla disconnessione.
- **Codici di verifica**: 10 minuti, il tempo della loro validità.
- **Dati diagnostici**: le segnalazioni di crash 90 giorni; gli eventi di utilizzo 2 mesi, dopo i quali restano solo report aggregati, che non identificano nessuno.
- **Notifiche push**: cancelliamo la registrazione di un'installazione dopo 90 giorni in cui l'app non si registra di nuovo, per esempio perché l'hai disinstallata, o prima, se Apple o Google ci segnalano che il token non è più valido; l'esito delle consegne, 30 giorni. Dai backup notturni del database spariscono entro 10 giorni, come i dati dell'account. La registrazione presso Firebase Cloud Messaging (§ 3.6) resta, su iPhone, finché non spegni *Novità dall'app*; su Android, finché l'app resta installata.
- **Bacheca dei suggerimenti**: le richieste approvate restano pubbliche finché la bacheca è attiva, anche dopo l'eliminazione dell'account, e le rimuoviamo se ce lo chiedi (vedi § 9); le altre richieste, per il tempo necessario a gestirle; le conversazioni private restano con la richiesta a cui si riferiscono; il token per le notifiche delle risposte, finché non spegni l'interruttore o, su iPhone, esci dall'account; su Android smette di funzionare se disinstalli l'app.
- **Email al supporto** (comprese le richieste di cancellazione): 12 mesi dall'ultimo messaggio.
- **Iscrizioni alla beta**: se la richiesta viene accolta, fino alla fine del programma di test, o prima se revochi il consenso o ci chiedi di cancellarle; se non viene accolta, la cancelliamo subito dopo averla valutata.

<h2 id="sez-9">9. Cancellare l'account</h2>

Puoi eliminare il tuo account **direttamente dall'app**, in *Impostazioni → Elimina account*. La cancellazione è immediata: rimuove il profilo, le identità collegate e le sessioni, scollega dall'account le registrazioni per le notifiche push dei tuoi dispositivi, revoca l'autorizzazione concessa ad Apple se avevi effettuato l'accesso con Apple, e l'app ti disconnette, rimuovendo il token di sessione dal dispositivo. È un'operazione **irreversibile**.

Non vengono cancellati: le richieste approvate sulla bacheca, che rimuoviamo se ce lo chiedi, anche senza eliminare l'account; i dati di Firebase, che non sono collegati all'account; le registrazioni per le notifiche push, che restano anonime, così continui a ricevere le notifiche che hai attivato (§ 3.6); le email scambiate con il supporto; i backup del database, dove i dati restano al massimo 10 giorni. I tempi sono al § 8. Le istruzioni passo per passo, anche per chi non ha più l'app, sono nella pagina [Eliminazione account](/delete-account/).

<h2 id="sez-10">10. I tuoi diritti</h2>

Ai sensi degli artt. 15–22 del GDPR hai diritto di ottenere l'**accesso** ai tuoi dati, la loro **rettifica** o **cancellazione**, la **limitazione** del trattamento, la **portabilità**, e di **opporti** ai trattamenti fondati sul legittimo interesse. Puoi esercitarli scrivendo a [support@rosanero.app](mailto:support@rosanero.app); ti risponderemo entro un mese. Per opporti alle statistiche d'uso non serve scriverci: basta spegnere, in qualsiasi momento, *Impostazioni → Privacy → Condividi statistiche d'uso*. Per non ricevere più le notifiche push, spegnile nelle impostazioni del telefono o, per tipo, in *Impostazioni → Notifiche*. Se ti sei iscritto alla beta puoi anche **revocare il consenso** in qualsiasi momento, allo stesso indirizzo: la revoca non tocca il trattamento fatto prima.

Hai inoltre diritto di proporre **reclamo al Garante per la protezione dei dati personali** ([www.garanteprivacy.it](https://www.garanteprivacy.it)) o all'autorità di controllo dello Stato in cui risiedi.

<h2 id="sez-11">11. Minori</h2>

L'app non è destinata a minori di 14 anni e non raccogliamo consapevolmente i loro dati. Se ritieni che un minore ci abbia fornito dati personali, scrivici a [support@rosanero.app](mailto:support@rosanero.app) e provvederemo alla cancellazione.

<h2 id="sez-12">12. Modifiche a questa informativa</h2>

Possiamo aggiornare questa informativa; la data in cima indica sempre l'ultima versione. Se le modifiche saranno sostanziali te lo segnaleremo nell'app prima che diventino efficaci.
