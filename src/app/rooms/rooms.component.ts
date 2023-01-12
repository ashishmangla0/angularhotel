import { Component } from '@angular/core';
import { Room,RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hideRooms =  false
toggle(){
  this.hideRooms = !this.hideRooms;
}

rooms : Room ={
availableRooms : 10,
totleRooms: 20,
bookedRooms: 10
}
//availableRoomsNew = this.rooms?.availableRooms

roomList : RoomList[] = [
  {
  roomType: 'Deluxe Room',
  amenities: 'AC, Free Wi-Fi, TV,BathRoom',
  price: 500,

},
{
  roomType: 'Deluxe Room',
  amenities: 'AC, Free Wi-Fi, TV,BathRoom',
  price: 1000,

}


]



}
