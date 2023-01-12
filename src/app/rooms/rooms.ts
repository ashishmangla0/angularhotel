import { Data } from "@angular/router";

export interface Room{
    availableRooms?: number;
    totleRooms?: number;
    bookedRooms?: number;
}
export interface RoomList{
    roomType: string;
    amenities: string;
    price:number;
    photo?:number;
    checkinTime?: Data;
    checkoutTime?: Data;
}