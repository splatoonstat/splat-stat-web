import { theme } from "@chakra-ui/react";

export const modeColorMap = new Map([
  ["area", theme.colors.green[500]],
  ["yagura", theme.colors.blue[500]],
  ["hoko", theme.colors.yellow[500]],
  ["asari", theme.colors.red[500]],
]);

export const alpha = (color: string | undefined, alpha: number) => {
  if (!color) {
    return undefined;
  }

  return `${color}${Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0")}`;
};

export const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString("ja-JP");
};
