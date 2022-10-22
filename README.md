# Personal Carbon Calculator

The goal of this calculator is to provide a rough but useful carbon footprint calculation based on simple lifestyle data points. Inputs are in consumption units instead of equivalent dollars due to high variability in utility/raw material costs. Utility statements commonly have consumption numbers and payment due figures in tandem.

In addition, the calculator will demonstrate the relative decrease in CO~2~ emissions when implementing various different measures. We will assume a zip code of 94114 for certain EFs used. Some carbon-generating categories are omitted in the interest of time. 

## Design Process
1. Intake requirements and parameters, such as scope, time and resource constraints, tech stack, etc.
2. Exercise user empathy. What data would a typical American individual have easy access to, and how can we transform that data into useful insights? What insights would users care about?
3. Define web app's goals, features, and wireframe to accomplish the aforementioned point.
4. Research and organize necessary values for carbon emission calculations.
5. Build :^)

## Housing
### Electricity
- CAMX CO~2~ Factor: 496.5 lb CO~2~e/MWh
- Input: kWh/mo
- Offsets: 
  - LED lighting instead of incandescent: 20% household electricity is lighting. LEDs use 1/30 the energy as incandescents.
  - ENERGY STAR Refrigerator: 197 lb CO~2~e/yr reduction
  - ENERGY STAR Windows: 4531 lb CO~2~e/yr reduction

### Natural Gas
- EF: 6.6 kg CO~2~e/therm
- Input: therm/mo

### Fuel Oil
- EF: 11.6 CO~2~e/US gallon
- Input: US gallon/mo

### Liquid Petroleum Gas (Propane)
- EF: 6.8 CO~2~e/US gallon
- Input: US gallon/mo

### Waste (MSW)
- 692 lb CO~2~e/yr per resident
- Input: number of residents
- Offsets:
  - Composting: 69.5% of waste can be composted. Composted waste has 10.294% the emissions compared to landfilled waste. This brings emissions down to 211.06 + 49.5 = 260.56 CO~2~e/yr per resident

### Water
- EF: 5875 kWh/MG then use CAMX CO~2~ factor
- Input: US gallon/mo

## Travel
### Vehicle

### Bus

### Metro

### Taxi

### Rail

### Flying

## References
- https://www3.epa.gov/carbon-footprint-calculator/
- http://leansixsigmaenvironment.org/index.php/how-much-impact-does-one-gallon-of-water-in-your-home-or-business-have-on-the-environment/
- https://energy-shrink.com/home-composting-impact-2/
- https://exclusive.multibriefs.com/content/the-environmental-benefits-of-led-lighting/facilities-grounds
