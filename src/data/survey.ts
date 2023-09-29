import ncNanoId from "@/utils/ncNanoId";
import * as yup from "yup";

/** ----------------- START Survey TYPES ----------------------- */
export interface SurveyOption {
  id: string;
  label: string;
  value: string;
  defaultChecked: boolean;
}
export interface SurveyQuestion {
  id: string;
  title: string;
  name: string;
  type: "radio" | "checkbox" | "text" | "textarea" | "select" | "customRadio";
  conditional: boolean;
  message?: boolean;
  messageTitle?: string;
  messageBody?: string;
  dependsOn?: string;
  condition?: (response: string) => boolean;
  options: SurveyOption[];
}

export interface SurveyGroupArray {
  id: string;
  title: string;
  grouped?: boolean;
  description?: string;
  questions: SurveyQuestion[][]; // Array of arrays
}
export interface SurveyGroup {
  id: string;
  title: string;
  grouped?: boolean;
  description?: string;
  questions: SurveyQuestion[] | SurveyQuestion[][];
}
export interface Survey {
  title: string;
  description: string;
  longDescription?: string;
  groups: SurveyGroup[];
}
/** ----------------- END Survey TYPES ----------------------- */

/** ----------------- START Survey DATA ----------------------- */

export const surveyData: Survey = {
  title: "Help us match you to the right therapist",
  description: "Complete this questionnaire to help us understand your needs",
  longDescription:
    "Please fill out this short questionnaire to provide some background information about you and the issues you'd like to deal with in therapy. It would help us match you with the most suitable therapist for you. Your answers will also give this therapist a good starting point in getting to know you.",
  groups: [
    {
      id: ncNanoId(),
      title: "Personal Information",
      description: "Tell us a bit about yourself",
      grouped: true,

      questions: [
        [
          {
            id: ncNanoId(),
            title: "Age",
            name: "age",
            type: "select",
            message: true,
            messageTitle: "Did you know?",
            messageBody:
              "Almost a fifth of older adults in the United States have experienced depression. (Geriatric Mental Health Foundation, 2008)",

            conditional: false,
            options: [
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "18-24",
                value: "18-24"
              },
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "25-34",
                value: "25-34"
              },
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "35-44",
                value: "35-44"
              },
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "45-54",
                value: "45-54"
              },
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "55-64",
                value: "55-64"
              },
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "65+",
                value: "65+"
              }
            ]
          }
        ],
        [
          {
            id: ncNanoId(),
            title: "Gender",
            name: "gender",
            type: "radio",
            conditional: false,
            options: [
              {
                id: ncNanoId(),
                label: "Male",
                value: "male",
                defaultChecked: true
              },
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "Female",
                value: "female"
              }
            ]
          },
          {
            id: ncNanoId(),
            title: "Occupation",
            name: "occupation",
            type: "radio",
            conditional: false,
            options: [
              {
                id: ncNanoId(),
                defaultChecked: true,
                label: "Student",
                value: "student"
              },
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "Employee",
                value: "employee"
              },
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "Self Employed",
                value: "self-employed"
              },
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "Unemployed",
                value: "unemployed"
              },
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "Retired",
                value: "retired"
              },
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "Other",
                value: "other"
              }
            ]
          },
          {
            id: ncNanoId(),
            title: "Education",
            name: "education",
            type: "radio",
            conditional: false,
            options: [
              {
                id: ncNanoId(),
                defaultChecked: true,
                label: "High School",
                value: "high-school"
              },
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "Bachelor's degree",
                value: "bachelor-degree"
              },
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "Master's degree",
                value: "master-degree"
              },
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "Doctorate",
                value: "doctorate"
              },
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "Undergraduate",
                value: "undergraduate"
              },
              {
                id: ncNanoId(),
                defaultChecked: false,
                label: "Prefer not to answer",
                value: "none"
              }
            ]
          }
        ]
      ]
    },
    {
      id: ncNanoId(),
      title: "Mental Health",
      description: "Tell us about your mental well-being",
      questions: [
        {
          id: ncNanoId(),
          title: "Have you ever been diagnosed with a mental health disorder?",
          name: "diagnosed",
          type: "customRadio",
          conditional: false,
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Yes",
              value: "yes"
            },
            { id: ncNanoId(), defaultChecked: false, label: "No", value: "no" }
          ]
        },
        {
          id: ncNanoId(),
          title:
            "Have you ever received treatment for a mental health disorder?",
          name: "receivedTreatment",
          type: "customRadio",
          conditional: false,
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Yes",
              value: "yes"
            },
            { id: ncNanoId(), defaultChecked: false, label: "No", value: "no" }
          ]
        },
        {
          id: ncNanoId(),
          title:
            "Are you currently experiencing symptoms of a mental health disorder?",
          type: "customRadio",
          name: "currentSymptoms",
          conditional: false,
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Yes",
              value: "yes"
            },
            { id: ncNanoId(), defaultChecked: false, label: "No", value: "no" }
          ]
        },
        {
          id: ncNanoId(),
          title:
            "How often do you experience symptoms of a mental health disorder?",
          name: "symptomsFrequency",
          type: "customRadio",
          conditional: false,
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Daily",
              value: "daily"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Weekly",
              value: "weekly"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Monthly",
              value: "monthly"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Rarely",
              value: "rarely"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Never",
              value: "never"
            }
          ]
        },
        {
          id: ncNanoId(),
          title: "Have you ever had suicidal thoughts or attempted suicide?",
          name: "suicidalThoughts",
          type: "customRadio",
          conditional: false,
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Yes",
              value: "yes"
            },
            { id: ncNanoId(), defaultChecked: false, label: "No", value: "no" }
          ]
        },
        {
          id: ncNanoId(),
          title: "Have you ever struggled with addiction or substance abuse?",
          name: "struggledAddiction",
          type: "customRadio",
          conditional: false,
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Yes",
              value: "yes"
            },
            { id: ncNanoId(), defaultChecked: false, label: "No", value: "no" }
          ]
        },
        {
          id: ncNanoId(),
          title: "Have you ever experienced trauma or been a victim of abuse?",
          name: "experiencedTrauma",
          type: "customRadio",
          conditional: false,
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Yes",
              value: "yes"
            },
            { id: ncNanoId(), defaultChecked: false, label: "No", value: "no" }
          ]
        },
        {
          id: ncNanoId(),
          title:
            "Have you ever received therapy or counseling for your mental health?",
          name: "receivedTherapy",
          type: "customRadio",
          conditional: false,
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Yes",
              value: "yes"
            },
            { id: ncNanoId(), defaultChecked: false, label: "No", value: "no" }
          ]
        },
        {
          id: ncNanoId(),
          title: "How did you find your therapist/counselor?",
          type: "checkbox",
          name: "foundTherapist",
          conditional: true,
          dependsOn: "receivedTherapy",
          condition: (response: string) => response === "yes",
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Referral from a doctor",
              value: "referral-doctor"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Referral from a friend/family member",
              value: "referral-friend-family"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Online search",
              value: "online-search"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Insurance provider directory",
              value: "insurance-provider"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Other",
              value: "other"
            }
          ]
        },
        {
          id: ncNanoId(),
          title: "What has prevented you from seeking therapy in the past?",
          name: "notSeekingTherapyReasons",
          type: "checkbox",
          conditional: true,
          dependsOn: "receivedTherapy",
          condition: (response: string) => response === "no",
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Cost",
              value: "cost"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Stigma surrounding mental health",
              value: "stigma"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Lack of time",
              value: "lack-of-time"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Difficulty finding a therapist/counselor",
              value: "difficulty-finding"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Other",
              value: "other"
            }
          ]
        }
      ]
    },
    {
      id: ncNanoId(),
      title: "Online Therapy",
      description: "Share your experience with online therapy",
      questions: [
        {
          id: ncNanoId(),
          title: "Have you ever participated in an online therapy session?",
          name: "participatedOnline",
          type: "customRadio",
          conditional: false,
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Yes",
              value: "yes"
            },
            { id: ncNanoId(), defaultChecked: false, label: "No", value: "no" }
          ]
        },
        {
          id: ncNanoId(),
          title: "What was the primary reason for seeking therapy?",
          name: "primaryReason",
          type: "checkbox",
          conditional: true,
          dependsOn: "participatedOnline",
          condition: (response: string) => response === "yes",
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Anxiety",
              value: "anxiety"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Depression",
              value: "depression"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Relationship issues",
              value: "relationship-issues"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Trauma",
              value: "trauma"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Other",
              value: "other"
            }
          ]
        },
        {
          id: ncNanoId(),
          title:
            "What is your preferred method of communication for online therapy sessions?",
          name: "preferredCommunicationMethod",
          type: "checkbox",
          conditional: false,
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Video call",
              value: "video-call"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Voice call",
              value: "voice-call"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Text chat",
              value: "text-chat"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Email",
              value: "email"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Other",
              value: "other"
            }
          ]
        },
        {
          id: ncNanoId(),
          title:
            "How comfortable are you with using technology for online therapy sessions?",
          name: "comfortWithTechnology",

          type: "customRadio",
          conditional: false,
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Very comfortable",
              value: "very-comfortable"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Somewhat comfortable",
              value: "somewhat-comfortable"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Neutral",
              value: "neutral"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Somewhat uncomfortable",
              value: "somewhat-uncomfortable"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Very uncomfortable",
              value: "very-uncomfortable"
            }
          ]
        }
      ]
    }
  ]
};

