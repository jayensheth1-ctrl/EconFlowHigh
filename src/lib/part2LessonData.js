export const part2Units = [
  {
    id: "unit-5",
    title: "Macroeconomics and Global Finance",
    description: "GDP, monetary policy, global capital flows, and exchange rates",
    color: "from-violet-500 to-purple-700",
    part2: true,
    lessons: [
      {
        id: "5-1",
        title: "GDP, Recession, and Economic Cycles",
        studyBrief: "Gross Domestic Product (GDP) measures the total market value of all goods and services produced within a country in a given period. GDP = Consumption + Investment + Government Spending + Net Exports (C + I + G + NX). Real GDP adjusts for inflation, making it more useful for comparing growth over time. A recession is technically defined as two consecutive quarters of negative GDP growth. The business cycle has four phases: expansion (growing output and employment), peak (maximum output), contraction/recession (falling output), and trough (minimum point before recovery). Leading indicators like housing starts and consumer confidence predict future economic direction; lagging indicators like unemployment confirm trends already underway.",
        questions: [
          {
            type: "multiple_choice",
            question: "What is the technical definition of a recession?",
            options: [
              "Two consecutive quarters of negative GDP growth",
              "Unemployment rising above 10%",
              "A single month of declining stock prices",
              "A government budget deficit exceeding 5% of GDP"
            ],
            correct: 0,
            explanation: "The standard definition requires two back-to-back quarters of negative real GDP growth -- though the NBER's official dating also considers depth, breadth, and duration."
          },
          {
            type: "true_false",
            question: "Real GDP adjusts for inflation, making it a more accurate measure of actual economic growth than nominal GDP.",
            correct: true,
            explanation: "Nominal GDP can rise simply because prices increased, not because more was actually produced. Real GDP strips out inflation to show true output growth."
          },
          {
            type: "multiple_choice",
            question: "Which component of GDP represents business spending on equipment, machinery, and construction?",
            options: [
              "Investment (I)",
              "Consumption (C)",
              "Government Spending (G)",
              "Net Exports (NX)"
            ],
            correct: 0,
            explanation: "In the GDP formula, Investment includes business capital expenditures, residential construction, and changes in business inventories -- not financial market investments."
          },
          {
            type: "word_bank",
            question: "The business cycle moves from ___ to peak to ___ to trough before recovering.",
            blanks: ["expansion", "contraction"],
            options: ["expansion", "contraction", "inflation", "deficit", "surplus"],
            explanation: "The four phases are expansion, peak, contraction (recession), and trough -- understanding where we are in the cycle informs both investment and business strategy."
          },
          {
            type: "true_false",
            question: "Lagging economic indicators like unemployment are useful for predicting future economic turning points before they happen.",
            correct: false,
            explanation: "Lagging indicators confirm trends after they are already underway -- unemployment typically peaks months after a recession has ended, making it a poor predictor."
          }
        ]
      },
      {
        id: "5-2",
        title: "Monetary Policy and the Federal Reserve",
        studyBrief: "The Federal Reserve (the Fed) is the US central bank, responsible for monetary policy. Its dual mandate is to maximize employment and stabilize prices (targeting ~2% inflation). The Fed's primary tool is the federal funds rate -- the rate banks charge each other for overnight loans. When the Fed raises rates, borrowing becomes more expensive, cooling spending and inflation. When it cuts rates, borrowing becomes cheaper, stimulating growth. Quantitative easing (QE) involves the Fed buying assets (typically government bonds) to inject liquidity into the financial system when rate cuts alone are insufficient. The yield curve -- plotting interest rates across bond maturities -- inverts when short-term rates exceed long-term rates, historically a reliable recession predictor.",
        questions: [
          {
            type: "multiple_choice",
            question: "What is the Federal Reserve's 'dual mandate'?",
            options: [
              "Maximize employment and maintain price stability (~2% inflation)",
              "Balance the federal budget and control trade deficits",
              "Regulate stock markets and prevent bank failures",
              "Set tax rates and manage government spending"
            ],
            correct: 0,
            explanation: "The Fed's two legal objectives are maximum employment and stable prices -- these goals sometimes conflict, requiring the Fed to make difficult tradeoffs."
          },
          {
            type: "true_false",
            question: "An inverted yield curve, where short-term rates exceed long-term rates, has historically been a reliable predictor of recession.",
            correct: true,
            explanation: "Every US recession since 1955 has been preceded by an inverted yield curve -- it signals that markets expect the Fed to cut rates sharply in the future due to economic weakness."
          },
          {
            type: "multiple_choice",
            question: "What is quantitative easing (QE)?",
            options: [
              "The Fed buying assets to inject money into the financial system",
              "The government printing money to pay its debts directly",
              "Raising reserve requirements at commercial banks",
              "Cutting government spending to reduce inflation"
            ],
            correct: 0,
            explanation: "QE expands the money supply by having the Fed purchase bonds from banks, crediting their reserve accounts and enabling more lending -- used when rates are already near zero."
          },
          {
            type: "word_bank",
            question: "When the Fed ___ interest rates, borrowing costs rise and spending tends to ___, cooling inflation.",
            blanks: ["raises", "fall"],
            options: ["raises", "fall", "lowers", "rise", "freezes"],
            explanation: "Higher rates make mortgages, car loans, and business borrowing more expensive -- reducing spending and investment, which slows demand-driven inflation."
          },
          {
            type: "true_false",
            question: "The federal funds rate is the interest rate the Federal Reserve charges consumers directly on personal loans.",
            correct: false,
            explanation: "The federal funds rate is charged between banks for overnight lending -- it influences consumer rates indirectly, as banks adjust their lending rates based on their own borrowing costs."
          }
        ]
      },
      {
        id: "5-3",
        title: "Global Capital Flows and Exchange Rates",
        studyBrief: "Exchange rates are determined by supply and demand for currencies in the foreign exchange (Forex) market, which trades over $7.5 trillion per day. A country's current account tracks trade in goods and services; the capital account tracks investment flows. Countries with higher interest rates attract foreign capital (as investors seek better returns), which bids up the currency's value. Purchasing Power Parity (PPP) is the theory that exchange rates should equalize the price of identical goods across countries -- the Big Mac Index is a famous real-world application. Currency risk is a major consideration for international investors: a rising dollar reduces the returns of foreign investments when converted back to USD.",
        questions: [
          {
            type: "multiple_choice",
            question: "According to Purchasing Power Parity (PPP), what should exchange rates ultimately reflect?",
            options: [
              "The relative price levels of goods across countries",
              "The size of each country's military",
              "The total volume of each country's exports",
              "The interest rate set by each country's central bank"
            ],
            correct: 0,
            explanation: "PPP theory holds that a basket of identical goods should cost the same across countries once exchange rates are applied -- deviations indicate over- or undervalued currencies."
          },
          {
            type: "true_false",
            question: "A country with higher interest rates tends to attract foreign capital inflows, which increases demand for its currency.",
            correct: true,
            explanation: "Foreign investors buy the local currency to invest in higher-yielding assets, increasing demand for that currency and pushing its exchange rate up."
          },
          {
            type: "multiple_choice",
            question: "A US investor holds European stocks. If the dollar strengthens significantly against the euro, the investor's returns when converted back to USD will:",
            options: [
              "Decrease, because each euro buys fewer dollars",
              "Increase, because a stronger dollar boosts foreign returns",
              "Stay the same, because currency changes cancel out",
              "Increase only if the European stocks also rose in value"
            ],
            correct: 0,
            explanation: "A stronger dollar means each euro converts to fewer dollars -- even if European stocks rose in euro terms, currency depreciation can eliminate or reverse the gain in USD terms."
          },
          {
            type: "word_bank",
            question: "A country's ___ account tracks goods and services trade, while the ___ account tracks investment flows.",
            blanks: ["current", "capital"],
            options: ["current", "capital", "savings", "fiscal", "monetary"],
            explanation: "The current account and capital account together make up the balance of payments -- they must sum to zero, meaning trade deficits are financed by capital inflows."
          },
          {
            type: "true_false",
            question: "The Forex market is the world's largest financial market, dwarfing global stock markets in daily trading volume.",
            correct: true,
            explanation: "At over $7.5 trillion per day, Forex dwarfs global equity markets -- currencies must be exchanged for virtually every international trade and investment transaction."
          }
        ]
      }
    ]
  },
  {
    id: "unit-6",
    title: "Corporate Finance and Valuation",
    description: "Analyze companies, read financial statements, and value assets",
    color: "from-cyan-500 to-blue-700",
    part2: true,
    lessons: [
      {
        id: "6-1",
        title: "Reading Financial Statements",
        studyBrief: "Three financial statements form the backbone of corporate analysis. The income statement shows revenue, expenses, and profit over a period -- key metrics include gross margin, operating income (EBIT), and net income. The balance sheet is a snapshot of assets, liabilities, and shareholders equity at a point in time; the fundamental equation is Assets = Liabilities + Equity. The cash flow statement tracks actual cash moving in and out, divided into operating, investing, and financing activities. A company can show positive net income while burning cash -- which is why analysts focus heavily on free cash flow (operating cash flow minus capital expenditures), the most reliable measure of financial health.",
        questions: [
          {
            type: "multiple_choice",
            question: "What is the fundamental equation of a balance sheet?",
            options: [
              "Assets = Liabilities + Shareholders Equity",
              "Revenue - Expenses = Net Income",
              "Cash Inflows - Cash Outflows = Free Cash Flow",
              "Gross Profit / Revenue = Gross Margin"
            ],
            correct: 0,
            explanation: "The balance sheet equation always holds: everything a company owns (assets) was financed either by debt (liabilities) or by owner investment (equity)."
          },
          {
            type: "true_false",
            question: "A company can report positive net income on its income statement while simultaneously running out of cash.",
            correct: true,
            explanation: "Accrual accounting recognizes revenue when earned, not when cash arrives -- a company with unpaid invoices shows income but has no cash to pay suppliers or employees."
          },
          {
            type: "multiple_choice",
            question: "Free cash flow is calculated as:",
            options: [
              "Operating cash flow minus capital expenditures",
              "Net income plus depreciation",
              "Revenue minus cost of goods sold",
              "Total assets minus total liabilities"
            ],
            correct: 0,
            explanation: "Free cash flow is the cash remaining after maintaining and expanding the asset base -- it is what is truly available to pay dividends, buy back shares, or repay debt."
          },
          {
            type: "word_bank",
            question: "The ___ statement shows profitability over time, while the ___ sheet shows financial position at a single point in time.",
            blanks: ["income", "balance"],
            options: ["income", "balance", "cash", "equity", "capital"],
            explanation: "The income statement covers a period (quarter, year); the balance sheet is a snapshot on a specific date -- together they give a complete picture of financial health."
          },
          {
            type: "true_false",
            question: "The cash flow statement's operating activities section includes capital expenditures on new equipment.",
            correct: false,
            explanation: "Capital expenditures (capex) appear in the investing activities section of the cash flow statement -- operating activities reflect cash generated by the core business."
          }
        ]
      },
      {
        id: "6-2",
        title: "Company Valuation Methods",
        studyBrief: "Valuation answers the question: what is a company worth? Relative valuation uses multiples -- the Price-to-Earnings (P/E) ratio compares a company's stock price to its annual earnings per share. A high P/E implies investors expect strong growth; a low P/E may signal undervaluation or weak prospects. The Price-to-Sales (P/S) ratio is useful for unprofitable companies. Discounted Cash Flow (DCF) analysis is the intrinsic valuation method: project future free cash flows and discount them back to today's value using a required rate of return (discount rate). If the intrinsic value exceeds the market price, the stock may be undervalued. DCF is highly sensitive to assumptions about growth rates and discount rates.",
        questions: [
          {
            type: "multiple_choice",
            question: "What does a high Price-to-Earnings (P/E) ratio typically signal?",
            options: [
              "Investors expect strong future earnings growth",
              "The company is unprofitable and financially distressed",
              "The stock is definitely undervalued and a bargain",
              "The company has more debt than equity"
            ],
            correct: 0,
            explanation: "A high P/E means investors are paying a premium relative to current earnings -- they are willing to do so because they expect earnings to grow significantly in the future."
          },
          {
            type: "true_false",
            question: "A Discounted Cash Flow (DCF) analysis estimates intrinsic value by projecting future cash flows and discounting them to present value.",
            correct: true,
            explanation: "DCF is the foundational intrinsic valuation method -- it operationalizes the time value of money by asking what future cash flows are worth in today's dollars."
          },
          {
            type: "multiple_choice",
            question: "Which valuation multiple is most useful when analyzing a company that has no profit yet?",
            options: [
              "Price-to-Sales (P/S) ratio",
              "Price-to-Earnings (P/E) ratio",
              "Dividend yield",
              "Return on equity (ROE)"
            ],
            correct: 0,
            explanation: "P/E is meaningless for unprofitable companies (you can't divide by negative earnings); P/S uses revenue, which is always positive, making it useful for early-stage growth companies."
          },
          {
            type: "word_bank",
            question: "In a DCF model, a higher ___ rate results in a ___ present value for the same future cash flows.",
            blanks: ["discount", "lower"],
            options: ["discount", "lower", "growth", "higher", "tax"],
            explanation: "A higher discount rate reflects greater risk or a higher required return -- it shrinks the present value of future cash flows, resulting in a lower intrinsic valuation."
          },
          {
            type: "true_false",
            question: "If a DCF analysis yields an intrinsic value higher than the current stock price, the stock may be considered undervalued.",
            correct: true,
            explanation: "If intrinsic value > market price, the stock is trading below what it is fundamentally worth -- a potential buy signal, though DCF assumptions carry significant uncertainty."
          }
        ]
      },
      {
        id: "6-3",
        title: "Capital Structure and Corporate Decisions",
        studyBrief: "A company's capital structure is the mix of debt and equity used to finance its assets. Debt is cheaper than equity because interest is tax-deductible (the 'interest tax shield') and bondholders have lower risk than shareholders. However, too much debt increases financial distress risk -- if cash flows fall, the company may be unable to service its obligations. The Modigliani-Miller theorem, foundational in corporate finance, argues that in a perfect market, capital structure is irrelevant to firm value -- but in reality, taxes and bankruptcy costs make the optimal structure a balance between the tax benefits of debt and the costs of financial distress. Dividends and share buybacks are the two primary methods companies use to return cash to shareholders.",
        questions: [
          {
            type: "multiple_choice",
            question: "Why is debt generally considered cheaper than equity as a source of financing?",
            options: [
              "Interest payments are tax-deductible, and debt holders bear less risk than equity holders",
              "Debt never needs to be repaid, unlike equity dividends",
              "Equity holders receive interest payments, making equity more expensive",
              "Governments subsidize corporate borrowing through grants"
            ],
            correct: 0,
            explanation: "The interest tax shield reduces the after-tax cost of debt; combined with the lower risk (and therefore lower required return) of bondholders, debt is almost always cheaper than equity."
          },
          {
            type: "true_false",
            question: "Taking on excessive debt increases a company's risk of financial distress if operating cash flows decline.",
            correct: true,
            explanation: "Debt creates fixed interest obligations -- if revenue falls in a downturn, a highly leveraged company may struggle to service its debt, risking default or bankruptcy."
          },
          {
            type: "multiple_choice",
            question: "A company repurchasing its own shares in the open market is engaging in:",
            options: [
              "A share buyback (stock repurchase)",
              "An initial public offering (IPO)",
              "A leveraged buyout (LBO)",
              "A rights issue"
            ],
            correct: 0,
            explanation: "Share buybacks reduce shares outstanding, increasing earnings per share and returning cash to shareholders in a more tax-efficient way than dividends for many investors."
          },
          {
            type: "word_bank",
            question: "The interest ___ shield reduces a company's tax bill, making ___ a cheaper source of capital than equity.",
            blanks: ["tax", "debt"],
            options: ["tax", "debt", "dividend", "equity", "revenue"],
            explanation: "Because interest is tax-deductible, the government effectively subsidizes debt financing -- this 'tax shield' is a core reason companies use leverage."
          },
          {
            type: "true_false",
            question: "According to Modigliani-Miller in a perfect market, a firm's value is determined primarily by its capital structure rather than its underlying cash flows.",
            correct: false,
            explanation: "MM's irrelevance proposition states the opposite: in a perfect market, firm value is determined by its asset cash flows, not by how those assets are financed."
          }
        ]
      }
    ]
  },
  {
    id: "unit-7",
    title: "Taxation and Public Finance",
    description: "Advanced tax strategy, fiscal policy, and government finance",
    color: "from-amber-500 to-red-600",
    part2: true,
    lessons: [
      {
        id: "7-1",
        title: "Advanced Tax Strategy",
        studyBrief: "Beyond understanding tax brackets, sophisticated tax planning can dramatically increase after-tax wealth. Tax-loss harvesting involves selling losing investments to realize a capital loss, which offsets capital gains and reduces the tax bill -- the cash is then reinvested in a similar (but not identical) asset to maintain market exposure. Roth accounts (Roth IRA, Roth 401k) accept after-tax contributions but grow and withdraw tax-free, making them especially valuable for young investors expecting higher future tax rates. The step-up in basis at death allows heirs to inherit appreciated assets at their current market value, eliminating capital gains taxes on lifetime appreciation. Estate planning uses trusts and gifting strategies to transfer wealth while minimizing estate taxes.",
        questions: [
          {
            type: "multiple_choice",
            question: "What is tax-loss harvesting?",
            options: [
              "Selling losing investments to realize losses that offset taxable gains",
              "Hiding investment losses from the IRS to reduce taxes",
              "Buying undervalued stocks that have recently declined in price",
              "Donating losing investments to charity for a tax deduction"
            ],
            correct: 0,
            explanation: "Tax-loss harvesting converts paper losses into realized losses that offset capital gains, reducing your tax bill while keeping your overall market exposure intact."
          },
          {
            type: "true_false",
            question: "A Roth IRA accepts after-tax contributions and allows qualified withdrawals to be made completely tax-free.",
            correct: true,
            explanation: "Unlike a traditional IRA (tax-deferred), Roth contributions are made with after-tax dollars -- but all future growth and qualified withdrawals are completely tax-free."
          },
          {
            type: "multiple_choice",
            question: "The 'step-up in basis' at death means that heirs who inherit appreciated stock:",
            options: [
              "Owe no capital gains tax on the appreciation that occurred during the deceased's lifetime",
              "Must pay capital gains tax on all appreciation from the original purchase price",
              "Receive the stock at no cost but must pay estate taxes immediately",
              "Can only sell the stock after a mandatory 5-year holding period"
            ],
            correct: 0,
            explanation: "The step-up resets the cost basis to the fair market value at death -- eliminating capital gains taxes on all appreciation during the deceased's lifetime, a major estate planning tool."
          },
          {
            type: "word_bank",
            question: "Tax-loss harvesting ___ capital gains taxes by realizing ___ to offset profits.",
            blanks: ["reduces", "losses"],
            options: ["reduces", "losses", "increases", "gains", "avoids"],
            explanation: "Realized losses can be used to offset realized gains dollar-for-dollar, and up to $3,000 of excess losses can offset ordinary income annually."
          },
          {
            type: "true_false",
            question: "After harvesting a tax loss, investors must wait 30 days before buying a substantially identical security to avoid the wash-sale rule.",
            correct: true,
            explanation: "The wash-sale rule disallows the loss deduction if you buy the same or substantially identical security within 30 days before or after the sale -- requiring a substitute investment during the window."
          }
        ]
      },
      {
        id: "7-2",
        title: "Fiscal Policy and National Debt",
        studyBrief: "Fiscal policy -- government taxation and spending -- is a primary tool for managing the macroeconomy. Expansionary fiscal policy (increased spending or tax cuts) stimulates demand during recessions but adds to the deficit. Contractionary policy (spending cuts or tax increases) cools an overheating economy. The national debt is the accumulated total of past deficits; the US debt-to-GDP ratio is a key measure of fiscal sustainability. Modern Monetary Theory (MMT) controversially argues that a government controlling its own currency can spend freely without traditional deficit concerns, as long as inflation is managed. Critics argue this risks runaway inflation. The Congressional Budget Office (CBO) provides independent fiscal analysis.",
        questions: [
          {
            type: "multiple_choice",
            question: "What is expansionary fiscal policy, and when is it typically used?",
            options: [
              "Increased government spending or tax cuts used during recessions to stimulate demand",
              "Spending cuts and tax increases used to slow an overheating economy",
              "Central bank rate cuts to lower borrowing costs for consumers",
              "Trade tariffs to protect domestic industries from foreign competition"
            ],
            correct: 0,
            explanation: "Expansionary fiscal policy injects money into the economy through higher government spending or lower taxes -- boosting aggregate demand when the economy is underperforming."
          },
          {
            type: "true_false",
            question: "The debt-to-GDP ratio is a commonly used measure of a country's fiscal sustainability.",
            correct: true,
            explanation: "Expressing debt as a percentage of GDP normalizes it by economic size -- a country with high debt but strong GDP growth is in a better fiscal position than one with the same debt and stagnant growth."
          },
          {
            type: "multiple_choice",
            question: "Modern Monetary Theory (MMT) primarily argues that:",
            options: [
              "A government controlling its own currency can spend without traditional deficit constraints as long as inflation is controlled",
              "Governments should always balance their budgets and never run deficits",
              "Central banks, not governments, should control all spending decisions",
              "Tax cuts always pay for themselves through higher economic growth"
            ],
            correct: 0,
            explanation: "MMT holds that currency-issuing governments face no solvency constraint -- the real constraint is inflation, not the ability to pay -- a controversial but influential framework."
          },
          {
            type: "word_bank",
            question: "The national ___ is the accumulated total of past budget ___, representing money the government has borrowed.",
            blanks: ["debt", "deficits"],
            options: ["debt", "deficits", "surplus", "revenue", "expenditure"],
            explanation: "Each year's deficit adds to the national debt -- the debt is the stock of all past borrowing, while the deficit is the annual flow of new borrowing."
          },
          {
            type: "true_false",
            question: "Contractionary fiscal policy, such as raising taxes, is typically deployed to stimulate a struggling economy.",
            correct: false,
            explanation: "Contractionary policy -- tax increases or spending cuts -- is used to cool an overheating economy or reduce deficits, not to stimulate growth during a recession."
          }
        ]
      },
      {
        id: "7-3",
        title: "International Tax and Transfer Pricing",
        studyBrief: "Multinational corporations operate across dozens of tax jurisdictions, creating both tax planning opportunities and regulatory scrutiny. Transfer pricing refers to the prices set for transactions between subsidiaries of the same company in different countries -- a company can shift profits to low-tax jurisdictions by overpricing goods sold from high-tax subsidiaries to low-tax ones. The OECD's Base Erosion and Profit Shifting (BEPS) framework aims to close these loopholes. The global minimum corporate tax of 15%, agreed to by over 130 countries, targets profit shifting to tax havens like Ireland or the Cayman Islands. For individuals, the US taxes citizens on worldwide income regardless of residence -- making international tax planning critical for expatriates.",
        questions: [
          {
            type: "multiple_choice",
            question: "What is transfer pricing in the context of multinational corporations?",
            options: [
              "Setting prices for transactions between subsidiaries in different countries to shift profits to lower-tax jurisdictions",
              "The exchange rate applied when repatriating foreign profits to the home country",
              "Government-mandated pricing controls on imported goods",
              "The fee charged by tax authorities to process international tax returns"
            ],
            correct: 0,
            explanation: "By manipulating the prices charged between its own subsidiaries, a multinational can artificially locate profits in jurisdictions with the lowest tax rates."
          },
          {
            type: "true_false",
            question: "The OECD's BEPS framework was designed to prevent companies from shifting profits to low-tax jurisdictions.",
            correct: true,
            explanation: "Base Erosion and Profit Shifting (BEPS) is a coordinated international effort to close loopholes that allow multinationals to pay tax in low-tax jurisdictions regardless of where value is actually created."
          },
          {
            type: "multiple_choice",
            question: "The global minimum corporate tax of 15% is primarily intended to:",
            options: [
              "Prevent profit shifting to tax havens by ensuring multinationals pay a baseline rate everywhere",
              "Standardize VAT rates across all OECD member countries",
              "Replace national corporate tax systems with a single global rate",
              "Exempt small businesses from corporate taxation entirely"
            ],
            correct: 0,
            explanation: "The 15% global minimum ensures that no matter where profits are booked, multinationals pay at least a baseline rate -- reducing the incentive to shift profits to zero-tax havens."
          },
          {
            type: "word_bank",
            question: "The US taxes its citizens on ___ income regardless of where they ___, unlike most other countries.",
            blanks: ["worldwide", "live"],
            options: ["worldwide", "live", "domestic", "work", "invest"],
            explanation: "The US is one of the only countries that taxes citizens on global income -- Americans abroad must file US taxes even if they owe nothing locally, creating complex planning needs."
          },
          {
            type: "true_false",
            question: "A US citizen living and working in Germany pays US income taxes only on income earned within the United States.",
            correct: false,
            explanation: "The US taxes worldwide income of its citizens -- a US citizen in Germany pays both German taxes and US taxes on their German salary, though the Foreign Tax Credit reduces double taxation."
          }
        ]
      }
    ]
  },
  {
    id: "unit-8",
    title: "Entrepreneurship and Venture Capital",
    description: "Build, fund, and scale high-growth companies",
    color: "from-emerald-500 to-teal-700",
    part2: true,
    lessons: [
      {
        id: "8-1",
        title: "Startup Financing and Venture Capital",
        studyBrief: "Startups typically raise capital in sequential rounds: pre-seed and seed rounds fund early development, often from angel investors or accelerators like Y Combinator. Series A, B, and C rounds bring in institutional venture capital (VC) as the company scales. Each round dilutes existing shareholders -- founders must balance raising enough capital to grow against giving up ownership. Valuation at each round determines how much equity investors receive for their investment. Term sheets outline the key terms: valuation, liquidation preferences (ensuring investors get paid before founders in an exit), and anti-dilution provisions. VC funds model their returns around a power law: most investments fail, but one or two 'fund-returners' generate outsized returns.",
        questions: [
          {
            type: "multiple_choice",
            question: "What is a liquidation preference in a startup term sheet?",
            options: [
              "A clause ensuring investors get paid before founders in an acquisition or liquidation",
              "The right of investors to sell their shares back to the company at any time",
              "A requirement for founders to buy back investor shares at a premium",
              "The priority order for paying employee salaries during financial distress"
            ],
            correct: 0,
            explanation: "Liquidation preferences protect investors by ensuring they recover their investment (and sometimes a multiple) before founders and employees receive any proceeds in a sale."
          },
          {
            type: "true_false",
            question: "Each new funding round dilutes existing shareholders, including founders, by issuing new shares.",
            correct: true,
            explanation: "New shares issued to investors reduce the percentage ownership of all existing shareholders -- a founder who owns 60% before a round will own a smaller percentage after new shares are issued."
          },
          {
            type: "multiple_choice",
            question: "VC fund returns are typically modeled around a 'power law' because:",
            options: [
              "A small number of portfolio companies generate the vast majority of total returns",
              "Returns are evenly distributed across all portfolio companies",
              "Venture funds guarantee returns through diversification",
              "The government regulates VC returns to ensure fairness"
            ],
            correct: 0,
            explanation: "In a typical VC portfolio, most companies return little or nothing -- but one or two exceptional outcomes (a 100x or 1000x return) generate the bulk of the fund's total return."
          },
          {
            type: "word_bank",
            question: "Startups raise early capital in ___ and seed rounds before graduating to institutional ___ capital.",
            blanks: ["pre-seed", "venture"],
            options: ["pre-seed", "venture", "Series A", "public", "debt"],
            explanation: "The funding ladder typically goes: pre-seed (friends/angels) -> seed (angels/micro-VCs) -> Series A/B/C (institutional VCs) -> IPO or acquisition."
          },
          {
            type: "true_false",
            question: "A startup's pre-money valuation refers to its value after a new investment round has been completed.",
            correct: false,
            explanation: "Pre-money valuation is the company's value before the new investment -- post-money valuation = pre-money + new investment. This distinction determines how much equity investors receive."
          }
        ]
      },
      {
        id: "8-2",
        title: "Unit Economics and Growth Metrics",
        studyBrief: "Sophisticated investors evaluate startups through unit economics -- the revenue and cost associated with a single customer. Customer Acquisition Cost (CAC) is the total sales and marketing spend divided by the number of new customers acquired. Lifetime Value (LTV) is the total revenue expected from a customer over their entire relationship with the business. A healthy LTV-to-CAC ratio of 3:1 or higher indicates a scalable business model. Churn rate (the percentage of customers who cancel per month) is the enemy of recurring revenue businesses -- even a small increase in churn compounds dramatically over time. Net Revenue Retention (NRR) above 100% means existing customers are spending more over time, which is the hallmark of a truly great software business.",
        questions: [
          {
            type: "multiple_choice",
            question: "What does an LTV-to-CAC ratio of 3:1 indicate?",
            options: [
              "For every $1 spent acquiring a customer, the business generates $3 in lifetime value -- a healthy return",
              "The company loses $3 for every customer it acquires",
              "Customer lifetime value is three times shorter than the payback period",
              "The company spends three times more on sales than marketing"
            ],
            correct: 0,
            explanation: "A 3:1 LTV/CAC ratio is a commonly cited benchmark for a viable, scalable business model -- below 3:1 suggests the cost to acquire customers may not be justified by the revenue they generate."
          },
          {
            type: "true_false",
            question: "A high monthly churn rate is particularly damaging to subscription businesses because its negative effects compound over time.",
            correct: true,
            explanation: "A 5% monthly churn means you lose half your customers in about a year -- the compounding math of churn makes even small improvements in retention extraordinarily valuable."
          },
          {
            type: "multiple_choice",
            question: "Net Revenue Retention (NRR) above 100% means:",
            options: [
              "Existing customers are spending more over time, more than offsetting any churn",
              "The company is acquiring new customers faster than it is losing them",
              "Total revenue is growing at over 100% annually",
              "The company retains all of its net income after taxes"
            ],
            correct: 0,
            explanation: "NRR above 100% means expansion revenue from existing customers (upsells, cross-sells) exceeds revenue lost to churn -- the business can grow without acquiring a single new customer."
          },
          {
            type: "word_bank",
            question: "CAC measures the cost to ___ a customer, while LTV measures the total ___ generated from that customer.",
            blanks: ["acquire", "revenue"],
            options: ["acquire", "revenue", "retain", "profit", "service"],
            explanation: "CAC and LTV are the two most fundamental unit economics metrics -- their ratio determines whether a business model is fundamentally viable and scalable."
          },
          {
            type: "true_false",
            question: "A startup with a CAC payback period of 60 months has a highly efficient and sustainable growth model.",
            correct: false,
            explanation: "A 60-month payback period means it takes 5 years to recover the cost of acquiring each customer -- that is extremely capital-intensive and risky, especially if churn is high."
          }
        ]
      },
      {
        id: "8-3",
        title: "Exits, M&A, and IPOs",
        studyBrief: "Startup investors ultimately need liquidity events to realize returns. An acquisition (M&A) is the most common exit -- a larger company buys the startup, often for strategic reasons like eliminating competition, acquiring technology, or entering a new market. Acqui-hires target the talent rather than the product. An IPO (Initial Public Offering) takes the company public, allowing it to raise capital on stock markets while providing liquidity to early investors. SPACs (Special Purpose Acquisition Companies) offer an alternative path to public markets -- a shell company raises capital, then merges with a private company, bypassing the traditional IPO process. Post-IPO lockup periods (typically 180 days) prevent insiders from selling immediately, protecting new public investors.",
        questions: [
          {
            type: "multiple_choice",
            question: "What is an 'acqui-hire'?",
            options: [
              "An acquisition primarily motivated by the desire to hire the target company's team",
              "A hostile takeover of a public company against management's wishes",
              "An IPO structured to benefit acquiring shareholders over founders",
              "A merger between two companies of equal size and value"
            ],
            correct: 0,
            explanation: "In an acqui-hire, the acquirer values the team more than the product or technology -- common in tech where top engineering talent is scarce and expensive to recruit."
          },
          {
            type: "true_false",
            question: "A SPAC provides an alternative route to public markets without going through the traditional IPO process.",
            correct: true,
            explanation: "A SPAC (blank check company) raises money through its own IPO, then merges with a private company -- giving that company a faster, cheaper path to public markets with less regulatory scrutiny."
          },
          {
            type: "multiple_choice",
            question: "Why do post-IPO lockup periods exist?",
            options: [
              "To prevent insiders from flooding the market with shares immediately after the IPO, protecting new public investors",
              "To allow the company time to prepare its first quarterly earnings report",
              "To give the SEC time to review all insider shareholdings for compliance",
              "To ensure the investment bank can sell all remaining IPO shares"
            ],
            correct: 0,
            explanation: "Without lockups, insiders could immediately sell all their shares at the IPO price, creating massive downward pressure on the stock and signaling a lack of confidence in the company."
          },
          {
            type: "word_bank",
            question: "An ___ takes a company public on a stock exchange, while an ___ involves a larger company buying the startup outright.",
            blanks: ["IPO", "acquisition"],
            options: ["IPO", "acquisition", "SPAC", "merger", "dividend"],
            explanation: "IPOs and acquisitions are the two primary exit paths for startup investors -- IPOs provide ongoing liquidity while acquisitions provide an immediate, definitive payout."
          },
          {
            type: "true_false",
            question: "In a strategic acquisition, the buyer always pays exactly the startup's last private market valuation.",
            correct: false,
            explanation: "Acquisition prices are negotiated and reflect strategic value to the buyer -- a company may pay a significant premium (or in distressed cases, a discount) relative to the last private valuation."
          }
        ]
      }
    ]
  },
  {
    id: "unit-9",
    title: "Real Estate and Alternative Investments",
    description: "Real estate finance, private equity, hedge funds, and commodities",
    color: "from-rose-500 to-pink-700",
    part2: true,
    lessons: [
      {
        id: "9-1",
        title: "Advanced Real Estate Finance",
        studyBrief: "Real estate investment analysis goes far beyond the 1% rule. Net Operating Income (NOI) is annual rental income minus operating expenses (excluding mortgage payments) -- it is the core cash generation measure. Cap rate = NOI / Property Value; it represents the unlevered yield. Cash-on-cash return measures actual cash return on equity invested, accounting for financing. Debt Service Coverage Ratio (DSCR) = NOI / Annual Debt Service; lenders typically require DSCR above 1.25x. Real estate limited partnerships (LPs) and opportunity zone investments offer tax advantages. The 1031 exchange allows investors to defer capital gains taxes by rolling proceeds from one investment property into another like-kind property.",
        questions: [
          {
            type: "multiple_choice",
            question: "What does the Debt Service Coverage Ratio (DSCR) measure?",
            options: [
              "How many times NOI covers annual mortgage payments -- a key lender metric",
              "The ratio of a property's market value to its outstanding mortgage balance",
              "The annual cash return on equity invested in a property",
              "The percentage of rental income consumed by property taxes"
            ],
            correct: 0,
            explanation: "DSCR = NOI / Annual Debt Service. A ratio above 1.0 means the property generates enough income to cover its mortgage; lenders typically require 1.25x or higher as a safety buffer."
          },
          {
            type: "true_false",
            question: "A 1031 exchange allows real estate investors to defer capital gains taxes by reinvesting sale proceeds into a like-kind property.",
            correct: true,
            explanation: "Named after IRS Section 1031, this provision lets investors roll gains from one investment property into another, deferring taxes indefinitely -- a powerful wealth-building tool."
          },
          {
            type: "multiple_choice",
            question: "Cap rate in real estate is calculated as:",
            options: [
              "Net Operating Income divided by the property's market value",
              "Annual rental income divided by the purchase price",
              "Monthly rent multiplied by 12 minus mortgage payments",
              "Total equity invested divided by annual cash flow"
            ],
            correct: 0,
            explanation: "Cap rate = NOI / Value. It represents the unlevered return on a property -- useful for comparing properties independently of how they are financed."
          },
          {
            type: "word_bank",
            question: "NOI measures a property's ___ before ___ payments, making it independent of how the property is financed.",
            blanks: ["income", "mortgage"],
            options: ["income", "mortgage", "value", "taxes", "equity"],
            explanation: "By excluding debt service, NOI and cap rate allow apples-to-apples comparison of properties regardless of their capital structure -- similar to EBIT in corporate finance."
          },
          {
            type: "true_false",
            question: "Cash-on-cash return and cap rate are identical metrics that always produce the same number for a given property.",
            correct: false,
            explanation: "Cap rate is unlevered (ignores financing); cash-on-cash return accounts for actual mortgage payments and measures the cash yield on equity invested -- they diverge whenever leverage is used."
          }
        ]
      },
      {
        id: "9-2",
        title: "Private Equity and Hedge Funds",
        studyBrief: "Private equity (PE) firms acquire mature companies (often using substantial debt -- a leveraged buyout or LBO), improve operations, and sell for a profit, typically over a 5-7 year horizon. The LBO model works because interest is tax-deductible and companies can be bought with relatively little equity. PE returns are measured by IRR (Internal Rate of Return) and MOIC (Multiple on Invested Capital). Hedge funds are actively managed pools of capital using sophisticated strategies: long-short equity (buying undervalued and shorting overvalued stocks), global macro (betting on currency and rate moves), and merger arbitrage (profiting from acquisition price spreads). Both charge the classic '2 and 20' fee structure: 2% annual management fee plus 20% of profits (carried interest).",
        questions: [
          {
            type: "multiple_choice",
            question: "What is a Leveraged Buyout (LBO)?",
            options: [
              "Acquiring a company using mostly borrowed money, with the acquired company's assets as collateral",
              "Buying shares of a public company gradually to avoid triggering disclosure rules",
              "A startup raising its first round of institutional venture capital",
              "A company borrowing to fund its own share buyback program"
            ],
            correct: 0,
            explanation: "In an LBO, the PE firm uses the target company's assets and cash flows as collateral to borrow the majority of the purchase price -- amplifying potential returns (and risk) through leverage."
          },
          {
            type: "true_false",
            question: "The '2 and 20' fee structure means hedge funds charge a 2% management fee and keep 20% of any profits generated.",
            correct: true,
            explanation: "The management fee covers operating costs; the 20% performance fee (carried interest) aligns the fund manager's interests with investors -- though critics argue it rewards risk-taking too generously."
          },
          {
            type: "multiple_choice",
            question: "MOIC (Multiple on Invested Capital) of 3x means:",
            options: [
              "The investor received $3 back for every $1 invested",
              "The fund generated a 3% annual return on its portfolio",
              "The company's valuation tripled during the holding period",
              "The fund deployed its capital across 3 different investments"
            ],
            correct: 0,
            explanation: "MOIC measures the total cash return multiple -- a 3x MOIC means $1M invested returned $3M total. It is used alongside IRR, which accounts for the time it took to generate those returns."
          },
          {
            type: "word_bank",
            question: "A long-short equity hedge fund ___ undervalued stocks and ___ overvalued ones to profit in any market.",
            blanks: ["buys", "shorts"],
            options: ["buys", "shorts", "holds", "ignores", "hedges"],
            explanation: "Long-short equity can generate positive returns in both rising and falling markets -- profits from longs in bull markets and from shorts in bear markets, though both legs can also lose simultaneously."
          },
          {
            type: "true_false",
            question: "Private equity firms typically hold their portfolio companies for 1-2 years before exiting.",
            correct: false,
            explanation: "PE holding periods are typically 5-7 years -- the firms need time to implement operational improvements, reduce debt, and find the right exit at a favorable valuation."
          }
        ]
      },
      {
        id: "9-3",
        title: "Commodities and Inflation Hedging",
        studyBrief: "Commodities -- raw materials like oil, gold, wheat, and copper -- are an important asset class for portfolio diversification because they often move independently of stocks and bonds. Gold has historically served as a store of value and inflation hedge, though it produces no cash flows -- its value is driven entirely by supply, demand, and investor sentiment. Oil prices affect the entire global economy through energy costs; the OPEC+ cartel influences supply by coordinating production among member nations. Inflation-Protected Securities (TIPS) are US government bonds where the principal adjusts with the Consumer Price Index (CPI), providing a direct inflation hedge. Real assets like commodities, real estate, and infrastructure tend to outperform financial assets during inflationary periods.",
        questions: [
          {
            type: "multiple_choice",
            question: "Why do investors hold gold in their portfolios?",
            options: [
              "As an inflation hedge and store of value that often moves independently of stocks and bonds",
              "Because gold produces reliable dividend income and coupon payments",
              "Because governments guarantee gold prices will never decline",
              "To gain exposure to industrial production and manufacturing activity"
            ],
            correct: 0,
            explanation: "Gold's low correlation with financial assets and historical role as a store of value make it a popular portfolio diversifier and hedge against inflation and currency debasement."
          },
          {
            type: "true_false",
            question: "TIPS (Treasury Inflation-Protected Securities) adjust their principal value based on changes in the Consumer Price Index.",
            correct: true,
            explanation: "TIPS principal rises with CPI inflation, meaning both the interest payments and the final repayment grow in real terms -- providing a guaranteed inflation-protected return."
          },
          {
            type: "multiple_choice",
            question: "What is OPEC+'s primary mechanism for influencing global oil prices?",
            options: [
              "Coordinating production quotas among member nations to control supply",
              "Setting a global price floor that all oil producers must honor",
              "Taxing oil sales from non-member countries to raise prices",
              "Investing in renewable energy to reduce future oil demand"
            ],
            correct: 0,
            explanation: "OPEC+ controls a significant share of global oil production -- by agreeing to cut or increase quotas, member nations can shift global supply and drive prices up or down."
          },
          {
            type: "word_bank",
            question: "Commodities tend to ___ during inflationary periods, making them a useful ___ for financial portfolios.",
            blanks: ["outperform", "hedge"],
            options: ["outperform", "hedge", "underperform", "risk", "decline"],
            explanation: "Because commodity prices are a direct input to inflation, they naturally rise during inflationary periods -- making them a useful counterweight to stocks and bonds, which tend to struggle with high inflation."
          },
          {
            type: "true_false",
            question: "Gold generates predictable cash flows like dividends, which is a key reason investors value it as an asset.",
            correct: false,
            explanation: "Gold produces no cash flows -- no dividends, no coupons, no rent. Its return comes entirely from price appreciation, which is why Warren Buffett famously avoids it as a long-term investment."
          }
        ]
      }
    ]
  }
];

export function getAllPart2Lessons() {
  const lessons = [];
  part2Units.forEach(unit => {
    unit.lessons.forEach(lesson => {
      lessons.push({ ...lesson, unitId: unit.id, unitTitle: unit.title, unitColor: unit.color });
    });
  });
  return lessons;
}

export function getPart2LessonById(id) {
  for (const unit of part2Units) {
    const lesson = unit.lessons.find(l => l.id === id);
    if (lesson) return { ...lesson, unitId: unit.id, unitTitle: unit.title, unitColor: unit.color };
  }
  return null;
}