import type {GoalSettings} from "./types";
export const money=(v:number,s:GoalSettings)=>new Intl.NumberFormat("en-US",{style:"currency",currency:s.currency,maximumFractionDigits:0}).format(s.currency==="TWD"?v*s.usdTwdRate:v);
export const pct=(v:number)=>Number.isFinite(v)?`${(v*100).toFixed(1)}%`:"N/A";
export const num=(v:number)=>Number.isFinite(v)?new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(v):"N/A";
export const price=(v:number)=>Number.isFinite(v)?v.toFixed(2):"N/A";
