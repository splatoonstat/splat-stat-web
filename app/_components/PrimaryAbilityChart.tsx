import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  CategoryScale,
  Title,
  Legend,
  Tooltip,
} from "chart.js";
import {
  AbilityData,
  data,
  getAbilityMaster,
  getModeMaster,
  getWeaponMaster,
} from "../data";
import { alpha, modeColorMap } from "../utils";
import {
  LineWithErrorBarsController,
  PointWithErrorBar,
} from "chartjs-chart-error-bars";

ChartJS.register(
  LineWithErrorBarsController,
  PointWithErrorBar,
  LineElement,
  LinearScale,
  CategoryScale,
  Title,
  Legend,
  Tooltip
);

export const PrimaryAbilityChart = ({
  weapon,
  abilityData,
}: {
  weapon: string;
  abilityData: AbilityData;
}) => {
  const bins = data.abilityPointAverage.bins;

  const weaponMaster = getWeaponMaster(weapon);
  const abilityMaster = getAbilityMaster(abilityData.id);

  if (!weaponMaster || !abilityMaster) {
    return null;
  }

  return (
    <Chart
      type="lineWithErrorBars"
      data={{
        labels: bins.map((bin) => bin.label),
        datasets: abilityData.modes.map((mode) => {
          const modeMaster = getModeMaster(mode.id);
          const color = modeColorMap.get(mode.id);

          return {
            label: modeMaster?.name,
            data: mode.data.map((d) => ({
              y: d.mean,
              yMin: d.mean != null && d.ci != null ? d.mean - d.ci : undefined,
              yMax: d.mean != null && d.ci != null ? d.mean + d.ci : undefined,
              samples: d.samples,
              ci: d.ci,
            })),
            fill: false,
            borderColor: alpha(color, 0.8),
            backgroundColor: alpha(color, 0.8),
            errorBarColor: alpha(color, 0.8),
            errorBarWhiskerColor: alpha(color, 0.8),
          };
        }),
      }}
      options={{
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: "Xパワー",
            },
          },
          y: {
            title: {
              display: true,
              text: "ギアパワー平均値 (5.7表記)",
            },
            min: 0,
            max: 1,
          },
        },
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: `${weaponMaster.name}, ${abilityMaster.name}`,
          },
          tooltip: {
            enabled: true,
            callbacks: {
              title: (tooltipItems) => {
                const item = tooltipItems[0];
                return `Xパワー: ${item.label}`;
              },
              label: (tooltipItem) => {
                return tooltipItem.dataset.label;
              },
              afterLabel: (tooltipItem) => {
                const raw = tooltipItem.raw as {
                  samples: number;
                  y: number | null;
                  ci: number | null;
                };

                const ciLabel = raw.ci != null ? `${raw.ci.toFixed(2)}` : "N/A";
                const meanLabel =
                  raw.y != null ? `${raw.y.toFixed(2)} ± ${ciLabel}` : "N/A";

                return [
                  `サンプルサイズ: ${raw.samples}`,
                  `ギアパワー平均: ${meanLabel}`,
                ];
              },
            },
          },
        },
      }}
    />
  );
};
