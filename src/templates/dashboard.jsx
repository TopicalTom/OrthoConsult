// Assets 
import home from "../assets/icons/homealt.svg";
import cases from "../assets/icons/folder.svg";
import resources from "../assets/icons/printer.svg";
import education from "../assets/icons/education.svg";
import legal from "../assets/icons/cases.svg";
import contact from "../assets/icons/message.svg";
import settings from "../assets/icons/settings.svg";
import payment from "../assets/icons/payment.svg";

const dashboard = (props) => {
    const { currentCase, clientCases } = props
    const dynamicLink = clientCases.length > 0 ? `/dashboard/cases/${currentCase}` : "/cases";

    return [
        {
            id: "home",
            name: "home",
            url: "/dashboard",
            icon: home,
        },
        {
            id: "cases",
            name: "cases",
            url: dynamicLink,
            icon: cases,
        },
        {
            id: "payments",
            name: "payments",
            url: "/dashboard/payments",
            icon: payment,
        },
        {
            id: "resources",
            name: "resources",
            url: "/dashboard/resources",
            icon: resources,
        },
        {
            id: "education",
            name: "self study",
            url: "/dashboard/self-study",
            icon: education,
        },
        {
            id: "contact",
            name: "contact",
            url: "/dashboard/contact",
            icon: contact,
        },
        {
            id: "legal",
            name: "legal",
            url: "/dashboard/legal",
            icon: legal,
        },
        {
            id: "settings",
            name: "settings",
            url: "/dashboard/settings",
            icon: settings,
        }
    ]
}
export default dashboard;