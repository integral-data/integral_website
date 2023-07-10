import {
  BadgePython,
  BadgeGithub,
  BadgeExcel,
  BadgeAPIs,
  // BadgeDjango,
  BadgePowerBI,
  BadgeSelenium,
  BadgePandas,
  BadgeJupyter,
  // BadgeAWS,
  // BadgeHTML,
  // BadgeCSS,
  BadgeSQL,
  // BadgeFlask,
  // BadgeTableau,
  ChipPython,
  ChipGithub,
  ChipExcel,
  ChipAPIs,
  // ChipDjango,
  // ChipTableau,
  ChipPowerBI,
  ChipSelenium,
  ChipPandas,
  ChipJupyter,
  // ChipAWS,
  // ChipHTML,
  // ChipCSS,
  ChipSQL,
  // ChipFlask,
} from "../components/TechnologyBadge";
import metric from "../images/metric-design.png";

export const caseStudiesData = [
  {
    id: 1,
    title: "Data Migration from E123 to Salesforce",
    subheader:
      "Automated Data Synchronization for Seamless Platform Transition",
    author: "Jeff Barton",
    datePosted: "2023",
    badges: [
      <BadgePython />,
      <BadgePandas />,
      <BadgeSelenium />,
      <BadgeGithub />,
      <BadgeExcel />,
    ],
    chips: [
      <ChipPython />,
      <ChipPandas />,
      <ChipSelenium />,
      <ChipGithub />,
      <ChipExcel />,
    ],
    categories: ['Data Migration'],
    content: `## The Issue\n\nThe client was transitioning from their old enrollment platform, E123, to Salesforce. However, they only migrated the minimum amount of tables from E123, leaving a significant amount of data behind.\n\n## Our Solution\n\nTo solve this, we wrote automated synchronization code in Python. This code performed a nightly synchronization from E123 to Salesforce, ensuring that all necessary data was consistently transferred to the new platform.\n\n## The Outcome\n\nOur solution made the transition to Salesforce seamless and ensured no critical data was lost in the process. The client was pleased with the ease of transition and the assurance that their data was reliably synced each night. This solution showcased our expertise in data management and automation.`,
  },

  {
    id: 2,
    title: "Power BI Analytics Platform for Health Company",
    subheader: "Building Comprehensive Data Analytics with Power BI",
    author: "Jeff Barton",
    datePosted: "2021",
    badges: [
      <BadgePython />,
      <BadgePandas />,
      <BadgePowerBI />,
      <BadgeGithub />,
      <BadgeExcel />,
    ],
    chips: [
      <ChipPython />,
      <ChipPandas />,
      <ChipPowerBI />,
      <ChipGithub />,
      <ChipExcel />,
    ],
    categories: ['Analytics'],
    content: `## The Challenge\n\nA **health company** needed an analytics platform to pull and analyze data from different sources. They were operating with enrollment data and claims data scattered across two different platforms, making it difficult to gain insights from their data.\n\n## Our Solution\n\nWe built a comprehensive analytics platform using Power BI. We pulled enrollment data from one platform and claims data from another. Although we performed some data transformations in Python, the majority of transformations were carried out directly within Power BI, leveraging its powerful data processing capabilities.\n\n## The Outcome\n\nThe implementation of the Power BI analytics platform revolutionized the client's data analysis capabilities. They could now effectively visualize, analyze, and generate insights from their consolidated data. This solution reaffirmed our expertise in data management and analytics.`,
  },


  {
    id: 3,
    title: "Transforming 10,000+ Column CSV Files into Clean, Usable Datasets",
    subheader:
      "Automating Data Analysis and Cleansing for a Health Insurance Client",
    author: "Jeff Barton",
    datePosted: "2021",
    badges: [<BadgePython />, <BadgePandas />, <BadgeGithub />, <BadgeExcel />],
    categories: ['Data Cleansing'],
    content: `## The Challenge\n\nWe were approached by a **health insurance client** who was overwhelmed by the complexity of data they were receiving from a vendor handling their claims. The vendor supplied them with around _15 CSV files_, some of which boasted _thousands of columns_ and _hundreds of thousands of rows_. Analyzing this data manually was virtually impossible and incredibly time-consuming.\n\n## Our Approach\n\nTo tackle this, we turned to automation. We wrote sophisticated code designed to:\n\n1. Navigate through each file\n2. Determine which columns likely held relevant data\n3. Extract the useful information\n4. Considerably condense each dataset\n\nBy automating the data analysis, we were able to efficiently distill the important information from the dauntingly large CSV files.\n\n## Data Cleaning\n\nIn addition to analyzing and condensing the data, we also ensured it was in perfect shape for their analytics platform. Our code carried out thorough data cleaning operations to eliminate errors, inaccuracies, or inconsistencies that could jeopardize the accuracy of further analysis.\n\n## The Outcome\n\nThe result was a streamlined, clean dataset that our client could immediately plug into their analytics platform. What once was an overwhelming and unwieldy set of CSV files, turned into a reliable foundation for their data-driven decisions. This project reaffirmed our ability to leverage technical expertise to tackle complex business challenges, further strengthening our client's trust in our capabilities.`,
  },

  {
    id: 4,
    title: "Custom CRM Tool Development",
    subheader: "From Concept to Deployment with Ruby-on-Rails",
    author: "Jeff Barton",
    datePosted: "2016",
    categories: ['Database Creation'],
    content: `## The Challenge\n\nWe were approached by a health sharing company, who were in need of a CRM tool built from scratch. They required a custom back-end database architecture and a web-based front end that would enable their administrative team to efficiently manage all their clients.\n\n## Our Solution\n\nLeveraging the _Ruby-on-Rails_ framework, we developed a CRM tool tailored to the specific business needs of our client. The back-end database architecture was built using _PostgreSQL_. The front end was web-based, providing the administrative team with a user-friendly interface to track their clients.\n\n## Key Features\n\nThe tool kept track of numerous variables including, but not limited to:\n\n1. Programs offered by benefits providers\n2. Carriers (Aflac, Transamerica, etc.)\n3. Clients and their respective employees\n4. Agents selling the policies\n5. Attachments (PDFs, JPGs, etc.)\n6. Cases related to any issues with clients or their employees\n7. Policies and their basic details\n\n## The Outcome\n\nThe CRM tool streamlined operations for Select Choice. It served as a one-stop solution for managing their clients, policies, agents, and more. This project is another testament to our ability to develop custom software solutions that address specific business needs and yield tangible results.`,
  },


  {
    id: 5,
    title: "Automating Data Retrieval for a Wealth Management Firm",
    subheader:
      "Building a Web Scraping Tool to Efficiently Extract Customer Data",
    author: "Jeff Barton",
    datePosted: "2020",
    badges: [
      <BadgePython />,
      <BadgePandas />,
      <BadgeSelenium />,
      <BadgeGithub />,
      <BadgeExcel />,
    ],
    chips: [
      <ChipPython />,
      <ChipPandas />,
      <ChipSelenium />,
      <ChipGithub />,
      <ChipExcel />,
    ],
    categories: ['Web Scraping'],
    content: `## The Challenge\n\nWe were approached by a **wealth management client** who faced an extremely tedious and error-prone process for retrieving customer data. Their front-end system held all the necessary client data. However, agents had to manually sift through each customer's data one-by-one – a formidable task considering they had _thousands of customers_.\n\n## Our Solution\n\nRecognizing the inefficiency and potential for errors in their current process, we proposed the creation of a **web scraping tool**. After receiving approval from the client and vendor, we set to work.\n\nThe tool we developed was designed to:\n\n1. Systematically access the front-end system\n2. Efficiently extract the necessary data\n3. Clean and standardize the data for further use\n\n## The Outcome\n\nThe result was a powerful tool that eliminated the need for manual data retrieval. Agents no longer had to painstakingly navigate through individual client data. Instead, they had all the necessary data at their fingertips, cleaned, standardized, and ready for use.\n\nOur client was thrilled with the time savings and the reliability of the data. This project served as yet another testament to our ability to devise technical solutions to business challenges, significantly improving efficiency and accuracy.`,
  },

  {
    id: 6,
    title: "Zoho Database Synchronization for Optimized Data Management",
    subheader: "Automating Data Synchronization Between Excel and CRM",
    author: "Jeff Barton",
    datePosted: "2022",
    badges: [<BadgePython />, <BadgePandas />, <BadgeAPIs />, <BadgeGithub />],
    chips: [<ChipPython />, <ChipPandas />, <ChipAPIs />, <ChipGithub />],
    categories: ['Data Migration'],
    content: `## The Problem\n\nThe client was manually entering data into their CRM, Zoho, from the Account Summary Generator spreadsheet we developed for them. This process was time-consuming and created opportunities for errors.\n\n## Our Solution\n\nWe wrote a synchronization tool that automatically synchronizes the data from the Account Summary Generator spreadsheet to Zoho. The tool runs once per week, ensuring the data in Zoho is up-to-date and consistent with the spreadsheet.\n\n## The Outcome\n\nThe automated synchronization tool significantly reduced the time and effort involved in updating their CRM. It also reduced the risk of errors in data entry. This solution once again demonstrated our ability to automate tedious processes and improve business efficiency.`,
  },


  {
    id: 7,
    title: "Optimizing Data Processing for Fantasy Football Analytics",
    subheader:
      "Significantly Reduced Data Refresh Times Through Parallel Processing",
    author: "Jeff Barton",
    datePosted: "2022",
    badges: [<BadgePython />, <BadgePandas />, <BadgeGithub />, <BadgeSQL />],
    chips: [<ChipPython />, <ChipPandas />, <ChipGithub />, <ChipSQL />],
    categories: ['Data Cleansing'],

    content: `## The Situation\n\nWe partnered with a company specializing in fantasy football analytics. They had a sophisticated website where the data and front-end code were tightly intertwined. This coupling caused their weekly data refresh process to be time-consuming and a potential bottleneck for scaling their product.\n\n## The Solution\n\nAfter a comprehensive code review, we suggested decoupling the data and front-end code. We developed a Python package dedicated to handling all their data needs. To drastically reduce their weekly refresh times, we implemented parallel processing.\n\n## The Result\n\nOur solution reduced the weekly refresh times from several hours to about 5 minutes. This dramatic speed improvement made their platform significantly more scalable and easier to troubleshoot. Furthermore, it provided a clear path for adding automated testing in the future. Our client could now confidently push for new subscribers, knowing their platform could handle the increased load. This project reaffirmed our proficiency in data optimization and scalable system design.`,
  },

  {
    id: 8,
    title: "Revamping Retention Metrics for a Health Sharing Company",
    subheader: "Moving from Persistency to Attrition Metrics",
    author: "Jeff Barton",
    datePosted: "2021",
    badges: [
      <BadgePython />,
      <BadgePandas />,
      <BadgeJupyter />,
      <BadgeGithub />,
      <BadgeExcel />,
    ],
    chips: [
      <ChipPython />,
      <ChipPandas />,
      <ChipJupyter />,
      <ChipGithub />,
      <ChipExcel />,
    ],
    categories: ['Data Analytics'],
    image: metric,
    content: `## The Problem
        \n\nOur client, a **health sharing company**, was struggling to accurately gauge member retention. 
        They had been using a metric called _Persistency_, which calculated as the division of current members over all-time member counts. 
        However, this metric was proving to be misleading and less informative for the company's specific needs. \n\n## The Solution\n\n We 
        proposed to shift from persistency to attrition metrics. The idea was to measure the percentage of customers who stayed for _90_, _180_, and _365_ days. This approach, we believed, could provide a more realistic view of customer retention.\n\nTo demonstrate the value of this new approach, we mocked up a Jupyter Notebook with some dummy data. The aim was to show that persistency as a metric could decrease over time, thus creating potentially misleading interpretations. In contrast, attrition allows for a more accurate assessment of customer retention at various time periods.\n\n## The Result\n\nThe new attrition metrics were significantly more insightful for our client. They were not only able to better measure their business but also received a clear demonstration of our capabilities not just as technical experts, but as valuable business partners. The client was extremely pleased with the outcome, reinforcing our belief that the right metrics can make all the difference in business measurement and strategy.`,
  },

  {
    id: 9,
    title: "Account Summary Generator for Efficient Data Management",
    subheader: "Excel-based Database with Form and Report Generation",
    author: "Jeff Barton",
    datePosted: "2021",
    badges: [<BadgeExcel />],
    chips: [<ChipExcel />],
    categories: ['Database Creation'],
    content: `## The Challenge\n\nOur client was in need of a manageable way to enter and view important data but was not ready for a full-fledged database. They required a system that could store data in an organized manner and generate reports as needed.\n\n## Our Approach\n\nWe created a "database" in Excel that allowed their employees to enter important data using a form built directly into Excel. This abstracted away the complexities of the spreadsheet and allowed users to view and create data directly in the form. The tool also featured a macro to generate reports in PDF format.\n\n## The Outcome\n\nThe Account Summary Generator not only simplified data entry and viewing but also automated report generation. This resulted in significant time savings and improved the efficiency of their operations. The solution once again reinforced our client's trust in our capabilities to create practical and effective data management solutions.`,
  },

  {
    id: 10,
    title: "COVID-19 Impact Analysis for a Health Sector Client",
    subheader: "Combining Public Data and Proprietary Insights to Inform Business Strategy",
    author: "Jeff Barton",
    datePosted: "2020",
    badges: [
      <BadgePython />,
      <BadgePandas />,
      <BadgePowerBI />,
      <BadgeGithub />,
    ],
    chips: [
      <ChipPython />,
      <ChipPandas />,
      <ChipPowerBI />,
      <ChipGithub />,
    ],
    categories: ['Analytics'],
    content: `## The Challenge\n\nWith the onset of the COVID-19 pandemic in early 2020, our client in the health sector was keen to understand the potential impact of the virus on their customers. They needed a way to incorporate and analyze the available public data along with their existing customer data to inform their business strategy.\n\n## Our Solution\n\nWe leveraged Python to pull the COVID-19 data that Johns Hopkins was posting on GitHub. Given the data structure changed over time, we wrote resilient code that could identify and clean each data structure variation. Once the raw data was sanitized, we restructured it to align with our client's data schema. This transformed data was then fed into our client's existing Power BI reports to provide a holistic view of their customers' exposure to the pandemic.\n\n## The Outcome\n\nOur client gained access to a custom COVID-19 dashboard, which layered their customer data with the pandemic impact data. This solution allowed our client to gain critical insights into the potential business implications of the pandemic. It not only helped them manage the crisis more effectively but also underscored our expertise in data cleaning, transformation, and visualization.`,
  }
  
]