export const surveySimple: Survey = {
  title: "Help us match you to the right therapist",
  description: "Complete this questionnaire to help us understand your needs",
  longDescription:
    "Please fill out this short questionnaire to provide some background information about you and the issues you'd like to deal with in therapy. It would help us match you with the most suitable therapist for you. Your answers will also give this therapist a good starting point in getting to know you.",
  groups: [
    {
      id: ncNanoId(),
      title: "Mental Health",
      description: "Tell us about your mental well-being",
      questions: [
        {
          id: ncNanoId(),
          title: "5 Have you ever had suicidal thoughts or attempted suicide?",
          name: "suicidalThoughts",
          type: "customRadio",
          conditional: false,
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Yes",
              value: "yes"
            },
            { id: ncNanoId(), defaultChecked: false, label: "No", value: "no" }
          ]
        },
        {
          id: ncNanoId(),
          title: "6 Have you ever struggled with addiction or substance abuse?",
          name: "struggledAddiction",
          type: "customRadio",
          conditional: false,
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Yes",
              value: "yes"
            },
            { id: ncNanoId(), defaultChecked: false, label: "No", value: "no" }
          ]
        },
        {
          id: ncNanoId(),
          title:
            "7 Have you ever experienced trauma or been a victim of abuse?",
          name: "experiencedTrauma",
          type: "customRadio",
          conditional: false,
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Yes",
              value: "yes"
            },
            { id: ncNanoId(), defaultChecked: false, label: "No", value: "no" }
          ]
        },
        {
          id: ncNanoId(),
          title:
            "8&& Have you ever received therapy or counseling for your mental health?",
          name: "receivedTherapy",
          type: "customRadio",
          conditional: false,
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Yes",
              value: "yes"
            },
            { id: ncNanoId(), defaultChecked: false, label: "No", value: "no" }
          ]
        },
        {
          id: ncNanoId(),
          title: " 9@yes How did you find your therapist/counselor?",
          type: "checkbox",
          name: "foundTherapist",
          conditional: true,
          dependsOn: "receivedTherapy",
          condition: (response: string) => response === "yes",
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Referral from a doctor",
              value: "referral-doctor"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Referral from a friend/family member",
              value: "referral-friend-family"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Online search",
              value: "online-search"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Insurance provider directory",
              value: "insurance-provider"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Other",
              value: "other"
            }
          ]
        },
        {
          id: ncNanoId(),
          title:
            "10@no What has prevented you from seeking therapy in the past?",
          name: "notSeekingTherapyReasons",
          type: "checkbox",
          conditional: true,
          dependsOn: "receivedTherapy",
          condition: (response: string) => response === "no",
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Cost",
              value: "cost"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Stigma surrounding mental health",
              value: "stigma"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Lack of time",
              value: "lack-of-time"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Difficulty finding a therapist/counselor",
              value: "difficulty-finding"
            },
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Other",
              value: "other"
            }
          ]
        },
        {
          id: ncNanoId(),
          title:
            "11! Have you ever received therapy or counseling for your mental health?",
          name: "receivedTherapy",
          type: "customRadio",
          conditional: false,
          options: [
            {
              id: ncNanoId(),
              defaultChecked: false,
              label: "Yes",
              value: "yes"
            },
            { id: ncNanoId(), defaultChecked: false, label: "No", value: "no" }
          ]
        }
      ]
    }
  ]
};
/** ----------------- END Survey DATA ----------------------- */

