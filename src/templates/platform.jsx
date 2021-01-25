// Assets 
import send from '../assets/images/marketingevaluation.png';
import cases from '../assets/images/marketingcases.png';
import study from '../assets/images/marketingstudy.png';
import resources from '../assets/images/marketingresources.png';

const platform = [
    {
        category: "Submit cases",
        details: "Using our custom evaluation form, provide patient details and records.",
        video: send,
        screen: "Evaluation form"
    },
    {
        category: "Pay securely",
        details: "Payments are handled by Stripe, a leading provider in secure online payments.",
        video: cases,
        screen: "Stripe checkout screen"
    },
    {
        category: "Review records",
        details: "This is information about this accolade and why people should care.",
        video: study,
        screen: "Dashboard, Client Cases"
    },
    {
        category: "Get feedback",
        details: "This is information about this accolade and why people should care.",
        video: resources,
        screen: "Personal Email"
    }
]

export default platform;