import { ref } from "vue";

import { GameStatus, Potion } from "../../shared/GameDefs";
import { index } from "../../shared/ModelDefs";
import { characterAct } from "../http/action";
import { showDialog } from "./dialog";
import { gameStatus } from "./game";

export async function act() {
  if (
    potion.value === "POISON" &&
    gameStatus.value === GameStatus.WITCH_ACT
  )
    target.value *= -1;

  const res = (await characterAct({
    target: target.value,
  })) as any; // TODO any?
  // TODO deal with res

  /* hide dialog */
  isActing.value = false;

  if (res && res.status === 200) {
    showDialog("操作成功!");
  }
  /* reset */
  potion.value = undefined;
  target.value = 0;
  noTarget.value = false;
}

export const isActing = ref(false);
export const noTarget = ref(false);
export const target = ref<index>(0);
export const potion = ref<Potion>();

export function setTarget(index: index) {
  if (!isActing.value) return;

  target.value = index;
}
