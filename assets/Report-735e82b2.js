import{aA as c,aB as d,ay as a,j as t,Z as n,az as u}from"./index-85a2891c.js";const{Title:p,Text:l,Paragraph:m}=u,h=()=>{const i=c(),{documentInfo:e}=d(),o=[{title:"Remortgage broker fee",value:"£"+e.brokerFee},{title:"Current Lender",value:e.lender},{title:"Mortgage Parts",value:e.subAccounts},{title:"Repayment type",value:e.repayment},{title:"Current balance",value:e.balance},{title:"Remaining term in months",value:e.terms},{title:"Index valuation",value:"£"+e.valuationIndex},{title:"Remortgage valuation",value:"£"+e.remortgageValuation},{title:"Product type",value:e.productType},{title:"Initial Period",value:e.initialPeriod+" years"},{title:"Start date",value:e.startDate},{title:"Exit fee",value:"£"+e.exitFee}],s=()=>{i("/pdf-report")};return localStorage.setItem("report",JSON.stringify(o)),a("div",{className:"report-container",children:[a("div",{className:"report-header",children:[t(p,{level:3,children:"Thank you!"}),t(m,{children:"Please, check out provided information:"})]}),o.map(r=>a("div",{className:"report-item-wrapper",children:[t("div",{className:"title",children:t(l,{children:r.title})}),t("div",{className:"response",children:t(l,{children:r.value})})]},r.title)),a("div",{className:"report-footer",children:[t(l,{children:"Your comparison report is available below"}),a("div",{className:"buttons-block",children:[t(n,{type:"text",size:"middle",onClick:()=>i(-1),style:{marginRight:12},children:"Back to form"}),t(n,{type:"primary",onClick:s,size:"large",children:"View report"})]})]})]})};export{h as default};