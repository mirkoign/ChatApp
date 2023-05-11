export interface User {
    id: string;
    firstName: string;
    lastName: string;
};

export interface Member {
    id: string;
    authData?: object;
    clientData?: User
};

export interface MessageEvent {
    data: string;
    id: string;
    timestamp: number;
    clientId: string;
    member: Member;
};