# Software Engineering – Complete Question & Answer Guide

> Covers all questions from SECTION A, B, and C across all provided question papers.  
> Based on syllabus: NCS-602 / ECS-602

---

# SECTION A – SHORT ANSWER QUESTIONS

---

## Q1a. Define the term Software Engineering.

**Software Engineering** is a systematic, disciplined, and quantifiable approach to the development, operation, and maintenance of software. It applies engineering principles to software development to produce reliable, efficient, and cost-effective software within time and budget constraints.

**IEEE Definition:** "Software engineering is the application of a systematic, disciplined, quantifiable approach to the development, operation, and maintenance of software."

**Key Goals:**
- Produce high-quality software
- Deliver on time and within budget
- Meet user requirements
- Ensure maintainability and reliability

---

## Q1b. Characteristics of Software

Software has the following unique characteristics that differentiate it from hardware:

1. **Software is developed, not manufactured** – Unlike hardware, software is engineered through intellectual effort, not a physical manufacturing process.
2. **Software does not wear out** – Hardware degrades over time due to physical wear; software does not. However, software can deteriorate due to changing requirements (known as software aging).
3. **Software is complex** – The number of possible states in a software system is astronomically large.
4. **Software is invisible** – Software has no physical form; it cannot be seen or touched.
5. **Software is flexible** – It can be modified or updated easily compared to hardware.
6. **Software is expensive** – Development and maintenance costs are very high.
7. **Software does not follow physical laws** – It is not subject to Ohm's law, Hooke's law, etc.
8. **Most software is custom-built** – Unlike hardware components that are often mass-produced.
9. **Software is non-perishable** – It does not rust or wear out, but can become obsolete.
10. **Software failures are due to design errors** – Not due to physical defects.

---

## Q1c. Need of an SRS (Software Requirements Specification)

An **SRS (Software Requirements Specification)** is a formal document that describes the functions, performance, and constraints of a software system. It is needed because:

1. **Agreement between client and developer** – Acts as a contract between the customer and developer.
2. **Reduces development cost** – Errors found early in requirements are cheaper to fix.
3. **Basis for design** – Designers use SRS to create the system architecture.
4. **Basis for testing** – Testers derive test cases from SRS.
5. **Project planning** – Helps in scheduling, estimating effort, and cost.
6. **Reduces miscommunication** – Clearly defines what the system should do.
7. **Reference for maintenance** – Future developers can understand the original intent.
8. **Legal baseline** – Protects both parties in case of disputes.

---

## Q1d. Stubs and Drivers

**Stubs:**  
A **stub** is a dummy module that simulates the behavior of a called module during testing. It is used in **top-down integration testing** when lower-level modules are not yet ready.

- Replaces a called component
- Returns hardcoded/simulated results
- Example: A stub for a database module returns fixed records

**Drivers:**  
A **driver** is a dummy module that simulates the behavior of a calling (higher-level) module. It is used in **bottom-up integration testing** when upper-level modules are not yet ready.

- Replaces the module that calls the component under test
- Passes test data to the module being tested
- Example: A driver that calls a sorting function and passes test arrays

| Feature     | Stub                      | Driver                     |
|-------------|---------------------------|----------------------------|
| Simulates   | Called module             | Calling module             |
| Used in     | Top-down testing          | Bottom-up testing          |
| Direction   | Downward                  | Upward                     |

---

## Q1e. LOC (Lines of Code) – Definition, Advantages, Disadvantages

**LOC (Lines of Code)** is a software metric used to measure the size of a software program by counting the number of lines in the source code.

**Types:**
- **Physical LOC** – Total lines including blank lines and comments
- **Logical LOC** – Only executable statements

**Two Advantages:**
1. Simple to measure – Easy to count automatically using tools
2. Widely understood – Universally recognized metric across teams

**Two Disadvantages:**
1. Language-dependent – 100 lines in Assembly ≠ 100 lines in Python; unfair cross-language comparisons
2. Penalizes efficient code – A programmer who writes fewer, more efficient lines may appear less productive
3. Does not measure quality – A buggy program may have more LOC than a clean one

---

## Q1f. Pseudo Code – Definition and Difference from Algorithm

**Pseudo Code** is an informal, high-level description of an algorithm or program using a mixture of natural language and programming language constructs. It is not executable on any computer.

**Example (Finding max of two numbers):**
```
BEGIN
  INPUT A, B
  IF A > B THEN
    PRINT A
  ELSE
    PRINT B
  END IF
END
```

**Difference between Pseudo Code and Algorithm:**

| Feature       | Algorithm                              | Pseudo Code                         |
|---------------|----------------------------------------|-------------------------------------|
| Definition    | Step-by-step procedure to solve a problem | Structured English representation of a program |
| Language      | Plain English / Mathematical notation  | Mix of English and programming syntax |
| Structure     | Less structured                        | More structured (uses IF, WHILE, etc.) |
| Closeness to code | Far from actual code               | Very close to actual code           |
| Execution     | Not executable                         | Not executable                      |
| Purpose       | Logic design                           | Program design before coding        |

---

## Q1g. Importance of White Box Testing

**White Box Testing** (also called Structural Testing or Glass Box Testing) is a testing technique where the tester has full knowledge of the internal workings of the software.

**Importance:**
1. **Tests every path** – Ensures all code paths, branches, and loops are tested
2. **Finds hidden errors** – Discovers bugs in internal logic that black box testing may miss
3. **Optimizes code** – Helps detect dead code (code that is never executed)
4. **Validates security** – Identifies security vulnerabilities in code
5. **Ensures code coverage** – Metrics like statement coverage, branch coverage, path coverage can be verified
6. **Early bug detection** – Can be applied at unit testing level, catching bugs early
7. **Validates design** – Verifies that the implementation matches the design specification

**Techniques include:** Statement coverage, Branch coverage, Path coverage, Condition coverage.

---

## Q1h. Error, Fault, and Failure

**Error:**  
A human mistake made during development (e.g., a developer misunderstanding a requirement or making a typo). Errors are the cause of faults.

**Fault (Bug/Defect):**  
A fault is the result of an error – it is an incorrect step, process, or data definition in a program. Faults exist in the code but may not yet cause observable problems.

**Failure:**  
A failure occurs when a fault is executed and produces an incorrect result. A failure is the observable deviation of the system from its expected behavior.

**Relationship:**  
`Error (human mistake) → Fault (defect in code) → Failure (observable wrong behavior)`

**Example:**  
- **Error:** Developer accidentally writes `>` instead of `>=`
- **Fault:** The condition in the code is wrong
- **Failure:** The program gives wrong output when that condition is tested

---

## Q1i. Reasons for Increase in Software Costs

1. **Increasing complexity** – Modern software systems are far more complex, requiring more effort and specialized skills.
2. **Changing requirements** – Frequent changes in requirements mid-development increase rework costs.
3. **Lack of skilled professionals** – Shortage of experienced developers drives up labor costs.
4. **Poor planning and estimation** – Underestimating effort leads to schedule overruns and cost escalation.
5. **Late error detection** – Bugs found late in the lifecycle are exponentially more expensive to fix.
6. **Legacy system maintenance** – Old systems require significant effort to maintain and integrate.
7. **High testing costs** – Extensive testing for quality assurance increases costs.
8. **Scalability demands** – Systems need to scale for large user bases, requiring expensive infrastructure.

---

## Q1j. Need for Risk Management in Software Engineering

**Risk** in software engineering is any uncertain event that, if it occurs, can have a negative impact on the project.

**Need for Risk Management:**
1. **Early identification** – Identifies potential problems before they become crises.
2. **Cost savings** – Addressing risks early is far cheaper than crisis management.
3. **Schedule control** – Prevents delays caused by unexpected problems.
4. **Quality assurance** – Technical risks, if managed, prevent quality degradation.
5. **Stakeholder confidence** – Demonstrates professionalism and preparedness.
6. **Decision support** – Helps management make informed decisions about resources.
7. **Reduces uncertainty** – Converts unknown risks into known, manageable risks.

