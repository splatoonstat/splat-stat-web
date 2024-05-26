import { useBreakpointValue } from "@chakra-ui/react";

export const useChartGrid = () => {
  const columns = useBreakpointValue({
    base: 1,
    sm: 1,
    md: 1,
    lg: 2,
    xl: 2,
    "2xl": 3,
  });
  const ratio = useBreakpointValue({
    base: 1.1,
    sm: 1.3,
    md: 1.5,
    lg: 1.3,
    xl: 1.5,
    "2xl": 1.3,
  });

  return {
    columns,
    ratio,
  };
};
