import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    words: {
      en: {
        set_language: "BANGLA",
        sample: "SAMPLE",
        clear_all: "CLEAR ALL",
        pdf: "PDF",
        live_edit: "LIVE EDIT",
        primary: "Primary",
        secondary: "Secondary",
        title: "Main Title",
        subtitle: "Subtitle",
        titles: "Titles",
        textLeft: "Text 1",
        textRight: "Text 2",
        color_hint: "* double click the color for the default color",
        add: "ADD",
        clear: "CLEAR",
        personal_information: "Personal Information",
        social: "Social",
        languages: "Languages",
        hobbies: "Hobbies",
        education: "Education",
        experience: "Experience",
        skills: "Skills",
        projects: "Projects",
        courses: "Courses",
        references: "References",
        social_upper: "SOCIAL",
        languages_upper: "LANGUAGES",
        hobbies_upper: "HOBBIES",
        education_upper: "EDUCATION",
        experience_upper: "EXPERIENCE",
        skills_upper: "SKILLS",
        projects_upper: "PROJECTS",
        courses_upper: "COURSES",
        references_upper: "REFERENCES",
        name_surname: "Name Surname",
        form_title: "Title",
        photo: "Photo",
        address: "Address",
        phone_number: "Phone Number",
        email_address: "Email Address",
        about: "About",
        twitter_username: "Twitter Username",
        github_username: "Github Username",
        linkedin_username: "LinkedIn Username",
        personal_website: "Personal Website",
        external_url: "External URL",
        username_or_url: "Username or URL Address",
        select: "Select",
        language: "Language Name",
        native: "Native Language",
        hobby: "Hobby Name",
        school: "School Name",
        subject: "Subject",
        degree: "Degree",
        city: "City",
        from: "From",
        to: "To",
        company: "Company Name",
        position: "Position",
        description: "Description",
        skill: "Skill Name",
        level: "Level",
        project: "Project Name",
        link: "Project Link",
        course: "Course Name",
        reference: "Reference Name",
        reference_title: "Reference Title",
        confirm: "Are you sure all data will be deleted?",
        top: "Top",
        right: "Right",
        bottom: "Bottom",
        left: "Left",
        margin_hint: "* you can set print page margins",
      },
      bn: {
        set_language: "ENGLISH",
        sample: "উদাহরণ",
        clear_all: "সব মুছে ফেলুন",
        pdf: "PDF",
        live_edit: "লাইভ সম্পাদনা করুন",
        primary: "প্রাথমিক",
        secondary: "মাধ্যমিক",
        title: "প্রধান শিরোনাম",
        subtitle: "সাবটাইটেল",
        titles: "শিরোনাম",
        textLeft: "ধারা 1",
        textRight: "পোস্ট 2",
        color_hint: "* ডিফল্ট রঙে ফিরে যেতে রঙে ডাবল ক্লিক করুন",
        add: "যোগ করুন",
        clear: "মুছে ফেলা",
        personal_information: "ব্যক্তিগত তথ্য",
        social: "সামাজিক",
        languages: "ভাষা",
        hobbies: "শখ",
        education: "শিক্ষা",
        experience: "অভিজ্ঞতা",
        skills: "দক্ষতা",
        projects: "প্রকল্প",
        courses: "পাঠ্যধারাগুলি",
        references: "তথ্যসূত্র",
        social_upper: "সামাজিক",
        languages_upper: "ভাষা",
        hobbies_upper: "শখ",
        education_upper: "শিক্ষা",
        experience_upper: "অভিজ্ঞতা",
        skills_upper: "দক্ষতা",
        projects_upper: "প্রকল্প",
        courses_upper: "পাঠ্যধারাগুলি",
        references_upper: "তথ্যসূত্র",
        name_surname: "নাম উপাধি",
        form_title: "শিরোনাম",
        photo: "আলোকচিত্র",
        address: "ঠিকানা",
        phone_number: "ফোন নম্বর",
        email_address: "ই-মেইল ঠিকানা",
        about: "সম্পর্কিত",
        twitter_username: "টুইটার ব্যবহারকারীর নাম",
        github_username: "Github ব্যবহারকারীর নাম",
        linkedin_username: "লিঙ্কডইন ব্যবহারকারীর নাম",
        personal_website: "ব্যক্তিগত ওয়েব সাইট",
        external_url: "এক্সটার্নাল লিংক",
        username_or_url: "ব্যবহারকারীর নাম বা লিঙ্ক",
        select: "পছন্দ করা",
        language: "ভাষার নাম",
        native: "মাতৃভাষা",
        hobby: "শখের নাম",
        school: "স্কুলের নাম",
        subject: "অধ্যায়",
        degree: "ডিপ্লোমা",
        city: "শহর",
        from: "শুরু তারিখ",
        to: "শেষ তারিখ",
        company: "কোমপানির নাম",
        position: "অবস্থান",
        description: "সংজ্ঞা",
        skill: "দক্ষতা",
        level: "স্তর",
        project: "প্রকল্পের নাম",
        link: "প্রকল্প লিঙ্ক",
        course: "কোর্সের নাম",
        reference: "রেফারেন্স নাম",
        reference_title: "রেফারেন্স শিরোনাম",
        confirm: "আপনি কি নিশ্চিত যে সমস্ত ডেটা মুছে ফেলা হবে?",
        top: "শীর্ষ",
        right: "ডান",
        bottom: "নিম্ন",
        left: "বাম ",
        margin_hint: "* আপনি মুদ্রণ পৃষ্ঠা মার্জিন সামঞ্জস্য করতে পারেন",
      },
    },
    language: "en",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
