
export const courseCategories = [
   
    {
        title: "Python Programming",
        course_id: 1
    },
    {
        title: "Mathematics",
        course_id: 2
    },
    {
        title: "Web Development",
        course_id: 3
    },
    {
        title: "Build Your Course",
        course_id: 4
    },
    {
        title: "Scratch Development",
        course_id: 5
    },
];

export const courseLevels = {
    1: [ // Python Levels
        {
            level_id: 1,
            steps: 1,
            title: "Python Beginner",
            ages: "Age 10-12",
            subtitle: "Introduction to Programming",
            sessions_start: 1,
            sessions_end: 48,
            prices: 25,
            color: "#ABF3FF",
            character_logo: "",
            weapon_logo: "/assets/coding.png",
            pdf_link: "https://firebasestorage.googleapis.com/v0/b/littleninjas18-1eb3d.appspot.com/o/CourseData%2FAI%20ML%20with%20Python%20X%20%20LittleNinjas.pdf?alt=media&token=441b9baf-d99b-4330-9419-c72e73fd3d67",
            sessionData: [
                { title: "Introduction to Python" },
                { title: "Operators & Strings" },
                { title: "Loops & Iterations" },
                { title: "Conditional Programming" },
                { title: "Lists, Tuples & Sets" },
                { title: "File Handling" },
                { title: "Functions & Modules" },
                { title: "Basic GUI Programming" }
            ]
        },
        {
            level_id: 2,
            steps: 2,
            title: "Python Intermediate",
            ages: "Age 12-14",
            subtitle: "Data Structures & Algorithms",
            sessions_start: 49,
            sessions_end: 96,
            prices: 30,
            color: "#FEEFAB",
            character_logo: "/assets/python-logo.png",
            weapon_logo: "/assets/coding.png",
            pdf_link: "https://firebasestorage.googleapis.com/v0/b/littleninjas18-1eb3d.appspot.com/o/CourseData%2FAI%20ML%20with%20Python%20X%20%20LittleNinjas.pdf?alt=media&token=441b9baf-d99b-4330-9419-c72e73fd3d67",
            sessionData: [ // Intermediate Level Sessions
                { title: "Recursion & Searching Algorithms" },
                { title: "Sorting Algorithms" },
                { title: "Stacks & Queues" },
                { title: "Linked Lists" },
                { title: "Divide & Conquer" },
                { title: "Binary Trees" },
                { title: "Introduction to Pandas" },
                { title: "Data Analysis with Seaborn" }
            ]
        },
        {
            level_id: 3,
            steps: 3,
            title: "Python Advanced",
            ages: "Age 14+",
            subtitle: "Machine Learning & AI",
            sessions_start: 97,
            sessions_end: 144,
            prices: 40,
            color: "#B76CFF",
            character_logo: "/assets/python-logo.png",
            weapon_logo: "/assets/ai.png",
            pdf_link: "https://firebasestorage.googleapis.com/v0/b/littleninjas18-1eb3d.appspot.com/o/CourseData%2FAI%20ML%20with%20Python%20X%20%20LittleNinjas.pdf?alt=media&token=441b9baf-d99b-4330-9419-c72e73fd3d67",
            sessionData: [ // Advanced Level Sessions
                { title: "Machine Learning Basics" },
                { title: "Regression & Predictive Analysis" },
                { title: "Neural Networks & Deep Learning" },
                { title: "Image Classification using CNN" },
                { title: "Stock Market Prediction" },
                { title: "Optimizing AI Models" },
                { title: "Transfer Learning & Pretrained Models" }
            ]
        },

    ],
    2: [ // Mathematics Levels
        {
            level_id: 1,
            steps: 1,
            title: "Mathematics Beginner",
            ages: "Grade 5+",
            subtitle: "Fundamentals & Arithmetic Operations",
            sessions_start: 1,
            sessions_end: 48,
            prices: 20,
            color: "#ABF3FF",
            character_logo: "/assets/math-logo.png",
            weapon_logo: "/assets/calculator.png",
            pdf_link: "https://firebasestorage.googleapis.com/v0/b/littleninjas18-1eb3d.appspot.com/o/CourseData%2FMath%20X%20%20LittleNinjas%20(210%20%C3%97%20320%20mm).pdf?alt=media&token=312f127b-c069-4561-850f-9b10fe0efc83",
            sessionData: [ // Beginner Level Sessions (Number Systems & Arithmetic)
                { title: "Understanding Place Value & Expanded Form" },
                { title: "Introduction to Crores & Millions" },
                { title: "Addition & Subtraction of Large Numbers" },
                { title: "Multiplication & Division of Large Numbers" },
                { title: "Prime Numbers & Factorization" },
                { title: "HCF & LCM using Prime Factorization" },
                { title: "Divisibility Tests (2,3,4,5,8,9,10)" },
                { title: "Checkpoint Assessment 1" }
            ]
        },
        {
            level_id: 2,
            steps: 2,
            title: "Mathematics Intermediate",
            ages: "Grade 5+",
            subtitle: "Fractions, Decimals & Percentages",
            sessions_start: 49,
            sessions_end: 96,
            prices: 25,
            color: "#FEEFAB",
            character_logo: "/assets/math-logo.png",
            weapon_logo: "/assets/graph.png",
            pdf_link: "https://firebasestorage.googleapis.com/v0/b/littleninjas18-1eb3d.appspot.com/o/CourseData%2FMath%20X%20%20LittleNinjas%20(210%20%C3%97%20320%20mm).pdf?alt=media&token=312f127b-c069-4561-850f-9b10fe0efc83",
            sessionData: [ // Intermediate Level Sessions (Fractions, Decimals & Percentages)
                { title: "Understanding Fractions & Equivalent Fractions" },
                { title: "Addition & Subtraction of Fractions" },
                { title: "Multiplication & Division of Fractions" },
                { title: "Understanding Decimal Numbers & Place Values" },
                { title: "Addition & Subtraction of Decimals" },
                { title: "Multiplication & Division of Decimals" },
                { title: "Introduction to Percentages & Applications" },
                { title: "Checkpoint Assessment 2" }
            ]
        },
        {
            level_id: 3,
            steps: 3,
            title: "Mathematics Advanced",
            ages: "Grade 5+",
            subtitle: "Geometry, Mensuration & Data Handling",
            sessions_start: 97,
            sessions_end: 144,
            prices: 30,
            color: "#B76CFF",
            character_logo: "/assets/math-logo.png",
            weapon_logo: "/assets/shapes.png",
            pdf_link: "https://firebasestorage.googleapis.com/v0/b/littleninjas18-1eb3d.appspot.com/o/CourseData%2FMath%20X%20%20LittleNinjas%20(210%20%C3%97%20320%20mm).pdf?alt=media&token=312f127b-c069-4561-850f-9b10fe0efc83",
            sessionData: [ // Advanced Level Sessions (Geometry & Mensuration)
                { title: "Understanding Angles, Lines & Triangles" },
                { title: "Understanding Quadrilaterals & Circles" },
                { title: "Perimeter & Area of Squares & Rectangles" },
                { title: "Understanding Volume & 3D Shapes" },
                { title: "Data Handling: Bar Graphs & Pie Charts" },
                { title: "Final Assessment & Problem Solving" },
                { title: "Checkpoint Assessment 3" }
            ]
        },
        {
            level_id: 4,
            steps: 4,
            title: "Vedic Mathematics & Logical Reasoning",
            ages: "Grade 5+",
            subtitle: "Speed Maths & Mental Ability",
            sessions_start: 145,
            sessions_end: 192,
            prices: 35,
            color: "#D81B60",
            character_logo: "/assets/math-logo.png",
            weapon_logo: "/assets/brain.png",
            pdf_link: "https://firebasestorage.googleapis.com/v0/b/littleninjas18-1eb3d.appspot.com/o/CourseData%2FMath%20X%20%20LittleNinjas%20(210%20%C3%97%20320%20mm).pdf?alt=media&token=312f127b-c069-4561-850f-9b10fe0efc83",
            sessionData: [ // Expert-Level Sessions (Vedic Maths & Logical Reasoning)
                { title: "Magic Multiplication Techniques" },
                { title: "Finding the Day of Any Date (1900-1999)" },
                { title: "Quick Division Techniques using Addition" },
                { title: "Multiplication by 11, 22, 33 & 44" },
                { title: "Number & Alphabet Series" },
                { title: "Blood Relation & Logical Reasoning" },
                { title: "Ranking Test & Direction Sense Test" },
                { title: "Final Vedic Maths Challenge" }
            ]
        }
    ],
    3: [ // Web Development Levels
        {
            level_id: 1,
            steps: 2,
            title: "Web Development Beginner",
            ages: "Age 7-10",
            subtitle: "Introduction to Block-based Programming",
            sessions_start: 1,
            sessions_end: 48,
            prices: 28,
            color: "#ABF3FF",
            character_logo: "/assets/web-logo.png",
            weapon_logo: "/assets/browser.png",
            pdf_link: "https://firebasestorage.googleapis.com/v0/b/littleninjas18-1eb3d.appspot.com/o/CourseData%2FCopy%20of%20Copy%20of%20Web%20development%20X%20%20LittleNinjas.pdf?alt=media&token=c3ab8b10-cdbd-4cbe-8cc9-064789e40759",
            sessionData: [ // Beginner Level Sessions
                { title: "Introduction to HTML & Web Structure" },
                { title: "HTML Formatting, Images & Tables" },
                { title: "Styling Websites with CSS" },
                { title: "Graphical Effects & Alignment" },
                { title: "HTML Forms & Interactive Elements" },
                { title: "Introduction to JavaScript" },
                { title: "JavaScript Objects & Exception Handling" },
                { title: "Website Hosting & GitHub Deployment" }
              ]
        },
        {
            level_id: 2,
            steps: 2,
            title: "Web Development Intermediate",
            ages: "Age 10-12",
            subtitle: "Advanced Game Design",
            sessions_start: 49,
            sessions_end: 96,
            prices: 35,
            color: "#FEEFAB",
            character_logo: "/assets/web-logo.png",
            weapon_logo: "/assets/gamepad.png",
            pdf_link: "https://firebasestorage.googleapis.com/v0/b/littleninjas18-1eb3d.appspot.com/o/CourseData%2FCopy%20of%20Copy%20of%20Web%20development%20X%20%20LittleNinjas.pdf?alt=media&token=c3ab8b10-cdbd-4cbe-8cc9-064789e40759",
            sessionData: [ // Intermediate Level Sessions
                { title: "Bootstrap & UI Components" },
                { title: "Advanced JavaScript & Loops" },
                { title: "OOP in JavaScript & Asynchronous Programming" },
                { title: "React.js Basics & Components" },
                { title: "State Management & Props" },
                { title: "React Routing & API Handling" },
                { title: "Error Handling & Debugging" },
                { title: "Hosting a React Web App" }
              ]
        },
        {
            level_id: 3,
            steps: 3,
            title: "Web Development Advanced",
            ages: "Age 12+",
            subtitle: "Expert-Level Games & ML",
            sessions_start: 97,
            sessions_end: 144,
            prices: 40,
            color: "#B76CFF",
            character_logo: "/assets/web-logo.png",
            weapon_logo: "/assets/ai.png",
            pdf_link: "https://firebasestorage.googleapis.com/v0/b/littleninjas18-1eb3d.appspot.com/o/CourseData%2FCopy%20of%20Copy%20of%20Web%20development%20X%20%20LittleNinjas.pdf?alt=media&token=c3ab8b10-cdbd-4cbe-8cc9-064789e40759",
            sessionData: [ // App Development with React Native
                { title: "React Native Basics & Debugging Apps" },
                { title: "Flexbox & Stylesheets in React Native" },
                { title: "Working with Components & Touch Events" },
                { title: "Navigation & Multi-Screen Apps" },
                { title: "State Management in React Native" },
                { title: "Integrating APIs & Fetching Data" },
                { title: "Device Orientation & Screen Adaptation" },
                { title: "Publishing Apps on Android/iOS" }
              ]
        },
        {
            level_id: 4,
            steps: 4,
            title: "Space dominator",
            ages: "Age 12+",
            subtitle: "Expert-Level Concepts",
            sessions_start: 145,
            sessions_end: 190,
            prices: 40,
            color: "#FFB74D",
            character_logo: "/assets/web-logo.png",
            weapon_logo: "/assets/ai.png",
            pdf_link: "https://firebasestorage.googleapis.com/v0/b/littleninjas18-1eb3d.appspot.com/o/CourseData%2FCopy%20of%20Copy%20of%20Web%20development%20X%20%20LittleNinjas.pdf?alt=media&token=c3ab8b10-cdbd-4cbe-8cc9-064789e40759",
            sessionData: [ // Expert-Level Web & App Development
                { title: "Advanced Navigation in React Native" },
                { title: "State Management with Redux" },
                { title: "Making Network Requests & Data Fetching" },
                { title: "User Authentication & Security" },
                { title: "Using Native Device Features (Camera, GPS, Storage)" },
                { title: "Building an E-Commerce App" },
                { title: "Industry-Level App Development" },
                { title: "Final Project & Portfolio Building" }
              ]
        },

    ],
    4: [ // Custom course
        {
            level_id: 1,
            steps: 1,
            "title": "Custom Learning Path",
            "ages": "All Ages",
            subtitle: "Personalized Course",
            sessions_start: 1,
            sessions_end: 10,
            prices: 35,
            color: "#ABF3FF",
            character_logo: "/assets/custom-logo.png",
            weapon_logo: "/assets/target.png",
            pdf_link: "#",
            sessionData: [ // Custom Course Sessions
                { title: "" },
            ]
            
        }
    ],
    5: [
        {
            level_id: 1,
            steps: 1,
            title: "Scratch star",
            ages: "Age 7-10",
            subtitle: "Introduction to Block-based Programming",
            sessions_start: 1,
            sessions_end: 48,
            prices: 28,
            color: "#FFECB3",
            character_logo: "/assets/web-logo.png",
            weapon_logo: "/assets/browser.png",
            pdf_link: "https://firebasestorage.googleapis.com/v0/b/littleninjas18-1eb3d.appspot.com/o/CourseData%2FWeb%20development%20X%20%20LittleNinjas.pdf?alt=media&token=8d567f5d-6233-4f08-9ca6-6dad8f222c5c",
            sessionData: [ // Beginner Level Sessions
                { title: "Introduction to Block-based Programming" },
                { title: "Understanding Logic & Fundamentals" },
                { title: "Control Flow & Loops" },
                { title: "Creating Interactive Animations" },
                { title: "Game Design Basics" },
                { title: "Creating Pong Game" },
                { title: "Building Clicker Game" },
                { title: "Developing Shooter Game" }
              ]
          },
          {
            level_id: 2,
            steps: 2,
            title: "Scratch Super Star",
            ages: "Age 10-12",
            subtitle: "Advanced Game Design",
            sessions_start: 49,
            sessions_end: 96,
            prices: 35,
            color: "#FFD54F",
            character_logo: "/assets/web-logo.png",
            weapon_logo: "/assets/gamepad.png",
            pdf_link: "https://firebasestorage.googleapis.com/v0/b/littleninjas18-1eb3d.appspot.com/o/CourseData%2FWeb%20development%20X%20%20LittleNinjas.pdf?alt=media&token=8d567f5d-6233-4f08-9ca6-6dad8f222c5c",
            sessionData: [ // Intermediate Level Sessions
                { title: "Mathematical & String Operators" },
                { title: "Using Variables & Global Scope" },
                { title: "Functions & Libraries" },
                { title: "Working with Arrays & Lists" },
                { title: "Text-to-Speech & Video Sensing" },
                { title: "Developing Multi-Level Games" },
                { title: "Basic Platformer Game Development" },
                { title: "Final Self-Made Project" }
              ]
          },
          {
            level_id: 3,
            steps: 3,
            title: "Web Development Advanced",
            ages: "Age 12+",
            subtitle: "Expert-Level Games & ML",
            sessions_start: 97,
            sessions_end: 144,
            prices: 40,
            color: "#FFB74D",
            character_logo: "/assets/web-logo.png",
            weapon_logo: "/assets/ai.png",
            pdf_link: "https://firebasestorage.googleapis.com/v0/b/littleninjas18-1eb3d.appspot.com/o/CourseData%2FWeb%20development%20X%20%20LittleNinjas.pdf?alt=media&token=8d567f5d-6233-4f08-9ca6-6dad8f222c5c",
            sessionData: [ // Advanced Level Sessions
                { title: "Advanced Platformer Game Mechanics" },
                { title: "Applying Game Physics" },
                { title: "Creating 3D Games" },
                { title: "Machine Learning Basics in Games" },
                { title: "Implementing ML-based Games" },
                { title: "Super Mario-Inspired Game" },
                { title: "3D Car Racing Game" },
                { title: "Rock-Paper-Scissors AI" }
              ]
          }
    ]
};

