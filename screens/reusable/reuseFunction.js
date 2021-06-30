import COLORS from "../../styles/colors";
import { monthNames, weekday } from "../components/Constant";

// get icon color, return a color
export function getIconColor(mood) {
  let color = COLORS.primary;
  if (mood.includes("angry")) color = COLORS.fourth;
  if (mood.includes("meh")) color = COLORS.third;
  if (mood.includes("sad")) color = COLORS.fifth;
  if (mood.includes("tears") || mood.includes("tongue"))
    color = COLORS.secondary;
  return color;
}

// get current date in format [Monday 23 July]
const d = new Date();
export const getCurrentdate =
  weekday[d.getDay()] + " " + d.getDate() + " " + monthNames[d.getMonth()];
