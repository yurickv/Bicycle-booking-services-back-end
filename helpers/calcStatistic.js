const analyzeBikeData = (bikeArray) => {
  const totalObjects = bikeArray.length;

  const availableCount = bikeArray.filter(
    (bike) => bike.status === "Available"
  ).length;

  const busyCount = bikeArray.filter((bike) => bike.status === "Busy").length;

  const totalPrices = bikeArray.reduce(
    (sum, bike) => sum + parseFloat(bike.price),
    0
  );
  const averagePrice = (totalPrices / totalObjects).toFixed(2);

  return {
    totalObjects,
    availableCount,
    busyCount,
    averagePrice,
  };
};
module.exports = analyzeBikeData;
