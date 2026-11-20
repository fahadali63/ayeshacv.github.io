/*
  All site copy lives here. Edit this file when the CV changes.
  Keep the phone number out of this file: the site is public.
*/
window.SITE = {
  name: "Ayesha Khalid",
  role: "CA Student (CAF) · Accounts & Bookkeeping",
  email: "ayeshakhaliddd61@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayeshakhalid61/",
  linkedinLabel: "linkedin.com/in/ayeshakhalid61",
  location: "Lahore, Pakistan",
  availability: "Open to remote roles & internships",
  cv: "assets/Ayesha_Khalid_CV.pdf",

  // Call-back form. FormSubmit sends each request to this inbox.
  // After the first submission, FormSubmit emails an activation link once.
  // Once activated you can swap the email for the random alias FormSubmit gives you.
  formEndpoint: "https://formsubmit.co/ajax/ayeshakhaliddd61@gmail.com",

  hero: {
    titleLines: ["Clean books, checked", "before they reach you"],
    intro:
      "CA student at ICAP with hands-on bookkeeping in Sage, QuickBooks and Xero. I keep the books, reconcile the bank and close the period with reports you can rely on.",
    badge: { value: "CAF Student", label: "ICAP · 4 of 8 papers cleared", cleared: 4, total: 8 },
  },

  stats: [
    { value: 4, suffix: "/8", label: "CAF papers cleared" },
    { value: 5, suffix: "/5", label: "PRC papers, qualified" },
    { value: 4, suffix: "", label: "Accounting tools, hands-on" },
    { value: 2, suffix: "x", label: "PEEF merit scholar" },
  ],

  about: {
    title: ["From first invoice", "to final balance sheet"],
    text:
      "Through the ACDAP program at KBM I keep complete sets of books for practice companies: invoices, day books, bank reconciliation, payroll, trial balance and financial statements, then VAT returns from the same records. Accuracy, timely reporting and records that hold up when someone checks them.",
    tag: "Sample work · not client data",
  },

  services: [
    {
      title: "Bookkeeping",
      text: "Invoice generation, transaction recording, sales and purchase day books, kept up to date.",
    },
    {
      title: "Bank reconciliation",
      text: "Matching the bank statement to the books line by line, so the cash figure is one you can trust.",
    },
    {
      title: "Financial reporting",
      text: "Trial balance, profit & loss, balance sheet, and aged debtor and creditor reports.",
    },
    {
      title: "Payroll & VAT",
      text: "Salary calculations, deductions and pay slips in Sage Payroll. VAT returns from sales and purchase records.",
    },
  ],

  marquee: ["Record", "Reconcile", "Report"],

  tools: [
    {
      name: "Sage",
      mark: "S",
      level: "Hands-on at KBM",
      text: "Full bookkeeping, bank reconciliation and financial report generation on company projects.",
    },
    {
      name: "Sage Payroll",
      mark: "SP",
      level: "Hands-on at KBM",
      text: "Payroll on a company project: salary calculations, deductions and pay slip generation.",
    },
    {
      name: "QuickBooks",
      mark: "QB",
      level: "Hands-on at KBM",
      text: "Recording transactions, invoicing and generating reports through the ACDAP program.",
    },
    {
      name: "Xero",
      mark: "X",
      level: "Hands-on at KBM",
      text: "Day-to-day bookkeeping, bank reconciliation and report generation through the ACDAP program.",
    },
    {
      name: "MS Excel",
      mark: "XL",
      level: "Intermediate · used at KBM",
      text: "Working papers, schedules and checks alongside the accounting software.",
    },
    {
      name: "MS Office",
      mark: "MO",
      level: "Intermediate · certified",
      text: "Microsoft Office Professional certificate from the School of Business Intelligence, Lahore.",
    },
  ],

  experience: {
    title: "Accounting Software Practical Projects",
    org: "ACDAP Program, KBM",
    period: "October 2026 – Present",
    points: [
      "Completed bookkeeping, bank reconciliation and financial report generation in Sage on two company projects",
      "Prepared payroll in Sage Payroll for a company project, including salary calculations, deductions and pay slip generation",
      "Prepare trial balance, balance sheet and profit & loss statement from recorded entries",
      "Prepare VAT returns from sales and purchase records",
    ],
    // Client and training work is confidential, so it is not shown. Offer a free sample instead.
    projects: ["Sage", "Sage Payroll", "QuickBooks", "Xero", "MS Excel"],
    confidential: "Project files from KBM are confidential, so I don't share them here. Want to see how I work? I'll do a free sample for you.",
  },

  education: [
    {
      title: "Chartered Accountancy (CA)",
      place: "Institute of Chartered Accountants of Pakistan (ICAP)",
      period: "2023 – Present",
      detail: ["CAF: In progress, 4 of 8 papers cleared", "PRC: Qualified"],
    },
    {
      title: "F.Sc. Pre-Medical",
      place: "Punjab Group of Colleges, Burewala",
      period: "2021 – 2023",
      detail: ["1034/1100 (94%)"],
    },
    {
      title: "Matriculation (Science)",
      place: "Crescent Model High School, Burewala",
      period: "2021",
      detail: ["1100/1100 (100%)"],
    },
  ],

  awards: [
    {
      title: "PEEF Scholarship",
      by: "Punjab Educational Endowment Fund",
      text: "Two-time merit-based recipient.",
    },
    {
      title: "Digital Accounting Course",
      by: "KBM Training & Recruitment, funded by PSDF",
      text: "Practical training in digital bookkeeping and accounting software.",
    },
    {
      title: "Microsoft Office Professional",
      by: "School of Business Intelligence (SBI), Lahore",
      text: "Certification in the Microsoft Office suite.",
    },
    {
      title: "Presentation and Personal Effectiveness",
      by: "School of Business Intelligence (SBI), Lahore",
      text: "Certificate in presenting work clearly and working effectively.",
    },
  ],

  ticker: [
    "Sage",
    "QuickBooks",
    "Xero",
    "Sage Payroll",
    "Bank Reconciliation",
    "VAT Returns",
    "Trial Balance",
    "Aged Debtors",
    "MS Excel",
  ],

  languages: "Urdu (Native) · English (Fluent)",

  contact: {
    title: "Request a call back",
    text:
      "Need help with your books, hiring for a remote or internship role, or want a free sample of my work first? Leave your details and I'll call you back. Your request comes straight to my inbox.",
  },
};
