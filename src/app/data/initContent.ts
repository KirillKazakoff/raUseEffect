export type DetailsType = {
    id: number;
    name: string;
    avatar: string;
    details: {
        city: string;
        company: string;
        position: string;
    };
};

export type UserType = {
    id: number;
    name: string;
};

export const initDetails = [
    {
        id: 1,
        name: 'Dorthy McClure Sr.',
        avatar: 'https://i.pravatar.cc/300',
        details: {
            city: 'Huston',
            company: 'Hilll LLC',
            position: 'Regional Identity Supervisor',
        },
    },
    {
        id: 2,
        name: 'Dorthy McClure Sr.',
        avatar: 'https://i.pravatar.cc/300',
        details: {
            city: 'Beky',
            company: 'Hilll LLC',
            position: 'Regional Identity Supervisor',
        },
    },
    {
        id: 3,
        name: 'Dorthy McClure Sr.',
        avatar: 'https://i.pravatar.cc/300',
        details: {
            city: 'Koky',
            company: 'Hilll LLC',
            position: 'Regional Identity Supervisor',
        },
    },
    {
        id: 4,
        name: 'Dorthy McClure Sr.',
        avatar: 'https://i.pravatar.cc/341',
        details: {
            city: 'Sipes',
            company: 'Hilll LLC',
            position: 'Regional Identity Supervisor',
        },
    },
    {
        id: 5,
        name: 'Dorthy McClure Sr.',
        avatar: 'https://i.pravatar.cc/300',
        details: {
            city: 't',
            company: 'Hilll LLC',
            position: 'Regional Identity Supervisor',
        },
    },
    {
        id: 6,
        name: 'Dorthy McClure Sr.',
        avatar: 'https://i.pravatar.cc/300',
        details: {
            city: 'Sit',
            company: 'Hilll LLC',
            position: 'Regional Identity Supervisor',
        },
    },
];

export const initUsers = [
    {
        id: 1,
        name: 'Dorthy McClure Sr.',
    },
    {
        id: 2,
        name: 'Kyleigh Ortiz',
    },
    {
        id: 3,
        name: 'Delia Halvorson',
    },
    {
        id: 4,
        name: 'Kelvin Harvey',
    },
];
