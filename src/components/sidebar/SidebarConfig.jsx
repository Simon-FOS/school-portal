export const sidebarConfig = {
    student: [
        {
            label: "Dashboard",
            path: "/student",
            icon: "fa-house",
        },
        {
            label: "My Results",
            path: "/student/results",
            icon: "fa-file-lines",
        },
        {
            label: "Profile",
            path: "/student/profile",
            icon: "fa-user",
        },
    ],

    staff: [
        {
            label: "Dashboard",
            path: "/staff",
            icon: "fa-house",
        },
        {
            label: "Enter Results",
            path: "/staff/results",
            icon: "fa-pen-to-square",
        },
        {
            label: "Students",
            path: "/staff/students",
            icon: "fa-users",
        },
    ],

    admin: [
        {
            label: "Dashboard",
            path: "/admin",
            icon: "fa-house",
        },
        {
            label: "Manage Staff",
            path: "/admin/staff",
            icon: "fa-user-tie",
        },
        {
            label: "Manage Students",
            path: "/admin/students",
            icon: "fa-user-graduate",
        },
        {
            label: "System Settings",
            path: "/admin/settings",
            icon: "fa-gear",
        },
    ],
};
