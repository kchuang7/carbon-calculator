function getEmissionsElectricity (monthlyElectricityUsage: number): number {
  return monthlyElectricityUsage * 0.001 * 12 * 496.5 * (1 / 2.205)
}

export default {
  getEmissionsElectricity,
  getEmissionsNaturalGas: (monthlyNaturalGasUsage: number): number => {
    return monthlyNaturalGasUsage * 12 * 6.6
  },
  getEmissionsFuelOil: (monthlyFuelOilUsage: number): number => {
    return monthlyFuelOilUsage * 12 * 11.6
  },
  getEmissionsLfg: (monthlyLfgUsage: number): number => {
    return monthlyLfgUsage * 12 * 6.8
  },
  getEmissionsWaste: (numResidents: number): number => {
    return numResidents * 692 * (1 / 2.205)
  },
  getEmissionsWater: (monthlyWaterUsage: number): number => {
    return getEmissionsElectricity(monthlyWaterUsage * (1 / 1000000) * 5875)
  }
}
