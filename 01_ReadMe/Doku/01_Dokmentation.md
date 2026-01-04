# Projektdokumentation – Interaktive Medien 5 (IM5)

## Projektkontext
- Studienprojekt im Modul **Interaktive Medien 5**
- Einzelprojekt
- Projektzeitraum: HS25
- Projekttyp: Webprojekt
- Online-Portfolio für Esther Hohmeister (Lyrik)
- Figma: https://www.figma.com/design/ZkhFqsuLZtH4wKmCMrxoIj/EH_Website?node-id=0-1&t=HsAUiEkfcj6HnbHM-1

---

## Kurzbeschreibung
- Entwicklung einer ruhigen, modernen Portfolio-Website
- Fokus auf Gedichte, Bücher und Persönlichkeit der Autorin
- Ziel: Modernisierung einer bestehenden Website
- Gestaltung bewusst reduziert, ruhig und leser:innenfreundlich
- Subtile Interaktionen (Parallax, Animationen, Karussell)

![Die alte Startseite](/01_ReadMe/Doku/Screenshots/Startseite_Alt.jpg)

![Die alte Blättern-Seite](/01_ReadMe/Doku/Screenshots/Blättern_Alt.jpg)

![Die alte Kontaktseite](/01_ReadMe/Doku/Screenshots/Kontakt_Alt.jpg)

![Die alte Zur-Dichterin-Seite](/01_ReadMe/Doku/Screenshots/Zur_Dichterin_Alt.jpg)

---

## Zielgruppe
- Erwachsene Leser:innen
- Literatur- und kulturinteressiertes Publikum
- Teilweise ältere Zielgruppe
- Anforderungen:
  - gute Lesbarkeit
  - klare Navigation
  - keine versteckten Interaktionen
  - ruhige Gestaltung

---

## Technologien & Tools
- HTML (Vanilla)
- CSS (Vanilla)
- JavaScript (Vanilla)
- Figma (Konzeption & Layout)
- Procreate (Hintergrundgrafiken)
- Hosting: Netzone
- Keine Frameworks, keine Libraries
- Keine Datenbank / kein CMS

---

## Projektlogbuch (prozessbezogen)

### 23.Oktober 2025 – Projektstart
**Themen**
- Projektidee definiert
- Zielgruppe analysiert
- Entscheidung gegen CMS & Datenbank
- Fokus auf saubere Struktur statt Funktionsumfang
- Vorgehen: Zuerst Figma, anschliessen Coden

**Reflexion**
- Klare Einschränkungen halfen beim Projektfokus
- Kein CMS wurde gewählt, damit ich das Coden wiederholen kann/um Kompetenzen für einfache Websites aufzubauen

### 24.Oktober 2025 – Projektstart
**Themen**
- Alle auf der alten Website vorhanden Unterseiten wurde im Figma übernommen und umgestaltet
- Dokumentation aller Titel aus allen Gedichtbänden
- rudimentäre Texte erstellt
- Entscheidung für ein zentrales Layout mit Kachelsystem
- Viel Weissraum und eine ruhige Typografie

**Reflexion**
- Website wirkt zwar schlicht aber auch sehr lebenslos durch viele Grautöne
- Shop-System nachbauen wird für mich zu schiwerig sein, deswegen weiche ich auf eine Bestellung via Mail aus

---

### 27.November 2025 – Konzeption
**Themen**
- Erste Versuche mit Hintgründen zur "Belebung" der Website

**Reflexion**
- Versuche sind noch nicht geglückt da nicht stimmig

---

### 28.November 2025 – Abschluss Figma, WS aufsetzen
**Themen**
- Figma: Weitere Versuche mit Hintegründen: Tintenklekse 
- VS-Code: Aufsetzen der Webiste, Verbindungen herstellen, alte Dateien sichern, Header hinzufügen, SSL-Zertifikat für Website erneuern (zuvor nur HTTP ungesichert)

**Reflexion**
- Weil ich keine passende Farbgebung gefunden habe, entscheide ich mich, mit dem Coden anzufangen und im Verlauf des Projekts die Gestaltung anzupassen. Das Grundgerüst wird bleiben.

![Wegen alter Website ist Verbindung als Nicht Sicher geflagged](/01_ReadMe/Doku/Screenshots/Nicht_Sicher_HTTP.png)

---

### 07.Dezember – Startseite, Zur Dichterin
**Themen**
- Abfüllung Content und Gestaltung Startseite + Zur Dichterin
- Erstellung eines Root-Systems mit verschiedenen Variabeln und Layout Utilities

**Reflexion**
- Das Rootsystem muss umfassend sein, damit die Unterseiten.css aufgeräumt sein können

---

### 08.Dezember 2025 – Book Cards & Karussell
**Themen**
- Entwicklung der Book Cards
- Karussell zur Präsentation der Werke
- Responsive Verhalten (Desktop / Tablet / Mobile)
- Unendliches Scrollen umgesetzt
- Impressum hinzugefügt

**Schwierigkeiten**
- Unterschiedliche Textlängen
- Gleich hohe Cards auf Desktop
- Ruckelige Bewegungen im Karussell
- Karussell versursacht horizontales Scrolling auf Mobile