/** ----------------- START Survey Form ----------------------- */
export type SurveyStateProps = {
  // Personal Information
  gender?: string;
  occupation?: string;
  education?: string;
  age?: string;

  // Mental Health
  diagnosed?: string;
  receivedTreatment?: string;
  currentSymptoms?: string;
  symptomsFrequency?: string;
  suicidalThoughts?: string;
  struggledAddiction?: string;
  experiencedTrauma?: string;
  receivedTherapy?: string;
  foundTherapist?: string[];
  notSeekingTherapyReasons?: string[];

  // Online Therapy
  participatedOnline?: string;
  primaryReason?: string[];
  preferredCommunicationMethod?: string[];
  comfortWithTechnology?: string;
};

export const initialFormState = {
  // Personal Information
  gender: "male",
  occupation: "student",
  education: "high-school",
  age: "",

  // Mental Health
  diagnosed: "",
  receivedTreatment: "",
  currentSymptoms: "",
  symptomsFrequency: "",
  suicidalThoughts: "",
  struggledAddiction: "",
  experiencedTrauma: "",
  receivedTherapy: "",
  foundTherapist: [],
  notSeekingTherapyReasons: [],

  // Online Therapy
  participatedOnline: "",
  primaryReason: [],
  preferredCommunicationMethod: [],
  comfortWithTechnology: ""
};

