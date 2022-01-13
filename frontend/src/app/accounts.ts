export interface Account {
    accountId: number,
    createdAt: string,
    id: number,
    owner: string,
    published: boolean,
    revenue: number, 
    spend: number,
    title: string,
    updatedAt: string,
    views: number
}

export class Accounts implements Account {
    accountId: number;
    createdAt: string;
    id: number;
    owner: string;
    published: boolean;
    revenue: number;
    spend: number;
    title: string;
    updatedAt: string;
    views: number


    constructor() {
        this.accountId = null;
        this.createdAt = "";
        this.id = null;
        this.owner = "";
        this.published = false;
        this.revenue = null;
        this.spend = null;
        this.title = "";
        this.updatedAt = "";
        this.views = null;
    }
}