export type Position={id:string;ticker:string;name?:string;shares:number;averageCost:number;currentPrice:number;targetPrice:number;marginDebt:number;marginRate:number;holdingYears:number;maintenanceRequirement:number;category?:string;note?:string};
export type Scenario={id:string;name:string;prices:Record<string,number>};
export type GoalSettings={targetNetWorth:number;selectedScenarioId:string;selectedTickerForReverse:string;allowMarginForAdditionalShares:boolean;additionalMarginRatio:number;currency:"USD"|"TWD";usdTwdRate:number};
export type RiskStatus="No Margin"|"Safe"|"Warning"|"Danger";
export type PortfolioSummary={currentGrossValue:number;currentNetValue:number;futureGrossValue:number;totalMarginDebt:number;totalEstimatedInterest:number;futureNetValue:number;goalProgress?:number;portfolioRisk:"Low"|"Medium"|"High"};
export type GoalReverseResult={targetNetWorth:number;futureNetWorth:number;shortfall:number;isGoalReached:boolean;selectedTicker:string;selectedTickerCurrentPrice:number;selectedTickerTargetPrice:number;additionalSharesNeeded:number;additionalPurchaseValue:number;additionalCashNeeded:number;additionalDebt:number;projectedFutureNetWorthAfterAdding:number};
export type StressTestResult={ticker:string;dropPercentage:number;priceAfterDrop:number;marketValue:number;equity:number;equityRatio:number|null;riskStatus:RiskStatus};
