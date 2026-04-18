import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("lang") || "fr";

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: {
        navbar: {
          skills: "Compétences",
          experience: "Expérience",
          education: "Études",
          publications: "Publications",
          languages: "Langues",
          contact: "Contact"
        },
        hero: {
          imageAlt: "Alexis Bahunga - Député Provincial",
          role: "Député Provincial du Nord-Kivu",
          description:
            "Je suis politologue de formation ; doctorant à l’Université de Kinshasa en Sciences Politiques et Administratives, et détenteur d’un Master en Gouvernance, Défense et Sécurité de l’Université de Goma, accompagné de plusieurs autres formations. Ceci a permis mon ouverture dans plusieurs autres domaines tels que les finances publiques, les institutions financières, le droit fiscal, la logistique et la sécurité. J’ai une vaste expérience de 19 ans de travail dans le domaine public que privé, notamment en matière de gestion des administrations fiscales, des finances publiques et de l’administration publique, des institutions financières, de gestion des conflits et de gouvernance des organisations non gouvernementales. Grâce aux études de gouvernance, défense et sécurité, l’appréhension rapide du contexte sécuritaire est aussi de mon apanage.",
          location: "Goma, Nord-Kivu, RDC"
        },
        footer: {
          title: "Député Provincial du Nord-Kivu"
        },
        skills: {
            title: "Compétences",
            items: {
                admin: {
                title: "Administration publique",
                desc: "Gestion des administrations fiscales, finances publiques"
                },
                law: {
                title: "Législation",
                desc: "Député Provincial, expertise en contrôle budgétaire"
                },
                finance: {
                title: "Gestion financière",
                desc: "Expérience dans les institutions financières et coopératives"
                },
                conflict: {
                title: "Gestion des Conflits",
                desc: "Formation en gouvernance, défense et sécurité"
                }
            },
            current: {
                title: "Poste Actuel",
                role: "Député Provincial du Nord-Kivu",
                constituency: "Élu de la Circonscription électorale du Territoire de Masisi",
                group: "Président du Groupe Parlementaire UDPS/TSHISEKEDI",
                since: "Assemblée Provinciale du Nord-Kivu — Depuis Janvier 2019"
            }
            },
            experience: {
                title: "Expériences professionnelles",
                public: {
                    title: "Institutions publiques",
                    items: [
                    {
                        title: "Député Provincial du Nord-Kivu",
                        org: "Assemblée Provinciale du Nord-Kivu",
                        period: "Janvier 2019 - Présent",
                        desc: "Représenter toute la population du territoire de Masisi à l'assemblée provinciale, légiférer dans les matières de la compétence provinciale, contrôler l'exécutif provincial et mener des démarches du couloir aux fins de régler certaines questions de la population."
                    },
                    {
                        title: "Président du Groupe Parlementaire UDPS/TSHISEKEDI",
                        org: "Assemblée Provinciale du Nord-Kivu",
                        period: "Mars 2024 - Présent",
                        desc: "Coordonner, conduire et orienter la dynamique politique des députés provinciaux du parti dans les institutions politiques de la province."
                    },
                    {
                        title: "Rapporteur de la commission ECOFIN",
                        org: "Assemblée Provinciale du Nord-Kivu",
                        period: "2019 - Février 2024",
                        desc: "Préparer la feuille de route de la commission, contrôler la gestion et l'affectation des ressources de la province notamment les finances, les matériels et le personnel, préparer et faire le suivi des budgets des institutions provinciales."
                    },
                    {
                        title: "Inspecteur des finances et chef de division",
                        org: "DGR-NK",
                        period: "Janvier 2018 - Janvier 2019",
                        desc: "Préparer les missions d'inspection ou de contrôle à mener auprès des assujettis et initier des missions d'audit de service, faire le recoupement, préparer la note technique à soumettre au Directeur Général."
                    },
                    {
                        title: "Inspecteur des finances et chef de division",
                        org: "DGR-NK",
                        period: "Avril 2014 - Février 2017",
                        desc: "Préparer les missions d'inspection ou de contrôle à mener auprès des assujettis et initier des missions d'audit de service."
                    },
                    {
                        title: "Chef de Centre Opérationnel des Recettes",
                        org: "DGR-NK",
                        period: "Janvier 2011 - Mars 2014",
                        desc: "Coordonner et gérer les ressources humaines, matérielles et financières du centre des recettes, préparer le plan stratégique et opérationnel du centre des recettes en vue de mobiliser les recettes."
                    },
                    {
                        title: "Chef de Bureau recouvrement",
                        org: "DGR-NK",
                        period: "Octobre 2009 - Décembre 2010",
                        desc: "Faire le suivi des assujettis ou des redevables, identifier les défaillants, les mettre en demeure et en avis de mise en recouvrement."
                    },
                    {
                        title: "Inspecteur des finances",
                        org: "Brigade Provinciale des Finances du Nord Kivu",
                        period: "2008 - Octobre 2009",
                        desc: "Mener des missions d'inspection et de contrôle financier."
                    },
                    {
                        title: "Président des étudiants de l'UNIGOM",
                        org: "Université de Goma",
                        period: "2004",
                        desc: "Coordonner les activités des étudiants et être leur porte-parole auprès des autorités académiques."
                    },
                    {
                        title: "Président des étudiants - Faculté Sc. Politiques",
                        org: "Université de Goma",
                        period: "2002 - 2003",
                        desc: "Coordonner les activités des étudiants de la faculté et être leur porte-parole auprès du doyen."
                    }
                    ]
                },
                private: {
                    title: "Institutions privées",
                    items: [
                    {
                        title: "Président du Conseil d'Administration (PCA)",
                        org: "COOPEC IMARA GOMA",
                        period: "Mars 2013 - Février 2019",
                        desc: "Mener la politique générale de la coopérative, représenter la coopérative et ses membres auprès de tiers, préparer les assemblées générales et recruter le directeur ou gérant de la coopérative."
                    },
                    {
                        title: "Administrateur",
                        org: "IEDA Relief en RD Congo",
                        period: "Janvier 2017 - Juillet 2017",
                        desc: "Représenter l'organisation auprès de tiers, administrer et gérer les ressources humaines, matérielles et financières de l'organisation, veiller au respect des normes humanitaires."
                    },
                    {
                        title: "Assistant d'enseignement supérieur",
                        org: "ISAD Walikale",
                        period: "2009 - 2015",
                        desc: "Préparer la matière à enseigner selon la charge horaire, faire de recherche pour actualiser le cours, dispenser les cours et faire des évaluations."
                    },
                    {
                        title: "Coordonnateur",
                        org: "ONG APEDI",
                        period: "2003 - Fin 2004",
                        desc: "Représenter l'organisation auprès des partenaires, coordonner les activités, faire une planification stratégique et opérationnelle, élaborer le budget et faire le suivi de son exécution."
                    }
                    ]
                }
                },
                education: {
                    title: "Formation académique",
                    studyTitle: "Études",
                    otherTitle: "Autres Formations",
                    otherDesc: "En RDC comme à l'étranger, plusieurs formations ont été faites notamment en :",

                    items: [
                        {
                        degree: "Doctorant en Sciences Politiques et Administratives",
                        detail: "Recherches doctorales sur : Gouvernance provinciale et dynamiques locales",
                        school: "Université de Kinshasa",
                        period: "2025 - présent"
                        },
                        {
                        degree: "Master en Sciences Politiques et Administratives",
                        detail: "Filière Gouvernance, Défense et Sécurité",
                        school: "Université de Goma",
                        period: "2023-2024"
                        },
                        {
                        degree: "Licence en Sciences Politiques et Administratives",
                        detail: "",
                        school: "Université de Goma",
                        period: "2003-2005"
                        },
                        {
                        degree: "Graduat en Sciences Politiques et Administratives",
                        detail: "",
                        school: "Université de Goma",
                        period: "2000-2002"
                        },
                        {
                        degree: "Diplôme d'État",
                        detail: "Option commerciale et administrative",
                        school: "Institut Kishondja",
                        period: "1992-1998"
                        },
                        {
                        degree: "Certificat d'Études Primaires",
                        detail: "",
                        school: "EP Kilambo",
                        period: "1985-1992"
                        }
                    ],

                    formations: [
                        "Gestion et règlement des conflits",
                        "Gestion et évaluation des projets",
                        "Gestion axée sur les résultats (GAR)",
                        "Gestion d'une administration publique",
                        "Gouvernance et contrôle interne",
                        "Gestion d'une administration fiscale",
                        "Budget programme",
                        "Fiscalité interne et externe",
                        "Inspection des finances",
                        "Sécurité et protection",
                        "Finances publiques"
                    ]
                    },
                    publications: {
                        title: "Publications",
                        items: [
                            {
                            title: "Gouvernance locale à l'épreuve du démembrement de la Province du Nord-Kivu : enjeux, risques et défis",
                            year: "2024",
                            type: "Mémoire de Master"
                            },
                            {
                            title: "La problématique de l'implantation des partis politiques dans la ville de Goma",
                            year: "2005",
                            type: "Mémoire de licence"
                            },
                            {
                            title: "La problématique de la gestion du pouvoir coutumier dans la chefferie des Bashali en territoire de Masisi",
                            year: "2002",
                            type: "Travail de fin de cycle"
                            }
                        ]
                        },
                        languages: {
                            title: "Langues parlées",
                            items: [
                                "Français",
                                "Anglais",
                                "Lingala",
                                "Swahili",
                                "Autres langues locales"
                            ]
                            },
                            contact: {
                                title: "Contact",
                                items: {
                                    email: "Email",
                                    phone: "Tél. principal"
                                },
                                socialText: "Contactez-nous ici"
                                },
                                references: {
                                    title: "Références",
                                    items: [
                                        {
                                        role: "Sénateur de la RDC"
                                        },
                                        {
                                        role: "CEO de l'ONGI Iedarelief"
                                        }
                                    ]
                                    }
      }
    },
    en: {
      translation: {
        navbar: {
          skills: "Skills",
          experience: "Experience",
          education: "Education",
          publications: "Publications",
          languages: "Languages",
          contact: "Contact"
        },
        hero: {
          imageAlt: "Alexis Bahunga - Provincial Deputy",
          role: "Provincial Deputy of North Kivu",
          description:
            "I am a trained political scientist, currently pursuing a doctorate at the University of Kinshasa in Political and Administrative Sciences, and I hold a Master's degree in Governance, Defense and Security from the University of Goma, along with several other professional trainings. This has enabled me to broaden my expertise into several other fields such as public finance, financial institutions, tax law, logistics and security. I have 19 years of extensive experience in both the public and private sectors, particularly in the management of tax administrations, public finance and public administration, financial institutions, conflict management, and the governance of non-governmental organizations. Thanks to my studies in governance, defense and security, I also have a strong ability to quickly understand security contexts.",
          location: "Goma, North Kivu, DRC"
        },
        footer: {
          title: "Provincial Deputy of North Kivu"
        },
        skills: {
            title: "Skills",
            items: {
                admin: {
                title: "Public administration",
                desc: "Management of tax administrations and public finances"
                },
                law: {
                title: "Legislation",
                desc: "Provincial Deputy, expertise in budgetary control"
                },
                finance: {
                title: "Financial management",
                desc: "Experience in financial institutions and cooperatives"
                },
                conflict: {
                title: "Conflict management",
                desc: "Training in governance, defense and security"
                }
            },
            current: {
                title: "Current Position",
                role: "Provincial Deputy of North Kivu",
                constituency: "Elected representative of Masisi Territory",
                group: "President of UDPS/TSHISEKEDI Parliamentary Group",
                since: "North Kivu Provincial Assembly — Since January 2019"
            }
            },
            experience: {
                title: "Professional experience",
                public: {
                    title: "Public institutions",
                    items: [
                    {
                        title: "Provincial Deputy of North Kivu",
                        org: "North Kivu Provincial Assembly",
                        period: "January 2019 - Present",
                        desc: "Represent the entire population of Masisi Territory in the provincial assembly, legislate on matters under provincial authority, oversee the provincial executive, and advocate for the resolution of various public concerns."
                    },
                    {
                        title: "President of the UDPS/TSHISEKEDI Parliamentary Group",
                        org: "North Kivu Provincial Assembly",
                        period: "March 2024 - Present",
                        desc: "Coordinate, lead and guide the political dynamics of the party's provincial deputies within the province's political institutions."
                    },
                    {
                        title: "Rapporteur of the ECOFIN Commission",
                        org: "North Kivu Provincial Assembly",
                        period: "2019 - February 2024",
                        desc: "Prepared the commission's roadmap, monitored the management and allocation of provincial resources including finances, equipment and personnel, and prepared and followed up on the budgets of provincial institutions."
                    },
                    {
                        title: "Finance Inspector and Head of Division",
                        org: "DGR-NK",
                        period: "January 2018 - January 2019",
                        desc: "Prepared inspection and control missions for taxpayers, initiated service audit missions, conducted cross-checking, and prepared technical notes for submission to the General Director."
                    },
                    {
                        title: "Finance Inspector and Head of Division",
                        org: "DGR-NK",
                        period: "April 2014 - February 2017",
                        desc: "Prepared inspection and control missions for taxpayers and initiated service audit missions."
                    },
                    {
                        title: "Head of Revenue Operations Center",
                        org: "DGR-NK",
                        period: "January 2011 - March 2014",
                        desc: "Coordinated and managed the human, material and financial resources of the revenue center, and prepared strategic and operational plans to mobilize revenue."
                    },
                    {
                        title: "Head of Recovery Office",
                        org: "DGR-NK",
                        period: "October 2009 - December 2010",
                        desc: "Monitored taxpayers and debtors, identified defaulters, issued notices, and initiated recovery procedures."
                    },
                    {
                        title: "Finance inspector",
                        org: "North Kivu Provincial Finance Brigade",
                        period: "2008 - October 2009",
                        desc: "Conducted financial inspection and control missions."
                    },
                    {
                        title: "President of UNIGOM Students",
                        org: "University of Goma",
                        period: "2004",
                        desc: "Coordinated student activities and served as their spokesperson before academic authorities."
                    },
                    {
                        title: "Student President - Faculty of Political Science",
                        org: "University of Goma",
                        period: "2002 - 2003",
                        desc: "Coordinated faculty student activities and served as their spokesperson before the dean."
                    }
                    ]
                },
                private: {
                    title: "Private Institutions",
                    items: [
                    {
                        title: "Chairman of the Board",
                        org: "COOPEC IMARA GOMA",
                        period: "March 2013 - February 2019",
                        desc: "Led the cooperative's general policy, represented the cooperative and its members before third parties, prepared general assemblies, and recruited the director or manager of the cooperative."
                    },
                    {
                        title: "Administrator",
                        org: "IEDA Relief in DRC",
                        period: "January 2017 - July 2017",
                        desc: "Represented the organization before third parties, administered and managed the organization's human, material and financial resources, and ensured compliance with humanitarian standards."
                    },
                    {
                        title: "Higher Education Assistant",
                        org: "ISAD Walikale",
                        period: "2009 - 2015",
                        desc: "Prepared teaching materials according to workload, conducted research to update course content, taught classes, and carried out assessments."
                    },
                    {
                        title: "Coordinator",
                        org: "APEDI NGO",
                        period: "2003 - End of 2004",
                        desc: "Represented the organization before partners, coordinated activities, carried out strategic and operational planning, developed the budget, and monitored its implementation."
                    }
                    ]
                }
                },
                education: {
                    title: "Academic Education",
                    studyTitle: "Studies",
                    otherTitle: "Other Training",
                    otherDesc: "In DRC and abroad, several trainings have been completed including:",

                    items: [
                        {
                        degree: "PhD Candidate in Political and Administrative Sciences",
                        detail: "Research on provincial governance and local dynamics",
                        school: "University of Kinshasa",
                        period: "2025 - Present"
                        },
                        {
                        degree: "Master in Political and Administrative Sciences",
                        detail: "Governance, Defense and Security",
                        school: "University of Goma",
                        period: "2023-2024"
                        },
                        {
                        degree: "Bachelor's Degree in Political and Administrative Sciences",
                        detail: "",
                        school: "University of Goma",
                        period: "2003-2005"
                        },
                        {
                        degree: "Undergraduate Degree",
                        detail: "",
                        school: "University of Goma",
                        period: "2000-2002"
                        },
                        {
                        degree: "State Diploma",
                        detail: "Commercial and administrative option",
                        school: "Kishondja Institute",
                        period: "1992-1998"
                        },
                        {
                        degree: "Primary Education Certificate",
                        detail: "",
                        school: "EP Kilambo",
                        period: "1985-1992"
                        }
                    ],

                    formations: [
                        "Conflict management",
                        "Project management and evaluation",
                        "Results-based management (RBM)",
                        "Public administration management",
                        "Governance and internal control",
                        "Tax administration management",
                        "Program budgeting",
                        "Taxation (internal and external)",
                        "Financial inspection",
                        "Security and protection",
                        "Public finance"
                    ]
                    },
                    publications: {
                        title: "Publications",
                        items: [
                            {
                            title: "Local governance facing the fragmentation of North Kivu Province: issues, risks and challenges",
                            year: "2024",
                            type: "Master's Thesis"
                            },
                            {
                            title: "The issue of political party establishment in the city of Goma",
                            year: "2005",
                            type: "Bachelor's Thesis"
                            },
                            {
                            title: "The issue of customary power management in Bashali chiefdom in Masisi Territory",
                            year: "2002",
                            type: "Final Year Project"
                            }
                        ]
                        },
                        languages: {
                            title: "Languages",
                            items: [
                                "French",
                                "English",
                                "Lingala",
                                "Swahili",
                                "Other local languages"
                            ]
                            },
                            contact: {
                                title: "Contact",
                                items: {
                                    email: "Email",
                                    phone: "Main phone"
                                },
                                socialText: "Contact us here"
                                },
                                references: {
                                    title: "References",
                                    items: [
                                        {
                                        role: "Senator of the DRC"
                                        },
                                        {
                                        role: "CEO of Iedarelief NGO"
                                        }
                                    ]
                                    }
      }
    }
  },
  lng: savedLanguage,
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false
  }
});
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
  document.documentElement.lang = lng;
});

export default i18n;