export const surveySchema = yup
  .object()
  .shape({
    age: yup.string().required("Age is required"),
    gender: yup.string().required("Gender is required"),
    occupation: yup.string().required("Occupation is required"),
    education: yup.string().required("Education is required"),
    diagnosed: yup.string().required("This question is required"),
    receivedTreatment: yup.string().required("This question is required"),
    currentSymptoms: yup.string().required("This question is required"),
    symptomsFrequency: yup.string().required("This question is required"),
    suicidalThoughts: yup.string().required("This question is required"),
    struggledAddiction: yup.string().required("This question is required"),
    experiencedTrauma: yup.string().required("This question is required"),
    receivedTherapy: yup.string().required("This question is required"),
    foundTherapist: yup
      .array(yup.string().required())
      .min(1, "Select at least one option"),
    notSeekingTherapyReasons: yup
      .array(yup.string().required())
      .min(1, "Select at least one option"),
    participatedOnline: yup.string().required("This question is required"),
    primaryReason: yup
      .array(yup.string().required())
      .min(1, "Select at least one option"),
    preferredCommunicationMethod: yup
      .array(yup.string().required())
      .min(1, "Select at least one option"),
    comfortWithTechnology: yup.string().required("This question is required")
  })
  .required();

/** ----------------- END Survey Form ----------------------- */