**Risk Management Process:** Risk Identification → Risk Analysis → Risk Planning → Risk Monitoring

---

## Q1. Generic Software (Definition with Example)

**Generic Software** (also called **off-the-shelf software**) is software developed to be sold to a wide range of customers, not customized for a specific client. It is designed for a general audience with common needs.

**Examples:**
- Microsoft Word (word processing)
- Adobe Photoshop (image editing)
- Google Chrome (web browsing)
- Windows OS (operating system)

Opposite of generic software is **bespoke (custom) software**, which is developed specifically for one client (e.g., a hospital's patient management system).

---

## Q1. Software Components

Software components are modular, reusable units of software that can be deployed and composed independently to form larger systems.

**Types of Software Components:**
1. **User Interface Components** – Forms, buttons, menus (e.g., GUI widgets)
2. **Business Logic Components** – Core processing modules (e.g., tax calculation)
3. **Data Access Components** – Database connection and query modules
4. **Utility Components** – Logging, authentication, validation modules
5. **Integration Components** – APIs, web services, middleware

**Characteristics:** Reusable, replaceable, encapsulated, well-defined interfaces.

---

## Q1. Non-Functional Requirements (Two Examples)

Non-functional requirements (NFRs) describe the quality attributes and constraints of a system, not its specific behaviors.

1. **Performance Requirement** – "The system shall respond to any user query within 2 seconds under normal load."
2. **Security Requirement** – "All user passwords shall be stored using AES-256 encryption."

Other examples: Reliability, Scalability, Maintainability, Usability, Portability.

---

## Q1. Software Prototyping

**Software Prototyping** is the process of creating an incomplete, early version of a software system (called a prototype) to help stakeholders understand requirements, evaluate design alternatives, and gather feedback before building the final system.

**Types:**
- **Throwaway Prototyping** – Built quickly, used to clarify requirements, then discarded
- **Evolutionary Prototyping** – Gradually refined into the final system
- **Incremental Prototyping** – Multiple prototypes built for different subsystems
- **Extreme Prototyping** – Used in web development; three-phase process

**Purpose:** Reduces risk, improves requirement clarity, increases user satisfaction.

---

## Q1. Horizontal and Vertical Partitioning

**Horizontal Partitioning:**  
Divides the software into subsystems based on the **type of function** performed. Each layer handles a specific type of task.

Example: Presentation Layer → Business Logic Layer → Data Layer

**Vertical Partitioning:**  
Divides the software into subsystems based on **features or functionalities**. Each vertical slice contains all layers needed for a specific feature.

Example: Module for User Management, Module for Order Processing, Module for Reporting.

| Feature         | Horizontal            | Vertical                  |
|-----------------|-----------------------|---------------------------|
| Division basis  | Type of function      | Feature/functionality     |
| Layers          | Technical layers      | Feature slices            |
| Example         | UI, Logic, Data       | Login module, Report module |

---

## Q1. Software Architecture

**Software Architecture** is the high-level structure of a software system, defining how components are organized, interact, and satisfy system requirements. It is the blueprint of the system.

**Key concerns:**
- Component organization
- Interfaces between components
- Data flow
- Control flow
- Non-functional properties (performance, security)

**Common architectural styles:**
- **Layered Architecture** – Client-Server, N-tier
- **Repository/Database-centric**
- **Pipe and Filter**
- **Event-driven / Message-based**
- **Microservices**

---

## Q1. Verification vs. Validation

| Feature     | Verification                              | Validation                              |
|-------------|-------------------------------------------|-----------------------------------------|
| Definition  | Are we building the product right?        | Are we building the right product?      |
| Focus       | Process compliance                        | Product fitness for user needs          |
| Method      | Reviews, walkthroughs, inspections        | Testing (unit, integration, system)     |
| Stage       | Done during development                   | Done at the end of development          |
| Question    | Does it match specifications?             | Does it meet user requirements?         |
| Example     | Code review against design doc            | User acceptance testing                 |

---

## Q1. Alpha Testing vs. Beta Testing

| Feature       | Alpha Testing                          | Beta Testing                         |
|---------------|----------------------------------------|--------------------------------------|
| Performed by  | Internal developers/testers            | External end users                   |
| Location      | Developer's site                       | Customer's site                      |
| Stage         | Before beta testing                    | After alpha testing                  |
| Environment   | Controlled/simulated                   | Real user environment                |
| Purpose       | Find bugs before external release      | Get real user feedback               |
| Example       | In-house QA team tests a game          | 1000 users test a pre-release app    |

---

## Q1. Advantages of CASE Tools

**CASE (Computer-Aided Software Engineering)** tools are software tools that support software engineering activities.

**Advantages:**
1. **Improved productivity** – Automates repetitive tasks (code generation, documentation)
2. **Better quality** – Enforces standards and consistency
3. **Faster development** – Speeds up design, coding, and testing phases
4. **Reusability** – Promotes component reuse through centralized repositories
5. **Easier maintenance** – Provides up-to-date documentation and traceability
6. **Better project management** – Scheduling, tracking, and reporting tools
7. **Integration** – Integrates multiple phases of the SDLC

---

## Q1. Adaptive Maintenance

**Adaptive Maintenance** is a type of software maintenance carried out to modify the software to adapt it to changes in the **external environment** such as new hardware, operating systems, or business policies.

**Examples:**
- Upgrading software to run on a new OS (e.g., migrating from Windows 7 to Windows 11)
- Modifying software to comply with new tax regulations
- Adapting software to work with a new database management system

It is NOT triggered by a bug, but by environmental changes outside the software itself.

---

## Q1. Software Re-engineering vs. Reverse Engineering

| Feature      | Software Re-engineering                   | Reverse Engineering                     |
|--------------|-------------------------------------------|-----------------------------------------|
| Definition   | Rebuilding/restructuring existing software for better quality | Analyzing software to recover its design/requirements |
| Goal         | Improve software quality, maintainability | Understand how existing system works    |
| Direction    | Forward (improvement)                     | Backward (analysis)                     |
| Output       | Improved new version of software          | Documentation, design models            |
| Includes     | Reverse engineering + forward engineering | Analysis and documentation only         |
| Example      | Refactoring legacy COBOL system to Java   | Recovering design of a system with no documentation |

---

## Q1. Adaptive vs. Corrective Maintenance

| Feature     | Adaptive Maintenance                          | Corrective Maintenance                      |
|-------------|-----------------------------------------------|---------------------------------------------|
| Trigger     | Change in environment                         | Software defect/bug                         |
| Goal        | Make software work in new environment         | Fix errors in software                      |
| Example     | Porting to new OS                             | Fixing a crash caused by null pointer       |
| Type        | Proactive (planned)                           | Reactive (unplanned)                        |

---

## Q1. Product Metrics vs. Process Metrics

| Feature    | Product Metrics                        | Process Metrics                            |
|------------|----------------------------------------|--------------------------------------------|
| Measures   | Attributes of the software product     | Attributes of the development process      |
| Examples   | LOC, defect density, cyclomatic complexity | Development time, defect removal rate   |
| Purpose    | Assess quality of the deliverable      | Improve development process                |
| Focus      | What was built                         | How it was built                           |

---

## Q1. Software Interface

A **software interface** is the boundary across which two software components communicate. It defines how components interact with each other, with users, and with hardware.

**Types:**
1. **User Interface (UI)** – How users interact with the software (GUI, CLI)
2. **Application Programming Interface (API)** – How software modules interact with each other
3. **Hardware Interface** – How software communicates with hardware devices
4. **Communication Interface** – Protocols for data transmission (TCP/IP, HTTP)

---

## Q1. Software Re-engineering (Definition)

**Software Re-engineering** is the process of examining and altering an existing software system to reconstitute it in a new form. It involves:
1. **Reverse Engineering** – Understanding existing system
2. **Restructuring** – Reorganizing/cleaning up code
3. **Forward Engineering** – Rebuilding the system with improvements

It is done to improve quality, performance, maintainability, or to migrate to new technology.

---

---

# SECTION B – MEDIUM ANSWER QUESTIONS

---

## Q2a. Software Engineering as Layered Technology

Software engineering is often described as a **layered technology** because it rests on several foundational layers, each supporting the one above it.

```
┌─────────────────────────────────┐
│           TOOLS                 │  ← CASE Tools, IDEs, Debuggers
├─────────────────────────────────┤
│           METHODS               │  ← Design methods, Testing techniques
├─────────────────────────────────┤
│           PROCESS               │  ← SDLC, Project management
├─────────────────────────────────┤
│      QUALITY FOCUS (Base)       │  ← Commitment to quality (foundation)
└─────────────────────────────────┘
```

**1. Quality Focus (Foundation Layer):**  
The bedrock of software engineering. All SE activities are driven by a commitment to quality. Without quality focus, no tool or method can ensure good software.

**2. Process Layer:**  
Defines the framework for software development. It specifies the sequence of activities (requirement analysis, design, coding, testing, maintenance), deliverables, and milestones. The process holds together the methods and tools.

**3. Methods Layer:**  
Provides the "how-to" for building software. Includes techniques for:
- Requirements analysis (use cases, DFDs)
- Design (architectural design, modularization)
- Coding (structured programming)
- Testing (white box, black box)
- Maintenance

**4. Tools Layer (Top Layer):**  
Provides semi-automated or automated support for the process and methods. Examples: Eclipse IDE (coding), Rational Rose (design), Selenium (testing).

**Why "Layered"?**  
Each layer depends on the layer below it. Tools support methods; methods are guided by processes; processes are driven by quality goals. Weakness in any lower layer undermines all layers above it.

---

## Q2b. Feasibility Study – Importance and Types

### Importance of Feasibility Study

A **feasibility study** is a preliminary investigation conducted before actual software development begins to determine whether the proposed project is viable, practical, and worth pursuing.

**Importance:**
1. **Avoids wasted investment** – Identifies unviable projects before large sums are spent.
2. **Risk reduction** – Identifies technical, financial, and operational risks early.
3. **Decision support** – Provides management with information to approve or reject a project.
4. **Defines scope** – Clarifies project boundaries and constraints.
5. **Identifies alternatives** – Explores multiple solutions and selects the best one.
6. **Stakeholder alignment** – Ensures all parties agree on goals before development.

### Types of Feasibility Study

**1. Technical Feasibility:**  
Assesses whether the required technology is available and whether the development team has the skills to use it.
- Is the technology mature enough?
- Are skilled engineers available?
- Can the system be built with existing tools?

**2. Operational Feasibility:**  
Determines whether the proposed system will be used effectively once installed.
- Will users accept the new system?
- Does it solve the real problem?
- Will it fit into existing organizational workflows?

**3. Economic Feasibility (Cost-Benefit Analysis):**  
Evaluates whether the financial benefits justify the costs.
- Development cost vs. projected returns
- ROI, NPV, payback period calculations
- Is the project within budget?

**4. Schedule Feasibility:**  
Examines whether the project can be completed within the required timeframe.
- Are the deadlines realistic?
- Is there enough time for all phases?

**5. Legal Feasibility:**  
Checks whether the project complies with laws, regulations, and contractual obligations.
- Data privacy laws (GDPR)
- Intellectual property rights
- Licensing requirements

---

## Q2c. Code Inspection, Formal Technical Reviews, and Walk Through

### Formal Technical Reviews (FTR) / Peer Reviews

**FTR** is a formal software quality assurance activity where a group of engineers review a software product (document, code, design) to find defects.

**Objectives:**
- Uncover errors in function, logic, or implementation
- Verify that software meets requirements
- Ensure software is developed per standards
- Make projects more manageable

**Process:**
1. Planning – Reviewer team selected, meeting scheduled, review material distributed
2. Preparation – Each reviewer studies the product individually
3. Review Meeting – Defects are identified and recorded
4. Rework – Author fixes identified issues
5. Follow-up – Reviewer verifies corrections

**Roles:** Moderator, Recorder, Reviewer, Author

---

### Walkthrough

A **walkthrough** is an informal review where the author presents the work to a group of peers who examine it for defects, ask questions, and offer suggestions.

**Key characteristics:**
- Led by the **author** (unlike FTR, which is moderated by someone else)
- Less formal, more discussion-oriented
- Can be done at any stage of development
- Focus: understanding and error detection
- Group typically 2–7 people

**Steps:**
1. Author presents the work step-by-step
2. Participants raise questions and concerns
3. Defects noted (not corrected on the spot)
4. Follow-up meeting if needed

---

### Code Inspection

**Code Inspection** is the most formal type of review where a team systematically reads and analyzes source code against a checklist to find defects.

**Key characteristics:**
- Formal, structured process
- Uses **checklists** based on common error categories
- **Not** led by the author
- Focuses on code quality, not design
- Defects categorized and recorded

**Common Inspection Checklist Items:**
- Are all variables initialized?
- Are array bounds checked?
- Are all error conditions handled?
- Are there any infinite loops?
- Are all files properly closed?

**Differences:**

| Feature        | Walkthrough         | FTR (Peer Review)     | Code Inspection         |
|----------------|---------------------|-----------------------|-------------------------|
| Formality      | Informal            | Formal                | Most formal             |
| Led by         | Author              | Moderator             | Inspector (not author)  |
| Uses checklist | No                  | Optional              | Yes (mandatory)         |
| Purpose        | Understanding       | Error detection       | Defect discovery        |
| Focus          | Any artifact        | Any artifact          | Source code             |

---

## Q2d. Short Notes on Testing Types

### Mutation Testing

**Mutation Testing** is a **fault-based testing technique** where small syntactic changes (mutations) are deliberately introduced into the source code to evaluate the effectiveness of existing test cases.

**How it works:**
1. Original program is modified with small changes (mutants)
2. Test suite is run against each mutant
3. If a test fails for a mutant, the mutant is **killed** (detected)
4. If all tests pass for a mutant, the mutant **survives** (weakness in tests)

**Mutation Score:** `Killed Mutants / Total Mutants × 100`

**Common mutation operators:**
- Replace `+` with `-`
- Replace `>` with `>=`
- Delete a statement

**Goal:** High mutation score = high test suite effectiveness.

---

### Alpha and Beta Testing

**Alpha Testing:**
- Conducted by **internal team** (developers and QA) at the developer's site
- Done before releasing to external users
- Simulated or real environment
- Goal: Find bugs before external release
- Feedback from internal users refines the product

**Beta Testing:**
- Conducted by **actual end users** in their real environment
- Done after alpha testing, before final release
- No developer presence
- Goal: Get real-world feedback from target audience
- Issues reported by users guide final fixes

**Example:** A software company releases a beta version of their app to 10,000 selected users to gather feedback before the official launch.

---

### Regression Testing

**Regression Testing** is the process of re-testing modified software to ensure that:
1. New changes haven't broken existing functionality
2. Previously fixed bugs haven't reappeared

**When performed:**
- After bug fixes
- After adding new features
- After performance improvements
- After code refactoring

**Approach:**
- Select a subset of existing test cases
- Re-run them after each change
- Automated regression testing is common (Selenium, JUnit)

**Importance:**
- Prevents introduction of new bugs
- Ensures software stability across versions
- Essential in agile and CI/CD environments

---

## Q2e. Software Re-engineering

### Definition

**Software Re-engineering** is the process of examining and altering an existing software system to reconstitute it in a new form, typically to improve its quality, performance, maintainability, or portability, without necessarily changing its external behavior.

### Why Is It Required?

1. **Aging legacy systems** – Old systems become hard to maintain; re-engineering gives them new life
2. **Technology migration** – Moving from outdated platforms to modern ones (e.g., COBOL to Java)
3. **Improving maintainability** – Poorly structured code becomes easier to understand
4. **Performance improvement** – Old systems may not meet current performance needs
5. **Reducing costs** – Rewriting from scratch is more expensive than re-engineering
6. **Adding new features** – Legacy code may not support new requirements
7. **Compliance** – Meeting new regulatory or security standards

### Software Re-engineering Process

```
Inventory Analysis → Document Restructuring → Reverse Engineering
       ↓
Code Restructuring → Data Restructuring → Forward Engineering
```

**1. Inventory Analysis:** Catalog all existing programs, assess their business value and condition.

**2. Document Restructuring:** Update outdated documentation to reflect current system state.

**3. Reverse Engineering:** Analyze existing code to extract design and requirement information.

**4. Code Restructuring:** Refactor code to remove dead code, improve modularity, add comments.

**5. Data Restructuring:** Clean and restructure databases, data definitions.

**6. Forward Engineering:** Use recovered design information to build an improved version.

---

## Q2. Problems in Software Engineering

1. **Software Crisis** – Inability to deliver software on time, within budget, and of acceptable quality.
2. **Changing Requirements** – Users frequently change or add requirements during development.
3. **Complexity** – Software systems have grown enormously complex.
4. **Poor Communication** – Misunderstandings between clients and developers.
5. **Unrealistic Deadlines** – Projects are given insufficient time.
6. **Poor Testing** – Inadequate testing leads to defect-laden products.
7. **Lack of Documentation** – Makes maintenance difficult.
8. **Team Issues** – High turnover, lack of skills, coordination problems.

---

## Q2. Software Configuration Management (SCM) and Version Control

### SCM

**Software Configuration Management** is the discipline of tracking and controlling changes to software during the software engineering process.

**SCM Activities:**
1. **Configuration Identification** – Identifying items to be controlled (documents, code, tests)
2. **Configuration Control** – Controlling changes through a formal change control process
3. **Configuration Status Accounting** – Recording and reporting the status of configurations
4. **Configuration Audit** – Verifying that the software matches its specification

### Version Control

**Version Control** (or Source Control) is the management of changes to documents, programs, and other information stored as computer files.

**Key concepts:**
- **Repository** – Central store of all versions
- **Check-in / Commit** – Saving a new version
- **Check-out** – Getting a copy to work on
- **Branching** – Creating separate line of development
- **Merging** – Combining changes from different branches
- **Tagging** – Marking specific versions (e.g., v1.0 release)

**Tools:** Git, SVN, Mercurial, CVS

### Types of Project Risks

1. **Project Risks** – Threaten project plan (budget overruns, schedule slips, staff turnover)
2. **Technical Risks** – Threaten quality and timeliness (design difficulties, implementation problems)
3. **Business Risks** – Threaten viability of the software (market changes, management decisions)

---

## Q2. Structure Chart

A **Structure Chart** is a graphical representation that shows the architecture of a software system by depicting the modules (components) of the system and their hierarchical relationships.

**Symbols used:**
- **Rectangle** – Module
- **Arrow** – Call relationship
- **Circle on arrow** – Data coupling (data passed)
- **Filled circle on arrow** – Flag/control coupling
- **Diamond** – Decision (selection)
- **Curved arrow on module** – Repetition (loop)

**Types of modules in structure charts:**
1. **Root module** – Top-level controller module
2. **Subordinate modules** – Called by the root
3. **Library modules** – Reusable modules called from multiple places
4. **Recursive modules** – Modules that call themselves

**Example:** An ATM system structure chart:

```
         [ATM Main]
        /     |      \
  [Validate] [Get]  [Dispense]
  [Card]   [Amount]  [Cash]
```

---

## Q2. Boundary Value Analysis (BVA)

**Boundary Value Analysis** is a black-box testing technique that focuses on test cases at the boundaries of input ranges, since defects tend to cluster at boundaries.

**Principle:** If a function works for boundary values, it likely works for values within the range.

**For input range [a, b]:**
- Test values: a-1, a, a+1, b-1, b, b+1

**Example:** Input range is [1, 100]:
- Boundary test values: 0, 1, 2, 99, 100, 101

**Types:**
1. **Normal BVA** – Tests at boundaries of valid range
2. **Robust BVA** – Also tests just outside boundaries (invalid inputs)
3. **Worst-case BVA** – Tests all combinations of boundary values

**Significance:**
- Most defects occur at boundaries (off-by-one errors)
- Efficient – small number of test cases with high defect detection
- Applicable to all levels of testing

---

---

# SECTION C – LONG ANSWER QUESTIONS

---

## Q3a. Software Quality Attributes

**Software Quality Attributes** are measurable properties of a software system that indicate how well it meets the needs of users and stakeholders.

### McCall's Quality Model – Quality Factors

McCall organized quality attributes into three perspectives:

```
┌─────────────────────────────────────────────────┐
│                 QUALITY FACTORS                  │
├──────────────────┬──────────────────┬────────────┤
│  PRODUCT         │  PRODUCT         │  PRODUCT   │
│  OPERATION       │  REVISION        │  TRANSITION│
│  (Using it)      │  (Changing it)   │  (Moving   │
│                  │                  │  it)       │
├──────────────────┼──────────────────┼────────────┤
│• Correctness     │• Maintainability │• Portability│
│• Reliability     │• Flexibility     │• Reusability│
│• Efficiency      │• Testability     │• Interoper- │
│• Integrity       │                  │  ability   │
│• Usability       │                  │            │
└──────────────────┴──────────────────┴────────────┘
```

### Detailed Description of Quality Attributes

**1. Correctness:**  
The degree to which the software meets its specifications and satisfies user goals.  
*Measure: % of requirements correctly implemented*

**2. Reliability:**  
The probability that the software performs its intended functions without failure for a specified period.  
*Measure: MTTF (Mean Time To Failure), failure rate*

**3. Efficiency:**  
The amount of computing resources (CPU, memory, network) used by the software to perform its functions.  
*Measure: Response time, throughput, resource utilization*

**4. Integrity:**  
The ability of the software to withstand attacks and protect its data from unauthorized access.  
*Measure: Access control effectiveness, security audit results*

**5. Usability:**  
The effort required to learn, operate, prepare input, and interpret output of the software.  
*Measure: Time to learn, error rate, user satisfaction*

**6. Maintainability:**  
The effort required to locate and fix defects in an operational program.  
*Measure: MTTR (Mean Time To Repair)*

**7. Flexibility:**  
The effort required to modify an operational program.  
*Measure: Number of changed modules per modification*

**8. Testability:**  
The effort required to test a program to ensure it performs as intended.  
*Measure: Test coverage achievable*

**9. Portability:**  
The effort required to transfer a program from one hardware/software environment to another.

**10. Reusability:**  
The extent to which a program (or parts of it) can be used in other applications.

**11. Interoperability:**  
The effort required to couple one system to another.

---

## Q3b. SDLC – Definition and Activities

### Definition of SDLC

**Software Development Life Cycle (SDLC)** is a structured process for planning, creating, testing, deploying, and maintaining software. It provides a systematic framework for software development.

### Activities During SDLC

**Phase 1: Planning / Requirement Analysis**
- Define project scope, goals, and feasibility
- Gather initial requirements
- Create project plan, schedule, budget
- Deliverable: Project Plan, Feasibility Report

**Phase 2: Requirements Definition**
- Detailed requirements elicitation from stakeholders
- Functional and non-functional requirements documented
- Deliverable: SRS (Software Requirements Specification)

**Phase 3: System Design**
- High-level design (architecture, modules, interfaces)
- Low-level design (algorithms, data structures)
- Deliverable: System Design Document (SDD)

**Phase 4: Coding / Implementation**
- Developers write actual source code based on design
- Code reviews, unit testing during this phase
- Deliverable: Source code, unit test results

**Phase 5: Testing**
- Integration testing, system testing, acceptance testing
- Bug fixing and retesting (regression testing)
- Deliverable: Test reports, bug reports

**Phase 6: Deployment**
- Software deployed to production environment
- User training provided
- Deliverable: Deployed system, user manuals

**Phase 7: Maintenance**
- Bug fixes, enhancements, adaptation to new environment
- Deliverable: Updated versions, maintenance reports

---

## Q3a. Classical Waterfall Model

The **Waterfall Model** is the oldest and most widely used SDLC model. It is a **sequential, linear** model where each phase must be completed before the next phase begins.

```
Requirements
    ↓
System Design
    ↓
Implementation (Coding)
    ↓
Integration & Testing
    ↓
Deployment
    ↓
Maintenance
```

### Phases

1. **Requirements Analysis** – All requirements gathered and documented; SRS created
2. **System Design** – Architecture and detailed design of the system
3. **Implementation** – Actual coding based on design
4. **Testing** – Integration and system testing
5. **Deployment** – System delivered and installed
6. **Maintenance** – Bug fixes and enhancements

### Advantages
- Simple and easy to understand
- Clear milestones at each phase
- Works well for small, well-understood projects
- Easy to manage due to sequential nature
- Extensive documentation produced

### Disadvantages
- No working software until late in cycle
- Not suitable for complex/evolving requirements
- Poor model for long projects (requirements change)
- Customer cannot see intermediate results
- High risk – problems found late are expensive to fix

---

## Q3b. Boehm's Spiral Model

The **Spiral Model** was proposed by Barry Boehm in 1986. It is a **risk-driven** process model that combines elements of the waterfall model and prototyping.

### Structure

The spiral model has **four quadrants** repeated in each cycle (spiral):

```
        Planning   |   Risk Analysis
        ───────────────────────────
        Evaluation |   Engineering
```

### Four Quadrants (Activities per Spiral):

**Quadrant 1: Planning**
- Define objectives for this cycle
- Identify constraints and alternatives
- Produce project plan for the current iteration

**Quadrant 2: Risk Analysis**
- Identify and analyze risks
- Evaluate alternatives
- Prototype is built to address highest risks
- Risk mitigation strategies defined

**Quadrant 3: Engineering**
- Design, code, and test the software for this iteration
- A working version of software is produced

**Quadrant 4: Customer Evaluation**
- Customer reviews the output of this spiral
- Feedback gathered
- Plan for next spiral decided

### Risk Analysis in Spiral Model
- The most distinguishing feature of the spiral model
- Each spiral begins with identifying and prioritizing risks
- A prototype may be built to explore high-risk areas before committing resources
- Risk assessment prevents costly mistakes

### Advantages
- Excellent risk management
- Works well for large, complex projects
- Customer sees intermediate results
- Flexible to requirement changes

### Disadvantages
- Complex and costly to manage
- Requires expertise in risk assessment
- Difficult to determine when to stop spiraling
- Not suitable for small projects

---

## Q3. Evolutionary Development Model

The **Evolutionary Development Model** is based on the idea of developing software in increments, evolving it through multiple versions based on user feedback.

### Types

**1. Exploratory Development:**
- Start with well-understood requirements
- Build initial version, refine based on feedback
- Work closely with users throughout

**2. Throwaway Prototyping:**
- Build prototype for unclear requirements
- Show to users, gather feedback
- Discard prototype, rebuild properly

### Diagram

```
Initial Requirements
        ↓
   Initial Version
        ↓
Intermediate Versions (with user feedback loops)
        ↓
   Final Version
```

### Activities

1. Specify outline requirements
2. Develop initial system version
3. Evaluate with users
4. Refine requirements based on feedback
5. Repeat steps 2–4 until system is acceptable

### Advantages
- Rapid delivery of useful software
- User engagement reduces wrong-requirement risk
- Adaptable to changing needs

### Disadvantages
- Process not visible (hard to manage)
- Systems may be poorly structured
- Special tools/techniques may be needed

---

## Q4a. Requirement Elicitation Techniques

**Requirement Elicitation** is the process of gathering requirements from stakeholders (customers, users, domain experts).

### Techniques

**1. Interviews:**
- Direct conversation between analyst and stakeholder
- Types: Structured (fixed questions) and Unstructured (open discussion)
- Advantages: Deep understanding, follow-up questions
- Disadvantages: Time-consuming, interviewer bias

**2. Questionnaires / Surveys:**
- Written questions distributed to many stakeholders
- Good for large groups, geographically dispersed users
- Advantages: Cost-effective for large audiences
- Disadvantages: Cannot ask follow-up questions

**3. Workshops / Joint Application Development (JAD):**
- Structured group meetings with stakeholders and developers
- Requirements negotiated collectively
- Advantages: Quick consensus, reduces misunderstandings
- Disadvantages: Requires skilled facilitator

**4. Observation / Ethnography:**
- Analyst observes users doing their work without interference
- Captures implicit requirements users may not articulate
- Advantages: Reveals actual work practices
- Disadvantages: Time-consuming, observer effect

**5. Brainstorming:**
- Group session where ideas are freely generated
- Good for creative, innovative requirements
- Advantages: Generates many ideas quickly
- Disadvantages: May produce impractical ideas

**6. Prototyping:**
- Build a quick prototype for users to interact with
- Users provide feedback on the prototype
- Advantages: Clarifies ambiguous requirements
- Disadvantages: Users may confuse prototype with final system

**7. Document Analysis:**
- Analyze existing documents, reports, and manuals
- Useful for replacement/migration projects
- Advantages: Reveals existing business rules
- Disadvantages: Documents may be outdated

**8. Use Cases / User Stories:**
- Describe interactions between users and the system
- Used in object-oriented and agile development
- Advantages: User-centered, easy to validate

---

## Q4b. SEI-CMM Model vs. ISO 9000 – Five Levels of CMM

### SEI-CMM Model

The **Capability Maturity Model (CMM)** was developed by the **Software Engineering Institute (SEI)** at Carnegie Mellon University. It describes the maturity of software development processes in **five levels**.

### Five Levels of CMM

**Level 1: Initial**
- No defined processes
- Success depends on individual heroics
- Chaotic, unpredictable results
- "State of fire fighting" – crises are the norm
- No process areas defined

**Level 2: Repeatable**
- Basic project management established
- Requirements management, project planning, tracking
- Processes may vary across projects but are documented
- Past successes can be repeated on similar projects
- Key Process Areas: Requirements Mgmt, Project Planning, Tracking, SCM

**Level 3: Defined**
- Processes documented as standards across the organization
- Organization-wide software process defined
- Training programs established
- Key Process Areas: Organization Process Definition, Peer Reviews, Training

**Level 4: Managed**
- Quantitative goals set for quality and process performance
- Statistical process control used
- Process performance measured and managed
- Key Process Areas: Quantitative Process Management, Software Quality Management

**Level 5: Optimizing**
- Continuous process improvement based on quantitative feedback
- Innovative ideas and technology adopted
- Defect prevention is systematic
- Key Process Areas: Defect Prevention, Technology Change Management

### ISO 9000 Model

**ISO 9000** is an international standard for **quality management systems (QMS)** published by ISO. It applies to any industry, not just software.

**Key Standards:**
- **ISO 9000** – Vocabulary and fundamentals
- **ISO 9001** – Requirements for QMS (certifiable)
- **ISO 9004** – Guidelines for improving QMS

**Key Principles:**
1. Customer focus
2. Leadership
3. Engagement of people
4. Process approach
5. Improvement
6. Evidence-based decision making
7. Relationship management

### Comparison: CMM vs. ISO 9000

| Feature         | SEI-CMM                          | ISO 9000                         |
|-----------------|----------------------------------|----------------------------------|
| Origin          | SEI, Carnegie Mellon             | International Standards Org.     |
| Focus           | Software process maturity        | General quality management       |
| Structure       | 5 maturity levels                | Principles-based standard        |
| Applicability   | Software organizations           | Any industry                     |
| Certification   | Maturity level assessment        | ISO 9001 certification           |
| Process detail  | Very detailed, prescriptive      | Flexible, principles-based       |
| Goal            | Process improvement              | Quality assurance                |

---

## Q5a. Cohesion and Coupling

### Coupling

**Coupling** measures the degree of interdependence between software modules. **Low coupling is desirable** as it makes modules more independent, easier to maintain, and reuse.

### Types of Coupling (Worst to Best)

**1. Content Coupling (Worst):**
- One module directly accesses or modifies the internal data of another
- Example: Module A directly reads/writes variables inside Module B
- Very bad – any change in B breaks A

**2. Common Coupling:**
- Two modules share global data
- Example: Both modules read/write a global variable
- Bad – changes to global data affect all modules using it

**3. External Coupling:**
- Modules communicate through an external medium (file, shared hardware)
- Example: Both modules read from the same file
- Somewhat acceptable

**4. Control Coupling:**
- One module controls the behavior of another by passing a flag/switch
- Example: Module A passes a flag to B telling it what to do
- Moderate – better than content but not ideal

**5. Stamp (Data Structure) Coupling:**
- Modules share a composite data structure (record/struct) but use only part of it
- Example: Passing a full Customer object when only name is needed

**6. Data Coupling (Best):**
- Modules communicate only through parameters (simple data values)
- Example: Module A calls B passing only the needed values
- Best type of coupling

---

### Cohesion

**Cohesion** measures how closely related and focused the functions within a single module are. **High cohesion is desirable** as it means the module does one well-defined job.

### Types of Cohesion (Worst to Best)

**1. Coincidental Cohesion (Worst):**
- Module performs completely unrelated functions
- Functions grouped arbitrarily
- Example: A "utilities" module with print, calculate tax, and connect to database

**2. Logical Cohesion:**
- Functions are logically similar but serve different purposes
- Example: A module that handles all input (keyboard, file, network) together

**3. Temporal Cohesion:**
- Functions related only because they execute at the same time
- Example: An "initialization" module that initializes everything at startup

**4. Procedural Cohesion:**
- Functions related because they follow a specific sequence of execution
- Example: Functions A → B → C must run in order

**5. Communicational Cohesion:**
- Functions operate on the same data
- Example: A module that reads, updates, and displays customer records

**6. Sequential Cohesion:**
- Output of one function is input to the next
- Example: Module that reads data → processes it → writes result

**7. Functional Cohesion (Best):**
- All functions contribute to a single, well-defined task
- Example: A module that only computes interest on a loan
- Easiest to maintain, test, and reuse

### Why Low Coupling – High Cohesion is Better

- **Low coupling** ensures modules are independent → easier to modify without affecting others
- **High cohesion** ensures each module does one clear job → easier to understand, test, maintain
- Together they achieve **functional independence** – the cornerstone of good design

---

## Q5b. Software Metrics – Size Estimation

### Software Metrics

**Software Metrics** are quantitative measures of software attributes used to assess, control, and improve the software development process and product quality.

### Size-Oriented Metrics

---

### 1. Lines of Code (LOC)

Counts the number of lines of source code. Can be measured as:
- **SLOC (Source LOC)** – All non-blank, non-comment lines
- **Delivered Source Instructions (DSI)**

**Productivity:** `Productivity = Function / LOC`

**Advantages:** Simple, universal  
**Disadvantages:** Language-dependent, doesn't reflect design quality

---

### 2. Halstead's Software Science

Halstead derived software metrics from counts of **operators** and **operands** in the source code.

**Basic counts:**
- **n1** = Number of distinct operators
- **n2** = Number of distinct operands
- **N1** = Total occurrences of operators
- **N2** = Total occurrences of operands

**Derived metrics:**

| Metric           | Formula                        | Meaning                    |
|------------------|--------------------------------|----------------------------|
| Program Length   | N = N1 + N2                    | Total token count          |
| Vocabulary       | n = n1 + n2                    | Distinct token count       |
| Volume           | V = N × log₂(n)                | Size in bits               |
| Difficulty       | D = (n1/2) × (N2/n2)           | Error-proneness            |
| Effort           | E = D × V                      | Mental effort to implement |
| Time to Code     | T = E / 18 seconds             | Estimated coding time      |
| Bugs predicted   | B = V / 3000                   | Expected defects           |

**Token Count:** A token is either an operator (+, -, *, if, for) or an operand (variable, constant). Token counting forms the basis of Halstead's metrics.

---

### 3. Function Point (FP) Based Measures

**Function Points (FP)** measure software size based on **user-visible functionality**, independent of programming language.

**Five functional components counted:**

| Component                   | Description                       |
|-----------------------------|-----------------------------------|
| External Inputs (EI)        | Data entering the system          |
| External Outputs (EO)       | Data leaving the system           |
| External Inquiries (EQ)     | Queries requiring input + output  |
| Internal Logical Files (ILF)| Files maintained within system    |
| External Interface Files (EIF)| Files shared with other systems  |

**Weighting:** Each component weighted as Low / Average / High (3/4/6 for inputs, etc.)

**Unadjusted FP (UFP)** = Sum of weighted counts

**Adjusted FP** = UFP × (0.65 + 0.01 × Sum of Complexity Adjustment Values)

**14 Complexity Factors** (each rated 0–5): data communications, distributed processing, performance, etc.

---

### 4. Cyclomatic Complexity

**Cyclomatic Complexity (CC)** measures the number of independent paths through the source code.

**Formulas:**
- `CC = E - N + 2P` (E=edges, N=nodes, P=connected components, usually P=1)
- `CC = Number of decision nodes + 1`
- `CC = Number of regions in the control flow graph`

**Example code:**
```
IF A = 100 THEN
  IF B > C THEN
    A = B
  ELSE
    A = C
  END IF
END IF
PRINT A
```

**Control Flow Graph (CFG):**
- Nodes: 1 (start), 2 (IF A=100), 3 (IF B>C), 4 (A=B), 5 (A=C), 6 (PRINT A), 7 (end)
- Edges: 1→2, 2→3 (true), 2→6 (false), 3→4 (true), 3→5 (false), 4→6, 5→6, 6→7

**Calculation:**
- E = 8, N = 7, P = 1
- CC = 8 - 7 + 2(1) = **3**
- Or: Decision nodes = 2 (IF A=100, IF B>C), CC = 2 + 1 = **3**

**Interpretation:**
- CC = 1–10: Simple, low risk
- CC = 11–20: Moderate risk
- CC > 20: High risk, hard to test

---

## Q6a. Test Cases Using BVA, Robust, and Worst-Case Testing

**Program:** Read an integer in [1, 100] and determine if it is prime.

**Input Domain:** Integer in range [1, 100]

### Normal Boundary Value Analysis (BVA)

Tests at min, min+1, max-1, max, and a nominal value:

| Test Case | Input | Expected Output |
|-----------|-------|-----------------|
| BVA-1     | 1     | Not Prime       |
| BVA-2     | 2     | Prime           |
| BVA-3     | 50    | Not Prime (nominal) |
| BVA-4     | 99    | Not Prime       |
| BVA-5     | 100   | Not Prime       |

### Robust Testing

Extends BVA to include values just outside the valid range:

| Test Case | Input | Expected Output     |
|-----------|-------|---------------------|
| ROB-1     | 0     | Error / Invalid     |
| ROB-2     | 1     | Not Prime           |
| ROB-3     | 2     | Prime               |
| ROB-4     | 99    | Not Prime           |
| ROB-5     | 100   | Not Prime           |
| ROB-6     | 101   | Error / Invalid     |

### Worst-Case Testing

Tests all combinations of boundary values (Cartesian product):

Since there is only one input variable, worst-case = all boundary values including just-outside:
{0, 1, 2, 99, 100, 101}

| Test Case | Input | Expected Output  |
|-----------|-------|------------------|
| WC-1      | 0     | Invalid input    |
| WC-2      | 1     | Not Prime        |
| WC-3      | 2     | Prime            |
| WC-4      | 99    | Not Prime        |
| WC-5      | 100   | Not Prime        |
| WC-6      | 101   | Invalid input    |
| WC-7      | 50    | Not Prime        |
| WC-8      | 13    | Prime            |
| WC-9      | 97    | Prime            |

---

## Q6b. Integration Testing – Approaches

### Definition

**Integration Testing** is the phase of testing where individual software modules are combined and tested as a group to verify that they interact correctly.

**Why needed?** Individual modules may work correctly in isolation but fail when integrated due to interface mismatches, data format issues, or incorrect assumptions.

### Approaches to Integration Testing

---

**1. Big Bang Integration Testing**

All modules are integrated simultaneously and tested as a whole.

- **Advantage:** Simple; good for small systems
- **Disadvantage:** Hard to isolate failures; debugging is difficult; no partial system available until all modules are ready

---

**2. Top-Down Integration Testing**

Integration begins from the **topmost module** and proceeds downward through the call hierarchy. **Stubs** replace lower-level modules not yet integrated.

```
Main Module ← start here
   ├── Module A (stub initially)
   └── Module B (stub initially)
           └── Module C (stub initially)
```

**Steps:**
1. Test main module with stubs for all subordinates
2. Replace one stub at a time with actual module
3. Test after each replacement
4. Repeat until all modules integrated

**Advantages:**
- Early working skeleton of system
- Critical control module tested early
- Faults found early

**Disadvantages:**
- Lower-level details tested late
- Stubs must be written for every subordinate module
- I/O-heavy modules (at bottom) tested last

---

**3. Bottom-Up Integration Testing**

Integration begins from the **lowest-level modules** and works upward. **Drivers** replace higher-level modules.

```
           Main Module (driver initially)
          /           \
      Module A     Module B (driver)
         |
      Module C ← start here
```

**Steps:**
1. Test lowest-level modules with drivers
2. Replace drivers with actual higher-level modules
3. Test after each replacement
4. Continue upward to top-level module

**Advantages:**
- Lower-level utility functions tested thoroughly
- No stubs needed (only drivers)
- Easier to test I/O-intensive components

**Disadvantages:**
- No working system until all modules integrated
- High-level design flaws found late

---

**4. Sandwich (Mixed) Integration Testing**

Combines top-down and bottom-up approaches:
- Top portion tested top-down with stubs
- Bottom portion tested bottom-up with drivers
- Meet in the middle

**Advantages:** Combines benefits of both approaches  
**Disadvantages:** Complex to manage

---

**5. Incremental Integration Testing**

Modules are added one at a time and tested after each addition.
- Easier to isolate faults
- Can be top-down or bottom-up
- Most widely recommended approach

---

## Q7a. Need and Categories of Software Maintenance

### Need for Maintenance

Software is not a static artifact – the world around it changes, and so does the software itself:

1. **Bug fixes** – Errors discovered post-deployment must be corrected
2. **Changing user requirements** – Business needs evolve; software must adapt
3. **Environmental changes** – New OS, hardware, or regulations require modification
4. **Performance improvement** – Users expect better, faster software
5. **Security vulnerabilities** – New threats require software patches
6. **Technology upgrades** – Migration to new platforms
7. **Software aging** – Without maintenance, software degrades (rots)

### Categories of Maintenance

**1. Corrective Maintenance:**
- Fixing bugs and defects discovered after delivery
- Reactive – responds to reported failures
- Example: Fixing a crash that occurs when user enters an empty string
- Accounts for approximately **20%** of maintenance effort

**2. Adaptive Maintenance:**
- Modifying software to work in a new or changed environment
- Example: Upgrading software for a new OS, database, or compliance regulation
- Proactive – anticipates change
- Accounts for approximately **25%** of maintenance effort

**3. Perfective Maintenance:**
- Enhancing software to add new features or improve performance
- Driven by user requests for improvements
- Example: Adding a new report format, improving response time
- Accounts for the **largest portion (~50%)** of maintenance effort

**4. Preventive Maintenance:**
- Modifying software to prevent future problems
- Code restructuring, documentation improvement, complexity reduction
- Example: Refactoring complex code to reduce future defect probability
- Accounts for approximately **5%** of maintenance effort

### Summary Table

| Type        | Trigger             | Goal                        | Example                        |
|-------------|---------------------|-----------------------------|--------------------------------|
| Corrective  | Bug reported        | Fix existing errors         | Fix login crash                |
| Adaptive    | Environment change  | Work in new environment     | Port to new OS                 |
| Perfective  | User request        | Add/improve features        | Add dark mode                  |
| Preventive  | Proactive review    | Prevent future problems     | Refactor complex module        |

---

## Q7b. COCOMO Model and Person Month

### COCOMO Model

**COCOMO (Constructive Cost Model)** is an algorithmic software cost estimation model developed by **Barry Boehm in 1981**. It uses software size (in LOC or function points) to estimate effort, duration, and staffing.

### Three Levels of COCOMO

**1. Basic COCOMO:**
Simple estimation based only on project size.

`Effort (PM) = a × (KDSI)^b`
`Duration (TDEV) = c × (PM)^d`

Where KDSI = Kilo Delivered Source Instructions

**Three project types:**

| Mode         | Description                          | a    | b    | c    | d    |
|--------------|--------------------------------------|------|------|------|------|
| **Organic**  | Small teams, familiar domain         | 2.4  | 1.05 | 2.5  | 0.38 |
| **Semi-detached** | Medium size, mixed experience  | 3.0  | 1.12 | 2.5  | 0.35 |
| **Embedded** | Complex, tight constraints           | 3.6  | 1.20 | 2.5  | 0.32 |

**Example:** Organic project, 50 KDSI:
- Effort = 2.4 × (50)^1.05 = 2.4 × 62.8 ≈ **151 PM**
- Duration = 2.5 × (151)^0.38 ≈ **14.7 months**

---

**2. Intermediate COCOMO:**
Refines estimates by applying **15 cost driver attributes** (rated from Very Low to Extra High):

- Product attributes: Reliability, Database size, Complexity
- Hardware attributes: Execution time, Storage constraints
- Personnel attributes: Analyst capability, Programmer capability
- Project attributes: Use of software tools, Schedule

`Effort = a × (KDSI)^b × EAF`

Where **EAF (Effort Adjustment Factor)** = product of all cost driver multipliers.

---

**3. Detailed COCOMO:**
Applies the cost driver ratings at each phase of the lifecycle separately for more accurate estimation.

---

### Person Month (PM)

**Person Month (PM)** is the unit of effort in COCOMO, representing the amount of work one person can do in one calendar month.

**Definition:** 1 Person Month = the effort exerted by one person working full-time for one month (typically 152 working hours)

**Key uses:**
- Expressing total effort: "This project requires 200 PM"
- Calculating staffing: If 200 PM and 10 months allowed → 20 people needed
- Cost estimation: PM × average monthly salary = project cost

**Staffing from PM:**
`Staff = Effort (PM) / Duration (Months)`

**Note:** Brooks' Law states – "Adding more people to a late software project makes it later" because new people require training and increase communication overhead.

---

## Q4a. Decision Tables

A **Decision Table** is a structured representation of complex business rules involving multiple conditions and actions. It ensures all combinations of conditions are considered.

### Components of a Decision Table

1. **Condition Stub** – Lists all conditions (e.g., "Order > 6?")
2. **Condition Entry** – Shows values (Y/N) for each rule
3. **Action Stub** – Lists all possible actions
4. **Action Entry** – Shows which actions apply for each rule (X = perform)

### Example: Bookstore Discount Decision Table

**Rules:**
- Trade: 25% discount for orders > 6 books
- Libraries/Individuals:
  - 5% for orders of 6–19 copies per title
  - 10% for orders of 20–49 copies per title
  - 15% for orders of 50+ copies per title

| Condition/Action              | R1  | R2  | R3  | R4  | R5  |
|-------------------------------|-----|-----|-----|-----|-----|
| **Customer is Trade?**        | Y   | N   | N   | N   | N   |
| **Order > 6?**                | Y   | -   | -   | -   | -   |
| **Order 6–19 copies?**        | -   | Y   | N   | N   | N   |
| **Order 20–49 copies?**       | -   | N   | Y   | N   | N   |
| **Order ≥ 50 copies?**        | -   | N   | N   | Y   | N   |
| **Apply 25% discount**        | X   |     |     |     |     |
| **Apply 5% discount**         |     | X   |     |     |     |
| **Apply 10% discount**        |     |     | X   |     |     |
| **Apply 15% discount**        |     |     |     | X   |     |
| **No discount**               |     |     |     |     | X   |

---

## Q4b. SRS Document – Importance and IEEE Format

### Importance of SRS

The **SRS (Software Requirements Specification)** is the most critical document in software development:

1. **Communication tool** – Between client and developer
2. **Reduces ambiguity** – Precisely defines what must be built
3. **Basis for design** – Architects use it to design the system
4. **Basis for testing** – Test cases are derived from SRS
5. **Contract document** – Legal reference in case of disputes
6. **Change management** – Baseline against which changes are measured

### IEEE Standard SRS Format (IEEE 830)

```
1. Introduction
   1.1 Purpose
   1.2 Scope
   1.3 Definitions, Acronyms, Abbreviations
   1.4 References
   1.5 Overview

2. Overall Description
   2.1 Product Perspective
   2.2 Product Functions
   2.3 User Characteristics
   2.4 Constraints
   2.5 Assumptions and Dependencies

3. Specific Requirements
   3.1 Functional Requirements
       3.1.1 [Function 1] – description, inputs, outputs, processing
       3.1.2 [Function 2] ...
   3.2 Non-Functional Requirements
       3.2.1 Performance Requirements
       3.2.2 Safety Requirements
       3.2.3 Security Requirements
       3.2.4 Software Quality Attributes
   3.3 External Interface Requirements
       3.3.1 User Interfaces
       3.3.2 Hardware Interfaces
       3.3.3 Software Interfaces
       3.3.4 Communication Interfaces

4. Appendices
5. Index
```

---

## Q5. Function Oriented Design vs. Object Oriented Design

| Feature           | Function Oriented Design (FOD)         | Object Oriented Design (OOD)          |
|-------------------|----------------------------------------|---------------------------------------|
| Focus             | Functions/procedures                   | Objects and classes                   |
| Basic unit        | Function/module                        | Object/class                          |
| Data              | Separate from functions                | Encapsulated within objects           |
| Approach          | Top-down decomposition                 | Bottom-up, based on real-world entities |
| Data sharing      | Global data shared across functions    | Data hidden inside objects            |
| Reuse             | Limited code reuse                     | High reuse via inheritance, composition |
| Modeling tool     | DFD, Structure Charts                  | UML, Class Diagrams                   |
| Abstraction       | Procedural abstraction                 | Data abstraction + encapsulation      |
| Example language  | C, Pascal, FORTRAN                     | Java, C++, Python                     |
| Maintenance       | Harder (global data changes ripple)   | Easier (encapsulation limits impact)  |

---

## Q6. Black Box vs. White Box Testing

| Feature       | Black Box Testing                        | White Box Testing                       |
|---------------|------------------------------------------|-----------------------------------------|
| Also called   | Functional / Behavioral testing          | Structural / Glass Box testing          |
| Knowledge req | No knowledge of internal code            | Full knowledge of source code           |
| Basis         | Requirements and specifications          | Code structure and logic                |
| Tester        | QA team, end users                       | Developers                              |
| Techniques    | BVA, Equivalence Partitioning, Decision Tables | Statement coverage, Branch coverage, Path coverage |
| Focus         | What the system does                     | How the system does it                  |
| Code coverage | Not measured                             | Measured precisely                      |
| Stage         | System testing, acceptance testing       | Unit testing, integration testing       |
| Finds         | Missing features, incorrect behavior     | Hidden bugs, dead code, unreachable code |

**Used Together:**
- White box ensures internal logic is correct and fully covered
- Black box ensures external behavior matches requirements
- Together they provide comprehensive coverage:
  - White box first (unit level) → ensures code is internally correct
  - Black box next (system level) → ensures it meets user needs

---

## Q7. Risk Management in Software Engineering

### Definition

**Risk** is any uncertain event that, if it occurs, has a positive or negative effect on project objectives. **Risk Management** is the process of identifying, analyzing, and responding to project risks.

### Risk Management Process

**1. Risk Identification:**
- Identify all potential risks
- Techniques: Brainstorming, checklists, expert judgment
- Types of risks: Project risks, Technical risks, Business risks

**2. Risk Analysis (Assessment):**
- Estimate probability (0–1) and impact (1–10) of each risk
- Risk Exposure = Probability × Impact
- Prioritize risks by exposure value

**3. Risk Planning:**
- Develop strategies to handle each risk:
  - **Avoidance** – Change plan to eliminate risk
  - **Mitigation** – Reduce probability or impact
  - **Transfer** – Transfer risk to third party (insurance)
  - **Acceptance** – Accept risk with contingency plan

**4. Risk Monitoring:**
- Track risks throughout the project
- Watch for risk triggers
- Update risk list as project evolves

### Project Risk vs. Technical Risk

| Feature       | Project Risk                              | Technical Risk                          |
|---------------|-------------------------------------------|-----------------------------------------|
| Definition    | Threatens the project plan                | Threatens the quality of the software  |
| Examples      | Budget overruns, staff turnover           | Design flaws, algorithm failures        |
| Impact        | Schedule, cost, resources                 | Software quality and functionality      |
| Management    | Project manager                           | Technical lead / architect              |
| Example risk  | Key developer leaves mid-project          | Integration with third-party API fails  |

---

## Q6. Structural Testing Techniques (White Box)

**Structural testing** ensures that every structural element of the program has been exercised.

### 1. Statement Coverage (Line Coverage)
- Every statement in the code is executed at least once
- Coverage = (Executed Statements / Total Statements) × 100
- Weakest form of coverage

### 2. Branch Coverage (Decision Coverage)
- Every decision (IF, WHILE, FOR) takes both TRUE and FALSE outcomes
- Stronger than statement coverage
- Coverage = (Tested Branches / Total Branches) × 100

### 3. Condition Coverage
- Each individual boolean sub-expression evaluates to both TRUE and FALSE
- Stronger than branch coverage

### 4. Path Coverage
- Every possible path through the code is executed
- Strongest form – but number of paths can be exponential
- Uses cyclomatic complexity to determine number of paths

### 5. Loop Testing
- **Simple loops** – Test: 0 iterations, 1 iteration, 2 iterations, max-1, max, max+1
- **Nested loops** – Test from innermost outward
- **Concatenated loops** – Test each loop independently if not connected

---

## Q. CASE Tools

**CASE (Computer-Aided Software Engineering)** tools are software applications that support various software engineering activities.

### Types of CASE Tools

**1. Upper CASE Tools (Front-End):**
- Support early phases: requirements, analysis, design
- Examples: Rational Rose, Enterprise Architect, Visio

**2. Lower CASE Tools (Back-End):**
- Support implementation and testing phases
- Examples: Compilers, debuggers, test frameworks

**3. Integrated CASE (I-CASE) Tools:**
- Support the entire lifecycle
- Examples: IBM Rational Suite

### Functions of CASE Tools

- Requirements documentation
- Data flow diagram creation
- Entity-relationship diagram creation
- Code generation from design models
- Automated testing
- Project scheduling and tracking
- Version control and configuration management

---

## Q. Estimating Cost, Effort, and Schedule

### Effort Estimation

**1. Expert Judgment:** Senior engineers estimate based on experience.

**2. Algorithmic Models (COCOMO):**
- `Effort = a × (Size)^b × EAF`
- Output in Person Months

**3. Function Point Analysis:**
- Measure FP first, then convert: `LOC = FP × language conversion factor`
- Apply COCOMO to LOC

### Cost Estimation

`Cost = Effort (PM) × Average Monthly Salary × Overhead Factor`

Includes: hardware costs, software licensing, training, infrastructure.

### Schedule Estimation

`Duration (months) = c × (Effort)^d` (COCOMO formula)

Or: `Duration = Effort / Staff`

**Milestones** are set at the end of each phase as checkpoints.

### Key Factors Affecting Estimates

1. Project size and complexity
2. Team size and experience
3. Technology novelty
4. Requirements clarity
5. Reuse of existing components

---

*End of Complete Software Engineering Q&A Guide*

---

> **Note:** This document covers all questions from all sections of the provided question papers (NCS-602/ECS-602). Missing data has been filled appropriately per standard software engineering literature and IEEE guidelines.
