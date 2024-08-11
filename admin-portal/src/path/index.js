//Auth
export const LoginPath = "/login";
//UserManagement
export const UserManagementAddPath = "/users/add";

export const path = {
    LIST: () => `/${title}/list`,
    ADD: (title) => `/${title}/add`,
    EDIT: (title, id) => `/${title}/edit/${id}`,
    VIEW: (title, id) => `/${title}/view/${id}`,
    DELETE: (title, id) => `/${title}/delete/${id}`,
};
