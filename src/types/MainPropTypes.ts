import UsageValuesTypes from './UsageValuesType'
import EmissionsType from './EmissionsType'

interface MainPropTypes {
  usageValues: UsageValuesTypes
  setUsageValues: Function
  emissions: EmissionsType
  setEmissions: Function
}

export default MainPropTypes
