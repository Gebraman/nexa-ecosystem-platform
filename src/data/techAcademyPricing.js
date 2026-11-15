export const techAcademyPricing = {
  header: {
    title: "Affordable, High-Impact Tuition Plans",
    subtitle: "Invest in your future with flexible payment options tailored for both the global diaspora and local Ethiopian students.",
    admissionsPhone: "(202) 386 2702",
    admissionsLocalPhone: "+251 911 234 567",
  },
  regions: {
    outsideEthiopia: {
      id: "outside-ethiopia",
      label: "Outside Ethiopia (USD $)",
      currency: "USD",
      currencySymbol: "$",
      plans: [
        {
          id: "usd-in-class",
          name: "In-Class Live Mentorship",
          badge: "Most Popular",
          badgeColor: "bg-amber-500 text-dark-950 font-bold",
          originalPrice: 2400,
          discountedPrice: 1600,
          savings: "$800 Discount",
          billingCadence: "one-time payment",
          installmentOption: "Or 4 monthly installments of $425/mo",
          description: "Our complete immersive bootcamp experience with live instructor lectures, personalized code reviews, and career coaching.",
          featured: true,
          features: [
            "100% Live Zoom Lectures with Senior Engineers (Saturday & Sunday)",
            "Dedicated Teaching Assistants & Daily Office Hours",
            "Weekday Peer Discussion Groups (Choose from 4 shifts)",
            "1-on-1 Code Debugging & Homework Reviews",
            "Phase 4 AI Application Engineering & RAG Systems",
            "Abe Garage Full-Stack & AI Capstone Project",
            "Professional Resume Review & Technical Mock Interviews",
            "Lifetime Access to Alumni Community & Job Referral Network"
          ],
          cta: "Enroll in Live Class",
          ctaSubtext: "No upfront payment required to apply"
        },
        {
          id: "usd-self-paced",
          name: "Self-Paced Material Only",
          badge: "Independent Study",
          badgeColor: "bg-slate-800 text-slate-300",
          originalPrice: 1200,
          discountedPrice: 900,
          savings: "$300 Discount",
          billingCadence: "one-time payment",
          installmentOption: "Or 3 monthly installments of $320/mo",
          description: "Ideal for self-driven learners who want full access to recorded Zoom lectures and curriculum exercises at their own pace.",
          featured: false,
          features: [
            "Complete 32-Week Curriculum & Video Lecture Recordings",
            "All Code Repositories, Starter Files & Coding Exercises",
            "Access to Student Community Discussion Board",
            "Self-Paced Capstone Project Guidelines",
            "Automated Quizzes & Knowledge Checkpoints",
            "Certificate of Completion upon Project Submission"
          ],
          cta: "Enroll Self-Paced",
          ctaSubtext: "Instant digital access upon approval"
        }
      ]
    },
    insideEthiopia: {
      id: "inside-ethiopia",
      label: "Inside Ethiopia (CBE Birr Subsidized)",
      currency: "ETB",
      currencySymbol: "ETB",
      plans: [
        {
          id: "etb-in-class",
          name: "In-Class Live Mentorship (Ethiopia Rate)",
          badge: "CBE Subsidized",
          badgeColor: "bg-emerald-500 text-dark-950 font-bold",
          originalPrice: 800,
          discountedPrice: 600,
          birrApprox: "Payable in CBE Birr at prevailing bank exchange rate",
          savings: "$200 Subsidy Discount",
          billingCadence: "one-time or phase-by-phase",
          installmentOption: "Payable Phase-by-Phase (Phase 1: $100 equivalent in Birr)",
          description: "Subsidized tuition for local students residing in Ethiopia. Verified via Ethiopian National ID / Kebele card.",
          featured: true,
          features: [
            "100% Live Instructor Sessions timed for East Africa (EAT / ETH LT)",
            "Local Telegram & Zoom Mentorship Channels in Amharic & English",
            "Dedicated Teaching Assistants in Addis Ababa",
            "Phase-by-Phase Payment Options via CBE / Telebirr",
            "Phase 4 AI Application Development & OpenAI Integration",
            "Abe Garage Full-Stack Real-World Capstone Project",
            "Job Placement Support with Ethiopian Tech Firms & Remote Roles",
            "Official Certificate of Completion"
          ],
          cta: "Apply with Ethiopian ID",
          ctaSubtext: "Verified via CBE / Telebirr bank transfer"
        },
        {
          id: "etb-self-paced",
          name: "Self-Paced Material Only (Ethiopia Rate)",
          badge: "Affordable Access",
          badgeColor: "bg-slate-800 text-slate-300",
          originalPrice: 400,
          discountedPrice: 300,
          birrApprox: "Payable in CBE Birr at prevailing bank exchange rate",
          savings: "$100 Subsidy Discount",
          billingCadence: "one-time payment",
          installmentOption: "Or 2 split payments via CBE / Telebirr",
          description: "Affordable access to all 32 weeks of recorded curriculum and code exercises for local self-taught programmers.",
          featured: false,
          features: [
            "Complete 32-Week Curriculum & Lecture Recordings",
            "Curriculum Slides, Starter Code & GitHub Repositories",
            "Access to Local Student Telegram Group",
            "Abe Garage Project Architecture & Specs",
            "Certificate of Completion upon Project Submission"
          ],
          cta: "Enroll Self-Paced (ETB)",
          ctaSubtext: "CBE / Telebirr transfer accepted"
        }
      ]
    }
  }
};

