const categories = [
  {
    id: 1,
    name: "Main components of a form",
    rules: [
      {
        // Rule 1
        id: 1,
        name: "Greet your respondents with a title and an introduction",
        shortMessage: "Consider adding a a header and a subheader...",
        longMessage:
          "Your title is the shortest and most accurate description of what’s to come. Users tend to skim a form’s content, and hardly any will read a detailed description carefully. That’s why it’s so crucial to capture a form’s purpose in as few words as possible. The title can be followed by a brief description of what the respondent can expect from the form. Keep this as neutral as possible: you want to make sure that your respondents answer honestly, rather than trying to meet your expectations. Even something as simple as outlining a goal may unwittingly coax your respondent into trying to achieve that goal.",
      },
      // Rule 2
      { id: 2, name: "Place related headers and subheaders" },
      // Rule 4
      {
        id: 3,
        name: "Decide whether you’ll use multi-page or single page form",
        shortMessage: "Consider dividing your form into multiple pages...",
        longMessage:
          "If there are only one or two topics, a single page form is your best bet. But if a form has multiple sections, multiple pages are required to break up the conversation. Think about first impressions: a user is likely to feel intimidated if faced with a one-page form containing (what looks like) hundreds of fields.",
      },
      // Rule 6
      {
        id: 4,
        name: "Identify your form fields",
        shortMessage: "Consider using a single choice element...",
        longMessage:
          "Where possible, use checkboxes and radio buttons rather than dropdowns, as they require less cognitive load to process. As Luke Wroblewski once remarked: “dropdowns should be the UI of last resort.",
      },
      // Rule 7
      {
        id: 6,
        name: "Never forget “Thanks” page",
        shortMessage: "Consider thanking your respondents...",
        longMessage:
          "Remember your respondents are humans that have given you some of their time. So don’t finish abruptly – always say thank you.",
      },
    ],
  },
  {
    id: 2,
    name: "How to write so people will listen",
    rules: [
      {
        // Rule 10
        id: 1,
        name: "Eliminate passive sentences",
        shortMessage: "Consider eliminating passive sentences...",
        longMessage:
          "Writing packs more of a punch when it’s active (John wrote a letter of complaint), not passive (A letter of complaint was written by John). Passive writing tends to be lengthier and less focused.",
      },
      // Rule 12
      {
        id: 3,
        name: "Use contracted versions of words",
        shortMessage: "Consider using contracted versions of words...",
        longMessage:
          "Using contracted versions of words (e.g. can’t, isn’t) instead of their serious, full-formed alternatives (cannot, is not)) keeps writing light, friendly and conversational. Plus, you save space. And good forms are always spacious. What’s > what is. Simple.",
      },
    ],
  },
  {
    id: 3,
    name: "The psychology of forms",
    rules: [
      // Rule 22
      {
        id: 6,
        name: "Consider the colors",
        shortMessage: "Consider using contrasting font and form colors...",
        longMessage:
          "Color contrast is a common web accessibility issue that is often overlooked. People who may have low vision, or may be colorblind, could encounter some difficulty distinguishing text from a background color if the contrast is insufficient. There are nearly three times more individuals with low vision than those with total blindness; and one out of twelve people has some sort of color deficiency. So, it is critical to consider adequate contrast between text and backgrounds.",
      },
    ],
  },
  {
    id: 4,
    name: "Questions, answers and grouping",
    rules: [
      {
        // Rule 30
        id: 1,
        name: "Ask one thing at a time",
        shortMessage: "Consider asking one thing at a time...",
        longMessage:
          "Double-barrelled questions lead to ambiguity. And – you guessed it – ambiguous answers can’t be quantified. Avoid the pitfall of meandering questions by scanning them for the words ‘and/’or.’ Seen one? Cleave the question in half.The clearer the question, the clearer the answer. The clearer the answer, the clearer the data.",
      },
      {
        // Rule 31
        id: 2,
        name: "Give shortcuts: Field label",
        shortMessage: "Consider using a field label...",
        longMessage:
          "A field label is the question text that sits above the field. These should always be present and shouldn’t be replaced with placeholders. It’s tempting to free up space by making placeholder text double up as a label, but this causes many usability issues.",
      },
    ],
  },
  {
    id: 5,
    name: "Form visuals and structure",
    rules: [
      {
        // Rule 36 (modified)
        id: 1,
        name: "Use the predefined form element",
        shortMessage: "Consider using the predefined form element...",
        longMessage:
          "Jotform already has an element specific to your question type.",
      },
    ],
  },
  {
    id: 6,
    name: "All about payment forms",
    rules: [
      {
        // Rule 46 (modified)
        id: 2,
        name: "Use pictures of your products",
        shortMessage: "Consider using pictures of your products...",
        longMessage:
          "Your images represent your product's perceived value and quality. They speak directly to your target audience, making your product page and content more relatable.",
      },
    ],
  },
];

//export default categories;
