# Personal Carbon Calculator

[<img src="https://user-images.githubusercontent.com/5446734/198258385-8348272b-a6af-40d8-b9a2-b2aa3ff51be4.png" width="640" />]()

## Intro

The goal of this calculator is to provide a rough but useful carbon footprint calculation based on simple lifestyle data points. Inputs are in consumption units instead of equivalent dollars due to high variability in utility/raw material costs. Utility statements commonly have consumption numbers and payment due figures in tandem. Output will always be kg CO<sub>2</sub>e/yr.

In addition, the calculator will demonstrate the relative decrease in CO<sub>2</sub> emissions when implementing various different measures. We will assume a zip code of 94114 for certain EFs used. Some carbon-generating categories are omitted in the interest of time. 

## Build and Run

<code>npm i</code>

<code>npm run build</code>

<code>npm run node:dev</code>

## Design Process
1. Intake requirements and parameters, such as scope, time and resource constraints, tech stack, etc.
2. Exercise user empathy. What data would a typical American individual have easy access to, and how can we transform that data into useful insights? What insights would users care about?
3. Define web app's goals, features, and wireframe to accomplish the aforementioned point.
4. Research and organize necessary values for carbon emission calculations.
5. Build :^)

## Housing
### Electricity
- CAMX CO<sub>2</sub> Factor: 496.5 lb CO<sub>2</sub>e/MWh
- Input: kWh/mo
- Output: E = N (kWh/mo) * 0.001 (MWh/kWh) * 12 (mo/yr) * EF (lb CO<sub>2</sub>e/MWh) * 1/2.205 (kg/lb)
- Offsets:
  - LED lighting instead of incandescent: 20% household electricity is lighting. LEDs use 1/30 the energy as incandescents. This is equivalent to E * (121/150)

### Natural Gas
- EF: 6.6 kg CO<sub>2</sub>e/therm
- Input: therm/mo
- Output: N (therm/mo) * 12 (mo/yr) * EF (kg CO<sub>2</sub>e/therm)

### Fuel Oil
- EF: 11.6 kg CO<sub>2</sub>e/US gallon
- Input: US gallon/mo
- Output: N (US gallon/mo) * 12 (mo/yr) * EF (kg CO<sub>2</sub>e/US gallon)

### Liquid Petroleum Gas (Propane)
- EF: 6.8 kg CO<sub>2</sub>e/US gallon
- Input: US gallon/mo
- Output: N (US gallon/mo) * 12 (mo/yr) * EF (kg CO<sub>2</sub>e/US gallon)

### Waste (MSW)
- 692 lb CO<sub>2</sub>e/yr per resident
- Input: number of residents
- Output: N (number of residents) * EF (lb CO<sub>2</sub>e/yr per resident) * 1/2.205 (kg/lb)
- Offsets:
  - Composting: 69.5% of waste can be composted. Composted waste has 10.294% the emissions compared to landfilled waste. This brings emissions down to 211.06 + 49.5 = 260.56 CO<sub>2</sub>e/yr per resident

### Water
- EF: 5875 kWh/MG then use CAMX CO<sub>2</sub> factor
- Input: US gallon/mo
- Output: N (US gallon/mo) * 1/1000000 (MG/US gallon) * EF (kWh/MG) * E (electricity emissions function)

## Travel
- Output: N (miles/yr) * EF (kg CO<sub>2</sub>e/mile)

### Vehicle
- EF for passenger car: 0.335 kg CO<sub>2</sub>e/mile
- Input: vehicle-miles/yr

### Bus
- EF: 0.053 kg CO<sub>2</sub>e/mile
- Input: passenger-miles/yr

### Metro
- EF for transit rail: 0.099 kg CO<sub>2</sub>e/mile
- Input: passenger-miles/yr

### Taxi
- EF for passenger car: 0.335 kg CO<sub>2</sub>e/mile
- Input: passenger-miles/yr

### Rail
- EF for commuter rail: 0.148 kg CO<sub>2</sub>e/mile
- Input: passenger-miles/yr

### Flying
- EF average for various flight lengths: 0.174 kg CO<sub>2</sub>e/mile
- Input: passenger-miles/yr

## References
- https://www3.epa.gov/carbon-footprint-calculator/
- http://leansixsigmaenvironment.org/index.php/how-much-impact-does-one-gallon-of-water-in-your-home-or-business-have-on-the-environment/
- https://energy-shrink.com/home-composting-impact-2/
- https://exclusive.multibriefs.com/content/the-environmental-benefits-of-led-lighting/facilities-grounds
