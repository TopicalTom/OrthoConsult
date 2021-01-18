// Assets
import home from "../assets/icons/homealt.svg";
import cases from "../assets/icons/folder.svg";
import resources from "../assets/icons/printer.svg";
import education from "../assets/icons/education.svg";
import account from "../assets/icons/user.svg";
import contract from "../assets/icons/cases.svg";
import contact from "../assets/icons/message.svg";
import settings from "../assets/icons/settings.svg";
import payment from "../assets/icons/payment.svg";

const dashboard = [
    {
        id: "home",
        name: "Home",
        url: "/dashboard",
        icon: home,
    },
    {
        id: "cases",
        name: "Cases",
        url: "/dashboard/cases/",
        icon: cases,
    },
    {
        id: "resources",
        name: "Resources",
        url: "/dashboard/resources",
        icon: resources,
    },
    {
        id: "education",
        name: "Self Study",
        url: "/dashboard/education",
        icon: education,
    },
    {
        id: "contact",
        name: "Contact",
        url: "/dashboard/contact",
        icon: contact,
    },
    {
        id: "account",
        name: "Account",
        url: "/dashboard/account",
        icon: account,
    },
    {
        id: "payments",
        name: "Payments",
        url: "/dashboard/payments",
        icon: payment,
    },
    {
        id: "legal",
        name: "Legal",
        url: "/dashboard/legal",
        icon: contract,
    },
    {
        id: "settings",
        name: "Settings",
        url: "/dashboard/settings",
        icon: settings,
    }
]

export default dashboard;