export const units = [
  {
    id: "unit-1",
    title: "Stocks, Bonds & Portfolio Theory",
    description: "Master the mechanics of equity and debt markets",
    color: "from-emerald-400 to-emerald-600",
    lessons: [
      {
        id: "1-1",
        title: "Equity vs. Debt: Stocks and Bonds",
        studyBrief: "A stock represents partial ownership (equity) in a company. Shareholders earn returns through price appreciation and dividends, but bear risk if the company underperforms. A bond is a debt instrument -- the investor loans money to a corporation or government in exchange for periodic interest (coupon payments) and the return of principal at maturity. Equity sits below debt in the capital structure, meaning bondholders are paid first in bankruptcy. This seniority is why bonds are generally less volatile than stocks. Understanding both instruments is foundational to building any investment portfolio.",
        questions: [
          {
            type: "multiple_choice",
            question: "In a company's capital structure, who gets paid first in the event of bankruptcy?",
            options: [
              "Bondholders (debt holders)",
              "Common stockholders",
              "Preferred stockholders",
              "Company executives"
            ],
            correct: 0,
            explanation: "Bondholders are creditors with seniority over equity holders -- they are paid before any shareholders in a liquidation."
          },
          {
            type: "true_false",
            question: "A stockholder is a partial owner of a company, while a bondholder is a creditor who has lent money to it.",
            correct: true,
            explanation: "Stocks represent ownership (equity); bonds represent debt owed by the company to the investor."
          },
          {
            type: "multiple_choice",
            question: "What is a coupon payment in bond investing?",
            options: [
              "Periodic interest payments made to the bondholder",
              "A discount given to early bond buyers",
              "A penalty fee for selling bonds early",
              "The face value returned at maturity"
            ],
            correct: 0,
            explanation: "A coupon is the regular interest payment a bondholder receives, typically semi-annually, until the bond matures."
          },
          {
            type: "word_bank",
            question: "Stocks represent ___ in a company, while bonds represent ___ to a company.",
            blanks: ["ownership", "lending"],
            options: ["ownership", "lending", "insurance", "taxation", "donation"],
            explanation: "Buying stock makes you a part-owner; buying a bond makes you a lender who expects repayment with interest."
          },
          {
            type: "true_false",
            question: "Because bondholders have seniority over stockholders, bonds typically offer higher returns than stocks over the long run.",
            correct: false,
            explanation: "Lower risk means lower expected return -- stocks have historically outperformed bonds over long periods precisely because they carry more risk."
          }
        ]
      },
      {
        id: "1-2",
        title: "How Stock Markets Work",
        studyBrief: "Stock exchanges like the NYSE and NASDAQ are marketplaces where buyers and sellers trade shares. Prices are driven by supply and demand -- when more people want to buy than sell, prices rise; when sellers outnumber buyers, prices fall. Market capitalization (market cap) is calculated by multiplying share price by total shares outstanding and reflects a company's total market value. Indices like the S&P 500 and Dow Jones Industrial Average track the average performance of a basket of stocks, serving as benchmarks for the overall market.",
        questions: [
          {
            type: "multiple_choice",
            question: "How is a company's market capitalization calculated?",
            options: [
              "Share price multiplied by total shares outstanding",
              "Annual revenue minus total expenses",
              "Total assets minus total liabilities",
              "Net income divided by shares outstanding"
            ],
            correct: 0,
            explanation: "Market cap = share price x shares outstanding. It reflects what the market believes the entire company is worth."
          },
          {
            type: "true_false",
            question: "The S&P 500 tracks the performance of the 500 largest publicly traded companies in the US.",
            correct: true,
            explanation: "The S&P 500 is the most widely followed benchmark for the US stock market, representing roughly 80% of total US market cap."
          },
          {
            type: "multiple_choice",
            question: "If more investors want to sell a stock than buy it, what typically happens to the price?",
            options: [
              "The price falls",
              "The price rises",
              "The price stays the same",
              "The company issues more shares"
            ],
            correct: 0,
            explanation: "Excess supply relative to demand pushes prices down -- the same supply and demand mechanics that govern any market."
          },
          {
            type: "word_bank",
            question: "Stock ___ like the NYSE match ___ and sellers to set share prices.",
            blanks: ["exchanges", "buyers"],
            options: ["exchanges", "buyers", "banks", "governments", "regulators"],
            explanation: "Exchanges are organized marketplaces that facilitate price discovery by connecting buyers and sellers of securities."
          },
          {
            type: "true_false",
            question: "A stock index like the Dow Jones gives investors a snapshot of how a broad set of companies are performing.",
            correct: true,
            explanation: "Indices aggregate the performance of multiple stocks into a single number, making it easy to gauge overall market direction."
          }
        ]
      },
      {
        id: "1-3",
        title: "Portfolio Theory and Diversification",
        studyBrief: "Modern Portfolio Theory (MPT), developed by Harry Markowitz, argues that investors can optimize returns for a given level of risk by diversifying across assets that do not move in perfect correlation. Correlation measures how two assets move relative to each other: a correlation of +1 means they move identically, while -1 means they move in opposite directions. Combining assets with low or negative correlation reduces portfolio volatility without sacrificing expected return. The efficient frontier represents the set of portfolios offering the best possible return for each level of risk. Asset allocation -- the split between stocks, bonds, and other assets -- is the primary driver of long-term portfolio performance.",
        questions: [
          {
            type: "multiple_choice",
            question: "What does Modern Portfolio Theory argue investors can achieve through diversification?",
            options: [
              "Optimized returns for a given level of risk",
              "Guaranteed profits regardless of market conditions",
              "Elimination of all investment risk",
              "Higher returns by concentrating in one asset"
            ],
            correct: 0,
            explanation: "MPT shows that combining assets with low correlation reduces portfolio risk without proportionally reducing expected return -- the foundation of diversification."
          },
          {
            type: "true_false",
            question: "Two assets with a correlation of -1 move in exactly opposite directions.",
            correct: true,
            explanation: "A correlation of -1 is perfect negative correlation -- when one asset rises, the other falls by an equivalent amount, providing maximum diversification benefit."
          },
          {
            type: "multiple_choice",
            question: "What is 'asset allocation'?",
            options: [
              "The distribution of a portfolio across stocks, bonds, and other asset classes",
              "The process of picking the best individual stocks",
              "The fee charged by a fund manager",
              "The total value of all investments held"
            ],
            correct: 0,
            explanation: "Asset allocation -- how you divide your portfolio among asset classes -- is widely considered the primary driver of long-term investment returns."
          },
          {
            type: "word_bank",
            question: "The ___ frontier shows the portfolios with the best ___ for each level of risk.",
            blanks: ["efficient", "return"],
            options: ["efficient", "return", "costly", "loss", "market"],
            explanation: "The efficient frontier is the set of optimal portfolios that offer the highest expected return for a defined level of risk."
          },
          {
            type: "true_false",
            question: "Combining assets with high positive correlation provides stronger diversification benefits than combining low-correlation assets.",
            correct: false,
            explanation: "High positive correlation means assets move together -- combining them does little to reduce portfolio volatility. Low or negative correlation is what creates diversification."
          }
        ]
      }
    ]
  },
  {
    id: "unit-2",
    title: "Advanced Market Economics",
    description: "Analyze price mechanisms, market failures, and competition",
    color: "from-blue-400 to-blue-600",
    lessons: [
      {
        id: "2-1",
        title: "Price Elasticity and Consumer Behavior",
        studyBrief: "Price elasticity of demand measures how sensitive consumers are to price changes. It is calculated as the percentage change in quantity demanded divided by the percentage change in price. If the result is greater than 1, demand is elastic (consumers are sensitive to price). If less than 1, demand is inelastic (consumers buy roughly the same amount regardless of price changes). Necessities like insulin tend to be inelastic; luxury goods like designer handbags are elastic. Businesses use elasticity to set prices -- raising prices on inelastic goods increases revenue, while raising prices on elastic goods can cause sales to collapse.",
        questions: [
          {
            type: "multiple_choice",
            question: "If a 10% price increase causes a 25% drop in quantity demanded, demand is:",
            options: [
              "Elastic (sensitive to price)",
              "Inelastic (insensitive to price)",
              "Perfectly inelastic",
              "Unit elastic"
            ],
            correct: 0,
            explanation: "Elasticity = 25% / 10% = 2.5, which is greater than 1, meaning demand is elastic -- consumers are highly responsive to this price change."
          },
          {
            type: "true_false",
            question: "Necessities like life-saving medication tend to have inelastic demand because consumers must buy them regardless of price.",
            correct: true,
            explanation: "When there are no substitutes and the product is essential, consumers continue purchasing even as prices rise -- classic inelastic demand."
          },
          {
            type: "multiple_choice",
            question: "A business selling an inelastic product should consider raising prices because:",
            options: [
              "Revenue will increase even as quantity sold drops slightly",
              "Customers will buy more when prices are higher",
              "The government mandates higher prices for necessities",
              "Competitors will lower their prices in response"
            ],
            correct: 0,
            explanation: "With inelastic demand, the revenue gained from a higher price outweighs the small drop in units sold -- total revenue increases."
          },
          {
            type: "word_bank",
            question: "Price elasticity is calculated by dividing the percentage change in ___ demanded by the percentage change in ___.",
            blanks: ["quantity", "price"],
            options: ["quantity", "price", "supply", "income", "profit"],
            explanation: "Elasticity = % change in quantity demanded / % change in price. A result above 1 means elastic; below 1 means inelastic."
          },
          {
            type: "true_false",
            question: "Luxury goods typically have inelastic demand because consumers consider them essential.",
            correct: false,
            explanation: "Luxury goods are elastic -- consumers can easily forgo them when prices rise, making demand highly sensitive to price changes."
          }
        ]
      },
      {
        id: "2-2",
        title: "Market Structures and Competition",
        studyBrief: "Markets are classified by the level of competition among sellers. A perfectly competitive market has many sellers offering identical products with no single seller controlling price -- participants are 'price takers.' A monopoly has one dominant seller with significant pricing power. An oligopoly features a small number of large firms (like the airline industry) that are interdependent -- one firm's pricing decision affects all others. A monopolistically competitive market has many sellers offering differentiated products (like fast food chains). Market power -- the ability to set prices above competitive levels -- leads to higher prices and reduced output, which is why antitrust regulators monitor monopolies and oligopolies.",
        questions: [
          {
            type: "multiple_choice",
            question: "In a perfectly competitive market, individual firms are called 'price takers' because:",
            options: [
              "They have no power to influence the market price",
              "They set prices higher than the market rate",
              "The government controls their pricing",
              "They compete only on quality, not price"
            ],
            correct: 0,
            explanation: "With many identical sellers, no single firm can raise its price without losing all customers to competitors -- so they must accept the market price."
          },
          {
            type: "true_false",
            question: "An oligopoly is characterized by a small number of large firms whose pricing decisions are interdependent.",
            correct: true,
            explanation: "In an oligopoly, each firm must consider how rivals will respond to its pricing moves -- making strategic interdependence the defining feature."
          },
          {
            type: "multiple_choice",
            question: "Which market structure gives a single seller the most pricing power?",
            options: [
              "Monopoly",
              "Perfect competition",
              "Monopolistic competition",
              "Oligopoly"
            ],
            correct: 0,
            explanation: "A monopolist faces no direct competition, allowing it to set prices significantly above competitive levels -- the definition of maximum market power."
          },
          {
            type: "word_bank",
            question: "A ___ has one dominant seller, while an ___ has a few large competing firms.",
            blanks: ["monopoly", "oligopoly"],
            options: ["monopoly", "oligopoly", "cartel", "cooperative", "exchange"],
            explanation: "Monopolies and oligopolies both have significant market power, but oligopolies involve strategic competition among a small group of large firms."
          },
          {
            type: "true_false",
            question: "Antitrust laws exist to promote competition and prevent companies from gaining excessive market power.",
            correct: true,
            explanation: "Laws like the Sherman Antitrust Act give regulators the power to break up monopolies and block mergers that would harm competition."
          }
        ]
      },
      {
        id: "2-3",
        title: "Market Failures and Externalities",
        studyBrief: "A market failure occurs when free markets allocate resources inefficiently. Externalities are costs or benefits that fall on third parties not involved in a transaction. Negative externalities (like factory pollution) cause overproduction because the producer does not pay the full social cost. Positive externalities (like education) cause underproduction because the provider cannot capture all the social benefit. Governments address these failures through taxes on negative externalities (Pigouvian taxes), subsidies for positive ones, or direct regulation. Public goods -- non-excludable and non-rivalrous, like national defense -- are chronically underprovided by private markets because of the free-rider problem.",
        questions: [
          {
            type: "multiple_choice",
            question: "A factory that pollutes a river without paying for the environmental damage is an example of:",
            options: [
              "A negative externality",
              "A positive externality",
              "A public good",
              "Perfect competition"
            ],
            correct: 0,
            explanation: "A negative externality is a cost imposed on third parties not involved in the transaction -- the factory profits while society bears the environmental cost."
          },
          {
            type: "true_false",
            question: "Positive externalities tend to cause underproduction because producers cannot capture all the social benefits they create.",
            correct: true,
            explanation: "Education benefits society beyond the individual student, but schools can only charge the student -- so education is underproduced relative to its true social value."
          },
          {
            type: "multiple_choice",
            question: "What is a Pigouvian tax?",
            options: [
              "A tax on activities that create negative externalities, like pollution",
              "A tax on imported goods to protect domestic industry",
              "A flat income tax applied to all citizens equally",
              "A tax on luxury goods to reduce inequality"
            ],
            correct: 0,
            explanation: "A Pigouvian tax forces producers to internalize the social cost of their negative externalities, reducing overproduction to the socially optimal level."
          },
          {
            type: "word_bank",
            question: "Public goods suffer from the ___ problem, where people benefit without ___ for the cost.",
            blanks: ["free-rider", "paying"],
            options: ["free-rider", "paying", "inflation", "earning", "monopoly"],
            explanation: "Because public goods are non-excludable, people can enjoy them without paying -- making private provision unprofitable and government provision necessary."
          },
          {
            type: "true_false",
            question: "National defense is a private good because only those who pay for it receive its benefits.",
            correct: false,
            explanation: "National defense is a classic public good -- it is non-excludable (you can't deny protection to non-payers) and non-rivalrous (one person's protection doesn't reduce another's)."
          }
        ]
      }
    ]
  },
  {
    id: "unit-3",
    title: "Personal Finance and Wealth Building",
    description: "Build a complete financial plan for long-term wealth",
    color: "from-purple-400 to-purple-600",
    lessons: [
      {
        id: "3-1",
        title: "Advanced Budgeting and Tax Strategy",
        studyBrief: "Effective personal finance begins with understanding your full income picture. Gross income is your total earnings; adjusted gross income (AGI) reflects deductions like student loan interest or retirement contributions; taxable income is what remains after the standard or itemized deduction. Marginal tax rates apply only to income within each bracket -- not your total income. Tax-advantaged accounts like 401(k)s and IRAs allow contributions to grow tax-deferred or tax-free, dramatically compounding wealth over time. Understanding the difference between a tax deduction (which reduces taxable income) and a tax credit (which directly reduces taxes owed) is critical for optimizing your tax bill.",
        questions: [
          {
            type: "multiple_choice",
            question: "What is the difference between a tax deduction and a tax credit?",
            options: [
              "A deduction reduces taxable income; a credit directly reduces taxes owed",
              "A deduction reduces taxes owed; a credit reduces taxable income",
              "They are two terms for the same thing",
              "A credit only applies to businesses, not individuals"
            ],
            correct: 0,
            explanation: "A $1,000 deduction saves you $1,000 x your tax rate; a $1,000 credit saves you the full $1,000 -- credits are generally more valuable dollar-for-dollar."
          },
          {
            type: "true_false",
            question: "Contributing to a 401(k) reduces your taxable income in the year you make the contribution.",
            correct: true,
            explanation: "Traditional 401(k) contributions are pre-tax, directly reducing your AGI and therefore your current-year tax bill."
          },
          {
            type: "multiple_choice",
            question: "Your marginal tax rate applies to:",
            options: [
              "Only the income earned above the current bracket threshold",
              "All of your income equally",
              "Only your investment income",
              "Income earned from self-employment only"
            ],
            correct: 0,
            explanation: "The US uses a progressive marginal system -- only income above each bracket threshold is taxed at that bracket's rate, not your entire income."
          },
          {
            type: "word_bank",
            question: "A ___ account lets your investments grow tax-free or tax-deferred, while a ___ deduction lowers your taxable income.",
            blanks: ["retirement", "standard"],
            options: ["retirement", "standard", "checking", "itemized", "brokerage"],
            explanation: "Retirement accounts (401k, IRA) shelter investment growth from taxes; the standard deduction reduces the income you are taxed on in the first place."
          },
          {
            type: "true_false",
            question: "A $1,000 tax credit and a $1,000 tax deduction result in the same reduction to your final tax bill.",
            correct: false,
            explanation: "A $1,000 credit reduces your tax bill by $1,000. A $1,000 deduction only reduces your bill by $1,000 multiplied by your marginal rate (e.g., $220 at 22%)."
          }
        ]
      },
      {
        id: "3-2",
        title: "Credit, Debt, and Interest",
        studyBrief: "Your credit score (300-850) is a numerical representation of your creditworthiness, calculated from payment history (35%), amounts owed (30%), length of credit history (15%), credit mix (10%), and new credit (10%). A higher score unlocks lower interest rates on mortgages, auto loans, and credit cards, saving tens of thousands of dollars over a lifetime. The Annual Percentage Rate (APR) is the true annual cost of borrowing, including fees. Credit card debt is particularly dangerous because of compound interest -- carrying a balance at 20% APR can cause debt to snowball rapidly. The debt avalanche method (paying highest-interest debt first) minimizes total interest paid; the debt snowball (paying smallest balance first) provides psychological momentum.",
        questions: [
          {
            type: "multiple_choice",
            question: "Which factor has the greatest weight in calculating your credit score?",
            options: [
              "Payment history (35%)",
              "Amounts owed (30%)",
              "Length of credit history (15%)",
              "New credit inquiries (10%)"
            ],
            correct: 0,
            explanation: "Payment history is the single biggest factor -- consistently paying bills on time is the most effective way to build and maintain a strong credit score."
          },
          {
            type: "true_false",
            question: "A higher credit score typically results in lower interest rates on loans and credit cards.",
            correct: true,
            explanation: "Lenders reward low-risk borrowers with lower rates -- even a 1% rate reduction on a 30-year mortgage can save over $50,000 in total interest."
          },
          {
            type: "multiple_choice",
            question: "What does APR stand for, and what does it measure?",
            options: [
              "Annual Percentage Rate -- the true yearly cost of borrowing including fees",
              "Average Payment Rate -- your monthly minimum payment",
              "Adjusted Principal Rate -- the interest on your original loan balance only",
              "Annual Profit Ratio -- the return on a savings account"
            ],
            correct: 0,
            explanation: "APR includes both the interest rate and fees, giving borrowers a standardized way to compare the true cost of different loan products."
          },
          {
            type: "word_bank",
            question: "The debt ___ method pays the highest-interest debt first, while the debt ___ pays the smallest balance first.",
            blanks: ["avalanche", "snowball"],
            options: ["avalanche", "snowball", "cascade", "spiral", "ladder"],
            explanation: "The avalanche minimizes total interest paid; the snowball builds motivation through quick wins -- choose based on your financial situation and psychology."
          },
          {
            type: "true_false",
            question: "Carrying a high credit card balance relative to your limit (high credit utilization) helps improve your credit score.",
            correct: false,
            explanation: "High utilization signals financial stress to lenders and hurts your score -- keeping utilization below 30% (ideally below 10%) is recommended."
          }
        ]
      }
    ]
  },
  {
    id: "unit-4",
    title: "Advanced Investing",
    description: "Options, ETFs, factor investing, and behavioral finance",
    color: "from-amber-400 to-amber-600",
    lessons: [
      {
        id: "4-1",
        title: "Options, Futures, and Derivatives",
        studyBrief: "Derivatives are financial instruments whose value is derived from an underlying asset like a stock, commodity, or currency. A call option gives the buyer the right -- but not the obligation -- to purchase an asset at a set price (strike price) before a set date (expiration). A put option gives the right to sell. Options buyers pay a premium for this right. Futures contracts obligate both parties to buy or sell an asset at a predetermined price on a future date -- used by farmers to lock in crop prices and airlines to hedge fuel costs. Derivatives can be used for hedging (reducing risk) or speculation (amplifying potential gains and losses).",
        questions: [
          {
            type: "multiple_choice",
            question: "What does a call option give its holder the right to do?",
            options: [
              "Buy an asset at the strike price before expiration",
              "Sell an asset at the strike price before expiration",
              "Borrow shares to sell them short",
              "Receive dividends from the underlying stock"
            ],
            correct: 0,
            explanation: "A call option is the right to buy -- if the asset's market price rises above the strike price, the call holder profits by buying at the lower strike price."
          },
          {
            type: "true_false",
            question: "Unlike options, futures contracts obligate both the buyer and seller to complete the transaction.",
            correct: true,
            explanation: "Options give the right but not the obligation to transact; futures are binding contracts -- both parties must fulfill the agreement at the specified price and date."
          },
          {
            type: "multiple_choice",
            question: "An airline buying oil futures to lock in fuel prices is an example of:",
            options: [
              "Hedging to reduce risk",
              "Speculating to profit from price changes",
              "Arbitrage across markets",
              "Short selling the commodity"
            ],
            correct: 0,
            explanation: "Hedging uses derivatives to offset risk in an existing exposure -- the airline reduces uncertainty about future fuel costs, not to profit from price moves."
          },
          {
            type: "word_bank",
            question: "A ___ option gives you the right to buy, while a ___ option gives you the right to sell.",
            blanks: ["call", "put"],
            options: ["call", "put", "forward", "swap", "futures"],
            explanation: "Call = right to buy (you profit if price rises). Put = right to sell (you profit if price falls). Together they are the building blocks of options strategies."
          },
          {
            type: "true_false",
            question: "Derivatives can only be used for speculation and never for risk management.",
            correct: false,
            explanation: "Derivatives were originally designed for hedging -- farmers, airlines, and exporters routinely use them to reduce, not increase, their risk exposure."
          }
        ]
      },
      {
        id: "4-2",
        title: "ETFs, Index Funds, and Factor Investing",
        studyBrief: "An Exchange-Traded Fund (ETF) is a basket of securities that trades on an exchange like a single stock. Index ETFs passively track a benchmark like the S&P 500, offering broad diversification at very low cost (expense ratios often below 0.1%). Actively managed funds charge higher fees (often 1%+) and attempt to beat the index, but research consistently shows most active managers underperform over the long run -- partly due to fees. Factor investing targets specific characteristics shown to deliver excess returns: value (cheap relative to fundamentals), momentum (recent winners continue outperforming), and quality (high profitability companies). These 'smart beta' strategies sit between pure indexing and active management.",
        questions: [
          {
            type: "multiple_choice",
            question: "What is an index ETF designed to do?",
            options: [
              "Passively track the performance of a market benchmark at low cost",
              "Actively pick winning stocks to beat the market",
              "Invest only in government bonds",
              "Guarantee a fixed annual return"
            ],
            correct: 0,
            explanation: "Index ETFs replicate the holdings and returns of a benchmark index -- their goal is to match the market, not beat it, keeping costs extremely low."
          },
          {
            type: "true_false",
            question: "Research consistently shows that most actively managed funds underperform their benchmark index over long periods, especially after fees.",
            correct: true,
            explanation: "The SPIVA report consistently shows 80-90% of active managers underperform their benchmark over 15-year periods -- fees are a major culprit."
          },
          {
            type: "multiple_choice",
            question: "Which of the following is a recognized investment factor associated with excess returns?",
            options: [
              "Value -- stocks cheap relative to their fundamentals",
              "Popularity -- stocks with the most media coverage",
              "Volatility -- the most price-volatile stocks",
              "Size -- preferring the largest companies by market cap"
            ],
            correct: 0,
            explanation: "The value factor -- buying cheap stocks relative to earnings, book value, or cash flow -- has historically delivered excess returns across markets and time periods."
          },
          {
            type: "word_bank",
            question: "An ETF's ___ ratio is the annual fee charged to investors, which directly ___ net returns.",
            blanks: ["expense", "reduces"],
            options: ["expense", "reduces", "profit", "increases", "dividend"],
            explanation: "Every basis point in fees is a direct drag on returns -- a 1% expense ratio compounds into a massive cost disadvantage over a 30-year investment horizon."
          },
          {
            type: "true_false",
            question: "A 1% annual fee difference between two funds has no meaningful impact on wealth over a 30-year investment horizon.",
            correct: false,
            explanation: "A 1% fee difference on a $100K portfolio earning 7% annually costs over $180,000 in foregone wealth over 30 years -- fees compound just like returns do."
          }
        ]
      },
      {
        id: "4-3",
        title: "Behavioral Finance",
        studyBrief: "Behavioral finance studies how psychological biases cause investors to make irrational decisions that hurt returns. Loss aversion means investors feel the pain of losses roughly twice as strongly as the pleasure of equivalent gains -- causing them to hold losing stocks too long and sell winners too early. Confirmation bias leads investors to seek information that confirms their existing beliefs while ignoring contradictory evidence. Herding behavior occurs when investors follow the crowd into bubbles or out of markets at the worst times. Overconfidence causes investors to trade too frequently, increasing costs and reducing returns. Understanding these biases is the first step to overcoming them.",
        questions: [
          {
            type: "multiple_choice",
            question: "Loss aversion describes the tendency for investors to:",
            options: [
              "Feel the pain of losses more strongly than the pleasure of equivalent gains",
              "Avoid all investments with any possibility of loss",
              "Sell winning investments too quickly to lock in profits",
              "Follow the crowd regardless of fundamentals"
            ],
            correct: 0,
            explanation: "Kahneman and Tversky found losses feel roughly twice as painful as equivalent gains feel pleasurable -- this asymmetry drives many costly investor mistakes."
          },
          {
            type: "true_false",
            question: "Confirmation bias causes investors to seek out information that challenges their existing investment thesis.",
            correct: false,
            explanation: "Confirmation bias does the opposite -- investors actively seek information that confirms what they already believe and dismiss contradictory evidence."
          },
          {
            type: "multiple_choice",
            question: "An investor who refuses to sell a stock that has dropped 60% because they 'don't want to lock in a loss' is demonstrating:",
            options: [
              "Loss aversion",
              "Overconfidence",
              "Herding behavior",
              "Confirmation bias"
            ],
            correct: 0,
            explanation: "This is a classic loss aversion trap -- the investor lets the fear of realizing a loss override rational decision-making about the stock's actual future prospects."
          },
          {
            type: "word_bank",
            question: "___ behavior occurs when investors follow the crowd, often buying at market ___ and selling at bottoms.",
            blanks: ["Herding", "peaks"],
            options: ["Herding", "peaks", "Rational", "bottoms", "Passive"],
            explanation: "Herding causes investors to pile in near market tops (when sentiment is euphoric) and panic-sell near bottoms (when fear is highest) -- the opposite of buy low, sell high."
          },
          {
            type: "true_false",
            question: "Overconfident investors tend to trade more frequently, which research shows generally improves their returns.",
            correct: false,
            explanation: "Barber and Odean found that overconfident investors who trade frequently earn significantly lower net returns than those who trade less -- transaction costs and poor timing compound the damage."
          }
        ]
      }
    ]
  }
];

export function getAllLessons() {
  const lessons = [];
  units.forEach(unit => {
    unit.lessons.forEach(lesson => {
      lessons.push({ ...lesson, unitId: unit.id, unitTitle: unit.title, unitColor: unit.color });
    });
  });
  return lessons;
}

export function getLessonById(id) {
  for (const unit of units) {
    const lesson = unit.lessons.find(l => l.id === id);
    if (lesson) return { ...lesson, unitId: unit.id, unitTitle: unit.title, unitColor: unit.color };
  }
  return null;
}

export function getNextLessonId(completedLessons) {
  const allLessons = getAllLessons();
  for (const lesson of allLessons) {
    if (!completedLessons?.includes(lesson.id)) return lesson.id;
  }
  return null;
}