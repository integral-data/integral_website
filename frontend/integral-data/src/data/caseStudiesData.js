import { BadgePython, BadgeGithub, BadgeExcel, BadgeAPIs, BadgeDjango, BadgePowerBI, BadgeSelenium, BadgePandas, BadgeJupyter, BadgeAWS, BadgeHTML, BadgeCSS, BadgeSQL, BadgeFlask} from '../components/TechnologyBadge';

export const caseStudiesData = [
    {
        id: 1,
        title: "Revamping Retention Metrics for a Health Sharing Company",
        subheader: "Moving from Persistency to Attrition Metrics",
        author: "Jeff Barton",
        datePosted: "2023-06-15",
        badges: [<BadgePython />, <BadgePandas />, <BadgeJupyter/>, <BadgeGithub />, <BadgeExcel />],
        content: `## The Problem
        \n\nOur client, a **health sharing company**, was struggling to accurately gauge member retention. 
        They had been using a metric called _Persistency_, which calculated as the division of current members over all-time member counts. 
        However, this metric was proving to be misleading and less informative for the company's specific needs. \n\n## The Solution\n\n We 
        proposed to shift from persistency to attrition metrics. The idea was to measure the percentage of customers who stayed for _90_, _180_, and _365_ days. This approach, we believed, could provide a more realistic view of customer retention.\n\nTo demonstrate the value of this new approach, we mocked up a Jupyter Notebook with some dummy data. The aim was to show that persistency as a metric could decrease over time, thus creating potentially misleading interpretations. In contrast, attrition allows for a more accurate assessment of customer retention at various time periods.\n\n## The Result\n\nThe new attrition metrics were significantly more insightful for our client. They were not only able to better measure their business but also received a clear demonstration of our capabilities not just as technical experts, but as valuable business partners. The client was extremely pleased with the outcome, reinforcing our belief that the right metrics can make all the difference in business measurement and strategy.`,

      },
      
      {
        id: 2,
        title: "Transforming Gigantic CSV Files into Clean, Usable Datasets",
        subheader: "Automating Data Analysis and Cleansing for a Health Insurance Client",
        author: "Jeff Barton",
        datePosted: "2023-06-20",
        badges: [<BadgePython />, <BadgePandas />, <BadgeGithub />, <BadgeExcel />, ],
        content: `## The Challenge\n\nWe were approached by a **health insurance client** who was overwhelmed by the complexity of data they were receiving from a vendor handling their claims. The vendor supplied them with around _15 CSV files_, some of which boasted _thousands of columns_ and _hundreds of thousands of rows_. Analyzing this data manually was virtually impossible and incredibly time-consuming.\n\n## Our Approach\n\nTo tackle this, we turned to automation. We wrote sophisticated code designed to:\n\n1. Navigate through each file\n2. Determine which columns likely held relevant data\n3. Extract the useful information\n4. Considerably condense each dataset\n\nBy automating the data analysis, we were able to efficiently distill the important information from the dauntingly large CSV files.\n\n## Data Cleaning\n\nIn addition to analyzing and condensing the data, we also ensured it was in perfect shape for their analytics platform. Our code carried out thorough data cleaning operations to eliminate errors, inaccuracies, or inconsistencies that could jeopardize the accuracy of further analysis.\n\n## The Outcome\n\nThe result was a streamlined, clean dataset that our client could immediately plug into their analytics platform. What once was an overwhelming and unwieldy set of CSV files, turned into a reliable foundation for their data-driven decisions. This project reaffirmed our ability to leverage technical expertise to tackle complex business challenges, further strengthening our client's trust in our capabilities.`,
      },
      {
        id: 3,
        title: "Automating Data Retrieval for a Wealth Management Firm",
        subheader: "Building a Web Scraping Tool to Efficiently Extract Customer Data",
        author: "Jeff Barton",
        datePosted: "2023-06-23",
        badges: [<BadgePython />, <BadgePandas />, <BadgeSelenium />, <BadgeGithub />, <BadgeExcel />, ],
        content: `## The Challenge\n\nWe were approached by a **wealth management client** who faced an extremely tedious and error-prone process for retrieving customer data. Their front-end system held all the necessary client data. However, agents had to manually sift through each customer's data one-by-one – a formidable task considering they had _thousands of customers_.\n\n## Our Solution\n\nRecognizing the inefficiency and potential for errors in their current process, we proposed the creation of a **web scraping tool**. After receiving approval from the client and vendor, we set to work.\n\nThe tool we developed was designed to:\n\n1. Systematically access the front-end system\n2. Efficiently extract the necessary data\n3. Clean and standardize the data for further use\n\n## The Outcome\n\nThe result was a powerful tool that eliminated the need for manual data retrieval. Agents no longer had to painstakingly navigate through individual client data. Instead, they had all the necessary data at their fingertips, cleaned, standardized, and ready for use.\n\nOur client was thrilled with the time savings and the reliability of the data. This project served as yet another testament to our ability to devise technical solutions to business challenges, significantly improving efficiency and accuracy.`,
      },
      {
        id: 4,
        title: "Building a Robust Web-Based Database Tool",
        subheader: "Transitioning from Excel to a Web-Based Solution for Superior Functionality",
        author: "Jeff Barton",
        datePosted: "2023-06-24",
        badges: [<BadgePython />, <BadgeDjango />,<BadgeSQL />, <BadgeGithub />, <BadgeHTML/>, <BadgeCSS /> ],
        content: `## The Challenge\n\nA **wealth management client** initially engaged us to build a custom database entry tool in Excel. However, as we tailored the tool to their specifications, we quickly ran into the inherent limitations of Excel.\n\n## Our Solution\n\nUnderstanding the constraints of Excel and the potential to significantly enhance the functionality and efficiency of the tool, we proposed a transition to a web-based solution.\n\nOur web-based tool offered a host of advantages, including:\n\n1. Enhanced functionality over the Excel-based tool\n2. Ability to support multiple concurrent users\n3. Robust and structured data backend\n\n## The Outcome\n\nWith our web-based tool, the client experienced a significant improvement in their operations. They appreciated the enhanced functionality, the ability to support multiple users concurrently, and the improved data structure.\n\nWe are now in the process of proposing this product to the client as a superior solution for their business needs. This project serves as an excellent example of our ability to leverage technology to overcome challenges and provide superior solutions.`,
      },
      {
        id: 5,
        title: "Automated Discrepancy Finder for Payroll and Benefits",
        subheader: "Excel-Macro Based Tool for Error Detection",
        author: "Jeff Barton",
        datePosted: "2023-06-25",
        badges: [<BadgeExcel/> ],
        content: `## The Challenge\n\nOur client, a **payroll company**, was regularly encountering errors when comparing their own files with those generated by benefits carriers such as _Aflac_ and _Transamerica_. Manually investigating these discrepancies was proving to be both tedious and error-prone.\n\n## Our Solution\n\nWe designed an **Excel-macro based tool** to automate this task. The tool would read in files from the client's payroll and compare them to the files generated by the benefits carriers. It was programmed to detect discrepancies and produce a comprehensive Excel report of all detected errors.\n\n## The Outcome\n\nThe automated discrepancy finder proved to be highly efficient, saving our client considerable time and effort. They were able to focus their resources on resolving the discrepancies instead of having to find them. This project reaffirmed our ability to leverage technical expertise to tackle practical business challenges, and reinforced our client's trust in our capabilities.`,
    },
    {
        id: 6,
        title: "Server Rack Design for CRM Application",
        subheader: "Specialized Infrastructure for Enhanced Efficiency",
        author: "Jeff Barton",
        datePosted: "2023-06-30",
        content: `## The Problem\n\nOur client needed a specialized server rack designed to efficiently run their **CRM application**. They required a system that would guarantee optimal performance and stability.\n\n## Our Approach\n\nWe collaborated closely with our client to understand their specific needs and use case. Based on the information gathered, we specified and designed a server rack tailor-made to run the CRM application.\n\n## The Result\n\nThe newly designed server rack provided the client with the dedicated infrastructure needed for their CRM application. The performance of the application improved significantly, leading to increased productivity and customer satisfaction. Once again, our technical expertise was instrumental in providing a solution that directly impacted our client's business performance.`,
    },
    {
        id: 7,
        title: "Custom CRM Tool Development",
        subheader: "From Concept to Deployment with Ruby-on-Rails",
        author: "Jeff Barton",
        datePosted: "2023-07-05",
        content: `## The Challenge\n\nWe were approached by a health sharing company, who were in need of a CRM tool built from scratch. They required a custom back-end database architecture and a web-based front end that would enable their administrative team to efficiently manage all their clients.\n\n## Our Solution\n\nLeveraging the _Ruby-on-Rails_ framework, we developed a CRM tool tailored to the specific business needs of our client. The back-end database architecture was built using _PostgreSQL_. The front end was web-based, providing the administrative team with a user-friendly interface to track their clients.\n\n## Key Features\n\nThe tool kept track of numerous variables including, but not limited to:\n\n1. Programs offered by benefits providers\n2. Carriers (Aflac, Transamerica, etc.)\n3. Clients and their respective employees\n4. Agents selling the policies\n5. Attachments (PDFs, JPGs, etc.)\n6. Cases related to any issues with clients or their employees\n7. Policies and their basic details\n\n## The Outcome\n\nThe CRM tool streamlined operations for Select Choice. It served as a one-stop solution for managing their clients, policies, agents, and more. This project is another testament to our ability to develop custom software solutions that address specific business needs and yield tangible results.`,
    },

    {
        id: 9,
        title: "Account Summary Generator for Efficient Data Management",
        subheader: "Excel-based Database with Form and Report Generation",
        author: "Jeff Barton",
        datePosted: "2023-07-15",
        badges: [<BadgeExcel/> ],
        content: `## The Challenge\n\nOur client was in need of a manageable way to enter and view important data but was not ready for a full-fledged database. They required a system that could store data in an organized manner and generate reports as needed.\n\n## Our Approach\n\nWe created a "database" in Excel that allowed their employees to enter important data using a form built directly into Excel. This abstracted away the complexities of the spreadsheet and allowed users to view and create data directly in the form. The tool also featured a macro to generate reports in PDF format.\n\n## The Outcome\n\nThe Account Summary Generator not only simplified data entry and viewing but also automated report generation. This resulted in significant time savings and improved the efficiency of their operations. The solution once again reinforced our client's trust in our capabilities to create practical and effective data management solutions.`,
    },
    {
        id: 10,
        title: "Zoho Database Synchronization for Optimized Data Management",
        subheader: "Automating Data Synchronization Between Excel and CRM",
        author: "Jeff Barton",
        datePosted: "2023-07-20",
        badges: [<BadgePython />, <BadgePandas />,<BadgeAPIs />, <BadgeGithub />, ],
        content: `## The Problem\n\nThe client was manually entering data into their CRM, Zoho, from the Account Summary Generator spreadsheet we developed for them. This process was time-consuming and created opportunities for errors.\n\n## Our Solution\n\nWe wrote a synchronization tool that automatically synchronizes the data from the Account Summary Generator spreadsheet to Zoho. The tool runs once per week, ensuring the data in Zoho is up-to-date and consistent with the spreadsheet.\n\n## The Outcome\n\nThe automated synchronization tool significantly reduced the time and effort involved in updating their CRM. It also reduced the risk of errors in data entry. This solution once again demonstrated our ability to automate tedious processes and improve business efficiency.`,
    },
    {
        id: 11,
        title: "Power BI Analytics Platform for Health Company",
        subheader: "Building Comprehensive Data Analytics with Power BI",
        author: "Jeff Barton",
        datePosted: "2023-07-25",
        badges: [<BadgePython />, <BadgePandas />,<BadgePowerBI />, <BadgeGithub />, <BadgeExcel/> ],
        content: `## The Challenge\n\nA **health company** needed an analytics platform to pull and analyze data from different sources. They were operating with enrollment data and claims data scattered across two different platforms, making it difficult to gain insights from their data.\n\n## Our Solution\n\nWe built a comprehensive analytics platform using Power BI. We pulled enrollment data from one platform and claims data from another. Although we performed some data transformations in Python, the majority of transformations were carried out directly within Power BI, leveraging its powerful data processing capabilities.\n\n## The Outcome\n\nThe implementation of the Power BI analytics platform revolutionized the client's data analysis capabilities. They could now effectively visualize, analyze, and generate insights from their consolidated data. This solution reaffirmed our expertise in data management and analytics.`,
    },
    {
        id: 12,
        title: "Data Migration from E123 to Salesforce",
        subheader: "Automated Data Synchronization for Seamless Platform Transition",
        author: "Jeff Barton",
        datePosted: "2023-07-30",
        badges: [<BadgePython />, <BadgePandas />, <BadgeSelenium />, <BadgeGithub />, <BadgeExcel/> ],
        content: `## The Issue\n\nThe client was transitioning from their old enrollment platform, E123, to Salesforce. However, they only migrated the minimum amount of tables from E123, leaving a significant amount of data behind.\n\n## Our Solution\n\nTo solve this, we wrote automated synchronization code in Python. This code performed a nightly synchronization from E123 to Salesforce, ensuring that all necessary data was consistently transferred to the new platform.\n\n## The Outcome\n\nOur solution made the transition to Salesforce seamless and ensured no critical data was lost in the process. The client was pleased with the ease of transition and the assurance that their data was reliably synced each night. This solution showcased our expertise in data management and automation.`,
    },

    
    {
    id: 13,
    title: "Real-Time Lyrics Display for Spotify Tracks",
    subheader: "Python Tool for Lyrics Extraction and Display",
    author: "Jeff Barton",
    datePosted: "2023-08-10",
    badges: [<BadgePython />, <BadgePandas />, <BadgeSelenium />, <BadgeGithub />,<BadgeFlask /> ],
    content: `## The Challenge\n\nBefore major music apps integrated lyrics into their platforms, users were left to manually search for the lyrics to their favorite songs. I envisioned a solution that would automatically display lyrics for the song currently playing on my Spotify account.\n\n## The Solution\n\nI developed a Python tool that served dual purposes. First, it leveraged the Spotify API to detect the song currently playing on my account. Then, it scraped the Genius website to extract the corresponding song's lyrics. To display these lyrics, I utilized Flask, a Python micro web framework, to create a front-end website.\n\n## The Outcome\n\nThe result was a real-time lyrics display for any song playing on Spotify, adding an extra layer of enjoyment to the listening experience. This project showcased the powerful combination of API integration, web scraping, and front-end development to deliver a unique user experience.`,
},
{
    id: 14,
    title: "Optimizing Data Processing for Fantasy Football Analytics",
    subheader: "Significantly Reduced Data Refresh Times Through Parallel Processing",
    author: "Jeff Barton",
    datePosted: "2023-08-15",
    badges: [<BadgePython />, <BadgePandas />, <BadgeGithub />,<BadgeSQL /> ],
    content: `## The Situation\n\nWe partnered with a company specializing in fantasy football analytics. They had a sophisticated website where the data and front-end code were tightly intertwined. This coupling caused their weekly data refresh process to be time-consuming and a potential bottleneck for scaling their product.\n\n## The Solution\n\nAfter a comprehensive code review, we suggested decoupling the data and front-end code. We developed a Python package dedicated to handling all their data needs. To drastically reduce their weekly refresh times, we implemented parallel processing.\n\n## The Result\n\nOur solution reduced the weekly refresh times from several hours to about 5 minutes. This dramatic speed improvement made their platform significantly more scalable and easier to troubleshoot. Furthermore, it provided a clear path for adding automated testing in the future. Our client could now confidently push for new subscribers, knowing their platform could handle the increased load. This project reaffirmed our proficiency in data optimization and scalable system design.`,
},
{
    id: 15,
    title: "Developing a Fantasy Golf Web Application",
    subheader: "Combining Python, Flask, HTML, and Selenium for an Interactive Experience",
    author: "Jeff Barton",
    datePosted: "2023-08-20",
    badges: [<BadgePython />, <BadgePandas />, <BadgeSelenium />, <BadgeGithub />,<BadgeAWS/>, <BadgeFlask />, <BadgeHTML />, <BadgeCSS /> ],
    content: `## The Beginning\n\nIn the spirit of combining our love for coding and sports, we embarked on a side project to create a fantasy golf web application. We aimed to develop a platform optimized for mobile use, allowing users to engage in a unique fantasy golf experience centered around weekly PGA tournaments.\n\n## The Implementation\n\nThe application we envisioned would allow users to draft a new team each week, based on a three-tier draft system. This setup gave users the chance to strategize and make dynamic choices for their teams, adding a layer of excitement and competition. To bring this vision to life, we leveraged Python, Django, and HTML for the front-end code. For real-time data retrieval, we implemented Selenium, a Python library known for its web scraping capabilities.\n\n## The Outcome\n\nThe result was an interactive web application that provided a live leaderboard, enabling users to track their teams' performances in real time. This project showcased our ability to deliver an engaging user experience by combining different technologies and turning an idea into a fully functional web application.`,
}

    
  ];
  