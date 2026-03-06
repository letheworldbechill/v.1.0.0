/* ============================================
   SMOOTH BUILDER PRO v4.4.0 - EXTRACTED CONFIG
   industryTemplates, default components/order/settings, componentMeta
   ============================================ */

(function(){
      var industryTemplates = {
        // --------------------------------------------
        // GENERIC SWISS KMU (Landing)
        // --------------------------------------------
        schweizer_kmu: {
          name: "Schweizer KMU Landing",
          icon: "🇨🇭",
          settings: {
            primaryColor: "#134e4a",
            accentColor: "#d97706",
            darkMode: false,
            fontStack: "instrument",
            darkModeToggle: true,
            stylePreset: "gasserwerk",
            designDensity: "airy",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            header: {
              companyName: "Musterfirma GmbH",
              logoText: "MF",
              navItems: ["Leistungen", "Vorteile", "FAQ", "Kontakt"],
              ctaText: "Kostenlos beraten lassen",
            },
            hero: {
              title: "Mehr Zeit fürs Kerngeschäft. Weniger Admin.",
              subtitle:
                "Buchhaltung, Organisation und Backoffice – klar, effizient und zuverlässig.",
              primaryBtn: "Kostenloses Erstgespräch",
              secondaryBtn: "Leistungen ansehen",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "Schweiz", label: "Lokale Nähe" },
                { value: "Transparent", label: "Klare Offerten" },
                { value: "Digital", label: "Moderne Prozesse" },
                { value: "Persönlich", label: "Fixer Kontakt" },
              ],
            },
            services: {
              title: "Unsere Leistungen",
              subtitle: "Pragmatisch, terminsicher, passend zu Ihrem KMU.",
              items: [
                {
                  icon: "📊",
                  title: "Finanzbuchhaltung",
                  text: "Saubere Fibu, Abstimmungen, Auswertungen – digital und nachvollziehbar.",
                },
                {
                  icon: "💳",
                  title: "Debitoren/Kreditoren",
                  text: "Rechnungen, Mahnwesen, Zahlungsabgleich – mit klaren Prozessen.",
                },
                {
                  icon: "🧾",
                  title: "Jahresabschluss",
                  text: "Abschluss nach OR, Vorbereitung für Steuern und Banken, sauber dokumentiert.",
                },
              ],
            },
            benefits: {
              title: "Warum mit uns?",
              subtitle: "Kompetenz, Klarheit und Verlässlichkeit.",
              items: [
                {
                  title: "Planbarkeit",
                  text: "Klare Pakete oder transparente Abrechnung – ohne Überraschungen.",
                },
                {
                  title: "Proaktive Kommunikation",
                  text: "Fristen, To-dos und offene Punkte werden frühzeitig adressiert.",
                },
                {
                  title: "Digitale Zusammenarbeit",
                  text: "Dokumente, Belege und Abstimmungen so effizient wie möglich.",
                },
              ],
            },
            testimonials: {
              title: "Was Kunden schätzen",
              items: [
                {
                  quote:
                    "Endlich haben wir saubere Zahlen und Ruhe bei Fristen.",
                  author: "K. Müller",
                  role: "Geschäftsführer, KMU",
                },
                {
                  quote:
                    "Die Zusammenarbeit ist digital – aber trotzdem persönlich.",
                  author: "S. Meier",
                  role: "Inhaberin",
                },
              ],
            },
            faq: {
              title: "Häufige Fragen",
              subtitle: "Kurz beantwortet – gerne auch persönlich.",
              items: [
                {
                  question: "Wie läuft das Onboarding ab?",
                  answer:
                    "Wir starten mit einem Erstgespräch, definieren den Umfang und richten die Zusammenarbeit (Tools, Ablage, Prozesse) ein.",
                },
                {
                  question: "Gibt es Fixpreise?",
                  answer:
                    "Ja – je nach Umfang bieten wir Pakete oder eine transparente Abrechnung nach Aufwand.",
                },
                {
                  question: "Arbeitet ihr digital?",
                  answer:
                    "Ja. Wir unterstützen cloudbasierte Abläufe und pragmatische digitale Prozesse.",
                },
              ],
            },
            cta: {
              title: "Bereit für weniger Admin?",
              subtitle:
                "Vereinbaren Sie ein kostenloses Erstgespräch. Wir melden uns zeitnah.",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
            footer: {
              companyName: "Musterfirma GmbH",
              tagline: "Zuverlässige Services für Schweizer KMU.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
          },
        },

        // --------------------------------------------
        // TREUHAND (Allround)
        // --------------------------------------------
        treuhand: {
          name: "Treuhand (Allround)",
          icon: "🧾",
          settings: {
            primaryColor: "#1a365d",
            accentColor: "#38a169",
            darkMode: false,
            fontStack: "instrument",
            darkModeToggle: false,
            stylePreset: "swiss",
            designDensity: "airy",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            header: {
              companyName: "Treuhand Muster AG",
              logoText: "TM",
              navItems: ["Leistungen", "Ablauf", "Team", "FAQ", "Kontakt"],
              ctaText: "Erstgespräch buchen",
            },
            hero: {
              title: "Ihr Treuhänder – persönlich. kompetent. digital.",
              subtitle:
                "Buchhaltung, Steuern und Lohn – terminsicher und verständlich.",
              primaryBtn: "Kostenloses Erstgespräch",
              secondaryBtn: "Leistungen",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "DSG/DSGVO", label: "Datenschutz" },
                { value: "Audit-Trail", label: "Nachvollziehbar" },
                { value: "Digital", label: "Cloud-ready" },
                { value: "Persönlich", label: "Fixer Kontakt" },
              ],
            },
            authority: {
              title: "Vertrauen & Standards",
              variant: "badges",
              items: [
                {
                  icon: "🏅",
                  text: "Verbandsmitgliedschaften (z. B. TREUHAND|SUISSE)",
                },
                {
                  icon: "🎓",
                  text: "Aus- und Weiterbildungen (Diplome/Zertifikate)",
                },
                { icon: "🛡️", text: "Berufshaftpflicht / Sorgfaltspflichten" },
              ],
            },
            services: {
              title: "Leistungen",
              subtitle: "Ein Treuhand-Setup, das zu Ihrem Alltag passt.",
              items: [
                {
                  icon: "📊",
                  title: "Buchhaltung",
                  text: "Fibu, Debi/Kredi, Abschlüsse – klar strukturiert und effizient.",
                },
                {
                  icon: "🧾",
                  title: "Steuern",
                  text: "Erklärungen, MWST, Planung – verständlich erklärt, sauber eingereicht.",
                },
                {
                  icon: "👥",
                  title: "Lohn",
                  text: "Lohnabrechnungen, Quellensteuer, Sozialversicherungen – terminsicher.",
                },
                {
                  icon: "🧠",
                  title: "Beratung",
                  text: "Gründung, Struktur, Nachfolge – pragmatisch und vorausschauend.",
                },
              ],
            },
            proofTable: {
              title: "Was Sie gewinnen",
              subtitle:
                "Vergleich: mit professioneller Treuhand vs. „selbst lösen“.",
              headers: ["Kriterium", "Mit Treuhand", "Selbst/Ad-hoc"],
              highlightColumn: 1,
              rows: [
                {
                  criterion: "Fristen & Compliance",
                  us: "Strukturierter Prozess, klare Verantwortung",
                  other: "Abhängig von Zeit/Know-how",
                },
                {
                  criterion: "Transparenz",
                  us: "Nachvollziehbar dokumentiert",
                  other: "Wissen verteilt / Personenabhängig",
                },
                {
                  criterion: "Entscheidungsgrundlagen",
                  us: "Sinnvolle Reports & Interpretation",
                  other: "Zahlen vorhanden, aber ohne Kontext",
                },
                {
                  criterion: "Risiko",
                  us: "Reduziert durch Review und Standards",
                  other: "Fehler-/Nachzahlungsrisiko",
                },
              ],
            },
            process: {
              title: "So arbeiten wir",
              subtitle: "Klarer Ablauf, wenig Reibung, sauberer Audit-Trail.",
              steps: [
                {
                  num: "1",
                  title: "Erstgespräch",
                  text: "Ziele, Umfang, Fristen und Tools klären.",
                },
                {
                  num: "2",
                  title: "Setup",
                  text: "Zugänge, Ablage, Prozesse und Verantwortlichkeiten definieren.",
                },
                {
                  num: "3",
                  title: "Laufende Betreuung",
                  text: "Buchen, prüfen, abstimmen – mit proaktiven Hinweisen.",
                },
                {
                  num: "4",
                  title: "Abschluss & Planung",
                  text: "Jahresabschluss, Steuern und Optimierungsschritte vorbereiten.",
                },
              ],
            },
            benefits: {
              title: "Warum Mandanten bleiben",
              subtitle: "Weil es im Alltag funktioniert.",
              items: [
                {
                  title: "Verlässlichkeit",
                  text: "Termine, Antworten und Ergebnisse – planbar und sauber.",
                },
                {
                  title: "Verständlichkeit",
                  text: "Wir übersetzen Zahlen in Entscheidungen.",
                },
                {
                  title: "Digitale Zusammenarbeit",
                  text: "So viel Automation wie sinnvoll – ohne Kontrollverlust.",
                },
              ],
            },
            team: {
              title: "Ihr Team",
              subtitle: "Persönliche Ansprechpartner mit Fachkompetenz.",
              members: [
                {
                  name: "Max Muster",
                  role: "Treuhandexperte",
                  image: "",
                  bio: "Buchhaltung, Abschluss, Beratung.",
                },
                {
                  name: "Laura Beispiel",
                  role: "Steuern",
                  image: "",
                  bio: "Natürliche und juristische Personen, MWST.",
                },
                {
                  name: "Noah Demo",
                  role: "Lohn & Sozialversicherungen",
                  image: "",
                  bio: "Lohn, Quellensteuer, Deklarationen.",
                },
              ],
            },
            testimonials: {
              title: "Mandantenstimmen",
              items: [
                {
                  quote:
                    "Endlich ist alles sauber – und ich weiss, wo ich stehe.",
                  author: "A. Keller",
                  role: "KMU-Inhaber",
                },
                {
                  quote: "Digital, schnell und trotzdem persönlich erreichbar.",
                  author: "J. Steiner",
                  role: "Co-Founder",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "Die häufigsten Fragen zur Zusammenarbeit.",
              items: [
                {
                  question: "Welche Unterlagen braucht ihr?",
                  answer:
                    "Je nach Umfang: Bankzugang/Exports, Belege, Verträge, Lohnstammdaten, MWST-Infos. Wir geben eine klare Checkliste.",
                },
                {
                  question: "Arbeitet ihr mit Bexio/Abacus/KLARA?",
                  answer:
                    "Wir richten uns nach Ihrem Setup oder empfehlen pragmatisch eine passende Lösung.",
                },
                {
                  question: "Wie schnell kann es losgehen?",
                  answer:
                    "Nach Erstgespräch und Setup typischerweise kurzfristig – abhängig von Zugängen und Datenlage.",
                },
              ],
            },
            cta: {
              title: "Kostenloses Erstgespräch",
              subtitle:
                "Sagen Sie uns kurz, wo Sie stehen – wir schlagen die nächsten Schritte vor.",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
            stickyCta: {
              text: "Fragen zu Buchhaltung oder Steuern?",
              buttonText: "Rückruf anfordern",
              phone: "+41 00 000 00 00",
              note: "Diskret & unverbindlich",
            },
            footer: {
              companyName: "Treuhand Muster AG",
              tagline: "Treuhand für KMU, Start-ups und Privatpersonen.",
              address: "Musterweg 12, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
              linkedin: "",
              facebook: "",
              instagram: "",
            },
          },
        },

        treuhand_kmu: {
          name: "Treuhand für KMU",
          icon: "🏢",
          settings: {
            primaryColor: "#1a365d",
            accentColor: "#38a169",
            darkMode: false,
            fontStack: "instrument",
            stylePreset: "swiss",
            designDensity: "airy",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            hero: {
              title: "Treuhand für KMU in Ihrer Region",
              subtitle:
                "Terminsicher, verständlich, digital – damit Sie Zeit fürs Kerngeschäft haben.",
              primaryBtn: "Kostenloses Erstgespräch",
              secondaryBtn: "Leistungen",
              imageUrl: "",
            },
            services: {
              title: "KMU-Leistungen",
              subtitle: "Fokus auf Alltagstauglichkeit und Terminsicherheit.",
              items: [
                {
                  icon: "📊",
                  title: "Fibu & Abschluss",
                  text: "Sauber buchen, abstimmen und abschliessen – ohne Hektik.",
                },
                {
                  icon: "🧾",
                  title: "Steuern & MWST",
                  text: "Erklärungen, Abrechnungen, Planung – strukturiert und verständlich.",
                },
                {
                  icon: "👥",
                  title: "Lohn",
                  text: "Lohnläufe, Quellensteuer, Sozialversicherungen – terminsicher.",
                },
              ],
            },
          },
        },

        treuhand_startup: {
          name: "Treuhand für Start-ups",
          icon: "🚀",
          settings: {
            primaryColor: "#0d9488",
            accentColor: "#38bdf8",
            darkMode: false,
            fontStack: "spark",
            stylePreset: "gasserwerk",
            designDensity: "balanced",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            hero: {
              title: "Finance & Treuhand, die mitwächst",
              subtitle:
                "Setup, Reporting und Steuern – mit Cloud-Tools und pragmatischem Sparring.",
              primaryBtn: "Kostenloses Erstgespräch",
              secondaryBtn: "Start-up Setup",
              imageUrl: "",
            },
            services: {
              title: "Start-up Services",
              subtitle: "Vom Setup bis zum Reporting – skalierbar.",
              items: [
                {
                  icon: "🧩",
                  title: "Tooling & Setup",
                  text: "Cloud-Buchhaltung, Belegfluss, Bank-Feeds – sauber aufgesetzt.",
                },
                {
                  icon: "📈",
                  title: "Cash & Reporting",
                  text: "Monatliche Auswertungen, KPIs und Entscheidungsgrundlagen.",
                },
                {
                  icon: "🧾",
                  title: "Steuern & MWST",
                  text: "MWST-Setup, Erklärungen, Planung – ohne Overhead.",
                },
                {
                  icon: "🤝",
                  title: "Sparring",
                  text: "Finanzübersetzer für Gründerteams, Investorenfragen, Struktur.",
                },
              ],
            },
            proofTable: {
              title: "Warum Start-ups uns wählen",
              subtitle: "Weniger Reibung, mehr Klarheit.",
              headers: ["Kriterium", "Mit uns", "Ohne Setup"],
              highlightColumn: 1,
              rows: [
                {
                  criterion: "Time-to-Insights",
                  us: "KPIs und Reports in klaren Zyklen",
                  other: "Zahlen kommen spät oder gar nicht",
                },
                {
                  criterion: "Tool-Fit",
                  us: "Cloud-Stack passend zum Team",
                  other: "Tool-Wildwuchs / Medienbrüche",
                },
                {
                  criterion: "Investor Readiness",
                  us: "Strukturierte Daten & Unterlagen",
                  other: "Nacharbeiten unter Druck",
                },
              ],
            },
          },
        },

        treuhand_private: {
          name: "Treuhand für Privatpersonen (HNWI)",
          icon: "🛡️",
          settings: {
            primaryColor: "#111827",
            accentColor: "#b8860b",
            darkMode: false,
            fontStack: "serif",
            stylePreset: "editorial",
            designDensity: "airy",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            hero: {
              title: "Diskret. Ganzheitlich. Langfristig.",
              subtitle:
                "Steuern, Struktur, Nachfolge – mit einem Ansprechpartner und klarer Dokumentation.",
              primaryBtn: "Vertrauliches Gespräch",
              secondaryBtn: "Leistungen",
              imageUrl: "",
            },
            services: {
              title: "Leistungen für Privatpersonen",
              subtitle: "Wenn Komplexität Disziplin braucht.",
              items: [
                {
                  icon: "🧾",
                  title: "Steuern",
                  text: "Erklärung, Planung, Optimierung – sauber dokumentiert.",
                },
                {
                  icon: "🧱",
                  title: "Strukturen",
                  text: "Vermögens- und Gesellschaftsstrukturen – nachvollziehbar und robust.",
                },
                {
                  icon: "🧬",
                  title: "Nachfolge",
                  text: "Vorsorge und Übergaben – proaktiv geplant.",
                },
              ],
            },
          },
        },

        // --------------------------------------------
        // OTHER INDUSTRIES (Fixed Schemas)
        // --------------------------------------------
        anwalt: {
          name: "Anwaltskanzlei",
          icon: "⚖️",
          settings: {
            primaryColor: "#1e3a5f",
            accentColor: "#ca8a04",
            darkMode: false,
            fontStack: "serif",
            stylePreset: "editorial",
            designDensity: "airy",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            header: {
              companyName: "Kanzlei Muster",
              logoText: "KM",
              navItems: ["Kompetenzen", "Team", "FAQ", "Kontakt"],
              ctaText: "Erstberatung",
            },
            hero: {
              title: "Recht. Klar. Durchsetzbar.",
              subtitle:
                "Beratung und Vertretung mit Struktur und Fokus auf Ergebnisse.",
              primaryBtn: "Erstberatung",
              secondaryBtn: "Kompetenzen",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "Vertraulich", label: "Diskretion" },
                { value: "Präzise", label: "Struktur" },
                { value: "Erfahren", label: "Praxis" },
                { value: "Lokal", label: "Region" },
              ],
            },
            services: {
              title: "Kompetenzen",
              subtitle: "Ausgewählte Rechtsgebiete.",
              items: [
                {
                  icon: "📄",
                  title: "Vertragsrecht",
                  text: "Erstellung, Prüfung, Verhandlung – praxisnah.",
                },
                {
                  icon: "🏢",
                  title: "Gesellschaftsrecht",
                  text: "Gründung, Umstrukturierung, Governance.",
                },
                {
                  icon: "⚖️",
                  title: "Prozessführung",
                  text: "Vertretung, Strategie, Durchsetzung.",
                },
              ],
            },
            benefits: {
              title: "Arbeitsweise",
              subtitle: "",
              items: [
                {
                  title: "Klare Einschätzung",
                  text: "Realistische Chancen-/Risikoabwägung.",
                },
                {
                  title: "Saubere Dokumentation",
                  text: "Transparente Schritte und Entscheidungen.",
                },
                {
                  title: "Direkte Kommunikation",
                  text: "Kurz, verständlich, ohne Umwege.",
                },
              ],
            },
            testimonials: {
              title: "Mandantenstimmen",
              items: [
                {
                  quote: "Schnell, präzise und lösungsorientiert.",
                  author: "Mandant",
                  role: "Unternehmen",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "",
              items: [
                {
                  question: "Wie läuft die Erstberatung ab?",
                  answer:
                    "Wir klären Ziele, Sachverhalt und Optionen und geben eine erste Einschätzung.",
                },
                {
                  question: "Wie werden Kosten berechnet?",
                  answer:
                    "Je nach Mandat pauschal oder nach Aufwand – transparent vereinbart.",
                },
              ],
            },
            cta: {
              title: "Erstberatung vereinbaren",
              subtitle: "Vertraulich und strukturiert.",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
            footer: {
              companyName: "Kanzlei Muster",
              tagline: "Rechtsberatung in Ihrer Region.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
          },
        },

        handwerker: {
          name: "Handwerker",
          icon: "🔨",
          settings: {
            primaryColor: "#c2410c",
            accentColor: "#fbbf24",
            darkMode: false,
            fontStack: "dmsans",
            stylePreset: "signature",
            designDensity: "balanced",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            header: {
              companyName: "Handwerk Muster",
              logoText: "HM",
              navItems: ["Leistungen", "Ablauf", "FAQ", "Kontakt"],
              ctaText: "Offerte anfragen",
            },
            hero: {
              title: "Saubere Arbeit. Saubere Abnahme.",
              subtitle:
                "Planung, Ausführung und Kommunikation – zuverlässig und termintreu.",
              primaryBtn: "Offerte anfragen",
              secondaryBtn: "Leistungen",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "Regional", label: "Vor Ort" },
                { value: "Termintreu", label: "Planbar" },
                { value: "Sauber", label: "Dokumentiert" },
                { value: "Garantie", label: "Nach Vereinbarung" },
              ],
            },
            services: {
              title: "Leistungen",
              subtitle: "Von klein bis gross – sauber umgesetzt.",
              items: [
                {
                  icon: "🧱",
                  title: "Umbau & Renovation",
                  text: "Koordination, Umsetzung, Abnahme.",
                },
                {
                  icon: "🏠",
                  title: "Service & Reparaturen",
                  text: "Schnelle Hilfe bei Bedarf.",
                },
                {
                  icon: "📐",
                  title: "Planung",
                  text: "Klare Offerte und transparenter Ablauf.",
                },
              ],
            },
            process: {
              title: "So läuft es ab",
              subtitle: "",
              steps: [
                {
                  num: "1",
                  title: "Besichtigung",
                  text: "Kurz vor Ort, Umfang klären.",
                },
                {
                  num: "2",
                  title: "Offerte",
                  text: "Transparent, nachvollziehbar.",
                },
                {
                  num: "3",
                  title: "Umsetzung",
                  text: "Termine, Kommunikation, Qualität.",
                },
                { num: "4", title: "Abnahme", text: "Sauber dokumentiert." },
              ],
            },
            benefits: {
              title: "Warum wir?",
              subtitle: "",
              items: [
                {
                  title: "Transparente Offerten",
                  text: "Klare Positionen und nachvollziehbare Schritte.",
                },
                {
                  title: "Saubere Kommunikation",
                  text: "Sie wissen, was wann passiert.",
                },
                {
                  title: "Qualitätsfokus",
                  text: "Saubere Abnahme und Dokumentation.",
                },
              ],
            },
            testimonials: {
              title: "Kundenstimmen",
              items: [
                {
                  quote: "Top Arbeit und klare Kommunikation.",
                  author: "Kundin",
                  role: "Privat",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "",
              items: [
                {
                  question: "Wie schnell erhalte ich eine Offerte?",
                  answer:
                    "Nach Besichtigung und Umfangs-Klärung erstellen wir zeitnah eine Offerte.",
                },
              ],
            },
            cta: {
              title: "Offerte anfragen",
              subtitle: "Schnell und unverbindlich.",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
            footer: {
              companyName: "Handwerk Muster",
              tagline: "Handwerkliche Qualität in Ihrer Region.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
          },
        },

        arzt: {
          name: "Arztpraxis",
          icon: "🩺",
          settings: {
            primaryColor: "#15803d",
            accentColor: "#34d399",
            darkMode: false,
            fontStack: "dmsans",
            stylePreset: "signature",
            designDensity: "airy",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            header: {
              companyName: "Praxis Muster",
              logoText: "PM",
              navItems: ["Leistungen", "Team", "FAQ", "Kontakt"],
              ctaText: "Termin anfragen",
            },
            hero: {
              title: "Medizin mit Ruhe und Struktur",
              subtitle:
                "Sprechstunden, Diagnostik und Betreuung – klar organisiert.",
              primaryBtn: "Termin anfragen",
              secondaryBtn: "Leistungen",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "Empathisch", label: "Betreuung" },
                { value: "Strukturiert", label: "Abläufe" },
                { value: "Modern", label: "Praxis" },
                { value: "Erreichbar", label: "Kontakt" },
              ],
            },
            services: {
              title: "Leistungen",
              subtitle: "Ausgewählte Schwerpunkte.",
              items: [
                {
                  icon: "🩻",
                  title: "Abklärung",
                  text: "Sorgfältige Diagnostik und Einordnung.",
                },
                {
                  icon: "💊",
                  title: "Behandlung",
                  text: "Therapieplanung und Begleitung.",
                },
                {
                  icon: "📋",
                  title: "Vorsorge",
                  text: "Check-ups und Prävention.",
                },
              ],
            },
            team: {
              title: "Team",
              subtitle: "Sprechstunde und Betreuung.",
              members: [
                {
                  name: "Dr. Muster",
                  role: "Facharzt",
                  image: "",
                  bio: "Schwerpunkt: Allgemeinmedizin.",
                },
              ],
            },
            testimonials: {
              title: "Patientenstimmen",
              items: [
                {
                  quote: "Nimmt sich Zeit, hört zu und erklärt verständlich.",
                  author: "Patient",
                  role: "",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "",
              items: [
                {
                  question: "Wie buche ich einen Termin?",
                  answer:
                    "Kontaktieren Sie uns telefonisch oder per E-Mail. Online-Buchung kann ergänzt werden.",
                },
              ],
            },
            cta: {
              title: "Termin anfragen",
              subtitle: "Wir melden uns zeitnah.",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
            footer: {
              companyName: "Praxis Muster",
              tagline: "Ihre Praxis in der Region.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
          },
        },

        restaurant: {
          name: "Restaurant",
          icon: "🍷",
          settings: {
            primaryColor: "#881337",
            accentColor: "#fbbf24",
            darkMode: false,
            fontStack: "serif",
            stylePreset: "editorial",
            designDensity: "airy",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            header: {
              companyName: "Restaurant Muster",
              logoText: "RM",
              navItems: ["Menü", "Ambiente", "FAQ", "Kontakt"],
              ctaText: "Tisch reservieren",
            },
            hero: {
              title: "Genuss mit Charakter",
              subtitle: "Saisonale Küche, gute Weine, klare Handschrift.",
              primaryBtn: "Reservieren",
              secondaryBtn: "Menü",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "Saisonal", label: "Küche" },
                { value: "Regional", label: "Produkte" },
                { value: "Wein", label: "Selektion" },
                { value: "Ambiente", label: "Erlebnis" },
              ],
            },
            services: {
              title: "Highlights",
              subtitle: "",
              items: [
                {
                  icon: "🍽️",
                  title: "Menü",
                  text: "Saisonale Klassiker und Signature Dishes.",
                },
                {
                  icon: "🍷",
                  title: "Weine",
                  text: "Kuratiert – passend zum Menü.",
                },
                {
                  icon: "🎉",
                  title: "Anlässe",
                  text: "Private und Business Events nach Absprache.",
                },
              ],
            },
            testimonials: {
              title: "Gästestimmen",
              items: [
                {
                  quote: "Wunderbares Menü und sehr aufmerksamer Service.",
                  author: "Gast",
                  role: "",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "",
              items: [
                {
                  question: "Kann ich online reservieren?",
                  answer:
                    "Ja – oder telefonisch. Reservationstool kann ergänzt werden.",
                },
              ],
            },
            cta: {
              title: "Tisch reservieren",
              subtitle: "Wir freuen uns auf Ihren Besuch.",
              phone: "+41 00 000 00 00",
              email: "reservation@example.ch",
            },
            footer: {
              companyName: "Restaurant Muster",
              tagline: "Saisonale Küche in Ihrer Region.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "reservation@example.ch",
            },
          },
        },

        immobilien: {
          name: "Immobilien",
          icon: "🏠",
          settings: {
            primaryColor: "#0369a1",
            accentColor: "#38bdf8",
            darkMode: false,
            fontStack: "instrument",
            stylePreset: "swiss",
            designDensity: "airy",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            header: {
              companyName: "Immobilien Muster",
              logoText: "IM",
              navItems: ["Angebote", "Services", "FAQ", "Kontakt"],
              ctaText: "Bewertung anfragen",
            },
            hero: {
              title: "Immobilien – klar vermarktet",
              subtitle:
                "Bewertung, Verkauf, Verwaltung – mit Struktur und Transparenz.",
              primaryBtn: "Bewertung anfragen",
              secondaryBtn: "Angebote",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "Transparent", label: "Prozess" },
                { value: "Marktkenntnis", label: "Region" },
                { value: "Sauber", label: "Dokumente" },
                { value: "Erreichbar", label: "Kontakt" },
              ],
            },
            services: {
              title: "Services",
              subtitle: "",
              items: [
                {
                  icon: "📈",
                  title: "Bewertung",
                  text: "Marktgerechte Einschätzung und Positionierung.",
                },
                {
                  icon: "📣",
                  title: "Vermarktung",
                  text: "Exposé, Besichtigungen, Verhandlung.",
                },
                {
                  icon: "🗂️",
                  title: "Verwaltung",
                  text: "STWE/Mietverwaltung nach Vereinbarung.",
                },
              ],
            },
            testimonials: {
              title: "Kundenstimmen",
              items: [
                {
                  quote: "Professionelle Vermarktung und schneller Verkauf.",
                  author: "Verkäufer",
                  role: "Eigentumswohnung",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "",
              items: [
                {
                  question: "Wie läuft eine Bewertung ab?",
                  answer:
                    "Datenaufnahme, Vergleichswerte, Begehung – danach eine strukturierte Einschätzung.",
                },
              ],
            },
            cta: {
              title: "Bewertung anfragen",
              subtitle: "Unverbindlich und strukturiert.",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
            footer: {
              companyName: "Immobilien Muster",
              tagline: "Immobilien-Services in Ihrer Region.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
          },
        },

        coiffeur: {
          name: "Coiffeur",
          icon: "💇",
          settings: {
            primaryColor: "#7c3aed",
            accentColor: "#ec4899",
            darkMode: false,
            fontStack: "dmsans",
            stylePreset: "signature",
            designDensity: "balanced",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            header: {
              companyName: "Studio Muster",
              logoText: "SM",
              navItems: ["Services", "Team", "FAQ", "Kontakt"],
              ctaText: "Termin buchen",
            },
            hero: {
              title: "Hair & Style – mit Gefühl",
              subtitle: "Schnitt, Farbe, Styling – in entspannter Atmosphäre.",
              primaryBtn: "Termin buchen",
              secondaryBtn: "Services",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "Beratung", label: "Look" },
                { value: "Qualität", label: "Produkte" },
                { value: "Style", label: "Trends" },
                { value: "Relax", label: "Atmosphäre" },
              ],
            },
            services: {
              title: "Services",
              subtitle: "",
              items: [
                { icon: "✂️", title: "Schnitt", text: "Passend zu Ihrem Typ." },
                {
                  icon: "🎨",
                  title: "Farbe",
                  text: "Von natürlich bis bold – sauber umgesetzt.",
                },
                {
                  icon: "💫",
                  title: "Styling",
                  text: "Für Alltag und Anlass.",
                },
              ],
            },
            testimonials: {
              title: "Stimmen",
              items: [
                {
                  quote: "Super Beratung und top Ergebnis.",
                  author: "Kundin",
                  role: "",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "",
              items: [
                {
                  question: "Kann ich online buchen?",
                  answer:
                    "Online-Buchung kann ergänzt werden – alternativ telefonisch.",
                },
              ],
            },
            cta: {
              title: "Termin buchen",
              subtitle: "Wir freuen uns auf Sie.",
              phone: "+41 00 000 00 00",
              email: "hello@example.ch",
            },
            footer: {
              companyName: "Studio Muster",
              tagline: "Coiffeur in Ihrer Region.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "hello@example.ch",
            },
          },
        },

        it: {
          name: "IT & Digital",
          icon: "💻",
          settings: {
            primaryColor: "#4f46e5",
            accentColor: "#06b6d4",
            darkMode: true,
            fontStack: "instrument",
            stylePreset: "glass",
            designDensity: "balanced",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
            fxOrbs: true,
            fxGlass: true,
            fxIntensity: "medium",
          },
          components: {
            header: {
              companyName: "Digital Muster",
              logoText: "DM",
              navItems: ["Services", "Cases", "FAQ", "Kontakt"],
              ctaText: "Demo anfragen",
            },
            hero: {
              title: "Build. Ship. Improve.",
              subtitle:
                "Web, Automation und Integrationen – sauber umgesetzt und messbar.",
              primaryBtn: "Demo anfragen",
              secondaryBtn: "Services",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "API-first", label: "Integration" },
                { value: "Performance", label: "Speed" },
                { value: "Security", label: "Basics" },
                { value: "Delivery", label: "Hands-on" },
              ],
            },
            services: {
              title: "Services",
              subtitle: "",
              items: [
                {
                  icon: "🧠",
                  title: "Automation",
                  text: "Workflows, Datenflüsse, AI-Assists – pragmatisch.",
                },
                {
                  icon: "🧩",
                  title: "Integration",
                  text: "APIs, Tools, CRM – sauber verbunden.",
                },
                {
                  icon: "🧱",
                  title: "Web",
                  text: "Landingpages, Websites, Portale – conversion-orientiert.",
                },
              ],
            },
            testimonials: {
              title: "Feedback",
              items: [
                {
                  quote: "Schnell geliefert und sauber integriert.",
                  author: "Kunde",
                  role: "SaaS",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "",
              items: [
                {
                  question: "Wie startet ein Projekt?",
                  answer:
                    "Discovery, Scope, Umsetzungsplan – dann iterativ liefern.",
                },
              ],
            },
            cta: {
              title: "Demo anfragen",
              subtitle:
                "Kurz schildern, wir schlagen die nächsten Schritte vor.",
              phone: "+41 00 000 00 00",
              email: "hello@example.ch",
            },
            footer: {
              companyName: "Digital Muster",
              tagline: "Web & Automations in Ihrer Region.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "hello@example.ch",
            },
          },
        },

        // --------------------------------------------
        // ARCHITEKTUR & PLANUNG
        // --------------------------------------------
        architektur: {
          name: "Architektur & Planung",
          icon: "🏗️",
          settings: {
            primaryColor: "#1c1917",
            accentColor: "#a3a3a3",
            darkMode: false,
            fontStack: "instrument",
            stylePreset: "editorial",
            designDensity: "airy",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            header: {
              companyName: "Architektur Muster",
              logoText: "AM",
              navItems: ["Projekte", "Leistungen", "Atelier", "Kontakt"],
              ctaText: "Beratung anfragen",
            },
            hero: {
              title: "Raum. Form. Kontext.",
              subtitle:
                "Architektur und Planung – von der Idee bis zur Realisierung.",
              primaryBtn: "Projekt besprechen",
              secondaryBtn: "Portfolio",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "SIA", label: "Normen" },
                { value: "BIM", label: "Digital" },
                { value: "Nachhaltig", label: "Konzept" },
                { value: "Regional", label: "Verankerung" },
              ],
            },
            services: {
              title: "Leistungen",
              subtitle: "Von der Machbarkeit bis zur Bauabnahme.",
              items: [
                {
                  icon: "📐",
                  title: "Entwurf & Planung",
                  text: "Vorprojekt, Bauprojekt, Bewilligung – strukturiert und terminsicher.",
                },
                {
                  icon: "🏠",
                  title: "Umbau & Sanierung",
                  text: "Bestand verstehen, sinnvoll erneuern.",
                },
                {
                  icon: "📋",
                  title: "Bauleitung",
                  text: "Koordination, Qualitätskontrolle, Kostenübersicht.",
                },
              ],
            },
            process: {
              title: "Ablauf",
              subtitle: "Klare Phasen, transparente Kommunikation.",
              steps: [
                {
                  num: "1",
                  title: "Erstgespräch",
                  text: "Ziele, Budget, Rahmenbedingungen klären.",
                },
                {
                  num: "2",
                  title: "Konzept",
                  text: "Varianten entwickeln, Machbarkeit prüfen.",
                },
                {
                  num: "3",
                  title: "Projekt",
                  text: "Detaillierte Planung, Bewilligung, Ausschreibung.",
                },
                {
                  num: "4",
                  title: "Realisierung",
                  text: "Bauleitung, Abnahme, Dokumentation.",
                },
              ],
            },
            testimonials: {
              title: "Bauherrenstimmen",
              items: [
                {
                  quote:
                    "Professionelle Begleitung vom ersten Strich bis zum Einzug.",
                  author: "Bauherr",
                  role: "Einfamilienhaus",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "",
              items: [
                {
                  question: "Wie läuft ein Erstgespräch ab?",
                  answer:
                    "Wir besprechen Ihre Wünsche, das Budget und die Rahmenbedingungen – unverbindlich und kostenlos.",
                },
              ],
            },
            cta: {
              title: "Projekt besprechen",
              subtitle:
                "Schildern Sie Ihr Vorhaben – wir skizzieren die nächsten Schritte.",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
            footer: {
              companyName: "Architektur Muster",
              tagline: "Architektur in Ihrer Region.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
          },
        },

        // --------------------------------------------
        // FINANZBERATUNG / VERMÖGENSVERWALTUNG
        // --------------------------------------------
        finanzberatung: {
          name: "Finanzberatung",
          icon: "📈",
          settings: {
            primaryColor: "#0f172a",
            accentColor: "#0ea5e9",
            darkMode: false,
            fontStack: "instrument",
            stylePreset: "swiss",
            designDensity: "airy",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            header: {
              companyName: "Finanzen Muster",
              logoText: "FM",
              navItems: ["Beratung", "Philosophie", "Team", "Kontakt"],
              ctaText: "Erstgespräch",
            },
            hero: {
              title: "Klarheit. Strategie. Umsetzung.",
              subtitle:
                "Unabhängige Finanzberatung für nachhaltigen Vermögensaufbau.",
              primaryBtn: "Erstgespräch vereinbaren",
              secondaryBtn: "Philosophie",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "Unabhängig", label: "Beratung" },
                { value: "Transparent", label: "Kosten" },
                { value: "Langfristig", label: "Strategie" },
                { value: "FINMA", label: "Reguliert" },
              ],
            },
            authority: {
              title: "Qualität & Standards",
              variant: "badges",
              items: [
                {
                  icon: "🎓",
                  text: "Zertifizierte Finanzplaner (CFP, CFA oder gleichwertig)",
                },
                { icon: "🛡️", text: "Unabhängig – keine Produktbindung" },
                { icon: "📊", text: "Evidenzbasierte Anlagestrategien" },
              ],
            },
            services: {
              title: "Beratungsfelder",
              subtitle: "Ganzheitliche Finanzplanung.",
              items: [
                {
                  icon: "🎯",
                  title: "Finanzplanung",
                  text: "Lebensphasengerechte Strategie mit klaren Zielen.",
                },
                {
                  icon: "📊",
                  title: "Anlageberatung",
                  text: "Evidenzbasiert, kosteneffizient, risikoadjustiert.",
                },
                {
                  icon: "🏦",
                  title: "Vorsorge",
                  text: "3a, Pensionskasse, Nachfolge – strukturiert geplant.",
                },
              ],
            },
            benefits: {
              title: "Warum unabhängig?",
              subtitle: "",
              items: [
                {
                  title: "Keine Interessenkonflikte",
                  text: "Wir verdienen nicht an Produkten, sondern an Ihrer Zufriedenheit.",
                },
                {
                  title: "Transparente Kosten",
                  text: "Klare Honorarstruktur ohne versteckte Gebühren.",
                },
                {
                  title: "Langfristige Beziehung",
                  text: "Wir begleiten Sie durch alle Lebensphasen.",
                },
              ],
            },
            testimonials: {
              title: "Kundenstimmen",
              items: [
                {
                  quote:
                    "Endlich verstehe ich meine Finanzen – und habe einen klaren Plan.",
                  author: "Kunde",
                  role: "Unternehmer",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "",
              items: [
                {
                  question: "Was kostet ein Erstgespräch?",
                  answer:
                    "Das Erstgespräch ist unverbindlich und kostenlos. Danach erhalten Sie eine klare Offerte.",
                },
              ],
            },
            cta: {
              title: "Erstgespräch vereinbaren",
              subtitle:
                "Unverbindlich und kostenfrei – wir hören zu und geben erste Einschätzungen.",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
            footer: {
              companyName: "Finanzen Muster",
              tagline: "Unabhängige Finanzberatung.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
          },
        },

        // --------------------------------------------
        // CONSULTING / UNTERNEHMENSBERATUNG
        // --------------------------------------------
        consulting: {
          name: "Consulting",
          icon: "🎯",
          settings: {
            primaryColor: "#18181b",
            accentColor: "#f59e0b",
            darkMode: false,
            fontStack: "instrument",
            stylePreset: "swiss",
            designDensity: "balanced",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            header: {
              companyName: "Consulting Muster",
              logoText: "CM",
              navItems: ["Expertise", "Methodik", "Cases", "Kontakt"],
              ctaText: "Sparring buchen",
            },
            hero: {
              title: "Strategie. Umsetzung. Wirkung.",
              subtitle:
                "Unternehmensberatung mit Fokus auf messbare Resultate.",
              primaryBtn: "Sparring buchen",
              secondaryBtn: "Cases",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "Pragmatisch", label: "Ansatz" },
                { value: "Messbar", label: "Resultate" },
                { value: "Hands-on", label: "Umsetzung" },
                { value: "KMU", label: "Fokus" },
              ],
            },
            services: {
              title: "Expertise",
              subtitle: "Fokussiert auf das, was zählt.",
              items: [
                {
                  icon: "🎯",
                  title: "Strategie",
                  text: "Positionierung, Geschäftsmodell, Wachstum.",
                },
                {
                  icon: "⚙️",
                  title: "Prozesse",
                  text: "Effizienz, Digitalisierung, Skalierung.",
                },
                {
                  icon: "👥",
                  title: "Organisation",
                  text: "Struktur, Führung, Change Management.",
                },
              ],
            },
            proofTable: {
              title: "Der Unterschied",
              subtitle: "",
              headers: ["Kriterium", "Mit Sparring", "Allein"],
              highlightColumn: 1,
              rows: [
                {
                  criterion: "Perspektive",
                  us: "Externer Blick, neue Impulse",
                  other: "Betriebsblindheit",
                },
                {
                  criterion: "Umsetzung",
                  us: "Strukturiert mit Milestones",
                  other: "Ad-hoc, oft verschoben",
                },
                {
                  criterion: "Verantwortung",
                  us: "Shared Accountability",
                  other: "Nur interne Treiber",
                },
              ],
            },
            process: {
              title: "Methodik",
              subtitle: "",
              steps: [
                {
                  num: "1",
                  title: "Diagnose",
                  text: "Situation verstehen, Hebel identifizieren.",
                },
                {
                  num: "2",
                  title: "Konzept",
                  text: "Optionen entwickeln, priorisieren.",
                },
                {
                  num: "3",
                  title: "Umsetzung",
                  text: "Begleiten, anpassen, liefern.",
                },
                {
                  num: "4",
                  title: "Review",
                  text: "Wirkung messen, Learnings sichern.",
                },
              ],
            },
            testimonials: {
              title: "Kundenfeedback",
              items: [
                {
                  quote: "Klar, direkt, umsetzbar – genau das brauchten wir.",
                  author: "CEO",
                  role: "KMU",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "",
              items: [
                {
                  question: "Wie lange dauert ein typisches Projekt?",
                  answer:
                    "Je nach Umfang 4-12 Wochen. Wir definieren Scope und Milestones gemeinsam im Erstgespräch.",
                },
              ],
            },
            cta: {
              title: "Sparring buchen",
              subtitle:
                "Schildern Sie die Herausforderung – wir skizzieren einen Ansatz.",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
            footer: {
              companyName: "Consulting Muster",
              tagline: "Beratung für KMU.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
          },
        },

        // --------------------------------------------
        // FITNESS / PERSONALTRAINING
        // --------------------------------------------
        fitness: {
          name: "Fitness & Training",
          icon: "💪",
          settings: {
            primaryColor: "#dc2626",
            accentColor: "#fbbf24",
            darkMode: true,
            fontStack: "dmsans",
            stylePreset: "signature",
            designDensity: "balanced",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
            fxOrbs: true,
            fxIntensity: "subtle",
          },
          components: {
            header: {
              companyName: "Fitness Muster",
              logoText: "FM",
              navItems: ["Training", "Angebote", "Über uns", "Kontakt"],
              ctaText: "Probetraining",
            },
            hero: {
              title: "Stärke. Ausdauer. Fokus.",
              subtitle:
                "Personal Training mit System – für nachhaltige Resultate.",
              primaryBtn: "Probetraining buchen",
              secondaryBtn: "Angebote",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "1:1", label: "Betreuung" },
                { value: "Individuell", label: "Plan" },
                { value: "Flexibel", label: "Zeiten" },
                { value: "Messbar", label: "Fortschritt" },
              ],
            },
            services: {
              title: "Training",
              subtitle: "Angepasst an dein Ziel.",
              items: [
                {
                  icon: "🏋️",
                  title: "Krafttraining",
                  text: "Muskelaufbau, Körperstraffung, Prävention.",
                },
                {
                  icon: "🏃",
                  title: "Ausdauer",
                  text: "Cardio, HIIT, Lauftraining.",
                },
                {
                  icon: "🧘",
                  title: "Mobility & Recovery",
                  text: "Beweglichkeit, Regeneration, Stressabbau.",
                },
              ],
            },
            benefits: {
              title: "Warum Personal Training?",
              subtitle: "",
              items: [
                {
                  title: "Individuelle Betreuung",
                  text: "Jede Einheit ist auf dich abgestimmt.",
                },
                {
                  title: "Korrekte Ausführung",
                  text: "Saubere Technik = schnellere Resultate.",
                },
                {
                  title: "Motivation & Konstanz",
                  text: "Verbindliche Termine halten dich auf Kurs.",
                },
              ],
            },
            testimonials: {
              title: "Kundenstimmen",
              items: [
                {
                  quote:
                    "Endlich ein Training, das funktioniert und Spass macht.",
                  author: "Kunde",
                  role: "",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "",
              items: [
                {
                  question: "Brauche ich Vorerfahrung?",
                  answer: "Nein – wir starten genau dort, wo du stehst.",
                },
              ],
            },
            cta: {
              title: "Probetraining buchen",
              subtitle: "Unverbindlich kennenlernen und Ziele besprechen.",
              phone: "+41 00 000 00 00",
              email: "hello@example.ch",
            },
            footer: {
              companyName: "Fitness Muster",
              tagline: "Personal Training in deiner Region.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "hello@example.ch",
            },
          },
        },

        // --------------------------------------------
        // EVENTPLANUNG / CATERING
        // --------------------------------------------
        events: {
          name: "Events & Catering",
          icon: "🎉",
          settings: {
            primaryColor: "#7c3aed",
            accentColor: "#f472b6",
            darkMode: false,
            fontStack: "spark",
            stylePreset: "gasserwerk",
            designDensity: "balanced",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            header: {
              companyName: "Events Muster",
              logoText: "EM",
              navItems: ["Anlässe", "Catering", "Galerie", "Kontakt"],
              ctaText: "Anfrage starten",
            },
            hero: {
              title: "Momente. Die bleiben.",
              subtitle:
                "Eventplanung und Catering – kreativ, zuverlässig, massgeschneidert.",
              primaryBtn: "Anfrage starten",
              secondaryBtn: "Anlässe",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "Kreativ", label: "Konzepte" },
                { value: "Zuverlässig", label: "Umsetzung" },
                { value: "Regional", label: "Produkte" },
                { value: "Flexibel", label: "Grössen" },
              ],
            },
            services: {
              title: "Anlässe",
              subtitle: "Von intim bis gross.",
              items: [
                {
                  icon: "🍾",
                  title: "Private Events",
                  text: "Geburtstage, Hochzeiten, Jubiläen.",
                },
                {
                  icon: "🏢",
                  title: "Business Events",
                  text: "Seminare, Apéros, Firmenanlässe.",
                },
                {
                  icon: "🍽️",
                  title: "Catering",
                  text: "Flying Buffet, Menü, individuelle Konzepte.",
                },
              ],
            },
            process: {
              title: "So läuft es ab",
              subtitle: "",
              steps: [
                {
                  num: "1",
                  title: "Briefing",
                  text: "Anlass, Gästeanzahl, Budget, Wünsche.",
                },
                {
                  num: "2",
                  title: "Konzept",
                  text: "Menü, Ablauf, Location-Check.",
                },
                {
                  num: "3",
                  title: "Umsetzung",
                  text: "Koordination, Aufbau, Service.",
                },
                {
                  num: "4",
                  title: "Nachbereitung",
                  text: "Abbau, Feedback, Rechnung.",
                },
              ],
            },
            testimonials: {
              title: "Feedback",
              items: [
                {
                  quote:
                    "Alles hat perfekt geklappt – unsere Gäste schwärmen heute noch.",
                  author: "Brautpaar",
                  role: "",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "",
              items: [
                {
                  question: "Wie früh muss ich anfragen?",
                  answer:
                    "Idealerweise 2-3 Monate im Voraus. Kurzfristige Anfragen prüfen wir gerne.",
                },
              ],
            },
            cta: {
              title: "Anfrage starten",
              subtitle:
                "Schildern Sie Ihren Anlass – wir melden uns mit ersten Ideen.",
              phone: "+41 00 000 00 00",
              email: "events@example.ch",
            },
            footer: {
              companyName: "Events Muster",
              tagline: "Events & Catering in Ihrer Region.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "events@example.ch",
            },
          },
        },

        // --------------------------------------------
        // COACHING / SUPERVISION
        // --------------------------------------------
        coaching: {
          name: "Coaching & Supervision",
          icon: "🧭",
          settings: {
            primaryColor: "#166534",
            accentColor: "#65a30d",
            darkMode: false,
            fontStack: "instrument",
            stylePreset: "editorial",
            designDensity: "airy",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            header: {
              companyName: "Coaching Muster",
              logoText: "CM",
              navItems: ["Angebot", "Methoden", "Über uns", "Kontakt"],
              ctaText: "Erstgespräch",
            },
            hero: {
              title: "Klarheit finden. Wachsen.",
              subtitle: "Coaching und Supervision für Menschen in Veränderung.",
              primaryBtn: "Erstgespräch buchen",
              secondaryBtn: "Angebot",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "Vertraulich", label: "Raum" },
                { value: "Systemisch", label: "Ansatz" },
                { value: "Ressourcen", label: "Fokus" },
                { value: "Erfahren", label: "Begleitung" },
              ],
            },
            services: {
              title: "Angebot",
              subtitle: "Für Einzelne und Teams.",
              items: [
                {
                  icon: "🧭",
                  title: "Einzelcoaching",
                  text: "Berufliche Neuorientierung, Führung, Balance.",
                },
                {
                  icon: "👥",
                  title: "Teamcoaching",
                  text: "Zusammenarbeit, Konflikte, Entwicklung.",
                },
                {
                  icon: "🔍",
                  title: "Supervision",
                  text: "Reflexion für Fachpersonen und Teams.",
                },
              ],
            },
            benefits: {
              title: "Was Sie gewinnen",
              subtitle: "",
              items: [
                {
                  title: "Klarheit",
                  text: "Komplexität reduzieren, Optionen erkennen.",
                },
                {
                  title: "Handlungsfähigkeit",
                  text: "Nächste Schritte definieren und umsetzen.",
                },
                {
                  title: "Entwicklung",
                  text: "Potenziale entfalten, Muster verändern.",
                },
              ],
            },
            testimonials: {
              title: "Stimmen",
              items: [
                {
                  quote: "Die richtigen Fragen zur richtigen Zeit.",
                  author: "Coachee",
                  role: "Führungskraft",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "",
              items: [
                {
                  question: "Wie viele Sitzungen braucht es?",
                  answer:
                    "Das hängt vom Thema ab. Oft reichen 3-6 Sitzungen für eine gute Wirkung.",
                },
              ],
            },
            cta: {
              title: "Erstgespräch buchen",
              subtitle:
                "Unverbindlich – wir klären, ob eine Zusammenarbeit passt.",
              phone: "+41 00 000 00 00",
              email: "coaching@example.ch",
            },
            footer: {
              companyName: "Coaching Muster",
              tagline: "Coaching in Ihrer Region.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "coaching@example.ch",
            },
          },
        },

        // --------------------------------------------
        // ZAHNARZT / DENTAL
        // --------------------------------------------
        zahnarzt: {
          name: "Zahnarztpraxis",
          icon: "🦷",
          settings: {
            primaryColor: "#0891b2",
            accentColor: "#14b8a6",
            darkMode: false,
            fontStack: "dmsans",
            stylePreset: "swiss",
            designDensity: "balanced",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            header: {
              companyName: "Zahnpraxis Muster",
              logoText: "ZM",
              navItems: ["Behandlungen", "Team", "Praxis", "Kontakt"],
              ctaText: "Termin buchen",
            },
            hero: {
              title: "Gesunde Zähne. Entspannt.",
              subtitle: "Moderne Zahnmedizin mit persönlicher Betreuung.",
              primaryBtn: "Termin buchen",
              secondaryBtn: "Behandlungen",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "Modern", label: "Ausstattung" },
                { value: "Einfühlsam", label: "Behandlung" },
                { value: "Digital", label: "Röntgen" },
                { value: "Notfall", label: "Service" },
              ],
            },
            services: {
              title: "Behandlungen",
              subtitle: "Vorsorge und Therapie.",
              items: [
                {
                  icon: "🔍",
                  title: "Prophylaxe",
                  text: "Kontrollen, Dentalhygiene, Früherkennung.",
                },
                {
                  icon: "🦷",
                  title: "Zahnerhalt",
                  text: "Füllungen, Wurzelbehandlungen, Kronen.",
                },
                {
                  icon: "✨",
                  title: "Ästhetik",
                  text: "Bleaching, Veneers, unsichtbare Korrekturen.",
                },
              ],
            },
            team: {
              title: "Ihr Team",
              subtitle: "Kompetent und einfühlsam.",
              members: [
                {
                  name: "Dr. med. dent. Muster",
                  role: "Zahnarzt",
                  image: "",
                  bio: "Allgemeine Zahnmedizin, Implantologie.",
                },
                {
                  name: "Anna Beispiel",
                  role: "Dentalhygienikerin",
                  image: "",
                  bio: "Prophylaxe und Beratung.",
                },
              ],
            },
            testimonials: {
              title: "Patientenstimmen",
              items: [
                {
                  quote:
                    "Endlich ein Zahnarzt, bei dem ich mich entspannen kann.",
                  author: "Patient",
                  role: "",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "",
              items: [
                {
                  question: "Nehmen Sie neue Patienten auf?",
                  answer: "Ja – kontaktieren Sie uns für einen Ersttermin.",
                },
              ],
            },
            cta: {
              title: "Termin buchen",
              subtitle: "Online oder telefonisch – wir freuen uns auf Sie.",
              phone: "+41 00 000 00 00",
              email: "praxis@example.ch",
            },
            footer: {
              companyName: "Zahnpraxis Muster",
              tagline: "Ihr Zahnarzt in der Region.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "praxis@example.ch",
            },
          },
        },

        // --------------------------------------------
        // REINIGUNG / FACILITY
        // --------------------------------------------
        reinigung: {
          name: "Reinigung & Facility",
          icon: "🧹",
          settings: {
            primaryColor: "#0284c7",
            accentColor: "#22c55e",
            darkMode: false,
            fontStack: "dmsans",
            stylePreset: "signature",
            designDensity: "balanced",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            header: {
              companyName: "Reinigung Muster",
              logoText: "RM",
              navItems: ["Services", "Ablauf", "Referenzen", "Kontakt"],
              ctaText: "Offerte anfragen",
            },
            hero: {
              title: "Sauber. Zuverlässig. Professionell.",
              subtitle: "Reinigungsservices für Gewerbe und Private.",
              primaryBtn: "Offerte anfragen",
              secondaryBtn: "Services",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "Pünktlich", label: "Immer" },
                { value: "Gründlich", label: "Standard" },
                { value: "Flexibel", label: "Zeiten" },
                { value: "Versichert", label: "Sicher" },
              ],
            },
            services: {
              title: "Services",
              subtitle: "Regelmässig oder einmalig.",
              items: [
                {
                  icon: "🏢",
                  title: "Büroreinigung",
                  text: "Täglich, wöchentlich oder nach Bedarf.",
                },
                {
                  icon: "🏠",
                  title: "Privatreinigung",
                  text: "Wohnungen, Häuser, Umzugsreinigung.",
                },
                {
                  icon: "✨",
                  title: "Spezialreinigung",
                  text: "Fenster, Teppiche, Grundreinigung.",
                },
              ],
            },
            process: {
              title: "Ablauf",
              subtitle: "",
              steps: [
                {
                  num: "1",
                  title: "Anfrage",
                  text: "Objekt, Umfang, Wünsche mitteilen.",
                },
                {
                  num: "2",
                  title: "Besichtigung",
                  text: "Vor-Ort-Check und transparente Offerte.",
                },
                {
                  num: "3",
                  title: "Ausführung",
                  text: "Professionelle Reinigung zum vereinbarten Zeitpunkt.",
                },
                {
                  num: "4",
                  title: "Qualitätskontrolle",
                  text: "Regelmässige Checks und offene Kommunikation.",
                },
              ],
            },
            testimonials: {
              title: "Kundenstimmen",
              items: [
                {
                  quote: "Zuverlässig seit Jahren – wir sind sehr zufrieden.",
                  author: "Firma",
                  role: "Büro",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "",
              items: [
                {
                  question: "Bieten Sie auch Einmalreinigungen an?",
                  answer:
                    "Ja – Umzugsreinigung, Grundreinigung und Spezialreinigungen auf Anfrage.",
                },
              ],
            },
            cta: {
              title: "Offerte anfragen",
              subtitle: "Wir melden uns innert 24h mit einer Offerte.",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
            footer: {
              companyName: "Reinigung Muster",
              tagline: "Professionelle Reinigung.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "info@example.ch",
            },
          },
        },

        // --------------------------------------------
        // FOTOGRAFIE
        // --------------------------------------------
        fotografie: {
          name: "Fotografie",
          icon: "📷",
          settings: {
            primaryColor: "#171717",
            accentColor: "#f5f5f5",
            darkMode: true,
            fontStack: "instrument",
            stylePreset: "editorial",
            designDensity: "airy",
            generateImpressum: true,
            generateDatenschutz: true,
            trackingPreset: "none",
          },
          components: {
            header: {
              companyName: "Foto Muster",
              logoText: "FM",
              navItems: ["Portfolio", "Leistungen", "Über uns", "Kontakt"],
              ctaText: "Anfrage",
            },
            hero: {
              title: "Bilder, die erzählen.",
              subtitle: "Fotografie für Unternehmen und Persönlichkeiten.",
              primaryBtn: "Projekt anfragen",
              secondaryBtn: "Portfolio",
              imageUrl: "",
            },
            trust: {
              items: [
                { value: "Natürlich", label: "Stil" },
                { value: "Professionell", label: "Workflow" },
                { value: "Schnell", label: "Lieferung" },
                { value: "Authentisch", label: "Bilder" },
              ],
            },
            services: {
              title: "Leistungen",
              subtitle: "Für Business und Private.",
              items: [
                {
                  icon: "👔",
                  title: "Business Portraits",
                  text: "Professionelle Bilder für Web, LinkedIn, Presse.",
                },
                {
                  icon: "🏢",
                  title: "Unternehmensreportage",
                  text: "Prozesse, Teams, Räume – authentisch dokumentiert.",
                },
                {
                  icon: "🎉",
                  title: "Events",
                  text: "Anlässe, Konferenzen, Feiern.",
                },
              ],
            },
            process: {
              title: "Ablauf",
              subtitle: "",
              steps: [
                {
                  num: "1",
                  title: "Briefing",
                  text: "Zweck, Stil, Einsatz der Bilder klären.",
                },
                {
                  num: "2",
                  title: "Shooting",
                  text: "Entspannt, effizient, professionell.",
                },
                {
                  num: "3",
                  title: "Auswahl",
                  text: "Gemeinsame Bildauswahl online.",
                },
                {
                  num: "4",
                  title: "Lieferung",
                  text: "Bearbeitete Bilder in allen gewünschten Formaten.",
                },
              ],
            },
            testimonials: {
              title: "Kundenfeedback",
              items: [
                {
                  quote: "Entspanntes Shooting, fantastische Bilder.",
                  author: "Kunde",
                  role: "Geschäftsführer",
                },
              ],
            },
            faq: {
              title: "FAQ",
              subtitle: "",
              items: [
                {
                  question: "Wie lange dauert ein Shooting?",
                  answer:
                    "Je nach Umfang 1-4 Stunden. Wir planen genug Zeit für entspannte Resultate.",
                },
              ],
            },
            cta: {
              title: "Projekt anfragen",
              subtitle:
                "Schildern Sie Ihr Projekt – ich melde mich mit einem Vorschlag.",
              phone: "+41 00 000 00 00",
              email: "foto@example.ch",
            },
            footer: {
              companyName: "Foto Muster",
              tagline: "Fotografie in Ihrer Region.",
              address: "Musterstrasse 1, 8000 Zürich",
              phone: "+41 00 000 00 00",
              email: "foto@example.ch",
            },
          },
        },
      };

      // Produktfokus: reduzierte Template-Auswahl
      const templateWhitelist = [
        "schweizer_kmu",
        "treuhand",
        "anwalt",
        "handwerker",
        "arzt",
        "restaurant",
        "immobilien",
        "coiffeur",
        "it",
      ];
      industryTemplates = Object.fromEntries(
        Object.entries(industryTemplates).filter(([key]) =>
          templateWhitelist.includes(key),
        ),
      );

      // ============================================
      // DEFAULT COMPONENTS
      // ============================================

      var createDefaultComponents = () => ({
        header: {
          id: "header",
          type: "header",
          name: "Header",
          enabled: true,
          data: {
            logoText: "BF",
            logoUrl: "",
            companyName: "Firmenname",
            navItems: ["Leistungen", "Über uns", "Kontakt"],
            ctaText: "Anfrage",
            showDarkModeToggle: false,
          },
        },

        hero: {
          id: "hero",
          type: "hero",
          name: "Hero",
          enabled: true,
          data: {
            title: "Headline die den Nutzen zeigt",
            subtitle:
              "Ein bis zwei Sätze die erklären was Sie machen und warum der Besucher bei Ihnen richtig ist.",
            primaryBtn: "Jetzt starten",
            secondaryBtn: "Mehr erfahren",
            imageUrl: "",
          },
        },

        trust: {
          id: "trust",
          type: "trust",
          name: "Trust Bar",
          enabled: true,
          data: {
            items: [
              { value: "500+", label: "Kunden" },
              { value: "25+", label: "Jahre Erfahrung" },
              { value: "98%", label: "Zufriedenheit" },
            ],
          },
        },

        services: {
          id: "services",
          type: "services",
          name: "Leistungen",
          enabled: true,
          data: {
            title: "Unsere Leistungen",
            subtitle: "Was wir für Sie tun können",
            items: [
              {
                icon: "📊",
                title: "Leistung 1",
                text: "Beschreibung der ersten Leistung.",
              },
              {
                icon: "💼",
                title: "Leistung 2",
                text: "Beschreibung der zweiten Leistung.",
              },
              {
                icon: "🎯",
                title: "Leistung 3",
                text: "Beschreibung der dritten Leistung.",
              },
            ],
          },
        },

        benefits: {
          id: "benefits",
          type: "benefits",
          name: "Vorteile",
          enabled: true,
          data: {
            title: "Warum wir?",
            items: [
              {
                title: "Unabhängig",
                text: "Wir beraten neutral und in Ihrem Interesse.",
              },
              {
                title: "Persönlich",
                text: "Ein fester Ansprechpartner für alle Fragen.",
              },
              { title: "Erfahren", text: "Über 25 Jahre Branchenerfahrung." },
            ],
          },
        },

        team: {
          id: "team",
          type: "team",
          name: "Team",
          enabled: false,
          data: {
            title: "Unser Team",
            subtitle: "Die Menschen hinter dem Erfolg",
            members: [
              {
                name: "Max Muster",
                role: "Geschäftsführer",
                image: "",
                bio: "Gründer mit 20 Jahren Erfahrung.",
              },
              {
                name: "Anna Beispiel",
                role: "Beraterin",
                image: "",
                bio: "Spezialistin für Steuerfragen.",
              },
            ],
          },
        },

        gallery: {
          id: "gallery",
          type: "gallery",
          name: "Galerie",
          enabled: false,
          data: {
            title: "Einblicke",
            subtitle: "Impressionen aus unserem Alltag",
            images: [
              { url: "", caption: "Bild 1" },
              { url: "", caption: "Bild 2" },
              { url: "", caption: "Bild 3" },
            ],
          },
        },

        testimonials: {
          id: "testimonials",
          type: "testimonials",
          name: "Testimonials",
          enabled: true,
          data: {
            title: "Das sagen unsere Kunden",
            items: [
              {
                quote:
                  "Die kompetente Beratung hat mir sehr geholfen. Ich kann die Firma wärmstens weiterempfehlen.",
                author: "Hans P.",
                role: "Zufriedener Kunde",
              },
            ],
          },
        },

        faq: {
          id: "faq",
          type: "faq",
          name: "FAQ",
          enabled: false,
          data: {
            title: "Häufige Fragen",
            subtitle: "Antworten auf die wichtigsten Fragen",
            items: [
              {
                question: "Wie läuft eine Erstberatung ab?",
                answer:
                  "In einem kostenlosen Erstgespräch lernen wir uns kennen und besprechen Ihre Situation.",
              },
              {
                question: "Was kostet Ihre Dienstleistung?",
                answer:
                  "Die Kosten richten sich nach dem Umfang. Gerne erstellen wir Ihnen eine unverbindliche Offerte.",
              },
            ],
          },
        },

        authority: {
          id: "authority",
          type: "authority",
          name: "Authority Strip",
          enabled: false,
          data: {
            title: "Worauf Sie sich verlassen können",
            items: [
              { icon: "🏛️", text: "Eidg. dipl. / zertifiziert (Beispiel)" },
              {
                icon: "🧾",
                text: "Unabhängig & neutral – keine Provisionen im Fokus",
              },
              { icon: "🔒", text: "Datenschutz garantiert" },
            ],
            variant: "chips", // chips | list
          },
        },

        process: {
          id: "process",
          type: "process",
          name: "Ablauf",
          enabled: false,
          data: {
            title: "Ein Prozess, der Klarheit schafft",
            subtitle:
              "Einfach, strukturiert, ohne Druck – mit messbaren Ergebnissen.",
            steps: [
              {
                num: "01",
                title: "Erstgespräch",
                text: "Ziele, Prioritäten, nächster Schritt – kurz und konkret.",
              },
              {
                num: "02",
                title: "Analyse",
                text: "Wir prüfen Unterlagen, Optionen, Risiken und Einsparpotenzial.",
              },
              {
                num: "03",
                title: "Empfehlung",
                text: "Verständliche Optionen mit Vor- und Nachteilen – ohne Fachjargon.",
              },
              {
                num: "04",
                title: "Umsetzung",
                text: "Wenn gewünscht: saubere Dokumentation und Begleitung.",
              },
            ],
          },
        },

        proofTable: {
          id: "proofTable",
          type: "proofTable",
          name: "Proof Table",
          enabled: false,
          data: {
            title: "Vergleiche Qualität, nicht Marketing",
            subtitle:
              "Eine klare Vergleichstabelle macht Differenzierung messbar.",
            headers: ["Kriterium", "Wir", "Andere"],
            rows: [
              { criterion: "Rohstoff deklariert", us: "✓ Ja", other: "✗ Nein" },
              {
                criterion: "Transparente Methode",
                us: "✓ Ja",
                other: "Oft unklar",
              },
              {
                criterion: "Schweizer Produktion",
                us: "✓ Ja",
                other: "Meist Ausland",
              },
              {
                criterion: "Ohne unnötige Zusätze",
                us: "✓ Ja",
                other: "Oft enthalten",
              },
            ],
            highlightColumn: 1, // 0|1|2
          },
        },

        stickyCta: {
          id: "stickyCta",
          type: "stickyCta",
          name: "Sticky CTA",
          enabled: false,
          data: {
            text: "Kostenloses Erstgespräch – in 15 Minuten zur Klarheit.",
            buttonText: "Termin vereinbaren",
            phone: "078 000 00 00",
            note: "Optional: Telefon direkt anrufen",
          },
        },

        cta: {
          id: "cta",
          type: "cta",
          name: "Call to Action",
          enabled: true,
          data: {
            title: "Bereit loszulegen?",
            subtitle: "Kontaktieren Sie uns für ein unverbindliches Gespräch.",
            phone: "+41 31 XXX XX XX",
            email: "info@example.ch",
          },
        },

        cookie: {
          id: "cookie",
          type: "cookie",
          name: "Cookie Banner",
          enabled: true,
          data: {
            defaultMarketing: false,
            defaultStatistics: false,
            showSettingsButton: true,
            manageLinkText: "Cookie-Einstellungen",
            preferencesText:
              "Wählen Sie aus, welche Cookies wir verwenden dürfen. Notwendige Cookies sind immer aktiv.",
            preferencesTitle: "Cookie-Einstellungen",
            marketingLabel: "Marketing",
            statisticsLabel: "Statistik",
            necessaryLabel: "Notwendig",
            savePreferences: "Speichern",
            openSettings: "Einstellungen",
            acceptReject: "Ablehnen",
            title: "Cookie-Einstellungen",
            text: "Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.",
            acceptAll: "Alle akzeptieren",
            acceptNecessary: "Nur notwendige",
            policyLink: "/datenschutz.html",
          },
        },

        footer: {
          id: "footer",
          type: "footer",
          name: "Footer",
          enabled: true,
          data: {
            companyName: "Firmenname GmbH",
            tagline: "Ihr Partner für XYZ in der Region.",
            address: "Musterstrasse 123, 3000 Bern",
            phone: "+41 31 XXX XX XX",
            email: "info@example.ch",
            linkedin: "",
            facebook: "",
            instagram: "",
          },
        },
      });

      // ============================================
      // DEFAULT COMPONENT ORDER
      // ============================================

      var defaultComponentOrder = [
        "header",
        "hero",
        "trust",
        "authority",
        "services",
        "proofTable",
        "process",
        "benefits",
        "team",
        "gallery",
        "testimonials",
        "faq",
        "cta",
        "stickyCta",
        "footer",
        "cookie",
      ];

      // ============================================
      // DEFAULT SETTINGS
      // ============================================

      var defaultSettings = (window.defaultSettings = {
        // Site Info
        siteName: "Meine Website",
        siteDescription: "Professionelle Dienstleistungen für Ihr Unternehmen.",

        // Colors
        primaryColor: "#134e4a",
        accentColor: "#d97706",

        // Color Stack Generator
        colorStack: null,
        useColorStack: false,

        // Appearance
        darkMode: false,
        darkModeToggle: false,
        fontStack: "system",

        // Elite Design
        stylePreset: "signature", // signature | swiss | luxe | glass | editorial
        designDensity: "balanced", // compact | balanced | airy

        // Premium FX
        fxOrbs: false, // Gradient orbs background
        fxGrain: false, // Grain/noise texture overlay
        fxGlass: false, // Glassmorphism cards
        fxIntensity: "medium", // subtle | medium | intense

        // Tracking & Datenschutz (CH)
        trackingPreset: "none", // none | ga4 | matomo
        tracking: {
          ga4MeasurementId: "",
          matomoUrl: "",
          matomoSiteId: "",
        },

        // Logo (SSOT – Single Source of Truth)
        logoDataUrl: "",

        // Image Library (central image storage)
        imageLibrary: [],

        // Favicon
        faviconEmoji: "🏢",

        // Multi-Page
        pagePackage: "onepage", // onepage | 3page | 5page
        generateImpressum: false,
        generateDatenschutz: false,

        // Legal Info (for Impressum)
        companyLegal: {
          name: "Firmenname GmbH",
          owner: "Max Muster",
          address: "Musterstrasse 123, 3000 Bern",
          email: "info@example.ch",
          phone: "+41 31 XXX XX XX",
          uid: "CHE-123.456.789",
        },
      });

      // ============================================
      // COMPONENT META INFO
      // ============================================

      var componentMeta = {
        header: { icon: "📌", description: "Navigation und Logo" },
        hero: { icon: "🎯", description: "Hauptbereich mit Headline" },
        trust: { icon: "✨", description: "Zahlen und Fakten" },
        authority: { icon: "🏅", description: "Credentials / Vertrauen" },
        services: { icon: "🔧", description: "Leistungen als Karten" },
        proofTable: { icon: "📊", description: "Vergleich / Differenzierung" },
        process: { icon: "🧭", description: "Ablauf in Schritten" },
        benefits: { icon: "✅", description: "Vorteile mit Checkmarks" },
        team: { icon: "👥", description: "Team-Mitglieder" },
        gallery: { icon: "🖼️", description: "Bildergalerie" },
        testimonials: { icon: "💬", description: "Kundenstimmen" },
        faq: { icon: "❓", description: "Häufige Fragen" },
        cta: { icon: "📞", description: "Kontakt-Aufruf" },
        stickyCta: { icon: "🧲", description: "Fixer CTA-Balken" },
        footer: { icon: "📋", description: "Fusszeile" },
        cookie: { icon: "🍪", description: "Cookie-Hinweis" },
      };



  window.industryTemplates = industryTemplates;
  window.createDefaultComponents = createDefaultComponents;
  window.defaultComponentOrder = defaultComponentOrder;
  window.defaultSettings = defaultSettings;
  window.componentMeta = componentMeta;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      industryTemplates,
      createDefaultComponents,
      defaultComponentOrder,
      defaultSettings,
      componentMeta,
    };
  }
})();
