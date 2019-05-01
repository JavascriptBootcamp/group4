import { Guid } from "guid-typescript";
 
export interface Author {
    ID: Guid,
    name:string,
    profilePicture: string,
    profileFacebookUrl: string,
    description: string
}
