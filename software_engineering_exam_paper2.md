# Software Engineering — Complete Exam Answer Sheet (Paper 2)

**Subject:** Software Engineering
**Sections:** A, B, C (All Questions Attempted)

---

# SECTION A — Short Answer Questions (2 Marks Each)

---

## Q1(a) Define Generic Software with Example.

**Generic Software** (also called **off-the-shelf software** or **packaged software**) is software developed for a broad, general market and sold to any customer who needs it. It is not built for a specific customer but for a wide range of users with similar needs. The developer controls the specification and evolution of the product.

**Characteristics:**
- Developed for the mass market
- Same product used by many different organizations
- Not customized for individual users
- Vendor provides updates and maintenance

**Examples:**
- **Microsoft Office** (Word, Excel, PowerPoint) — used by millions worldwide
- **Adobe Photoshop** — graphic editing for any user
- **Tally ERP** — accounting software for businesses
- **Antivirus software** (Norton, Kaspersky) — security for general users
- **Operating Systems** (Windows, Ubuntu) — used universally

**Contrast with Bespoke Software:** Custom (bespoke) software is built for a specific client (e.g., a hospital's patient management system built exclusively for one hospital chain).

---

## Q1(b) Define Software Components.

**Software Components** are modular, self-contained units of software that encapsulate a set of related functions or data. They are building blocks of a software system that can be independently developed, tested, deployed, and reused across multiple applications.

**Key Properties of a Software Component:**
- **Reusability:** Can be used in multiple systems
- **Replaceable:** Can be swapped with another component
- **Self-contained:** Encapsulates its own data and logic
- **Extensible:** Can be extended without modifying the internals
- **Well-defined interface:** Communicates through defined APIs

**Types of Software Components:**
1. **UI Components:** Buttons, forms, dialog boxes
2. **Business Logic Components:** Tax calculator, authentication module
3. **Data Access Components:** Database connectors, ORM layers
4. **Service Components:** REST APIs, microservices

**Example:** In an e-commerce system, components include: Login Component, Shopping Cart Component, Payment Gateway Component, Inventory Management Component — each independently developed and reusable.

---

## Q1(c) Mention any two Non-Functional Requirements on software to be developed.

**Non-Functional Requirements (NFRs)** define the quality attributes and constraints of a system — the *"how well"* rather than the *"what"* the system does.

**Two Important Non-Functional Requirements:**

**1. Performance:**
Defines how fast the system must respond under defined workloads.
- *Example:* "The system shall process 1,000 transactions per second and respond to user queries within 2 seconds under normal load."
- Sub-attributes: Response time, throughput, latency, scalability.

**2. Security:**
Defines the system's ability to protect data and functions from unauthorized access, tampering, and attacks.
- *Example:* "All user passwords must be stored using bcrypt hashing. The system must lock an account after 5 consecutive failed login attempts. All data in transit must be encrypted using TLS 1.3."
- Sub-attributes: Confidentiality, integrity, availability, authentication.

Other common NFRs include: Reliability, Availability, Maintainability, Portability, Usability.

---

## Q1(d) What is meant by Software Prototyping?

**Software Prototyping** is a software development technique in which an incomplete working model of the proposed system — called a **prototype** — is built quickly to visualize, demonstrate, and validate requirements before full development begins.

**Purpose:**
- Help stakeholders understand and clarify requirements
- Discover hidden or misunderstood requirements early
- Evaluate design alternatives before committing to full development
- Gather user feedback on the interface and functionality

**Types of Prototypes:**
- **Throwaway (Rapid) Prototype:** Built quickly only for requirements clarification, then discarded.
- **Evolutionary Prototype:** Iteratively refined and eventually becomes the final system.
- **Horizontal Prototype:** Shows the UI layer across the system but without deep functionality.
- **Vertical Prototype:** Implements a specific feature completely, top to bottom.

**Process:**
```
Identify requirements → Build quick prototype → User evaluates →
Refine requirements → Repeat until satisfied → Build final system
```

**Advantage:** Reduces the risk of building the wrong product by getting user feedback early.

---

## Q1(e) What do you mean by Horizontal and Vertical Partitioning?

These are two strategies for organizing a software architecture into subsystems:

**Horizontal Partitioning:**
Divides the system into **layers** based on the type of function performed, where each layer handles a specific category of activity. Control flows horizontally across these layers.

```
+---------------------------+
|    User Interface Layer   |  ← Presentation
+---------------------------+
|   Business Logic Layer    |  ← Processing
+---------------------------+
|    Data Access Layer      |  ← Storage/DB
+---------------------------+
```

- Layers interact through well-defined interfaces.
- Changes in one layer have minimal impact on other layers.
- *Example:* A three-tier web application with UI, application server, and database layers.

**Vertical Partitioning:**
Divides the system into **functional subsystems** (modules) based on the domain functionality, where each subsystem handles a complete feature from top to bottom.

```
+--------+--------+---------+
| Order  | Billing| Shipping|
| Module | Module | Module  |
+--------+--------+---------+
```

- Each vertical partition is a functionally independent unit.
- *Example:* An ERP system divided into Payroll, Inventory, Finance, and HR modules — each a self-contained vertical.

**Difference:** Horizontal partitioning separates *type of work* (UI vs. logic vs. data); vertical partitioning separates *business domains* (sales vs. finance vs. HR).

---

## Q1(f) What is Software Architecture?

**Software Architecture** is the high-level structure of a software system — the set of principal design decisions about the system's organization, including its major components (modules, subsystems), their relationships, and the principles governing their design and evolution.

**IEEE Definition:** *"Software architecture is the fundamental organization of a system, embodied in its components, their relationships to each other and the environment, and the principles guiding its design and evolution."*

**Key Elements:**
- **Components:** The computational units (modules, services, databases)
- **Connectors:** The interactions between components (APIs, events, shared data)
- **Configuration:** The topology — how components are connected
- **Constraints:** Principles and rules governing design decisions

**Common Architectural Styles/Patterns:**
- **Layered (N-Tier):** MVC, three-tier web applications
- **Client-Server:** Web browsers and web servers
- **Microservices:** Independent services communicating via APIs
- **Event-Driven:** Publisher-subscriber systems
- **Repository:** Shared database at the center (e.g., compilers)
- **Pipe-and-Filter:** Unix shell pipelines, data processing

**Importance:** Architecture decisions are the most expensive to change — getting them right early is critical to the system's long-term success.

---

## Q1(g) Distinguish between Verification and Validation.

| Feature | Verification | Validation |
|---|---|---|
| **Definition** | Are we building the product right? | Are we building the right product? |
| **Focus** | Conformance to specifications | Fitness for purpose / user needs |
| **Question asked** | "Does the software meet the SRS?" | "Does the software meet the user's actual needs?" |
| **Performed by** | QA team, developers | End users, testing team |
| **When done** | During development phases | At the end of development / deployment |
| **Type** | Static and dynamic activities | Dynamic testing (executing the software) |
| **Examples** | Code reviews, inspections, walkthroughs | System testing, acceptance testing |
| **IEEE Definition** | *"The process of evaluating a system to determine whether the products of a given development phase satisfy the conditions imposed at the start of that phase."* | *"The process of evaluating a system during or at the end of the development process to determine whether it satisfies specified requirements."* |

**Simple Memory Aid:** Verification = right process; Validation = right product.

---

## Q1(h) Distinguish between Alpha and Beta Testing.

| Feature | Alpha Testing | Beta Testing |
|---|---|---|
| **Location** | Developer's site (in-house) | Customer's/user's site (real world) |
| **Who performs** | Internal team (QA, developers, select users) | Real end users / external customers |
| **Developer present** | Yes — can monitor and log errors directly | No — user reports bugs independently |
| **Environment** | Controlled, simulated environment | Real production-like environment |
| **Stage** | First round of external-like testing | Second round, near-final release |
| **Purpose** | Find bugs before external release | Validate real-world usability and performance |
| **Feedback** | Immediate, structured | Via bug reports, forms, feedback channels |
| **Software state** | May have known bugs and incomplete features | Near-complete, feature-stable |
| **Example** | Google employees testing a new Google product | Microsoft releasing Windows 11 Beta to millions of registered testers |

---

## Q1(i) Mention the Advantages of CASE Tools.

**CASE (Computer-Aided Software Engineering) Tools** are software applications that assist in automating various activities of the software development lifecycle.

**Advantages of CASE Tools:**

1. **Increased Productivity:** Automates repetitive tasks (code generation, diagram drawing, documentation) significantly reducing development time.

2. **Improved Software Quality:** Built-in consistency checking and validation ensure fewer errors in designs and specifications.

3. **Better Documentation:** Automatically generates and maintains documentation, keeping it synchronized with the design.

4. **Standardization:** Enforces development standards and methodologies across the entire team.

5. **Reusability:** Central repositories store reusable components, diagrams, and code templates.

6. **Ease of Maintenance:** Traceability between requirements, design, and code makes impact analysis and maintenance easier.

7. **Team Collaboration:** Shared repositories and multi-user support facilitate team coordination.

8. **Error Detection:** Static analysis tools detect errors in code and design early.

**Examples:** Rational Rose, Enterprise Architect, Visio (design); Eclipse, IntelliJ (coding); Selenium, JUnit (testing); Git (version control).

---

## Q1(j) Define Adaptive Maintenance.

**Adaptive Maintenance** is a category of software maintenance that involves modifying a software system to adapt it to **changes in its external environment** — such as changes in hardware, operating systems, third-party APIs, regulatory requirements, or organizational policies.

**Trigger:** The software itself is working correctly, but the environment in which it runs has changed, making the software incompatible or non-compliant.

**Examples:**
- Migrating an application from Windows Server 2016 to Windows Server 2022.
- Updating a mobile app to support a new Android or iOS version.
- Modifying a tax calculation system to comply with new GST rates announced by the government.
- Adapting a system to work with a new third-party payment gateway after the old one shuts down.
- Moving an on-premise application to a cloud environment (AWS/Azure).

**Key Feature:** The functionality of the software does not change — only the implementation details change to accommodate the new environment.

*Adaptive maintenance accounts for approximately 18–25% of total software maintenance effort.*

---

# SECTION B — Medium Answer Questions (10 Marks Each)

---

## Q2(a) Iterative Waterfall Model and Spiral Model for Software Lifecycle — Discuss Various Activities in Each Phase.

---

### Part 1: Iterative Waterfall Model

The **Waterfall Model** (proposed by Winston Royce, 1970) is the classical, sequential approach to software development where development progresses through distinct, non-overlapping phases, each producing a deliverable that feeds the next phase.

The **Iterative Waterfall** extends the pure waterfall by allowing feedback loops — if a problem is discovered in a phase, control can return to the previous phase for correction.

```
+-------------------+
| Requirement       | ←──────────────────────┐
| Analysis & SRS    |                        |
+-------------------+                        |
        ↓ (feedback ↑)                       |
+-------------------+                        |
| System Design     |                        |
| (HLD + LLD)       |                        |
+-------------------+                        |
        ↓ (feedback ↑)                       |
+-------------------+                        |
| Coding            |                        |
| (Implementation)  |                        |
+-------------------+                        |
        ↓ (feedback ↑)                       |
+-------------------+                        |
| Testing           |                        |
+-------------------+                        |
        ↓ (feedback ↑)                       |
+-------------------+                        |
| Deployment &      |                        |
| Maintenance       |────────────────────────┘
+-------------------+
```

**Phase-by-Phase Activities:**

**Phase 1 — Requirement Analysis:**
- Gather requirements from stakeholders through interviews and meetings.
- Analyze and document requirements in the **SRS document**.
- Perform feasibility study.
- *Deliverable:* SRS Document.

**Phase 2 — System Design:**
- *High-Level Design (HLD):* Architecture, module decomposition, database schema.
- *Low-Level Design (LLD):* Detailed module design, pseudocode, flowcharts, data structures.
- *Deliverable:* Design Document (HLD + LLD).

**Phase 3 — Implementation (Coding):**
- Developers write source code based on LLD.
- Unit testing performed by developers.
- Code reviews and standards compliance checks.
- *Deliverable:* Source Code.

**Phase 4 — Testing:**
- Integration testing, system testing, acceptance testing.
- Bug tracking, defect resolution.
- Performance and security testing.
- *Deliverable:* Test Reports, Tested Software.

**Phase 5 — Deployment and Maintenance:**
- Software deployed to production.
- User training and documentation.
- Ongoing corrective, adaptive, and perfective maintenance.
- *Deliverable:* Deployed System, Maintenance Logs.

**Advantages of Iterative Waterfall over Pure Waterfall:**
- Allows correction of errors discovered late.
- More realistic — pure waterfall ignores the reality that phases overlap.

**Disadvantages:**
- Still largely sequential; expensive to go back multiple phases.
- Not suitable for projects with rapidly changing requirements.
- Integration and testing happen too late.

---

### Part 2: Spiral Model

The **Spiral Model** was proposed by **Barry Boehm (1988)**. It is a **risk-driven**, iterative model that combines the systematic structure of the waterfall model with the iterative nature of prototyping. The development proceeds in spirals — each spiral represents one complete iteration through all phases.

```
         ↑ Cumulative Cost
         |
   Commit│          Prototype 3 ●
   to    │   Prototype 2 ●    /
   Partitioned│  Prototype 1 ●  /     Final Product
   approach  │        ●──────/
         |  /    ●──/
         | ●──/
         |──────────────────────→
              Progress through phases
```

**The Four Quadrants of each Spiral:**

**Quadrant 1 — Determine Objectives, Alternatives, and Constraints:**
- Define the objectives of the current spiral iteration.
- Identify alternative approaches (build, reuse, buy).
- Identify constraints (cost, schedule, technical).
- *Activities:* Stakeholder communication, planning, requirements gathering.

**Quadrant 2 — Evaluate Alternatives, Identify and Resolve Risks:**
- Analyze identified risks.
- Build prototypes to validate requirements and design.
- Conduct risk analysis workshops.
- *Activities:* Risk analysis, prototyping, simulations, benchmarks.
- **This is the key differentiator of the Spiral Model — explicit risk management.**

**Quadrant 3 — Develop and Test Next-Level Product:**
- Design, code, and test the product or component.
- Choose the development model appropriate for this iteration.
- *Activities:* Architecture design, coding, unit testing, integration testing.

**Quadrant 4 — Plan the Next Phase:**
- Review results with stakeholders.
- Plan the next spiral iteration.
- Get commitment and approval to proceed.
- *Activities:* Customer evaluation, project review, next-phase planning.

**Comparison:**

| Feature | Iterative Waterfall | Spiral |
|---|---|---|
| Structure | Sequential with feedback | Iterative spirals |
| Risk Management | Minimal | Explicit and central |
| Customer Involvement | At start and end | At each spiral |
| Cost | Lower | Higher |
| Suitable for | Stable requirements | Large, high-risk projects |
| Flexibility | Low | High |

---

## Q2(b) Problems Faced in Software Engineering — Explained in Detail.

The **Software Crisis** (coined at the 1968 NATO Software Engineering Conference) refers to the persistent set of problems in developing, delivering, and maintaining software systems. These problems continue to challenge the industry today.

---

**1. Schedule and Cost Overruns:**
The most prevalent problem — software projects consistently take longer and cost more than estimated. Studies (Standish CHAOS Report) show that over 50% of software projects fail to meet their original schedule or budget.

*Causes:* Poor estimation techniques, scope creep, unrealistic deadlines, and underestimating complexity.
*Example:* The Denver International Airport baggage handling system was 16 months late and $500 million over budget.

---

**2. Poor Software Quality:**
Software products are delivered with numerous defects that reduce reliability, security, and user satisfaction. The average industry defect rate is 1–25 bugs per 1,000 lines of code.

*Causes:* Inadequate testing, poor design, lack of coding standards, insufficient code reviews.
*Impact:* Crashes, data loss, security breaches, user frustration.

---

**3. Increasing Complexity:**
Modern software systems are extraordinarily complex — managing millions of lines of code, distributed systems, real-time constraints, concurrent processes, and integration with hundreds of external services simultaneously.

*Causes:* Expanding user requirements, multi-platform environments, evolving technology stacks.
*Impact:* Difficulty in design, testing, and maintenance; increased defect rates.

---

**4. Requirement Instability:**
Requirements frequently change during development, causing rework, delays, and cost overruns. Users often don't know what they want until they see what they don't want.

*Causes:* Incomplete initial requirements, changing business environment, poor stakeholder communication.
*Impact:* Wasted development effort, conflicts between client and developer.

---

**5. Maintenance Burden:**
60–80% of software lifecycle cost is spent on maintenance. As software ages, accumulated technical debt, poor documentation, and staff turnover make maintenance increasingly expensive and error-prone.

*Causes:* Poor initial design, insufficient documentation, high programmer turnover.
*Impact:* Maintenance becomes more expensive than new development.

---

**6. Lack of Skilled Professionals:**
The demand for software engineers far exceeds supply globally. Finding professionals with expertise in both the technical domain and business domain is extremely difficult.

*Causes:* Rapid technological change, global software demand growth.
*Impact:* Hiring difficulties, high salaries, knowledge gaps, errors from inexperienced teams.

---

**7. Poor Communication:**
Breakdown in communication between developers, clients, and end users leads to misunderstood requirements and misaligned expectations.

*Causes:* Technical jargon, geographical distribution, cultural differences.
*Impact:* Systems that don't meet user needs.

---

**8. Inadequate Testing:**
Testing is often rushed due to schedule pressure, leading to inadequate coverage and defects escaping to production.

*Causes:* Time pressure, insufficient test planning, lack of test automation.
*Impact:* Production defects, emergency patches, user dissatisfaction.

---

**9. Security Vulnerabilities:**
Software security is often treated as an afterthought, leading to systems vulnerable to attacks.

*Causes:* Lack of security training, time pressure, not following secure coding standards.
*Impact:* Data breaches, financial loss, legal liability.

---

**10. Tool and Technology Fragmentation:**
The vast number of programming languages, frameworks, tools, and platforms makes standardization difficult and increases learning curves.

*Impact:* Integration challenges, vendor lock-in, difficulty in finding qualified personnel.

---

## Q2(c) Structure Chart and All its Types with Suitable Examples.

### Structure Chart

A **Structure Chart** (also called a **Module Chart** or **Hierarchy Chart**) is a graphical design tool used in **Function-Oriented Design** to represent the hierarchical organization of a software system into modules and show the relationships (calls, data flow, control flow) between them.

Introduced by **Yourdon and Constantine**, structure charts show:
- What modules exist in the system
- Which modules call which other modules
- What data is passed between modules
- What control information is passed between modules

### Notations Used in Structure Charts:

| Symbol | Meaning |
|---|---|
| Rectangle | Module (function/procedure) |
| Arrow with open circle | Data couple (data passed between modules) |
| Arrow with filled circle | Control couple (flag/switch passed) |
| Diamond on arrow | Conditional call |
| Arc on arrow | Iterative/loop call |
| Double-sided rectangle | Library/predefined module |

---

### Types of Modules in a Structure Chart:

**1. Sequential Modules:**
Modules are called one after another in a fixed order. Control flows top to bottom, left to right.

```
        +----------+
        |  MAIN    |
        +----------+
        /     |     \
       ↓      ↓      ↓
  +------+ +------+ +------+
  | READ | |PROCESS| |PRINT |
  +------+ +------+ +------+
```

*Example:* A payroll program that sequentially reads employee data, processes salary, then prints pay slips.

---

**2. Conditional (Selection) Modules:**
A module calls one of several subordinate modules based on a condition. Shown with a diamond symbol on the call arrow.

```
           +----------+
           |  MAIN    |
           +----------+
                |
           ◇ (condition)
           /         \
          ↓           ↓
    +----------+  +----------+
    |PROCESS_A |  |PROCESS_B |
    +----------+  +----------+
```

*Example:* A tax system that calls either `calculateIncomeTax()` or `calculateCorporateTax()` based on the taxpayer type.

---

**3. Repetition (Iterative) Modules:**
A module calls a subordinate module repeatedly in a loop. Shown with an arc (loop symbol) on the call arrow.

```
           +----------+
           |  MAIN    |
           +----------+
                |
             ↺ (loop)
                ↓
           +----------+
           | PROCESS  |
           +----------+
           /          \
          ↓            ↓
    +----------+  +----------+
    |   READ   |  |  WRITE   |
    +----------+  +----------+
```

*Example:* A module that reads and processes each record in a file repeatedly until end-of-file.

---

### Complete Example — Library Management System Structure Chart:

```
                    +------------------+
                    | LIBRARY SYSTEM   |
                    +------------------+
                    /       |          \
                   ↓        ↓           ↓
            +----------+ +----------+ +----------+
            |  ISSUE   | | RETURN   | | SEARCH   |
            |  BOOK    | | BOOK     | | BOOK     |
            +----------+ +----------+ +----------+
            /    \            |           |
           ↓      ↓           ↓           ↓
      +------+ +-------+ +--------+ +----------+
      |CHECK | |UPDATE | |UPDATE  | |DISPLAY   |
      |AVAIL | |RECORD | |RECORD  | |RESULTS   |
      +------+ +-------+ +--------+ +----------+
```

**Data Couples and Control Couples:**
- Data couple (open circle): BookID, MemberID, IssuedDate — actual data values passed.
- Control couple (filled circle): ErrorFlag, AvailabilityFlag — Boolean control information.

---

### Characteristics of a Good Structure Chart:
- **High cohesion** within each module
- **Low coupling** between modules
- **Fan-out** (number of subordinates) ideally 3–7
- **Fan-in** (number of callers) high = reusable module (good)
- **Top module** should coordinate, not process
- **Leaf modules** should do actual processing

---

## Q2(d) Explain Boundary Value Analysis and its Significance with Example.

### Boundary Value Analysis (BVA)

**Boundary Value Analysis (BVA)** is a **black box testing technique** based on the observation that defects tend to cluster near the **boundaries** of input domains rather than in the middle. Most programming errors occur at the extreme values of input ranges — off-by-one errors, boundary condition mishandling, fence-post errors.

**Principle:** Test cases are designed at and around the edges of equivalence classes rather than randomly within them.

---

### Why Boundaries are Error-Prone:
- Programmers often write `<` instead of `<=`
- Array indices start at 0 but programmers mistakenly code `i = 1`
- Loop conditions (`while i < n` vs `while i <= n`) frequently have off-by-one bugs
- Edge cases like empty input, maximum-length strings, and overflow values are often not handled

---

### BVA Test Case Selection Rules:

For a valid input range **[min, max]**, select:

| Test Value | Notation | Why |
|---|---|---|
| Minimum | min | Lower boundary |
| Just above minimum | min + 1 | Just inside lower boundary |
| Nominal (middle) | (min+max)/2 | Typical value |
| Just below maximum | max - 1 | Just inside upper boundary |
| Maximum | max | Upper boundary |

For **Robust BVA**, also add:
- min - 1 (just below minimum — invalid)
- max + 1 (just above maximum — invalid)

---

### Types of BVA:

**1. Normal BVA:** Tests only valid input values at and near boundaries (5 test cases per variable).

**2. Robust BVA:** Tests both valid and invalid boundary values (7 test cases per variable).

**3. Worst-Case BVA:** For programs with multiple input variables, takes the Cartesian product of all boundary values (5^n for n variables).

**4. Robust Worst-Case BVA:** Cartesian product of all 7 boundary values (7^n for n variables).

---

### Example: Triangle Classification Program

**Problem:** A program accepts three sides (a, b, c) of a triangle, each in the range [1, 200], and classifies the triangle.

**For single variable a with range [1, 200]:**

| Test Case | a | b | c | Type | Expected Output |
|---|---|---|---|---|---|
| TC1 | 1 (min) | 100 | 100 | Valid | Valid / Isosceles |
| TC2 | 2 (min+1) | 100 | 100 | Valid | Valid |
| TC3 | 100 (nominal) | 100 | 100 | Valid | Equilateral |
| TC4 | 199 (max-1) | 100 | 100 | Valid | Valid |
| TC5 | 200 (max) | 100 | 100 | Valid | Valid |
| TC6 | 0 (min-1) | 100 | 100 | Invalid (Robust) | Error message |
| TC7 | 201 (max+1) | 100 | 100 | Invalid (Robust) | Error message |

---

### Another Example: ATM Withdrawal Program

**Problem:** ATM allows withdrawal of amount in range [100, 10000] (in multiples of 100).

| Test Case | Amount | Type | Expected Output |
|---|---|---|---|
| TC1 | 100 | Minimum | Dispense ₹100 |
| TC2 | 200 | Min+1 step | Dispense ₹200 |
| TC3 | 5000 | Nominal | Dispense ₹5000 |
| TC4 | 9900 | Max-1 step | Dispense ₹9900 |
| TC5 | 10000 | Maximum | Dispense ₹10000 |
| TC6 | 0 | Below min (Robust) | Error: Minimum withdrawal is ₹100 |
| TC7 | 10100 | Above max (Robust) | Error: Maximum withdrawal is ₹10000 |
| TC8 | 150 | Non-multiple (Robust) | Error: Enter multiple of 100 |

---

### Significance of BVA:

1. **High defect detection rate** — most bugs lurk at boundaries; BVA directly targets them.
2. **Systematic approach** — provides a principled method to select test cases rather than ad hoc guessing.
3. **Complements Equivalence Partitioning** — EP divides inputs into classes; BVA tests the edges of those classes.
4. **Cost effective** — relatively few test cases cover high-risk areas.
5. **Applicable to outputs** — BVA can also be applied to output values to select test cases that produce boundary outputs.

---

## Q2(e) Software Configuration Management (SCM), Version Control, and Project Risks.

### Software Configuration Management (SCM)

**Software Configuration Management (SCM)** is a software engineering discipline that controls and manages changes to software products throughout the software development lifecycle. It ensures that the software product evolves in a controlled, traceable, and auditable manner.

**IEEE Definition:** *"SCM is the discipline of identifying the configuration of a system at distinct points in time for the purpose of systematically controlling changes to the configuration and maintaining the integrity and traceability of the configuration throughout the system lifecycle."*

**Software Configuration Item (SCI):** Any artifact that is placed under SCM control — source code, design documents, test plans, SRS, executables, database schemas.

---

### Tasks in the SCM Process:

**1. Configuration Identification:**
Identifying and labeling all items (Software Configuration Items — SCIs) that need to be controlled.
- Assign unique identifiers to each SCI.
- Establish a baseline — a snapshot of SCIs at a specific point in time.
- *Example:* SRS-v1.0, Design-Doc-v2.1, Source-Code-Sprint3.

**2. Configuration Control (Change Control):**
Managing and controlling changes to SCIs through a formal process.

**Change Control Process:**
```
Change Request (CR) submitted
         ↓
Change Control Board (CCB) reviews CR
         ↓
CR Approved / Rejected
         ↓ (if Approved)
Developer makes changes
         ↓
Changes tested and verified
         ↓
New baseline established
         ↓
Change logged in change log
```

The **Change Control Board (CCB)** is a committee of stakeholders that evaluates, approves, or rejects change requests.

**3. Configuration Status Accounting:**
Recording and reporting the status of SCIs and all change requests.
- Maintain a log of: What changed, who changed it, when, why.
- Provides audit trail and traceability.
- *Tools:* JIRA, Bugzilla for tracking change requests.

**4. Configuration Auditing:**
Verifying that the actual software matches what is documented — ensuring the build is correct and complete.
- **Functional Configuration Audit (FCA):** Verifies that software meets functional requirements.
- **Physical Configuration Audit (PCA):** Verifies that all SCIs are present and consistent.

**5. Release Management:**
Managing the process of building, packaging, and releasing software versions to users.

---

### Version Control

**Version Control** (also called Revision Control or Source Control) is the SCM activity of tracking and managing changes to source code over time, maintaining a history of all changes, and enabling collaboration among multiple developers.

**Key Concepts:**
- **Repository:** Central storage of all project files and their history.
- **Commit:** Saving a snapshot of changes with a description.
- **Branch:** An independent line of development.
- **Merge:** Combining changes from different branches.
- **Tag:** Marking a specific commit as a release (e.g., v1.0).
- **Checkout:** Getting files from the repository to the working directory.

**Types of Version Control Systems:**

**1. Local Version Control:**
Simple database on the developer's machine tracking file changes.
*Example:* RCS (Revision Control System).
*Problem:* No collaboration support.

**2. Centralized Version Control (CVCS):**
Single central server stores all versions. Developers check out files from the central server.
*Examples:* CVS, Subversion (SVN).
*Advantages:* Centralized control, easy administration.
*Disadvantages:* Single point of failure; no offline work.

**3. Distributed Version Control (DVCS):**
Every developer has a complete copy of the entire repository. Changes are synchronized between repositories.
*Examples:* **Git**, Mercurial.
*Advantages:* No single point of failure, full offline capability, fast operations.
*Disadvantages:* More complex to learn and manage.

**Git Workflow Example:**
```
git clone <repo>        → Get a copy of the repository
git branch feature-x    → Create a new branch
git checkout feature-x  → Switch to new branch
[make changes]
git add .               → Stage changes
git commit -m "message" → Commit changes
git push origin feature-x → Push to remote
git merge feature-x     → Merge into main branch
git tag v1.0            → Mark a release
```

---

### Types of Project Risks in Software Engineering

**Software Project Risk** is any uncertain event or condition that, if it occurs, could positively or negatively affect project objectives (cost, schedule, quality, scope).

**Categories of Project Risks:**

**1. Schedule Risks:**
Risks that cause the project to slip its delivery dates.
- Underestimation of task complexity
- Unexpected technical difficulties
- Key personnel unavailability
- *Example:* A critical integration turns out to take 3 weeks instead of the estimated 3 days.

**2. Cost Risks:**
Risks that cause the project to exceed its budget.
- Poor cost estimation
- Scope expansion without budget increase
- Vendor price increases
- *Example:* Licensed third-party software costs twice the anticipated price.

**3. Technical Risks:**
Risks related to the technology being used.
- New, unproven technology failing
- Performance not meeting requirements
- Integration failures
- *Example:* The chosen NoSQL database cannot handle the required transaction consistency.

**4. Business Risks:**
Risks arising from the business environment.
- Market changes making the software obsolete before release
- Competitor releasing a similar product first
- Organizational restructuring canceling the project
- *Example:* A new regulation changes requirements mid-project.

**5. Personnel Risks:**
Risks related to the project team.
- Key developer leaving the project
- Skill gaps in the team
- Team conflicts
- *Example:* The lead architect quits, taking critical system knowledge with them.

**6. Operational Risks:**
Risks in deployment and operations.
- Inadequate infrastructure
- Data migration failures
- User resistance to adoption

**Risk Management Process:**
```
Risk Identification → Risk Analysis (Probability × Impact) →
Risk Prioritization → Risk Mitigation Planning → Risk Monitoring
```

---

# SECTION C — Long Answer Questions (10 Marks Each)

---

## Q3(a) Explain Software Characteristics in Detail. Discuss the Reasons of Software Crisis.

### Software Characteristics

Software is a unique engineering product fundamentally different from any other artifact humans have built. Understanding its characteristics is the starting point of software engineering.

**1. Software is Developed (Engineered), Not Manufactured:**
Software is created through intellectual effort — thinking, designing, writing code. Unlike hardware, there is no physical manufacturing process. You cannot run a software "factory" that mass-produces identical software products on an assembly line. Every line of code is individually crafted. This means quality must be built in during design and development, not inspected in after production.

**2. Software Does Not Wear Out:**
Hardware components deteriorate over time due to physical forces — friction, corrosion, heat, and mechanical stress. Software, being pure logic and information, does not suffer physical degradation. A software program runs identically in year 10 as it did in year 1 (assuming the environment hasn't changed). However, software does "deteriorate" functionally — as bugs are fixed, each fix may introduce new subtle defects, and as features are added, complexity grows. This creates a gradually increasing failure rate over time.

**3. Software is Complex:**
Software systems rank among the most complex artifacts humans have ever built. A modern operating system may contain 50+ million lines of code. Each line interacts with thousands of others in ways that are difficult to predict completely. The number of possible execution paths through a complex program is astronomically large — making exhaustive testing practically impossible.

**4. Software is Invisible:**
Unlike a bridge or a building, software has no physical form. Its structure cannot be seen in space. This makes it difficult to visualize, communicate, and manage. A software architecture diagram is an abstraction — not the actual software. This invisibility creates challenges in project management and quality assurance.

**5. Software is Flexible:**
Software can be modified relatively easily compared to hardware. A bug in a chip requires a new manufacturing run; a bug in software can be fixed with a patch. This flexibility is both an advantage and a danger — the ease of modification invites constant changes that erode quality and increase complexity (scope creep).

**6. Software is Custom-Built:**
Most software is built for specific purposes. Although component-based development and software reuse are growing, most software systems are still largely custom-engineered for specific requirements, unlike hardware which is often assembled from standard, off-the-shelf components.

**7. Software Costs are Concentrated in Human Labor:**
Unlike hardware manufacturing where material costs dominate, software costs are overwhelmingly people costs — analysts, architects, developers, testers, and project managers. Labor typically constitutes 70–80% of total software project cost.

**8. Software Remains After Physical Failure:**
When a hardware system fails, the software it was running may still be intact and reusable on new hardware. Software itself doesn't fail from physical causes.

---

### Software Crisis — Definition and Reasons

The **Software Crisis** was a term coined at the **1968 NATO Software Engineering Conference** in Garmisch, Germany, to describe the growing set of problems in developing large, complex software systems. The crisis manifested as:
- Projects delivered late and over budget
- Software that didn't meet user requirements
- Unreliable software riddled with defects
- Software that was difficult and expensive to maintain

**Reasons for Software Crisis:**

**1. Rapidly Growing Software Complexity:**
As computers became more powerful, users demanded increasingly complex software systems — operating systems, databases, real-time control systems, distributed applications. The techniques and tools of the time were not adequate to manage this complexity.

**2. Lack of Formal Methods and Discipline:**
Early software development was an art, not an engineering discipline. Developers wrote code without formal design, documentation, or testing methodologies. There were no established processes, standards, or best practices.

**3. Poor Requirement Management:**
Requirements were gathered informally and incompletely. As development progressed, misunderstood requirements led to massive rework. There was no systematic way to capture, analyze, or validate requirements.

**4. Inadequate Testing:**
Testing was informal and incomplete. Software was often released with numerous known and unknown defects. There were no systematic testing methodologies (black box, white box, integration testing frameworks came later).

**5. Lack of Project Management Techniques:**
Software projects were managed using intuition rather than formal project management techniques. There were no established methods for estimating cost and effort, tracking progress, or managing risks.

**6. Communication Gaps:**
Poor communication between users (who understood the problem) and developers (who could solve it technically) led to systems that technically worked but failed to solve the user's actual problem.

**7. Software Could Not Keep Pace with Hardware:**
Hardware capability was doubling every 18 months (Moore's Law). Users expected software to similarly expand in capability. But software productivity did not scale the same way — writing quality software was (and remains) fundamentally limited by human cognitive capacity.

**8. Lack of Metrics and Measurement:**
There was no way to objectively measure software quality, progress, or productivity. Managers had no reliable data to make informed decisions.

---

## Q3(b) Discuss the Various McCall's Quality Factors with the Quality Triangle.

### McCall's Software Quality Model

**Jim McCall** proposed this influential software quality model in 1977. It organizes software quality into a structured hierarchy with three perspectives — each addressing a different aspect of how the software is used and evolved.

### McCall's Quality Triangle:

```
        Product
        Revision
           △
          /|\
         / | \
        /  |  \
       /   |   \
      /    |    \
Product───────── Product
Operation        Transition
```

The triangle represents the three major perspectives:
- **Product Operation:** Quality factors related to using the software
- **Product Revision:** Quality factors related to changing the software
- **Product Transition:** Quality factors related to adapting the software to new environments

Each perspective contains specific **quality factors**, which are then broken down into **quality criteria** (measurable attributes) and **quality metrics** (how to measure them).

---

### Product Operation Factors (Using the Software):

**1. Correctness:**
The degree to which the software performs its specified functions accurately and completely. Does the software do exactly what the SRS says?
- *Criteria:* Traceability, completeness, consistency.
- *Example:* A banking system that computes interest correctly as per defined formulas.

**2. Reliability:**
The ability of the software to perform its required functions under stated conditions for a stated period of time. Measured as probability of failure-free operation.
- *Criteria:* Error tolerance, consistency, accuracy.
- *Metric:* MTBF (Mean Time Between Failures).
- *Example:* An ATM that operates without failure for 99.99% of the time.

**3. Efficiency:**
The amount of computing resources (CPU, memory, disk, network bandwidth) the software requires to perform its functions.
- *Criteria:* Execution efficiency, storage efficiency.
- *Example:* A search engine that returns results in under 200ms using minimal server resources.

**4. Integrity:**
The ability to control unauthorized access to software and data. How well does the software protect itself and its data from unauthorized use?
- *Criteria:* Access control, access audit.
- *Example:* A hospital system that prevents unauthorized staff from accessing patient records.

**5. Usability:**
The effort required to learn, operate, prepare inputs for, and interpret outputs of the software. How user-friendly is it?
- *Criteria:* Operability, training, communicativeness.
- *Example:* An application where a new user can complete a purchase in under 5 minutes without reading a manual.

---

### Product Revision Factors (Changing the Software):

**6. Maintainability:**
The effort required to locate and fix an error in the software. How easy is it to find and correct defects?
- *Criteria:* Consistency, simplicity, conciseness, self-descriptiveness, modularity.
- *Example:* A system where any bug can be located and fixed within 4 hours.

**7. Flexibility:**
The effort required to modify an operational program. How easily can the software be enhanced with new features?
- *Criteria:* Modularity, generality, expandability, self-descriptiveness.
- *Example:* A tax system where new tax slabs can be added by changing configuration files rather than code.

**8. Testability:**
The effort required to test a program to ensure it performs its intended function. Does the software have properties that make it easy to test?
- *Criteria:* Simplicity, instrumentation, self-descriptiveness, modularity.
- *Example:* Software with well-separated modules that can be unit-tested independently via clear interfaces.

---

### Product Transition Factors (Adapting to New Environments):

**9. Portability:**
The effort required to transfer the software from one hardware configuration or operating system environment to another.
- *Criteria:* Software system independence, machine independence, self-descriptiveness.
- *Example:* A web application that runs identically on Windows, Linux, and macOS.

**10. Reusability:**
The extent to which software components can be reused in other applications. Can parts of this software be lifted and used elsewhere?
- *Criteria:* Generality, modularity, software system independence, self-descriptiveness.
- *Example:* An authentication module reused across five different company applications.

**11. Interoperability:**
The effort required to couple the software with other systems. How easily does the software integrate with external systems?
- *Criteria:* Modularity, communications commonality, data commonality.
- *Example:* An ERP system that exchanges data with CRM and SCM systems using standard APIs.

---

### McCall's Quality Model — Summary Table:

| Perspective | Quality Factor | Key Question |
|---|---|---|
| **Product Operation** | Correctness | Does it do the right things? |
| | Reliability | Does it do them consistently? |
| | Efficiency | Does it use resources wisely? |
| | Integrity | Is it secure? |
| | Usability | Is it easy to use? |
| **Product Revision** | Maintainability | Is it easy to fix? |
| | Flexibility | Is it easy to change? |
| | Testability | Is it easy to test? |
| **Product Transition** | Portability | Is it easy to move? |
| | Reusability | Is it easy to reuse? |
| | Interoperability | Is it easy to integrate? |

**Limitation of McCall's Model:** Some factors conflict — improving security (integrity) often reduces usability; improving efficiency may reduce portability. Engineers must make conscious trade-offs.

---

## Q4(a) Explain the SEI-CMM Model. What do you mean by "State of Fire Fighting"?

### SEI Capability Maturity Model (CMM)

The **Capability Maturity Model (CMM)** was developed by the **Software Engineering Institute (SEI) at Carnegie Mellon University** under contract from the U.S. Department of Defense in 1987, with the formal publication by **Watts Humphrey** in 1988. It provides a roadmap for improving an organization's software process maturity.

**Core Philosophy:** The quality of a software product is largely determined by the quality of the process used to develop it. Mature processes produce consistently better products.

---

### Structure of CMM:

Each maturity level (except Level 1) is defined by **Key Process Areas (KPAs)** — clusters of related activities that, when performed collectively, achieve a set of goals.

---

### Five Maturity Levels of CMM:

```
Level 5: OPTIMIZING ──── Continuous Process Improvement
           △
Level 4: MANAGED ─────── Quantitative Control
           △
Level 3: DEFINED ─────── Process Standardization
           △
Level 2: REPEATABLE ──── Basic Project Management
           △
Level 1: INITIAL ─────── Chaotic (Ad Hoc)
```

---

**Level 1 — Initial (Ad Hoc / Chaotic):**

This is the starting point for all organizations. There are no stable software processes. Development is ad hoc and unpredictable.

- **Characteristics:**
  - Software processes are improvised by the team.
  - Success depends entirely on individual heroics and exceptional people.
  - Schedule, budget, and quality are unpredictable.
  - Even if the organization has defined procedures, they are not followed.
  - Crisis management is the norm.
- **This is the "State of Fire Fighting."** (See detailed explanation below.)
- **KPAs:** None defined.
- **Outcome:** Project success is accidental; the same approach may fail on the next project.

---

**Level 2 — Repeatable:**

Basic project management processes are established. Processes are documented for similar projects and can be repeated.

- **Characteristics:**
  - Basic software management controls exist.
  - Past successes can be repeated on similar projects.
  - Requirements management, planning, tracking, and quality assurance are in place.
- **KPAs (6):**
  1. Requirements Management
  2. Software Project Planning
  3. Software Project Tracking and Oversight
  4. Software Subcontract Management
  5. Software Quality Assurance
  6. Software Configuration Management

---

**Level 3 — Defined:**

Both management and engineering processes are documented, standardized, and integrated into an organization-wide software process.

- **Characteristics:**
  - A defined, consistent process is used across all projects.
  - A Software Process Group actively manages and improves the process.
  - Training programs exist to teach the standard process.
- **KPAs (7):**
  1. Organization Process Focus
  2. Organization Process Definition
  3. Training Program
  4. Integrated Software Management
  5. Software Product Engineering
  6. Intergroup Coordination
  7. Peer Reviews

---

**Level 4 — Managed:**

Detailed quantitative measures are collected and analyzed. The process is controlled using statistical methods.

- **Characteristics:**
  - Metrics are collected for process and product quality.
  - Statistical Process Control (SPC) is applied.
  - Process performance is predictable within quantitative bounds.
- **KPAs (2):**
  1. Quantitative Process Management
  2. Software Quality Management

---

**Level 5 — Optimizing:**

The organization uses quantitative feedback to drive continuous process improvement. Innovative technologies are systematically evaluated and adopted.

- **Characteristics:**
  - Defect prevention is proactive, not reactive.
  - New technologies and process innovations are evaluated and integrated.
  - Process improvement is everyone's job.
- **KPAs (3):**
  1. Defect Prevention
  2. Technology Change Management
  3. Process Change Management

---

### The "State of Fire Fighting" (Level 1 — Initial)

The **"State of Fire Fighting"** is a vivid metaphor used by Watts Humphrey to describe organizations stuck at **CMM Level 1 — Initial**.

**Explanation:**
In a Level 1 organization, the software team is perpetually reacting to crises rather than proactively managing the development process. The team is always "putting out fires" — scrambling to fix critical bugs, recover from missed deadlines, handle unexpected technical failures, and satisfy angry customers — rather than preventing these fires through good process and planning.

**Characteristics of the Fire-Fighting State:**

1. **No time to improve:** The team is so consumed by daily crises that there is no time to step back, reflect, and improve processes. Firefighting creates a vicious cycle.

2. **Heroism over process:** Projects succeed only when individual heroes work extreme overtime, solve critical problems through brilliance, and rescue projects from the brink of failure. This is unsustainable and unrepeatable.

3. **Reactive management:** Managers react to problems as they explode rather than anticipating and preventing them. There is no risk management.

4. **Unpredictable outcomes:** Because there is no stable process, project outcomes (cost, schedule, quality) vary wildly. Success is largely random.

5. **Same mistakes repeated:** Without process documentation and lessons learned, the same problems occur on every project. The organization never learns from failures.

6. **Death march projects:** Teams work endless overtime, morale collapses, turnover is high, and the cycle of chaos continues.

**The Escape from Fire Fighting:**
The transition from Level 1 to Level 2 requires management commitment to establishing basic project management discipline — even when the team is under pressure. This is difficult precisely because firefighting leaves no time for process improvement. Organizations must deliberately carve out time for process work, even at the cost of short-term slowdowns.

---

## Q4(b) Various Stages of Requirement Engineering Process with Diagrammatic Representation.

### Requirement Engineering Process

**Requirement Engineering (RE)** is the systematic process of defining, documenting, and maintaining the requirements for a software system. It forms the bridge between the real-world problem and the software solution.

**Why RE is Critical:** Studies show that 40–60% of all software defects originate in the requirements phase. A defect found during requirements costs 1 unit to fix; the same defect found in production costs 100–200 units to fix.

---

### Stages of Requirement Engineering:

```
    ┌──────────────┐
    │  ELICITATION │ ← Gathering requirements from stakeholders
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │   ANALYSIS   │ ← Understanding, modeling, resolving conflicts
    └──────┬───────┘
           │
           ▼
    ┌──────────────────┐
    │  SPECIFICATION   │ ← Documenting in SRS
    └──────┬───────────┘
           │
           ▼
    ┌──────────────┐
    │  VALIDATION  │ ← Checking requirements are complete, correct
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │  MANAGEMENT  │ ← Handling changes to requirements over time
    └──────────────┘
```

---

**Stage 1 — Requirements Elicitation:**

Gathering raw information about the system to be developed from all relevant stakeholders through various techniques.

**Stakeholders:** Clients, end users, domain experts, marketing, legal teams, system administrators.

**Elicitation Techniques:**
- Interviews (structured, unstructured, semi-structured)
- Questionnaires and surveys
- Observation / Ethnographic studies
- Document analysis (existing system manuals, business policies)
- Prototyping
- Workshops / JAD sessions
- Brainstorming
- Use case analysis

**Challenges:**
- Stakeholders don't know what they want
- Tacit knowledge (things users know but don't think to say)
- Conflicting requirements from different stakeholders
- Communication barriers between technical and business people

**Output:** Raw requirements data — notes, interview transcripts, observation logs.

---

**Stage 2 — Requirements Analysis:**

The raw requirements collected during elicitation are studied, organized, modeled, and analyzed to understand the system completely and resolve inconsistencies.

**Activities:**
- **Classify requirements:** Functional vs. non-functional, mandatory vs. optional.
- **Resolve conflicts:** Negotiate and prioritize when stakeholders disagree.
- **Information modeling:** Create models to represent the system.
  - **DFD (Data Flow Diagrams):** Show how data flows through the system.
  - **ERD (Entity Relationship Diagrams):** Show data entities and relationships.
  - **Use Case Diagrams:** Show system actors and their interactions.
  - **Decision Tables:** Model complex conditional logic.
- **Feasibility assessment:** Ensure requirements are technically and financially achievable.

**Output:** Analyzed, prioritized, conflict-free requirements; system models.

---

**Stage 3 — Requirements Specification (SRS):**

The analyzed requirements are formally documented in the **Software Requirements Specification (SRS)** document — the primary output of the RE process.

**IEEE 830 Standard — SRS Document Structure:**
1. Introduction (Purpose, Scope, Definitions, References, Overview)
2. Overall Description (Product perspective, functions, user characteristics, constraints)
3. Specific Requirements (Functional requirements, non-functional requirements, external interface requirements)
4. Appendices

**Properties of a Good SRS (IEEE 830):**
- **Correct:** Every requirement accurately represents the stakeholder's need.
- **Unambiguous:** Each requirement has exactly one interpretation.
- **Complete:** All requirements are included; nothing is missing.
- **Consistent:** No contradictions between requirements.
- **Ranked:** Requirements are prioritized (mandatory, desirable, optional).
- **Verifiable:** Each requirement can be tested.
- **Modifiable:** Structure allows easy updates.
- **Traceable:** Requirements can be traced back to their source.

---

**Stage 4 — Requirements Validation:**

The SRS is reviewed and validated to ensure it correctly and completely represents the stakeholder's needs before design begins.

**Validation Techniques:**
- **Requirements Reviews:** Formal walkthroughs and inspections of the SRS.
- **Prototyping:** Build a prototype and get stakeholder feedback.
- **Test case generation:** If you can write a test case for a requirement, it's verifiable (and therefore good).
- **Automated consistency checking:** Tools check for conflicts and ambiguities.

**Validation checks:**
- Are all requirements complete and consistent?
- Are requirements testable/verifiable?
- Are requirements traceable to stakeholder needs?
- Are there any contradictions?

---

**Stage 5 — Requirements Management:**

Managing requirements as they inevitably change throughout the project lifecycle.

**Activities:**
- Establish a change control process for requirement changes.
- Maintain traceability between requirements and design/code/tests.
- Impact analysis — evaluate the effect of each proposed change.
- Version control for the SRS document.
- Track requirement status (proposed → approved → implemented → verified).

---

## Q5(a) Draw the Software Design Framework and Discuss the Elements of the Design Model.

### Software Design — Overview

**Software Design** is the process of transforming the what (requirements from SRS) into the how (a blueprint for building the system). It is the creative intellectual activity of software engineering.

**Objectives of Design:**
- Implement all requirements from the SRS.
- Be readable and understandable by those who will code and test it.
- Provide a complete picture of the software to the implementers.

---

### Software Design Framework:

```
┌──────────────────────────────────────────────────────┐
│                SOFTWARE DESIGN PROCESS               │
├──────────────────────────────────────────────────────┤
│                                                      │
│  SRS / Requirements ──────────────────────────────►  │
│                                                      │
│  ┌──────────────────────────────────────────────┐    │
│  │           ARCHITECTURAL DESIGN               │    │
│  │   (System structure, subsystems, modules)    │    │
│  └──────────────────────┬───────────────────────┘    │
│                         │                            │
│                         ▼                            │
│  ┌──────────────────────────────────────────────┐    │
│  │           DATA DESIGN                        │    │
│  │   (Database schema, data structures)         │    │
│  └──────────────────────┬───────────────────────┘    │
│                         │                            │
│                         ▼                            │
│  ┌──────────────────────────────────────────────┐    │
│  │           INTERFACE DESIGN                   │    │
│  │   (UI, external interfaces, internal APIs)   │    │
│  └──────────────────────┬───────────────────────┘    │
│                         │                            │
│                         ▼                            │
│  ┌──────────────────────────────────────────────┐    │
│  │        COMPONENT / PROCEDURE DESIGN          │    │
│  │   (Detailed module logic, algorithms)        │    │
│  └──────────────────────────────────────────────┘    │
│                                                      │
│  ──────────────────────────────────────────────────► │
│            Design Document (HLD + LLD)               │
└──────────────────────────────────────────────────────┘
```

---

### Elements of the Design Model:

**1. Data Design (Data Architecture):**

Transforms the information domain model (ERD, data dictionary) into the data structures that will be implemented in the software.

**Activities:**
- Design database schema (tables, columns, data types, constraints)
- Define internal data structures (arrays, linked lists, trees, hash maps)
- Design the data dictionary
- Define file formats and I/O data structures

**Tools:** Entity-Relationship Diagrams (ERD), Data Flow Diagrams, Data Dictionary.

**Principle:** "Good data design leads to good program design." — If data is well-structured, the algorithms to manipulate it become simpler.

---

**2. Architectural Design (System Architecture):**

Defines the overall structure of the software system — the major components, their responsibilities, and the way they interact.

**Activities:**
- Choose an architectural style (layered, client-server, microservices, event-driven)
- Decompose the system into subsystems and modules
- Define the interfaces between subsystems
- Identify reuse opportunities

**Tools:** Architecture diagrams, Structure Charts, UML component diagrams.

**Example Architectures:**
- **Three-Tier:** Presentation → Business Logic → Data
- **MVC:** Model → View → Controller
- **Microservices:** Independent services communicating via REST APIs

---

**3. Interface Design:**

Defines how the software communicates with:
- **Users:** GUI design, screen layouts, interaction flows, error messages
- **External systems:** APIs, protocols, data formats for integration
- **Internal modules:** Function signatures, parameter lists, return types

**Activities:**
- Design user interface mockups and prototypes
- Define external API specifications (REST endpoints, request/response formats)
- Define internal interfaces between modules
- Design error handling and exception interfaces

**Principles:** Consistency, feedback, minimal surprise, error prevention, accessibility.

---

**4. Component Design (Detailed/Procedural Design):**

Transforms the architectural design of each module into a detailed description of the module's internal logic — the algorithm that implements the module's function.

**Activities:**
- Write pseudocode for each function/method
- Draw flowcharts for complex algorithms
- Define data structures used within each module
- Specify error handling within each module
- Define test conditions for unit testing

**Tools:** Pseudocode, flowcharts, Nassi-Shneiderman diagrams, decision tables.

**Characteristics of good component design:**
- One well-defined function (high cohesion)
- Minimal dependencies on other components (low coupling)
- Clear, simple logic
- Handles all edge cases and error conditions

---

### Design Principles (Complementary):

- **Abstraction:** Show only essential details, hide complexity.
- **Modularity:** Divide into manageable, independent modules.
- **Refinement:** Progressively elaborate design from abstract to concrete.
- **Information Hiding:** Expose only what's necessary through interfaces.
- **Separation of Concerns:** Each module addresses a distinct concern.

---

## Q5(b) Illustrate the Principles of Software Design. Discuss the Characteristics of Good Software Design.

### Principles of Software Design

Principles of software design are fundamental guidelines that help engineers create software that is correct, maintainable, reusable, and adaptable.

---

**Principle 1 — Abstraction:**

Abstraction means focusing on the essential features of a component while suppressing or hiding the irrelevant implementation details.

*Levels of Abstraction:*
- **Procedural Abstraction:** A function name (`calculateTax`) hides its implementation details.
- **Data Abstraction:** A data structure's interface hides its internal representation (e.g., a Stack exposes push/pop but hides whether it's implemented as array or linked list).
- **Control Abstraction:** A loop or conditional abstracts away the machine-level implementation of branching.

*Benefit:* Reduces cognitive complexity; developers work with concepts, not implementation details.

---

**Principle 2 — Modularity:**

Modularity is the practice of dividing a software system into distinct, self-contained units called modules, each with a well-defined purpose and interface.

*Why modularity:*
- Easier to understand (one module at a time)
- Easier to test (test modules independently)
- Easier to maintain (change one module without affecting others)
- Enables parallel development (teams work on different modules simultaneously)

*Rule:* A module should have **high cohesion** (elements strongly related) and **low coupling** (minimal dependence on other modules).

---

**Principle 3 — Information Hiding (Encapsulation):**

Proposed by **David Parnas (1972)**, information hiding means that each module should hide its internal design decisions and data from other modules. Other modules interact with it only through a defined, stable interface.

*Benefit:* Changes to internal implementation do not affect other modules, as long as the interface remains the same.
*Example:* A database access module hides whether it uses MySQL or PostgreSQL. The calling module only knows the interface (functions it can call).

---

**Principle 4 — Stepwise Refinement (Top-Down Decomposition):**

Proposed by **Niklaus Wirth**, this principle says that design should proceed from abstract to concrete in successive levels of detail. Start with a high-level description of the system and progressively add detail until each component is concrete enough to implement.

*Process:*
```
High-Level: "Process customer order"
     ↓
Refined: "Validate order → Calculate total → Apply discount → Process payment → Generate invoice"
     ↓
Detailed: Each step broken into functions with specific algorithms
```

---

**Principle 5 — Software Architecture:**

Every software system must have a defined architecture that describes the overall structure. The architecture establishes the framework within which individual modules operate and communicate. A good architecture separates concerns, defines clear boundaries, and enables scalability.

---

**Principle 6 — Separation of Concerns:**

Different aspects of a system (presentation, business logic, data storage) should be separated so that changes to one don't cascade unnecessarily into others.
*Example:* MVC pattern separates Model (data), View (presentation), Controller (logic).

---

**Principle 7 — Design for Change (Open-Closed Principle):**

Software should be designed to be open for extension (new features can be added) but closed for modification (existing code is not changed). This allows evolution without breaking existing functionality.

---

### Characteristics of Good Software Design:

**1. Correctness:**
The design must implement all the requirements specified in the SRS. Every functional requirement must be traceable to a design element.

**2. Understandability:**
The design must be clear and easy for developers to read, understand, and implement. Good names, clear structure, and adequate documentation are essential.

**3. Efficiency:**
The design should use computational resources optimally — efficient algorithms, appropriate data structures, and minimal redundant processing.

**4. Maintainability:**
Good design anticipates change. It is structured so that changes are localized — a change in one area doesn't ripple through the entire system.
- High cohesion, low coupling
- Clean separation of concerns
- Minimal redundancy

**5. Reliability:**
The design should include error handling, exception management, and fault tolerance mechanisms. The system should degrade gracefully rather than crash.

**6. Extensibility:**
The design should accommodate future enhancements without requiring fundamental restructuring. This is achieved through modularity and abstraction.

**7. Reusability:**
Well-designed components can be reused in other systems, reducing future development effort.

**8. Testability:**
The design should make testing easy — modules with clear inputs and outputs, minimal side effects, and well-defined behavior.

**9. Minimal Complexity:**
"Any intelligent fool can make things bigger, more complex, and more violent. It takes a touch of genius — and a lot of courage — to move in the opposite direction." — E.F. Schumacher. Good design minimizes unnecessary complexity.

**10. Traceability:**
Every design element must trace back to one or more requirements. This ensures nothing is missed and nothing unnecessary is included.

---

## Q6(a) Control Flow Graph and Cyclomatic Complexity — Three Methods and Independent Paths.

### Given Code:

```
IF A = 100
  THEN
    IF B > C
      THEN A = B
      ELSE A = C
    ENDIF
ENDIF
PRINT A
```

---

### Step 1: Numbered Statements

```
1.  IF A = 100
2.    IF B > C
3.      THEN A = B
4.      ELSE A = C
5.  ENDIF (outer)
6.  PRINT A
```

---

### Step 2: Control Flow Graph (CFG)

Each statement or decision becomes a node. Edges represent flow of control.

```
        ┌───────────────────┐
        │  Node 1           │
        │  IF A = 100?      │
        └──────┬────────────┘
        YES /   \ NO
           /     \
    ┌─────▼───┐   \
    │ Node 2  │    \
    │ IF B>C? │     \
    └──┬──┬───┘      \
    YES│  │NO         \
       │  │            \
  ┌────▼┐ ┌▼─────┐      \
  │Node3│ │Node 4│       \
  │ A=B │ │ A=C  │        \
  └──┬──┘ └──┬───┘         \
     │        │              \
     └───┬────┘               │
         │                    │
    ┌────▼────────────────────▼┐
    │         Node 5           │
    │         PRINT A          │
    └──────────────────────────┘
```

**Nodes:** 1, 2, 3, 4, 5
**Edges:**
- 1 → 2 (A=100, YES)
- 1 → 5 (A≠100, NO)
- 2 → 3 (B>C, YES)
- 2 → 4 (B≤C, NO)
- 3 → 5
- 4 → 5

**Summary:** N = 5 nodes, E = 6 edges, P = 1 connected component.

---

### Step 3: Cyclomatic Complexity — Three Methods

**Method 1 — Using the Formula V(G) = E - N + 2P:**

$$V(G) = E - N + 2P = 6 - 5 + 2(1) = 6 - 5 + 2 = \mathbf{3}$$

---

**Method 2 — Using Number of Predicate Nodes + 1:**

Count nodes with more than one outgoing edge (decision nodes):
- Node 1 (IF A=100): **Predicate node**
- Node 2 (IF B>C): **Predicate node**

Total predicate nodes = 2

$$V(G) = \text{Predicate Nodes} + 1 = 2 + 1 = \mathbf{3}$$

---

**Method 3 — Counting Number of Regions in the CFG:**

When the CFG is drawn on a plane, count the number of enclosed regions plus the outer infinite region.

Regions in the CFG:
- **Region 1:** Area enclosed by paths 1→2→3→5→1
- **Region 2:** Area enclosed by paths 2→4→5→2
- **Region 3:** Outer (infinite) region

$$V(G) = \text{Number of regions} = \mathbf{3}$$

✅ All three methods give the same answer: **V(G) = 3**

---

### Step 4: Independent Paths

Cyclomatic complexity = 3, so there are **3 linearly independent paths** (basis paths).

**Path 1 — A ≠ 100 (outer IF is false):**
```
Node 1 → Node 5
```
- Condition: A ≠ 100
- Execution: Skip inner IF; go directly to PRINT A.
- *Test case:* A = 50, B = anything, C = anything → prints 50.

---

**Path 2 — A = 100 AND B > C:**
```
Node 1 → Node 2 → Node 3 → Node 5
```
- Condition: A = 100 AND B > C
- Execution: Enter outer IF, enter inner IF (true), execute A = B, PRINT A.
- *Test case:* A = 100, B = 80, C = 30 → A = B = 80 → prints 80.

---

**Path 3 — A = 100 AND B ≤ C:**
```
Node 1 → Node 2 → Node 4 → Node 5
```
- Condition: A = 100 AND B ≤ C
- Execution: Enter outer IF, enter inner IF (false), execute A = C, PRINT A.
- *Test case:* A = 100, B = 20, C = 60 → A = C = 60 → prints 60.

---

### Summary:

| Method | Formula | Result |
|---|---|---|
| Method 1 | E - N + 2P = 6 - 5 + 2 | **V(G) = 3** |
| Method 2 | Predicate nodes + 1 = 2 + 1 | **V(G) = 3** |
| Method 3 | Number of regions in CFG | **V(G) = 3** |
| Independent Paths | | **3 paths** |

**Interpretation:** V(G) = 3 means:
- The code has **low to moderate complexity** (1–10 = simple).
- A minimum of **3 test cases** are needed for full path coverage.

---

## Q6(b) Various Types of Structural Testing Techniques with Examples.

### Structural Testing (White Box Testing)

**Structural Testing** (White Box Testing / Glass Box Testing) is a testing approach where the tester has complete knowledge of the internal structure, code, and logic of the program. Test cases are designed to ensure that specific structural elements of the code are exercised.

**Objective:** Verify the internal workings of the software — ensure that all code paths, branches, conditions, and loops are executed and tested.

---

### Types of Structural Testing Techniques:

**1. Statement Coverage (Line Coverage):**

Every executable **statement** in the program is executed at least once during testing.

*Coverage Metric:*
$$\text{Statement Coverage} = \frac{\text{Number of statements executed}}{\text{Total statements}} \times 100\%$$

*Example:*
```python
def process(x):
    result = x * 2      # Statement 1
    if x > 0:           # Statement 2
        result = x + 10 # Statement 3
    return result       # Statement 4
```

Test case `x = 5` covers statements 1, 2, 3, 4 (100% statement coverage).
Test case `x = -1` covers statements 1, 2, 4 (75% — statement 3 missed).

*Weakness:* Does not test the false branch of conditions; insufficient for finding all bugs.

---

**2. Branch Coverage (Decision Coverage):**

Every **branch** (true and false outcome) of every decision point (IF, WHILE, FOR, SWITCH) is executed at least once.

*Coverage Metric:*
$$\text{Branch Coverage} = \frac{\text{Branches executed}}{\text{Total branches}} \times 100\%$$

*Example (same code):*
- To achieve 100% branch coverage, we need:
  - `x = 5` (x > 0 → TRUE branch) → statements 1, 2, 3, 4
  - `x = -1` (x > 0 → FALSE branch) → statements 1, 2, 4

**Two test cases achieve 100% branch coverage.**

*Superiority over Statement Coverage:* Branch coverage subsumes statement coverage — 100% branch coverage guarantees 100% statement coverage, but not vice versa.

---

**3. Condition Coverage:**

Every **individual boolean sub-expression** within a compound condition evaluates to both TRUE and FALSE at least once.

*Example:*
```python
if (A > 0) AND (B > 0):
    # process
```

For 100% condition coverage, we need:
- (A > 0) = TRUE, (B > 0) = TRUE → A=5, B=5
- (A > 0) = FALSE, (B > 0) = FALSE → A=-1, B=-1

But this may not achieve full branch coverage — the condition `A>0 AND B>0` overall may never be FALSE for all sub-expression combinations.

*Weakness:* Condition coverage does not guarantee branch coverage.

---

**4. Multiple Condition Coverage (Compound Condition Coverage):**

All possible combinations of boolean values for all individual conditions within compound predicates are tested.

*Example:* For `IF (A > 0) AND (B > 0)`:

| Test Case | A > 0 | B > 0 | Combined |
|---|---|---|---|
| TC1 | T | T | T |
| TC2 | T | F | F |
| TC3 | F | T | F |
| TC4 | F | F | F |

For n conditions, requires 2^n test cases. Very thorough but expensive.

---

**5. Path Coverage (Basis Path Testing):**

Every **possible independent execution path** through the program is tested at least once. McCabe's Cyclomatic Complexity gives the minimum number of independent paths (basis paths) that must be tested.

*Example:*
```
IF A > 10
  THEN IF B > 20
    THEN X = 1
    ELSE X = 2
  ENDIF
ELSE X = 3
ENDIF
```

V(G) = 3, so 3 independent paths:
- **Path 1:** A ≤ 10 → X = 3
- **Path 2:** A > 10 AND B > 20 → X = 1
- **Path 3:** A > 10 AND B ≤ 20 → X = 2

*Strength:* Most thorough white-box technique. Guarantees 100% branch coverage.
*Weakness:* Infeasible for large programs with many loops (exponential paths).

---

**6. Loop Testing:**

Specifically focuses on testing **loop constructs** — the most error-prone structures in programs. Beizer proposed the following test cases for a simple loop with maximum n iterations:

| Test | Description |
|---|---|
| Skip the loop entirely | 0 iterations |
| Execute loop once | 1 iteration |
| Execute loop twice | 2 iterations |
| Execute loop m times (m < n) | Typical case |
| Execute loop n-1 times | Just before maximum |
| Execute loop n times | Maximum iterations |
| Execute loop n+1 times | Beyond maximum (boundary) |

*Example:* For a loop `for i in range(1, 101)` (1 to 100 iterations):
Test with: 0, 1, 2, 50, 99, 100, 101 iterations.

*Loop types requiring special attention:*
- **Simple loops:** Apply the above tests
- **Nested loops:** Start from innermost loop, work outward; test each loop independently
- **Concatenated loops:** Test each loop independently if independent; treat as nested if loop counters are dependent

---

### Comparison of Structural Testing Techniques:

| Technique | Strength | Weakness | % Coverage Achieved |
|---|---|---|---|
| Statement Coverage | Simple, easy | Misses branches | 60–70% of bugs |
| Branch Coverage | Better than statement | Misses compound conditions | 75–85% of bugs |
| Condition Coverage | Tests sub-expressions | Doesn't guarantee branch coverage | Better for compound conditions |
| Multiple Condition | Most thorough for conditions | 2^n explosion | High |
| Path Coverage | Most thorough overall | Infeasible for complex code | Highest |
| Loop Testing | Targets error-prone loops | Only for loops | High for loop bugs |

**Coverage Hierarchy:**
$$\text{Path} \supset \text{Branch} \supset \text{Statement}$$

*(Path coverage guarantees branch coverage; branch guarantees statement.)*

---

*End of Complete Answer Sheet — Paper 2*

---

**Questions Attempted:**
- Section A: All 10 questions (2 marks each = 20 marks)
- Section B: All 5 questions (10 marks each = 50 marks)
- Section C: All 6 question groups — both options addressed (10 marks each = 60 marks)
