// Assets 
import send from '../assets/images/marketingevaluation.png';
import cases from '../assets/images/marketingcases.png';
import study from '../assets/images/marketingstudy.png';
import resources from '../assets/images/marketingresources.png';

const platform = [
    {
        category: "Submit cases",
        details: "Using our custom evaluation form, provide patient details and records.",
        preview: send,
        screen: "Evaluation Form"
    },
    {
        category: "Pay securely",
        details: "Payments are handled by Stripe, a leading provider in secure online payments.",
        preview: resources,
        screen: "Stripe Hosted Invoice"
    },
    {
        category: "Get feedback",
        details: "This is information about this accolade and why people should care.",
        preview: cases,
        screen: "Dashboard, Client Cases"
    },
    {
        category: "And more...",
        details: "This is information about this accolade and why people should care.",
        preview: study,
        screen: "Dashboard, Self Study"
    }
]

export default platform;