export const cohortScheduleData = {
  header: {
    title: "Class Schedule & Multi-Timezone Grid",
    subtitle: "Designed to accommodate working professionals and students in North America, Europe, and East Africa simultaneously.",
  },
  weekendLiveSessions: [
    {
      day: "Saturday & Sunday",
      title: "Core Live Lecture & Instructor Workshop",
      timezones: [
        { zone: "Eastern Standard Time (EST)", time: "10:00 AM – 12:00 PM EST", location: "New York / DC / Toronto" },
        { zone: "Pacific Standard Time (PST)", time: "7:00 AM – 9:00 AM PST", location: "Los Angeles / Seattle" },
        { zone: "East Africa Time (EAT)", time: "5:00 PM – 7:00 PM EAT", location: "Addis Ababa / Nairobi" },
        { zone: "Ethiopian Local Time (ETH-LT)", time: "ማታ 11:00 – 1:00 ሰዓት", location: "አዲስ አበባ እና አካባቢዋ" }
      ],
      details: "Interactive live lecture covering core theoretical principles, live coding demonstrations, and Q&A."
    }
  ],
  weekdayDiscussionShifts: {
    days: "Tuesday & Thursday",
    title: "Small Group Peer Discussion & Coding Labs",
    description: "Choose one of 4 shifts that best matches your personal work schedule:",
    shifts: [
      {
        id: "shift-morning",
        name: "Morning Shift",
        estTime: "9:00 AM – 11:00 AM EST",
        eatTime: "5:00 PM – 7:00 PM EAT",
        ethTime: "ማታ 11:00 – 1:00 ሰዓት",
        bestFor: "Ideal for East Africa evening learners & US morning flexibility."
      },
      {
        id: "shift-afternoon",
        name: "Afternoon Shift",
        estTime: "2:00 PM – 4:00 PM EST",
        eatTime: "10:00 PM – 12:00 AM EAT",
        ethTime: "ለሊቱ 4:00 – 6:00 ሰዓት",
        bestFor: "Ideal for Europe evening learners & US afternoon workers."
      },
      {
        id: "shift-evening",
        name: "Evening Shift (Most Popular)",
        estTime: "7:00 PM – 9:00 PM EST",
        eatTime: "3:00 AM – 5:00 AM EAT",
        ethTime: "የንጋቱ 9:00 – 11:00 ሰዓት",
        bestFor: "Prime time for North American diaspora after 9-to-5 work hours."
      },
      {
        id: "shift-night",
        name: "Night Shift",
        estTime: "10:00 PM – 12:00 AM EST",
        eatTime: "6:00 AM – 8:00 AM EAT",
        ethTime: "ጧት 12:00 – 2:00 ሰዓት",
        bestFor: "West Coast US evening learners (7:00 PM PST) & early East Africa."
      }
    ]
  }
};
