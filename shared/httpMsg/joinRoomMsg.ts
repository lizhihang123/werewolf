import { ID, index } from "../models";
import { Character } from "../defines";

export interface JoinRoomRequest {
  name: string; // 昵称
  password: string; // 哈希过的密码
  roomNumber: string; // 六位房间号
}

export interface JoinRoomResponse {
  ID: ID; // token
  index: index;
  total: number; // 总共有多少人
  needingCharacters: Character[]; // 设置的人物
}
