import React from "react";
import { Chart } from "react-charts";

export default function Bar() {


  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
        <Chart
          options={{
            primaryAxis,
            secondaryAxes,
          }}
        />
  );
}
