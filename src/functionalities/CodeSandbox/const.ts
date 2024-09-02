import { OptionForDropDown } from '../../CustomHooks/useDropdownSelector/useDropdownSelector';

export enum Languages_Sandbox_enum {
  JAVASCRIPT = 'JAVASCRIPT',
  TYPESCRIPT = 'TYPESCRIPT',
}

export const JavascriptOption: OptionForDropDown = {
  name: 'Javascript',
  value: Languages_Sandbox_enum.JAVASCRIPT,
};

export const TypescriptOption: OptionForDropDown = {
  name: 'Typescript',
  value: Languages_Sandbox_enum.TYPESCRIPT,
};

export const Languages_Options = [JavascriptOption, TypescriptOption];

export const LanguagesAvailable = [
  Languages_Sandbox_enum.JAVASCRIPT,
  Languages_Sandbox_enum.TYPESCRIPT,
];

export const initialCodeState = `
function calculateOptimalPrice(a, b, c, d) {
  console.log("Calculating the optimal price for maximum profit.");

  // Derivative of the profit function with respect to price P
  function derivativeOfProfit(P) {
    return a - 2 * b * P - c * b;
  }

  // Use a simple numerical approach to find the price that makes the derivative close to zero
  let currentPrice = 0;
  let step = 0.01;
  let maxIterations = 10000;
  let iteration = 0;
  
  while (Math.abs(derivativeOfProfit(currentPrice)) > 0.001 && iteration < maxIterations) {
    currentPrice += step * Math.sign(derivativeOfProfit(currentPrice));
    iteration++;
  }

  const optimalPrice = currentPrice;
  const optimalQuantity = a - b * optimalPrice;
  const totalCost = c * optimalQuantity + d;
  const totalRevenue = optimalPrice * optimalQuantity;
  const maximumProfit = totalRevenue - totalCost;

  console.log("Optimal price calculated:", optimalPrice);
  console.log("Maximum profit calculated:", maximumProfit);

  // Returning the values through resultCollector
  resultCollector({
    optimalPrice: optimalPrice,
    optimalQuantity: optimalQuantity,
    totalRevenue: totalRevenue,
    totalCost: totalCost,
    maximumProfit: maximumProfit
  });
}

console.log("Starting the computation.");
calculateOptimalPrice(150, 1.5, 50, 200);  // Example constants for the functions
`;
