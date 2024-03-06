import { ILink } from "./honorary-member-list/link";

export interface IHonoraryMember {
    id: number;
    name: string;
    organization: string;
    description: string;
    dateOfBirth: string;
    dateOfDeath: string;
    imageUrl: string;
    links: ILink[];
}
