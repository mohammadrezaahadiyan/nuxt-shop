export interface UserDTo {
    id:number,
    creationDate:Date,
    name:string,
    family:string,
    phoneNumber:string,
    email:string,
    password:string,
    avatarName:string
    isActive:boolean,
    gender:Gender,
    roles:Role[]
}

export enum Gender {
    نامشخص,
    آقا,
    حانم
}

export interface Role {
    roleId:number,
    roleTitle:string
}