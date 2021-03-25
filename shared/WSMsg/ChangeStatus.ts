import { day, ID, PublicPlayerModel } from "../models";
import { GameState, Potion } from "../defines";

export interface ChangeStatusMsg {
  day: day; // 当前天数
  setStatus: GameState;
  publicMsg: PublicMsg;
  curPlayerStatus: PublicPlayerModel[];
}

type PublicMsg = VoteMsg | DayMsg;

export interface DayMsg {
  die?: ID;
}

export interface VoteMsg {
  choices: ID[]; // 被投票的玩家 id
  for: "SHERIFF" | "EXILE";
}

export interface WitchMsg {
  die?: ID;
  potionLeft: Potion[];
}

export interface GuardMsg {
  lastNight?: ID;
}