![Horizontales Scrolling Mobile](/01_ReadMe/Doku/Screenshots/Horizontales_Scrolling_Mobile.png)

**Reflexion**
- Komplexität unterschätzt
- Responsive UI erfordert viele Iterationen
- Look Impressum unterscheidet sich noch zu stark vom Rest der WS -> muss später angepasst werden

---


### 09.Dezember 2025 – Totalausfall :/
**Themen**
- erfolglose Backupversuch wegen Datenverlust durch SFTP: Sync Remote -> Local anstatt von Sync Local to Remote. Wiederherstellung des Codes dauerte etwa einen halben Tag.

**Reflexion**
- sehr dumm gewesen

**Learnings**
- Regelmässig committen & pushen
- Vorsicht bei SFTP

![Weshalb ich ein halben Arbeitstag verlor](/01_ReadMe/Doku/Screenshots/Totalausfall_SnycRemote.png)

---

### Bis Mitte Dezember 2025 – UX & Interaktion
**Themen**
- „Mehr lesen / Weniger lesen“
- Akkordeon-Logik
- Fokus auf einfache Bedienbarkeit
- Keine versteckten Funktionen
- Dezente Effekte
- Wortrolle auf Startseite

**Reflexion**
- UX wichtiger als visuelle Spielereien
- Website wirkte zu statisch, deswegen wollte ich bewgende und farbige Elemente einbauen
- Durch wenigen Farben auf der Website fallen Book Covers besser auf: Ziel erfüllt

![Leblose Webiste :( )](/01_ReadMe/Doku/Screenshots/Etwas_Leblos.png)

---

### Bis Ende Dezember 2025 – Neuer Header + Footer, Parallax & Hintergründe, FavIcons
**Themen**
- Neuer Heade & Footer, da alte Header und Footer zu alt aussah
- Löschung der Unterseite Blättern
- Parallax-Hintergründe integriert
- Eigene Tintenschriftzüge als Grafiken
- Unterschiedliche Einstellungen je Device
- Rotation & Anpassung der Hintergründe für Mobile
- FavIcons hinzugefügt

**Reflexion**
- Hintergründe dürfen Content nicht dominieren
- Die Programmierung der Unterseite Blättern wird sehr aufwendig sein, deswegen streiche ich die Unterseite und fokussiere mich stattdessen auf die Codestruktur, Gestaltung und andere Unterseiten
- Hintergründe Werten die Website merkbar auf

![Version 1 Header Mobile](/01_ReadMe/Doku/Screenshots/Header_Mobile_Alt.png)

---

### Ende Dezember 2025 – Verknüpfung Startseite → Shop
**Themen**
- Klick auf „Zum Shop“ springt zum passenden Buch
- Sanfter Scroll mit eigener Easing-Funktion
- Subtile Highlight-Animation (Stroke)
- Animation hinter der Book Card

**Schwierigkeiten**
- Timing
- Border-Radius beim Stroke
- Scroll-Geschwindigkeit
- Sauberer Ablauf im JS programmieren

**Reflexion**
- Micro-Interaktionen steigern Qualität stark

---

### Anfang Januar 2026 – Mobile UX, Überarbeitung Codestruktur
**Themen**
- Blockade Vertikales Scrollen im Karussell aufgehoben
- Touch-Gesten angepasst
- Ziel: natürliches Scrollverhalten
- Restrukturierung des Codes mittels KI

**Reflexion**
- Mobile UX braucht gezielte Lösungen


---

### Anfang Januar 2026 – Deployment & Hosting
**Themen**
- Hosting bei Netzone
- SSL-Probleme (http / https)
- Cache-Probleme im Browser

**Learning**
- Inkognito-Modus als Debug-Hilfe



### Voraussichtliche Abgabezeitpunk: 04.Januar 2026 – Was läuft in Zukunft?

**TBD: Themen**
- Überarbeitung der Hintergründe
- Erstellen und Einfügen eines richtigen Logos (zur Zeit nur Platzhalter) 
- Überarbeitung der Buchtexte. Zum Teil wenig informativ, (dazu hat mir jetzt auch die Zeit gefehlt)
- Überarbeitung des Karusell-Systems


---

## Learnings
- Strukturierung von HTML, CSS und JavaScript
- Responsive Design ist komplexer als erwartet
- Bedeutung von Micro-Interaktionen
- KI als produktive Unterstützung
- Saubere Code-Struktur spart Zeit

---

## Schwierigkeiten
- Gleich hohe Book Cards auf Desktop (bis Abgabezeitpunkt)
- Unendliches Karussell ohne Ruckeln
- Parallax über alle Devices hinweg
- Fehlende Backups

---

## Ressourcen
- ChatGPT (Problemlösung, Refactoring, Recherche)
- CSS-Tricks
- MDN Web Docs
- Eigene Illustrationen (Procreate)
- Eigene Buchcover-Fotografie 
- Illustrationen aus dem Werk Gedichte 2020-2023: Rebekka Good

---

## Fazit
- Projektziel grösstenteils erreicht
- Fokus auf Gestaltung & UX gelungen
- Nicht alle technischen Ziele vollständig umgesetzt
- Grosse persönliche Lernkurve
