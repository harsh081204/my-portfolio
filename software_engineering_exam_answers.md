# Software Engineering — Complete Exam Answer Sheet

**Subject:** Software Engineering
**Sections:** A, B, C (All Questions Attempted)

---

# SECTION A — Short Answer Questions (2 Marks Each)

---

## Q1(a) Define the term Software Engineering.

**Software Engineering** is a systematic, disciplined, and quantifiable approach to the development, operation, and maintenance of software. It applies engineering principles to software development to produce reliable, efficient, and maintainable software within time and budget constraints.

**IEEE Definition:** *"Software Engineering is the application of a systematic, disciplined, quantifiable approach to the development, operation and maintenance of software; that is, the application of engineering to software."*

It encompasses the entire software development lifecycle — from requirements gathering to design, coding, testing, deployment, and maintenance.

---

## Q1(b) Discuss the various characteristics of software.

Software is a unique engineering product that differs from physical products. Its key characteristics are:

**1. Software is developed, not manufactured:**
Software is engineered through intellectual effort; it is not mass-produced in the traditional factory sense. Quality is introduced during design, not manufacturing.

**2. Software does not wear out:**
Unlike hardware, software does not physically deteriorate over time. However, it does deteriorate in a different sense — through poor maintenance and increasing bugs.

**3. Software is complex:**
Software systems can contain millions of lines of code with complex interdependencies, making them one of the most complex human-made artifacts.

**4. Software is invisible:**
The structure of software is not visible in space, making it hard to visualize and manage.

**5. Software is flexible:**
Software can be easily modified compared to hardware, allowing it to adapt to changing requirements.

**6. Software is not subject to environmental problems:**
Software does not rust, corrode, or get physically damaged by weather or environment.

**7. Software is custom-built:**
Most software is built for specific customer needs rather than assembled from pre-existing parts (though this is changing with reusable components).

---

## Q1(c) Explain the need of an SRS.

A **Software Requirements Specification (SRS)** is a formal document that describes the functional and non-functional requirements of a software system. Its need arises from the following reasons:

**1. Serves as a contract:** The SRS acts as a legal and technical agreement between the client and the development team about what the system will and will not do.

**2. Baseline for design:** It provides a solid foundation on which architects and developers base their design decisions.

**3. Reduces ambiguity:** It eliminates misunderstandings between stakeholders by defining precise, unambiguous requirements.

**4. Facilitates testing:** Test engineers use the SRS to design test cases and validate that the delivered software meets the stated requirements.

**5. Helps in project planning:** Project managers use the SRS to estimate cost, time, and resources required for the project.

**6. Serves as reference:** It serves as a reference document throughout the software lifecycle, especially during maintenance.

---

## Q1(d) Explain Stubs and Drivers.

**Stubs** and **Drivers** are auxiliary programs used during integration testing to simulate missing components.

**Stubs:**
- A **stub** is a dummy program that replaces a module that has not yet been developed.
- It is called by the module being tested.
- A stub simulates the activity of the missing lower-level module by returning hardcoded or dummy values.
- Used in **Top-Down Integration Testing**.
- *Example:* If Module A calls Module B (not yet written), a stub mimics Module B's behavior.

**Drivers:**
- A **driver** is a dummy program that simulates the calling of a module under test.
- It passes test cases to the module being tested and displays results.
- Used in **Bottom-Up Integration Testing**.
- *Example:* If Module B is being tested but Module A (which calls B) isn't ready, a driver simulates Module A.

| Feature | Stub | Driver |
|---|---|---|
| Role | Simulates called module | Simulates calling module |
| Used in | Top-Down Testing | Bottom-Up Testing |
| Direction | Called by module under test | Calls the module under test |

---

## Q1(e) Discuss LOC. List two advantages and disadvantages of LOC.

**Lines of Code (LOC)** is one of the simplest and oldest software size metrics. It measures the size of a software project by counting the total number of source code lines written, excluding comments and blank lines (though some variants include them).

Variants include:
- **SLOC (Source Lines of Code):** Count of actual executable statements.
- **KLOC:** Thousands of Lines of Code.

**Advantages of LOC:**
1. **Simple to measure:** LOC is easy to collect — any code editor or tool can count lines automatically, requiring no special expertise.
2. **Widely accepted:** LOC has a long history of use, and many historical databases and benchmarks exist, making it useful for comparison across projects.

**Disadvantages of LOC:**
1. **Language dependent:** LOC is not comparable across different programming languages. A task requiring 100 lines in C may need only 20 lines in Python, making cross-language comparisons meaningless.
2. **Penalizes good design:** A highly optimized, concise codebase will have fewer LOC than a poorly written verbose one, yet may be far superior in quality. LOC thus rewards verbosity over efficiency.

---

## Q1(f) What is Pseudo Code? How does it differ from an Algorithm?

**Pseudo Code:**
Pseudo code is an informal, high-level description of a program's logic, written in a structured way that resembles programming languages but is not bound to any specific language's syntax. It uses plain English mixed with programming constructs (IF, WHILE, FOR, etc.) to describe program steps clearly.

*Example — Find the largest of two numbers:*
```
BEGIN
  INPUT A, B
  IF A > B THEN
    PRINT "A is larger"
  ELSE
    PRINT "B is larger"
  END IF
END
```

**Algorithm:**
An algorithm is a finite, ordered sequence of well-defined steps designed to solve a specific problem. It is mathematically precise and language-independent, often expressed in natural language or mathematical notation.

**Differences between Pseudo Code and Algorithm:**

| Feature | Pseudo Code | Algorithm |
|---|---|---|
| Form | Code-like structured English | Step-by-step logical instructions |
| Language | Resembles programming syntax | Natural language or math |
| Detail | More detailed, closer to code | High-level, abstract |
| Purpose | Bridge between algorithm & code | Describe problem-solving logic |
| Readability | Easier for programmers | Easier for non-programmers |
| Notation | Programming constructs (IF, WHILE) | Numbered steps, flowchart-friendly |

---

## Q1(g) Describe the importance of White Box Testing.

**White Box Testing** (also called Structural Testing, Glass Box Testing, or Clear Box Testing) is a testing technique where the tester has full knowledge of the internal structure, code, and logic of the program being tested.

**Importance of White Box Testing:**

**1. Ensures code coverage:** It guarantees that all statements, branches, paths, and conditions in the code are executed at least once during testing, leaving no untested code.

**2. Detects hidden errors:** It can uncover logical errors, dead code, incorrect loop conditions, and security vulnerabilities that black box testing might miss.

**3. Optimizes code:** During white box testing, testers can identify redundant or unreachable code, helping optimize the software.

**4. Validates internal logic:** It checks the actual implementation logic rather than just the external behavior, ensuring the code does exactly what it's supposed to.

**5. Security testing:** It is critical for identifying security flaws such as buffer overflows, SQL injection vulnerabilities, and improper input validation embedded in the code.

**6. Supports early testing:** White box testing can be performed early in the development cycle (unit testing phase), enabling early bug detection which is cheaper to fix.

---

## Q1(h) Explain Error, Fault, and Failure.

These three terms represent different stages and perspectives of a software defect:

**Error:**
An **error** is a human mistake made by a developer during any phase of software development (design, coding, or documentation). It is the root cause.
*Example:* A programmer mistakenly writes `a - b` instead of `a + b`.

**Fault (Bug/Defect):**
A **fault** (or defect/bug) is the result of an error present in the source code or design document. It is the manifestation of an error in the software.
*Example:* The incorrect expression `a - b` in the code is a fault.

**Failure:**
A **failure** occurs when the software executes the faulty code and produces an incorrect result or behaves unexpectedly during execution. Failure is observable by the user.
*Example:* When the program runs and produces a wrong output because of the subtraction bug, that is a failure.

**Relationship:**
> Error (human mistake) → Fault (defect in code) → Failure (wrong system behavior at runtime)

| Term | Who causes it? | When does it occur? | Observable? |
|---|---|---|---|
| Error | Developer | During development | No |
| Fault | System (in code) | Exists in software | Only via inspection |
| Failure | System (at runtime) | During execution | Yes, by users |

---

## Q1(i) List any two reasons for increase in software costs.

**1. Increasing software complexity:**
Modern software systems are far more complex than those of previous decades. Requirements for distributed systems, real-time processing, security, scalability, and integration with multiple platforms significantly increase development effort and cost. The more complex the system, the more time developers spend on design, coding, testing, and debugging.

**2. High cost of skilled human resources:**
Software development is a knowledge-intensive activity entirely dependent on skilled professionals — analysts, architects, developers, testers, and project managers. The growing demand for software globally has made software professionals expensive, and labor constitutes 60–80% of total software project costs. Attrition and the need for continuous training further drive up costs.

---

## Q1(j) Discuss the need of Risk Management in Software Engineering.

**Risk Management** is the process of identifying, analyzing, and mitigating potential problems that could adversely affect a software project's schedule, cost, or quality.

**Need for Risk Management:**

**1. Uncertainty in projects:** Software projects are inherently uncertain. Requirements may change, key personnel may leave, technologies may fail, or budget may be cut. Risk management helps prepare for these uncertainties.

**2. Early identification of problems:** By identifying risks early, project managers can take preventive action before small problems become project-killing crises.

**3. Better decision making:** Understanding potential risks enables informed decisions about project planning, resource allocation, and technology choices.

**4. Protects stakeholder interests:** Unmanaged risks can lead to project failure, financial losses, and damage to reputation. Risk management protects clients and developers from unexpected losses.

**5. Improves project success rate:** Studies consistently show that projects with formal risk management processes have higher success rates in terms of on-time, on-budget delivery.

**Types of risks managed:** Schedule risk, technical risk, business risk, operational risk, and people risk.

---

# SECTION B — Medium Answer Questions (10 Marks Each)

---

## Q2(a) Illustrate the statement "Software Engineering is a Layered Technology."

Software Engineering is often described as a **layered technology** because it rests on a structured foundation where each layer supports the ones above it. The four key layers are:

```
+---------------------------+
|         TOOLS             |   ← Layer 4
+---------------------------+
|        METHODS            |   ← Layer 3
+---------------------------+
|        PROCESS            |   ← Layer 2
+---------------------------+
|    QUALITY FOCUS          |   ← Layer 1 (Foundation)
+---------------------------+
```

**Layer 1 — Quality Focus (Foundation):**
The bedrock of software engineering is an unwavering commitment to **quality**. All software engineering activities are driven by a philosophy of continuous quality improvement (similar to Total Quality Management in manufacturing). Without a quality focus, even the best tools and methods produce poor results. Quality is not just about the final product but about the entire process.

**Layer 2 — Process:**
The **process** layer defines the framework that binds together methods and tools. It establishes the foundation for software project management and ensures orderly development. The process defines:
- The sequence of activities (SDLC)
- Milestones and deliverables
- Quality checkpoints
- Change management procedures

Popular process models include Waterfall, Spiral, Agile, and Iterative models.

**Layer 3 — Methods:**
Software engineering **methods** provide the technical "how-to" for building software. Methods cover:
- **Requirements methods:** Elicitation, SRS documentation
- **Design methods:** Architectural design, data design, interface design
- **Coding methods:** Programming standards, languages
- **Testing methods:** Black box, white box, integration testing
- **Maintenance methods:** Re-engineering, reverse engineering

**Layer 4 — Tools:**
**Tools** provide automated or semi-automated support for the process and methods. These are called **CASE Tools (Computer-Aided Software Engineering)** and include:
- IDEs (Eclipse, IntelliJ)
- Modeling tools (Rational Rose, Visio)
- Project management tools (MS Project, JIRA)
- Testing tools (Selenium, JUnit)
- Version control (Git)

**Why "Layered"?**
The analogy is apt because each layer depends on the stability of the layer below it. You cannot effectively apply methods without a sound process. Tools are only as good as the methods they automate. And all of this is meaningless without a genuine commitment to quality at the foundation. This layered architecture ensures that software engineering is systematic, repeatable, and improvable.

---

## Q2(b) Discuss the importance of Feasibility Study. Also discuss its various types.

### Feasibility Study

A **Feasibility Study** is a preliminary investigation conducted before a software project is formally approved. Its purpose is to determine whether the proposed system is technically, economically, operationally, legally, and temporally achievable. It is a critical early activity that prevents organizations from investing resources in projects that are doomed to fail.

### Importance of Feasibility Study:

**1. Prevents wasted investment:** By identifying insurmountable obstacles early, it saves the organization from spending millions on an unfeasible project.

**2. Provides decision-making basis:** Management receives a clear, objective report on which to base the go/no-go decision for the project.

**3. Identifies constraints:** It surfaces technical, financial, legal, and operational constraints that must be addressed in planning.

**4. Defines project scope:** The study helps clearly define what the system will and will not do, preventing scope creep later.

**5. Risk identification:** Risks are identified early when they are cheapest to mitigate.

**6. Explores alternatives:** Multiple approaches to solving the problem are evaluated so the best option is chosen.

### Types of Feasibility Study:

**1. Technical Feasibility:**
Evaluates whether the organization has the technical resources, expertise, and infrastructure to build and run the proposed system.
- *Questions asked:* Does the required technology exist? Do we have skilled personnel? Can the existing hardware/software support the new system?
- *Example:* Determining if the company's servers can handle the proposed real-time transaction volume.

**2. Economic (Financial) Feasibility:**
Determines whether the project is financially justified by performing a cost-benefit analysis.
- *Key analyses:* Return on Investment (ROI), Net Present Value (NPV), Payback Period, Break-Even Analysis.
- *Questions asked:* Will the benefits outweigh the costs? Is there budget available?
- *Example:* A system costing ₹50 lakhs to build but saving ₹10 lakhs per year has a 5-year payback period.

**3. Operational Feasibility:**
Assesses whether the proposed system will be accepted and effectively used by the people who operate and use it.
- *Questions asked:* Will end users accept the new system? Does management support it? Will it fit into existing workflows?
- *Example:* A complex ERP system might be technically and economically feasible but fail operationally if employees refuse to adopt it.

**4. Legal/Ethical Feasibility:**
Checks whether the proposed system complies with all applicable laws, regulations, data privacy rules, and ethical standards.
- *Questions asked:* Does the system violate copyright laws? Does it comply with data protection regulations (GDPR, IT Act)? Are there patent issues?
- *Example:* A health data system must comply with medical privacy laws.

**5. Schedule Feasibility (Time Feasibility):**
Evaluates whether the project can be completed within the required timeframe given available resources.
- *Questions asked:* Can we deliver by the deadline? Are the timelines realistic?
- *Example:* A system needed for a government launch in 3 months may not be schedulefully feasible if estimates show 6 months of work.

### Output of Feasibility Study:
The study results in a **Feasibility Report** that includes findings, recommendations, and a recommendation to proceed, modify, or abandon the project.

---

## Q2(c) Explain Code Inspection, Formal Technical Reviews (Peer Reviews), and Walk Through in detail.

These are **static testing strategies** — they detect defects by reviewing documents and code without actually executing the program.

---

### 1. Formal Technical Review (FTR) / Peer Review

A **Formal Technical Review** is a structured meeting involving a small team of qualified personnel who examine a software work product (code, design, SRS, test plan) for errors. It is the most rigorous static testing method.

**Participants:**
- **Author:** The producer of the work product being reviewed.
- **Reviewer(s):** Technical experts (typically 2–5) who examine the artifact.
- **Moderator:** Manages the review process, ensures it stays on track, and produces the review report.
- **Recorder:** Documents defects, issues, and decisions.

**Process of FTR:**
1. **Planning:** The moderator selects reviewers, distributes materials 2–3 days in advance, and schedules the meeting.
2. **Preparation:** Each reviewer individually examines the document and notes issues.
3. **Review Meeting:** The author presents the work; reviewers raise issues; the recorder logs all defects.
4. **Rework:** The author corrects all identified defects.
5. **Follow-up:** The moderator verifies that all corrections have been properly made.

**Rules for FTR:**
- Each review meeting should cover no more than 200 lines of code.
- Duration should not exceed 2 hours.
- The focus is on finding defects, not fixing them during the meeting.
- The product is reviewed, not the producer.

**Benefits:** Early defect detection, knowledge sharing, quality assurance, and compliance verification.

---

### 2. Walk Through

A **Walk Through** is a less formal type of review where the **author** leads a group of peers step-by-step through the work product (code, design, or document). The goal is to identify errors, gather feedback, and improve quality.

**Characteristics:**
- Led by the **author** (unlike FTR where the moderator leads).
- Less structured and less formal than code inspection.
- The author "walks" the team through the logic or code, explaining each part.
- Reviewers ask questions and note issues, but discussion is allowed.

**Process:**
1. Author distributes the work product before the meeting.
2. Reviewers skim it in advance.
3. In the meeting, the author walks through the logic step by step.
4. Reviewers raise questions, spot errors, and suggest improvements.
5. Issues are logged and addressed by the author afterward.

**When used:**
Walk throughs are commonly used for requirements review, design review, and early code review. They are educational in nature — good for spreading knowledge within a team.

**Advantage over FTR:** More flexible, less preparation needed, good for knowledge transfer.
**Disadvantage:** Less rigorous, may miss systematic errors.

---

### 3. Code Inspection

A **Code Inspection** is a formal, structured review technique specifically focused on source code. It was pioneered by Michael Fagan at IBM in the 1970s and is the most rigorous software review method.

**Participants (Fagan's Model):**
- **Moderator:** Experienced, trained leader; runs the inspection process.
- **Author/Designer:** Wrote the code being inspected.
- **Inspector(s):** Technical peers who examine the code for specific defect types.
- **Reader:** Reads the code line-by-line during the meeting.

**The Code Inspection Process (6 Phases):**

| Phase | Activity |
|---|---|
| 1. Planning | Moderator selects team, schedules meeting, distributes materials |
| 2. Overview | Author gives a brief overview of the code and design intent |
| 3. Preparation | Each inspector individually reviews code against checklists |
| 4. Inspection Meeting | Reader reads code aloud; inspectors raise defects; recorder logs them |
| 5. Rework | Author fixes all identified defects |
| 6. Follow-up | Moderator verifies all defects are fixed; may re-inspect if major errors found |

**Checklists Used in Code Inspection:**
Inspectors use predefined checklists covering:
- Variable initialization
- Array index bounds
- Arithmetic operator errors
- Null pointer dereferences
- Loop termination conditions
- Memory leaks

**Comparison:**

| Feature | Walk Through | FTR | Code Inspection |
|---|---|---|---|
| Formality | Informal | Formal | Most Formal |
| Leader | Author | Moderator | Moderator |
| Focus | Understanding | Defect detection | Defect detection (code) |
| Checklist | No | Optional | Yes (mandatory) |
| Follow-up | Informal | Yes | Mandatory |
| Productivity | High (60–90 defects/hour) | Medium | High |

---

## Q2(d) Short notes on: Mutation Testing, Alpha & Beta Testing, Regression Testing

---

### Mutation Testing

**Mutation Testing** is an advanced software testing technique used to evaluate the quality and effectiveness of a test suite. It works by deliberately introducing small, syntactic changes (called **mutations**) into the source code to create **mutants**, and then checking whether the existing test cases detect (kill) these mutants.

**How it works:**
1. The original program is taken as the base.
2. **Mutation operators** are applied to create slightly modified versions (mutants). Examples of mutations:
   - Replacing `>` with `>=`
   - Replacing `+` with `-`
   - Changing `AND` to `OR`
   - Deleting a statement
3. The test suite is run against each mutant.
4. If a mutant causes a test to **fail**, the mutant is **killed** (good — the test detected it).
5. If a mutant causes all tests to **pass**, the mutant **survives** (bad — the test suite missed this error).

**Mutation Score:**
$$\text{Mutation Score} = \frac{\text{Killed Mutants}}{\text{Total Mutants}} \times 100\%$$

A high mutation score (close to 100%) indicates a strong, effective test suite.

**Advantages:** Highly effective at measuring test suite quality; detects logical errors that code coverage cannot.
**Disadvantages:** Computationally expensive (many mutants to test); difficult to implement for large programs.

---

### Alpha and Beta Testing

Both are forms of **acceptance testing** performed before final product release.

**Alpha Testing:**
- Conducted at the **developer's site** by a select group of internal users, often the developer's own quality assurance team or selected internal users.
- Performed in a **controlled environment** with the developer present.
- Feedback is collected and bugs are fixed before the software is released to external users.
- Typically the first round of user testing.
- *Example:* Google employees testing a new Google service internally before it goes public.

**Beta Testing:**
- Conducted at the **customer's site** by real end users in a real-world environment.
- The developer is **not present**; users test the software independently.
- Users report bugs, usability issues, and improvement suggestions.
- The software is in a near-final state; only minor issues are expected.
- *Example:* Microsoft releasing Windows 11 Beta to millions of registered testers worldwide.

**Comparison:**

| Feature | Alpha Testing | Beta Testing |
|---|---|---|
| Location | Developer's site | Customer's site |
| Who tests | Internal team | Real end users |
| Developer present | Yes | No |
| Environment | Controlled | Real-world |
| Stage | Early | Near-final release |

---

### Regression Testing

**Regression Testing** is the process of re-testing previously tested software after a change (bug fix, enhancement, or new feature) has been made, to ensure that the change has not introduced new bugs or broken existing functionality.

**Why it is needed:**
Software is constantly modified. A fix in one module can unexpectedly break another module. Regression testing ensures that the system still works correctly after changes.

**Process:**
1. A change is made to the code (bug fix or new feature).
2. The entire test suite (or a selected subset) is re-executed.
3. Results are compared with previous baseline results.
4. Any new failures (regressions) are identified and fixed.

**Types:**
- **Corrective Regression Testing:** When requirements don't change; re-running existing test cases.
- **Retest-All:** Re-run all test cases (thorough but expensive).
- **Regression Test Selection:** Select a subset of test cases relevant to the changed code.
- **Prioritized Regression:** Run highest-risk test cases first.

**Tools for Regression Testing:** Selenium, JUnit, TestNG, HP Quick Test Professional.

**Importance:**
- Maintains software stability across versions.
- Essential in **Agile/CI-CD environments** where code changes are frequent.
- Provides confidence that changes did not break existing functionality.

---

## Q2(e) What do you mean by Software Re-engineering? Why is it required?

### Software Re-engineering

**Software Re-engineering** is the process of examining and altering an existing software system to reconstitute it in a new form, and the subsequent implementation of the new form. It involves understanding the old system, modifying it, and rebuilding it with improved structure, technology, or functionality — without necessarily changing its external behavior.

The term was formally defined by Chikofsky and Cross (1990) as: *"The examination and alteration of a subject system to reconstitute it in a new form."*

### The Re-engineering Process Model:

```
Existing Software
       ↓
[Inventory Analysis] → Identify candidates for re-engineering
       ↓
[Document Restructuring] → Update and modernize documentation
       ↓
[Reverse Engineering] → Recover design from existing code
       ↓
[Code Restructuring] → Improve internal code structure
       ↓
[Data Restructuring] → Redesign data schemas and databases
       ↓
[Forward Engineering] → Build the improved system
       ↓
Re-engineered Software
```

### Key Activities in Re-engineering:

**1. Reverse Engineering:**
The process of analyzing a program to identify its components and their interrelationships, creating representations at a higher level of abstraction. It extracts design information from code.

**2. Code Restructuring:**
Transforming non-structured (spaghetti) code into well-structured, modular code without changing its external behavior. Involves refactoring methods, removing dead code, and improving naming.

**3. Data Restructuring:**
Analyzing existing data structures (files, databases) and restructuring them. May involve converting flat files to relational databases or normalizing existing schemas.

**4. Forward Engineering:**
Using the information recovered from reverse engineering to rebuild the system with improved architecture, technology, or features.

**5. Documentation Restructuring:**
Updating outdated or missing documentation to reflect the actual current system behavior.

### Why is Re-engineering Required?

**1. Legacy System Problems:**
Many organizations have critical software systems (legacy systems) written decades ago in obsolete languages (COBOL, FORTRAN) that are expensive to maintain and cannot integrate with modern systems.

**2. High Maintenance Cost:**
Old systems often have poor structure, lack documentation, and contain accumulated patches and workarounds, making every small change expensive and risky.

**3. Technology Upgradation:**
New platforms, programming languages, databases, and cloud infrastructure offer better performance and features. Re-engineering allows migration without rebuilding from scratch.

**4. Business Continuity:**
The system may be critical to the organization and cannot be shut down for a complete rewrite. Re-engineering allows incremental improvement while keeping the system running.

**5. Improving Reliability and Maintainability:**
Re-engineered systems have better structure, documentation, and testability, reducing future maintenance costs and defect rates.

**6. Personnel Knowledge Loss:**
Original developers may have left. Re-engineering with proper documentation captures system knowledge before it is completely lost.

**Re-engineering vs. Replacement:**
Re-engineering is preferred over complete replacement when the existing system has significant business logic embedded in it, when replacement risk is too high, or when time and budget do not allow a full rebuild.

---

# SECTION C — Long Answer Questions (10 Marks Each)

---

## Q3(a) Explain Software Quality Attributes in detail.

### Software Quality

**Software Quality** is the degree to which software possesses a combination of desired attributes that satisfy stated and implied requirements. Quality cannot be measured by a single parameter — it is a multi-dimensional concept.

Quality frameworks such as **McCall's Quality Model** organize quality attributes into three perspectives: **Product Operation**, **Product Revision**, and **Product Transition**.

---

### Quality Attributes (McCall's Model):

**Category 1: Product Operation Qualities** (How well does it run?)

**1. Correctness:**
The degree to which the software performs its intended function. The software does exactly what the SRS specifies.
*Example:* A payroll system that computes salaries correctly per the defined pay rules.

**2. Reliability:**
The ability of the software to perform its required functions under specified conditions for a specified period. Measured as **MTBF (Mean Time Between Failures)**.
*Example:* An ATM system that operates without failure for 99.99% of the time.

**3. Efficiency:**
How well the software uses computational resources (CPU, memory, bandwidth, storage) to perform its functions.
*Example:* A search engine that returns results in under 100ms while using minimal server resources.

**4. Integrity:**
The ability of the software to withstand unauthorized access and security breaches. Concerned with data security and access control.
*Example:* A banking application that prevents unauthorized access to account data.

**5. Usability:**
The ease with which a user can learn to operate, input data into, and interpret the output of the software.
*Example:* An intuitive interface that allows new users to perform tasks without reading a manual.

---

**Category 2: Product Revision Qualities** (How easy is it to change?)

**6. Maintainability:**
The ease with which errors can be identified, diagnosed, and corrected in the software.
*Example:* Well-commented, modular code that allows a new developer to fix bugs quickly.

**7. Flexibility:**
The ease with which the software can be modified to adapt to new requirements or environments.
*Example:* A tax calculation module that can be updated every year with new tax slabs without major code changes.

**8. Testability:**
The ease with which the software can be tested to ensure it is error-free and meets requirements. Includes the availability of test interfaces and complete specifications.
*Example:* Software with clearly defined interfaces and separated modules that can be unit-tested independently.

---

**Category 3: Product Transition Qualities** (How well does it adapt to new environments?)

**9. Portability:**
The ease with which the software can be transferred from one hardware/software environment to another.
*Example:* A web application that runs on Windows, Linux, and macOS without modification.

**10. Reusability:**
The extent to which software components can be reused in other applications or systems.
*Example:* A well-designed authentication module reused across multiple company applications.

**11. Interoperability:**
The ability of the software to interact and exchange data with other software systems.
*Example:* A hospital information system that exchanges patient data with external laboratories using HL7 standards.

---

### Other Modern Quality Attributes:

**12. Scalability:** Ability to handle growing amounts of work by adding resources.

**13. Availability:** The proportion of time the system is operational (e.g., 99.9% uptime).

**14. Performance:** Response time, throughput, and resource utilization under load.

**15. Security:** Protection against unauthorized access, data breaches, and attacks.

---

### ISO/IEC 9126 Quality Model:
A more modern framework defines six top-level quality characteristics:
- **Functionality, Reliability, Usability, Efficiency, Maintainability, Portability**

Each is further broken into sub-characteristics, providing a comprehensive quality assessment framework.

---

## Q3(b) Explain SDLC. Also discuss various activities during SDLC.

### Software Development Life Cycle (SDLC)

The **Software Development Life Cycle (SDLC)** is a structured process that defines the phases involved in developing a software system from conception through deployment and maintenance. It provides a systematic methodology that ensures software is built efficiently, on time, and within budget.

The SDLC answers the question: *"What are the steps we need to follow to build software in an organized manner?"*

---

### Phases and Activities of SDLC:

**Phase 1: Planning and Requirement Analysis**

This is the foundation phase where the project is formally initiated.

*Activities:*
- Define the project scope and objectives.
- Conduct **Feasibility Study** (technical, economic, operational).
- Identify stakeholders and communicate their expectations.
- Develop a **Project Plan** covering schedule, cost, and resources.
- Perform **Risk Analysis** to identify and mitigate potential problems.

*Deliverables:* Feasibility Report, Project Plan, Risk Register.

---

**Phase 2: Requirements Definition (SRS)**

Detailed requirements are gathered, analyzed, and documented.

*Activities:*
- **Requirements Elicitation:** Interviews, surveys, workshops, observation.
- **Requirements Analysis:** Resolve conflicts, remove ambiguities.
- **Requirements Documentation:** Create the **Software Requirements Specification (SRS)** document.
- Create **Data Flow Diagrams (DFDs)** and **Entity Relationship Diagrams (ERDs)**.
- Requirements are reviewed and approved by stakeholders.

*Deliverables:* SRS Document, DFDs, ERDs, Use Case Diagrams.

---

**Phase 3: System Design**

The SRS is transformed into a detailed design blueprint for the system.

*Activities:*
- **Architectural Design:** Define the overall system structure, modules, and their interactions. Choose architecture (client-server, microservices, etc.).
- **Database Design:** Design the database schema, tables, relationships, and indexes.
- **User Interface Design:** Design screens, forms, and interaction flows.
- **Module Design (Low-Level Design):** Define the internal logic of each module using pseudocode, flowcharts, and design structure charts.
- Define coupling and cohesion between modules.

*Deliverables:* Architecture Document, Database Schema, UI Mockups, Module Design Specs.

---

**Phase 4: Implementation (Coding)**

The design is translated into actual source code.

*Activities:*
- Developers write source code in the chosen programming language.
- Follow coding standards and best practices.
- Code reviews and peer reviews are conducted.
- Unit testing is performed by developers.
- Code is committed to version control systems (Git).

*Deliverables:* Source Code, Unit Test Results, Code Review Reports.

---

**Phase 5: Testing**

The system is systematically tested to identify and fix defects.

*Activities:*
- **Unit Testing:** Individual modules tested by developers.
- **Integration Testing:** Modules combined and tested together.
- **System Testing:** Complete system tested against SRS requirements.
- **Performance Testing:** Load, stress, and scalability testing.
- **Acceptance Testing (UAT):** Client/end users validate the system.
- Bug tracking and defect resolution.

*Deliverables:* Test Plans, Test Cases, Bug Reports, Test Completion Report.

---

**Phase 6: Deployment**

The tested software is released into the production environment.

*Activities:*
- **Installation:** Deploy software to production servers or client machines.
- **User Training:** Train end users on how to use the system.
- **Data Migration:** Transfer existing data to the new system.
- **Parallel Running:** Running old and new systems simultaneously during transition.

*Deliverables:* Deployed System, User Manuals, Training Materials.

---

**Phase 7: Maintenance**

Post-deployment activities to keep the system operational and updated.

*Activities:*
- **Corrective Maintenance:** Fix bugs reported by users.
- **Adaptive Maintenance:** Modify the system for new environments or regulations.
- **Perfective Maintenance:** Enhance features and performance based on user feedback.
- **Preventive Maintenance:** Proactively improve maintainability and prevent future issues.

*Deliverables:* Updated Software Versions, Change Logs, Maintenance Reports.

---

### SDLC Models:
The SDLC can be implemented using different models, each suited to different project types:
- **Waterfall Model:** Sequential, phase-by-phase approach.
- **Prototype Model:** Build quick prototypes for user feedback.
- **Spiral Model:** Risk-driven iterative approach.
- **Agile Model:** Iterative, incremental, user-centric development.

---

## Q4(a) Explain Requirement Elicitation Techniques in detail.

### Requirement Elicitation

**Requirement Elicitation** is the process of gathering information about the system to be developed from stakeholders (clients, users, domain experts, etc.). It is the first and most critical step in requirements engineering. The quality of requirements directly determines the quality of the final product.

**Challenges in Elicitation:**
- Stakeholders may not know what they want.
- Communication gaps between technical and non-technical stakeholders.
- Conflicting requirements from different stakeholders.
- Tacit knowledge — things users know but don't think to mention.

---

### Requirement Elicitation Techniques:

**1. Interviews**

The most traditional and widely used technique. A requirements analyst conducts one-on-one or group conversations with stakeholders.

*Types:*
- **Structured Interviews:** Pre-defined questions in a fixed order.
- **Unstructured Interviews:** Open-ended, free-flowing conversation.
- **Semi-structured:** Mix of both.

*Advantages:* Direct communication, can explore complex issues, builds rapport.
*Disadvantages:* Time-consuming, biased by interviewer's framing, stakeholders may not articulate needs well.

---

**2. Questionnaires / Surveys**

Written sets of questions distributed to a large number of stakeholders to gather structured feedback.

*When used:* When stakeholders are geographically dispersed or too numerous for individual interviews.

*Advantages:* Reaches many people quickly, quantifiable data, cost-effective.
*Disadvantages:* No opportunity for clarification, low response rates, misinterpretation of questions.

---

**3. Observation (Ethnography)**

Analysts directly observe end users performing their daily work tasks to understand real workflows and unstated requirements.

*Types:*
- **Passive Observation:** Analyst watches without participating.
- **Active Observation:** Analyst participates in work tasks.

*Advantages:* Reveals tacit knowledge, captures actual workflows vs. described workflows.
*Disadvantages:* Observer effect (people change behavior when watched), time-consuming.

---

**4. Document Analysis**

Studying existing documentation such as business policies, old system manuals, process documents, forms, reports, and legal regulations to extract requirements.

*Advantages:* Useful when domain knowledge must be extracted from existing materials; provides formal requirements.
*Disadvantages:* Documents may be outdated, incomplete, or contradictory.

---

**5. Prototyping**

A working model of the proposed system is built quickly to help stakeholders visualize the system and clarify their requirements.

*Types:*
- **Throwaway Prototype:** Built only for requirement clarification, then discarded.
- **Evolutionary Prototype:** Refined iteratively and eventually becomes the final system.

*Advantages:* Helps stakeholders articulate hidden requirements, reduces requirement errors.
*Disadvantages:* Stakeholders may confuse the prototype with the final product; may be costly.

---

**6. Workshops (Joint Application Development — JAD)**

Facilitated, structured group sessions where key stakeholders and developers collaborate intensively to define requirements in a short time.

*Features:* Professional facilitator, defined agenda, all key stakeholders present.

*Advantages:* Rapid consensus-building, resolves conflicts quickly, reduces interview time.
*Disadvantages:* Dominant personalities may skew results, expensive to organize.

---

**7. Brainstorming**

A free-thinking group session where participants generate a large number of ideas about system requirements without criticism.

*Advantages:* Generates creative solutions, encourages participation from all.
*Disadvantages:* Can become unfocused, requires skilled facilitation.

---

**8. Use Case Analysis**

Analysts work with stakeholders to identify system actors (users) and their interactions (use cases) with the system.

*Advantages:* Visual, easy to understand, directly maps to functionality.
*Disadvantages:* May miss non-functional requirements.

---

**9. Focus Groups**

Moderated discussions with a group of representative users to gather their opinions, expectations, and preferences about the proposed system.

*Advantages:* Group dynamics generate insights not found in individual interviews.
*Disadvantages:* Group think, dominant participants may suppress others.

---

## Q4(b) Compare SEI CMM Model and ISO 9000 Model. Also discuss the five levels of CMM.

---

### SEI CMM Model (Capability Maturity Model)

The **Capability Maturity Model (CMM)** was developed by the **Software Engineering Institute (SEI) at Carnegie Mellon University** in the late 1980s. It provides a framework for assessing and improving the maturity of an organization's software development processes.

CMM focuses on **continuous process improvement** — the idea that mature processes lead to better software products.

### Five Levels of SEI CMM:

**Level 1 — Initial:**
- Software development is **ad hoc and chaotic**.
- No formal processes exist; success depends entirely on individual heroics.
- Results are unpredictable; projects frequently miss deadlines and budgets.
- *Characteristic:* "We do things our own way."
- Most organizations start here.

---

**Level 2 — Repeatable:**
- Basic **project management processes** are established.
- Processes are documented and can be repeated for similar projects.
- Key Process Areas (KPAs): Requirements Management, Software Project Planning, Software Project Tracking, Software Quality Assurance, Software Configuration Management.
- *Characteristic:* "We can repeat what worked before on similar projects."

---

**Level 3 — Defined:**
- Software processes for both management and engineering are **documented, standardized, and integrated** into a standard process for the entire organization.
- A Software Process Group actively maintains and improves the defined process.
- Key Process Areas: Training Program, Integrated Software Management, Peer Reviews, Intergroup Coordination, Software Product Engineering.
- *Characteristic:* "We have a standard process across the entire organization."

---

**Level 4 — Managed:**
- **Detailed quantitative measurements** are collected on both the process and the product.
- Statistical techniques are used to understand and control process performance.
- Key Process Areas: Quantitative Process Management, Software Quality Management.
- *Characteristic:* "We measure and control our processes using data."

---

**Level 5 — Optimizing:**
- The organization focuses on **continuous process improvement** using quantitative feedback and innovative ideas.
- Defect prevention processes are in place; new technologies are evaluated and implemented.
- Key Process Areas: Defect Prevention, Technology Change Management, Process Change Management.
- *Characteristic:* "We continuously improve our process using data."

---

### ISO 9000 Model

**ISO 9000** is a series of **international standards** for Quality Management Systems (QMS) published by the **International Organization for Standardization (ISO)**. The software-specific standard is **ISO 9001**, which specifies requirements for a quality management system that organizations can use.

ISO 9000 focuses on ensuring consistent processes that produce products meeting customer requirements.

**Core Principles of ISO 9000:**
- Customer focus
- Leadership
- Involvement of people
- Process approach
- System approach to management
- Continual improvement
- Factual approach to decision making
- Mutually beneficial supplier relationships

---

### Comparison: SEI CMM vs. ISO 9000

| Feature | SEI CMM | ISO 9000 |
|---|---|---|
| **Origin** | Carnegie Mellon University (USA) | International Organization for Standardization (Geneva) |
| **Domain** | Software process improvement | General quality management systems |
| **Focus** | Process maturity and capability | Quality system documentation & compliance |
| **Structure** | 5 maturity levels (1–5) | Series of standards (9001, 9002, etc.) |
| **Applicability** | Software organizations | All industries and sectors |
| **Assessment** | Internal/external assessment against KPAs | Third-party audit and certification |
| **Goal** | Continuous process improvement | Minimum quality system compliance |
| **Measurement** | Quantitative (at Level 4+) | Documentation-based |
| **Prescriptiveness** | Prescriptive (tells what to improve) | Less prescriptive (tells what to document) |
| **Outcome** | Maturity level rating | Certification (pass/fail) |
| **Granularity** | Very detailed, 18 KPAs | Less granular |
| **Focus on People** | Strong emphasis | Moderate emphasis |
| **Process Tailoring** | Encouraged | Limited |

**Key Difference:** ISO 9000 certification tells you that an organization has a *documented* quality system and follows it. CMM tells you *how mature* and *how capable* an organization's software process is. An organization can be ISO 9000 certified at CMM Level 1 (if it documents its chaotic processes).

---

## Q5(a) Explain Cohesion and Coupling. Also explain their various forms.

### Coupling

**Coupling** is a measure of the degree of **interdependence** between software modules. High coupling means modules are highly dependent on each other — a change in one module affects others. Low coupling (loose coupling) is desirable because it makes modules independent and easier to maintain.

**Goal: Minimize coupling.**

### Types of Coupling (from worst to best):

**1. Content Coupling (Worst — Level 1):**
One module directly **accesses or modifies the internal data** of another module.
*Example:* Module A directly modifies a local variable inside Module B.
*Problem:* Complete interdependency; any change in Module B breaks Module A.

**2. Common Coupling (Level 2):**
Two or more modules share the **same global data** (global variables).
*Example:* Both Module A and Module B read and write to a global array.
*Problem:* Changes to the global data affect all modules using it; hard to trace bugs.

**3. External Coupling (Level 3):**
Modules share an **external imposed data format**, communication protocol, or device interface.
*Example:* Multiple modules communicate via a shared file format or API protocol.

**4. Control Coupling (Level 4):**
One module passes **control information** (flags, switch parameters) to another, controlling its behavior.
*Example:* Module A passes a flag `printMode = true` to Module B to decide what it does.
*Problem:* Module A must know the internal working of Module B to pass the right flag.

**5. Stamp (Data Structure) Coupling (Level 5):**
Modules share a **composite data structure** (record/structure), but each module uses only part of it.
*Example:* Module A passes an entire Employee record to Module B, even though B only needs the salary field.
*Problem:* Changes to the data structure affect all modules even if they don't use the changed part.

**6. Data Coupling (Best — Level 6):**
Modules communicate by passing **only the data they need** through parameters. No unnecessary data is shared.
*Example:* `calculateTax(salary, taxRate)` — only required values are passed.
*This is the ideal form of coupling.*

---

### Cohesion

**Cohesion** is a measure of how **strongly related** the elements (statements, functions, data) within a single module are to each other and to the module's purpose. High cohesion means a module does one thing well. Low cohesion means a module does many unrelated things.

**Goal: Maximize cohesion.**

### Types of Cohesion (from worst to best):

**1. Coincidental Cohesion (Worst — Level 1):**
Elements of the module are grouped together **arbitrarily** with no meaningful relationship.
*Example:* A module containing `printReport()`, `calculateTax()`, and `sendEmail()` just because they were needed at the same time.
*Problem:* Almost impossible to understand, reuse, or maintain.

**2. Logical Cohesion (Level 2):**
Elements that perform **similar functions** are grouped together, but the actual function to execute is determined by a control flag.
*Example:* A module `handleInput()` that handles keyboard input, mouse input, and touch input based on a parameter.
*Problem:* Unrelated code mixed together; difficult to understand.

**3. Temporal Cohesion (Level 3):**
Elements are grouped because they are executed at the **same time**.
*Example:* An `initialize()` module that opens files, sets variables, and connects to a database — all at startup.
*Problem:* Elements are related only by timing, not by function.

**4. Procedural Cohesion (Level 4):**
Elements are grouped because they follow a **sequence of execution** where control flows from one to the next.
*Example:* A module that reads data, processes it, and writes results in sequence.
*Problem:* Elements may not be related in purpose, just in order.

**5. Communicational Cohesion (Level 5):**
Elements operate on the **same data set** or produce data for the same output.
*Example:* A module that reads a customer record, updates the balance, and prints the statement — all on the same customer data.

**6. Sequential Cohesion (Level 6):**
Output of one element serves as **input to the next** element — like a pipeline.
*Example:* A module that reads raw data → filters it → sorts it → outputs result, where each step feeds the next.

**7. Functional Cohesion (Best — Level 7):**
All elements contribute to **one and only one well-defined task**.
*Example:* `calculateCircleArea(radius)` — does exactly one thing: computes the area of a circle.
*This is the ideal form of cohesion.*

---

### Summary:

| | Coupling | Cohesion |
|---|---|---|
| **Goal** | Minimize (Low coupling is better) | Maximize (High cohesion is better) |
| **Refers to** | Interdependence between modules | Relatedness within a module |
| **Best type** | Data Coupling | Functional Cohesion |
| **Worst type** | Content Coupling | Coincidental Cohesion |
| **Effect of achieving goal** | Easy to change modules independently | Easier to understand, reuse, test modules |

---

## Q5(b) Explain Software Metric. Also explain the various metrics for size estimation of a project.

### Software Metric

A **software metric** is a quantitative measure of a software product, process, or project. Metrics transform subjective judgments about software quality and progress into objective, measurable data.

**Purpose of Software Metrics:**
- Measure productivity and quality
- Estimate project cost, effort, and schedule
- Identify trends and problem areas
- Provide data for process improvement
- Track project progress

**Classification of Software Metrics:**

**1. Product Metrics:** Measure characteristics of the software product itself (size, complexity, quality).

**2. Process Metrics:** Measure characteristics of the development process (defect removal efficiency, review coverage).

**3. Project Metrics:** Measure characteristics of the project (cost, schedule, team size).

---

### Size Estimation Metrics:

**1. Lines of Code (LOC)**

**Definition:** Count of the total number of source code lines in the software.

**Variants:**
- **SLOC (Source LOC):** Only executable statements.
- **KLOC:** Thousands of LOC.
- **LLOC (Logical LOC):** Count of logical statements (language-independent).
- **PLOC (Physical LOC):** All lines including comments and blanks.

**Derived Metrics from LOC:**
- Productivity = LOC / Person-Month
- Defect density = Defects / KLOC
- Cost per LOC = Total Cost / LOC

**Advantages:** Simple, easy to measure, extensive historical data exists.

**Disadvantages:**
- Language dependent (a Java program may have 5× the LOC of an equivalent Python program)
- Penalizes concise, efficient code
- Cannot be measured until code is written (poor for early estimation)
- Does not reflect functionality — reused code is counted same as new code

---

**2. Halstead's Software Science**

Maurice Halstead (1977) proposed metrics based on counting **operators** and **operands** in a program, treating software as a collection of tokens.

**Basic Measures:**
| Symbol | Meaning |
|---|---|
| n1 | Number of distinct operators |
| n2 | Number of distinct operands |
| N1 | Total occurrences of operators |
| N2 | Total occurrences of operands |

**Derived Metrics:**

| Metric | Formula | Meaning |
|---|---|---|
| Program Vocabulary | n = n1 + n2 | Unique tokens |
| Program Length | N = N1 + N2 | Total tokens |
| Volume | V = N × log₂(n) | Information content |
| Difficulty | D = (n1/2) × (N2/n2) | How hard to write/understand |
| Effort | E = D × V | Mental effort to implement |
| Time to Program | T = E / 18 (seconds) | Development time |
| Delivered Bugs | B = V / 3000 | Estimated defects |

**Advantages:** Can be computed automatically, language-independent, correlates well with actual complexity.
**Disadvantages:** Based on textual analysis only; doesn't capture design quality.

---

**3. Function Point (FP) Analysis**

Developed by **Allan Albrecht (IBM, 1979)**, Function Points measure software size based on **user-visible functionality** rather than code. FP analysis is language-independent and can be done early in the project lifecycle.

**Five Components Counted:**

| Component | Description | Example |
|---|---|---|
| External Inputs (EI) | User inputs into the system | Login form, data entry |
| External Outputs (EO) | Outputs generated by the system | Reports, invoices |
| External Inquiries (EQ) | Input/output pairs for queries | Search functionality |
| Internal Logical Files (ILF) | Data maintained by the system | Customer database table |
| External Interface Files (EIF) | Data shared with external systems | Import from external API |

**Each component is rated as Simple, Average, or Complex** and assigned a weight.

**Unadjusted Function Points (UFP):**
$$UFP = \sum (\text{Count} \times \text{Complexity Weight})$$

**Complexity Adjustment Factor (CAF):**
14 General System Characteristics (GSCs) are rated 0–5 (e.g., performance, data communications, distributed processing). The sum DI (Degree of Influence) is calculated.
$$CAF = 0.65 + 0.01 \times DI$$

**Adjusted Function Points:**
$$FP = UFP \times CAF$$

**Advantages:** Language-independent, can be estimated early, user-centric, industry-standard.
**Disadvantages:** Subjective classification, time-consuming for complex systems.

---

**4. Cyclomatic Complexity (McCabe's Metric)**

Proposed by **Thomas McCabe (1976)**, cyclomatic complexity measures the **structural complexity** of a program based on its control flow graph.

**Formula:**
$$V(G) = E - N + 2P$$

Where:
- E = Number of edges in the control flow graph
- N = Number of nodes in the control flow graph
- P = Number of connected components (usually 1 for a single program)

**Alternative Formula:**
$$V(G) = \text{Number of predicate (decision) nodes} + 1$$

**Interpretation:**
| V(G) Range | Complexity | Risk |
|---|---|---|
| 1 – 10 | Simple | Low |
| 11 – 20 | Moderate | Medium |
| 21 – 50 | Complex | High |
| > 50 | Very Complex | Very High |

**Use:** Cyclomatic complexity directly indicates the minimum number of test cases needed for full branch coverage.

**Advantages:** Objective, language-independent, directly related to testability, easy to automate.
**Disadvantages:** Doesn't account for data complexity; different programs with same complexity may differ in actual difficulty.

---

## Q6(a) Design test cases for a prime number program using BVC, Robust Testing, and Worst-Case Testing.

### Problem Statement

A program reads an integer within the range **[1, 100]** and determines whether it is a **prime number or not**. Design test cases using:
- **Boundary Value Coverage (BVC)**
- **Robust Testing**
- **Worst-Case Testing**

### Input Variable Definition

- Variable: **n** (integer)
- Valid Range: **[1, 100]**
- Minimum (min) = 1, Maximum (max) = 100

---

### 1. Boundary Value Coverage (BVC) — Normal BVC

BVC focuses on boundaries of the input domain. For a single variable with range [min, max], BVC test cases are:
**min, min+1, nominal, max-1, max**

| Test Case | Value of n | Expected Output |
|---|---|---|
| TC-BVC-1 | 1 | Not Prime |
| TC-BVC-2 | 2 | Prime |
| TC-BVC-3 | 50 (nominal) | Not Prime |
| TC-BVC-4 | 99 | Not Prime |
| TC-BVC-5 | 100 | Not Prime |

*Note: n=1 is neither prime nor composite. n=2 is the smallest prime.*

---

### 2. Robust Testing

Robust BVC extends normal BVC by also testing values **just outside the valid range** (min-1 and max+1) to check how the program handles invalid inputs.

Test cases = min-1, min, min+1, nominal, max-1, max, max+1

| Test Case | Value of n | Type | Expected Output |
|---|---|---|---|
| TC-R-1 | 0 | Below minimum (invalid) | Error / "Out of range" |
| TC-R-2 | 1 | Minimum (valid) | Not Prime |
| TC-R-3 | 2 | Min+1 (valid) | Prime |
| TC-R-4 | 50 | Nominal (valid) | Not Prime |
| TC-R-5 | 99 | Max-1 (valid) | Not Prime |
| TC-R-6 | 100 | Maximum (valid) | Not Prime |
| TC-R-7 | 101 | Above maximum (invalid) | Error / "Out of range" |
| TC-R-8 | -1 | Negative (invalid) | Error / "Out of range" |
| TC-R-9 | 3.5 | Non-integer (invalid) | Error / "Invalid input" |

---

### 3. Worst-Case Testing

Worst-case testing considers all combinations of boundary values for each variable. For a single variable, it uses all five BVC values: {min, min+1, nominal, max-1, max}.

For two or more variables, worst-case generates a **full Cartesian product**. Since this problem has only **one variable**, worst-case testing for a single variable is the same as BVC but may also include systematic testing of all boundary combinations across input conditions.

For completeness, we extend worst-case testing to consider **output categories** as additional dimensions:

**Output categories:** Prime, Not Prime, Invalid

| Test Case | Value of n | Category | Expected Output |
|---|---|---|---|
| TC-WC-1 | 0 | Below range | Error message |
| TC-WC-2 | 1 | Minimum | Not Prime (1 is special) |
| TC-WC-3 | 2 | Min+1 | Prime (smallest prime) |
| TC-WC-4 | 3 | Small prime | Prime |
| TC-WC-5 | 4 | Small non-prime | Not Prime |
| TC-WC-6 | 49 | Near-nominal, non-prime | Not Prime |
| TC-WC-7 | 50 | Nominal | Not Prime |
| TC-WC-8 | 51 | Near-nominal, non-prime | Not Prime |
| TC-WC-9 | 97 | Near-max prime | Prime |
| TC-WC-10 | 99 | Max-1, non-prime | Not Prime |
| TC-WC-11 | 100 | Maximum | Not Prime |
| TC-WC-12 | 101 | Above range | Error message |

---

### Summary of Test Strategy:

| Strategy | Total Test Cases | Focus |
|---|---|---|
| BVC | 5 | Boundary values only |
| Robust Testing | 9 | Boundaries + invalid inputs |
| Worst-Case Testing | 12 | All boundary combinations + output categories |

---

## Q6(b) What is Integration Testing? Explain different approaches used for integration testing.

### Integration Testing

**Integration Testing** is the second level of software testing (after unit testing) where **individual software modules are combined** and tested as a group. Its purpose is to expose defects in the **interfaces and interactions** between integrated components.

Even if individual modules pass unit testing perfectly, integration defects can occur due to:
- Incorrect interface assumptions
- Data format mismatches between modules
- Timing and synchronization errors
- Global variable conflicts
- Incorrect API calls

**Integration Testing focuses on:**
- Data flowing correctly between modules
- Function calls and returns working as expected
- System-level interactions
- Interface compatibility

---

### Approaches to Integration Testing:

**1. Big Bang Integration Testing**

All modules are combined at once and tested together as a complete system.

*Process:* Develop all modules → combine all → test together.

**Advantages:**
- Simple approach — no complex test drivers or stubs needed.
- Works for small systems.

**Disadvantages:**
- If a test fails, it is very difficult to locate which module caused the failure.
- All modules must be completed before testing begins.
- Debugging is extremely difficult.
- Not suitable for large or complex systems.

---

**2. Top-Down Integration Testing**

Integration begins from the **top-level module** (main control module) and progressively integrates lower-level modules one by one.

*Approach:*
- Start with the top-level module.
- Use **stubs** to simulate lower-level modules not yet integrated.
- Integrate modules level by level (either depth-first or breadth-first).
- Replace stubs with actual modules as they become available.

**Depth-First:** Integrate all the way down one branch before moving to the next.
**Breadth-First:** Integrate all modules at one level before going deeper.

**Advantages:**
- Early demonstration of system functionality.
- Major design flaws detected early.
- Stubs are simpler to write than drivers.

**Disadvantages:**
- Stubs can be complex if lower-level modules have complex behaviors.
- Critical lower-level modules are tested late.
- Many stubs may be needed simultaneously.

---

**3. Bottom-Up Integration Testing**

Integration begins from the **lowest-level modules** (leaf modules with no dependencies) and progressively integrates higher-level modules.

*Approach:*
- Start with the lowest-level modules.
- Use **test drivers** to simulate higher-level modules that call the modules under test.
- Integrate upward, replacing drivers with actual modules as higher-level modules are completed.

**Advantages:**
- Lower-level utility modules (most reused) are tested early and thoroughly.
- No stubs needed.
- Actual module behavior tested instead of stub simulation.

**Disadvantages:**
- No working system exists until integration is nearly complete.
- High-level design flaws found late.
- Drivers can be complex to write.

---

**4. Sandwich (Hybrid) Integration Testing**

A combination of **top-down and bottom-up** approaches applied simultaneously. The system is divided into three layers:
- **Top layer:** Tested using top-down approach.
- **Middle target layer:** The integration target.
- **Bottom layer:** Tested using bottom-up approach.

**Advantages:** Combines benefits of both approaches; suitable for large systems.
**Disadvantages:** More complex to coordinate; requires both stubs and drivers.

---

**5. Incremental Integration Testing**

Modules are added and tested **one at a time** (either top-down or bottom-up). After each addition, all previously integrated modules are re-tested.

**Advantages:**
- Faults are localized easily — if a test fails after adding a module, the new module is likely the cause.
- Earlier and more thorough testing.
- Regression testing is automatic.

---

**Comparison of Integration Testing Approaches:**

| Approach | Stubs Needed | Drivers Needed | Early System Demo | Fault Isolation |
|---|---|---|---|---|
| Big Bang | No | No | No | Very Poor |
| Top-Down | Yes | No | Yes | Good |
| Bottom-Up | No | Yes | No | Good |
| Sandwich | Yes | Yes | Partial | Good |
| Incremental | Depends | Depends | Depends | Excellent |

---

## Q7(a) Discuss the need of maintenance. Also discuss various categories of maintenance.

### Software Maintenance

**Software Maintenance** is defined by IEEE as *"the modification of a software product after delivery to correct faults, to improve performance or other attributes, or to adapt the product to a modified environment."*

Software does not physically deteriorate, but it does require continual care to remain effective, secure, and aligned with business needs.

---

### Need for Software Maintenance:

**1. Bug Correction:**
No software is released completely bug-free. Users discover errors during real-world use that testing missed. These must be fixed to keep the system working correctly.

**2. Changing Business Requirements:**
Business environments evolve constantly. Tax laws change, regulations change, business processes change. The software must be updated to reflect these changes.

**3. Technology Changes:**
Operating systems upgrade, databases migrate, hardware changes, browsers update. Software must be adapted to work correctly in new technological environments.

**4. Performance Improvement:**
As data volumes grow or user loads increase, the software may need optimization to maintain acceptable performance.

**5. Security Vulnerabilities:**
New security threats are discovered continuously. Software must be patched to close newly discovered vulnerabilities.

**6. User Feedback:**
Users often request additional features or improvements after using the system, which requires maintenance to implement.

**7. Competitive Pressure:**
To remain competitive in the market, software products must continuously evolve with new features and improved user experience.

---

### Categories of Software Maintenance:

**1. Corrective Maintenance**

Corrective maintenance involves fixing **bugs and defects** discovered after the software is released to users.

- **Purpose:** Fix errors in code, design, or documentation.
- **Trigger:** A user or system reports a failure or incorrect behavior.
- **Types of errors fixed:** Logic errors, computation errors, interface errors, data handling errors.
- **Example:** Fixing a bug where the system crashes when a user enters a special character in the search field.

*Corrective maintenance accounts for approximately 17–21% of total maintenance effort.*

---

**2. Adaptive Maintenance**

Adaptive maintenance modifies the software to **adapt it to changes in the external environment** — operating systems, hardware, regulations, or external interfaces.

- **Purpose:** Keep the software functional in a changed environment.
- **Trigger:** Environmental change (OS upgrade, new hardware, changed API, new law).
- **Example:**
  - Migrating an application from Windows Server 2012 to Windows Server 2022.
  - Updating a banking system to comply with new RBI regulations.
  - Modifying a web app to support a new browser version.

*Adaptive maintenance accounts for approximately 18–25% of total maintenance effort.*

---

**3. Perfective Maintenance**

Perfective maintenance **enhances or improves** the software to add new features or improve existing functionality based on user requests or market demands.

- **Purpose:** Improve functionality, performance, maintainability, or usability.
- **Trigger:** User requests for new features or performance improvements.
- **Example:**
  - Adding a "dark mode" feature to an application.
  - Optimizing database queries to improve response time.
  - Restructuring code to improve maintainability (refactoring).
  - Adding a new report format requested by users.

*Perfective maintenance is the largest category, accounting for approximately 50–60% of total maintenance effort.*

---

**4. Preventive Maintenance**

Preventive maintenance modifies the software to **prevent future problems** — improving maintainability, reliability, and quality before defects actually occur.

- **Purpose:** Proactively improve software to prevent future failures.
- **Activities:** Code refactoring, updating documentation, restructuring database schemas, adding logging and monitoring.
- **Example:**
  - Refactoring a complex, spaghetti-code module into clean, modular code.
  - Adding error handling to code that currently has none.
  - Updating documentation that is outdated.

*Preventive maintenance accounts for approximately 4–9% of total maintenance effort.*

---

### Distribution of Maintenance Effort:

| Category | Purpose | Trigger | Approximate % |
|---|---|---|---|
| Corrective | Fix bugs | Failure reports | 17–21% |
| Adaptive | Adapt to new environment | Environmental change | 18–25% |
| Perfective | Add features, improve | User requests | 50–60% |
| Preventive | Prevent future problems | Proactive decision | 4–9% |

---

### Cost of Maintenance

Software maintenance typically accounts for **60–80% of the total software lifecycle cost**. Factors contributing to high maintenance costs:
- Poor initial design and documentation
- High staff turnover (loss of system knowledge)
- Accumulated technical debt
- Complexity of legacy code
- Inadequate testing during development

---

## Q7(b) Discuss the COCOMO Model in detail. Also explain the term Person Month (PM).

### COCOMO Model

**COCOMO (COnstructive COst MOdel)** was proposed by **Barry Boehm in 1981** in his book *"Software Engineering Economics."* It is one of the most widely used empirical cost estimation models in software engineering.

COCOMO uses **regression formulas** derived from historical data of 63 software projects at TRW Inc. to estimate effort, duration, and cost based on the estimated **size** of the software (in KLOC).

---

### Person Month (PM)

**Person Month (PM)** is the fundamental unit of software effort in COCOMO. It represents the amount of work one person can do in one calendar month.

$$1 \text{ Person Month} = \text{Work done by 1 person working full-time for 1 month}$$

Typically, 1 PM ≈ 19 working days × 8 hours = **152 person-hours**.

*Example:* If a project is estimated at 24 PM, it could be completed by:
- 1 person in 24 months, OR
- 6 people in 4 months, OR
- 24 people in 1 month (though not always practical due to communication overhead)

---

### Three Levels of COCOMO:

**1. Basic COCOMO**

The simplest level. Estimates effort and duration using only the project size (KLOC) and project type.

**Effort Formula:**
$$E = a \times (KLOC)^b \text{ Person Months}$$

**Duration Formula:**
$$D = c \times E^d \text{ Months}$$

**Staff Required:**
$$S = E / D \text{ People}$$

---

**Project Types in Basic COCOMO:**

COCOMO classifies projects into three modes based on their complexity and team experience:

**Organic Mode:**
- Small, relatively simple software projects.
- Small, experienced teams.
- Well-understood application domains.
- *Example:* Simple scientific calculations, small business apps.

| Parameter | a | b | c | d |
|---|---|---|---|---|
| Organic | 2.4 | 1.05 | 2.5 | 0.38 |

**Semi-Detached Mode:**
- Medium complexity projects.
- Mix of experienced and inexperienced team members.
- Some novel aspects.
- *Example:* New operating system, database management system.

| Parameter | a | b | c | d |
|---|---|---|---|---|
| Semi-Detached | 3.0 | 1.12 | 2.5 | 0.35 |

**Embedded Mode:**
- Highly complex systems with stringent requirements.
- Novel hardware, tight constraints, real-time systems.
- *Example:* Avionics systems, nuclear control software, ATM firmware.

| Parameter | a | b | c | d |
|---|---|---|---|---|
| Embedded | 3.6 | 1.20 | 2.5 | 0.32 |

**Example Calculation (Organic Mode, 32 KLOC):**
$$E = 2.4 \times (32)^{1.05} = 2.4 \times 37.5 \approx 91 \text{ PM}$$
$$D = 2.5 \times (91)^{0.38} \approx 2.5 \times 6.2 \approx 14.3 \text{ Months}$$
$$S = 91 / 14.3 \approx 6.4 \approx 7 \text{ People}$$

---

**2. Intermediate COCOMO**

Extends Basic COCOMO by introducing **15 cost drivers (multipliers)** that adjust the nominal effort estimate based on product, hardware, personnel, and project attributes.

**Formula:**
$$E = a \times (KLOC)^b \times EAF$$

Where **EAF (Effort Adjustment Factor)** is the product of all 15 cost driver ratings.

**The 15 Cost Drivers (grouped into 4 categories):**

| Category | Cost Drivers |
|---|---|
| **Product Attributes** | Required software reliability, Database size, Product complexity |
| **Hardware Attributes** | Execution time constraint, Main storage constraint, Virtual machine volatility, Computer turnaround time |
| **Personnel Attributes** | Analyst capability, Application experience, Programmer capability, Virtual machine experience, Programming language experience |
| **Project Attributes** | Use of modern programming practices, Use of software tools, Required development schedule |

Each cost driver is rated on a scale: Very Low, Low, Nominal, High, Very High, Extra High, and assigned a multiplier value.

EAF = Product of all 15 multiplier values.

If all cost drivers are at Nominal, EAF = 1.0 and the result equals Basic COCOMO.

---

**3. Detailed COCOMO**

The most sophisticated level, applying the cost driver adjustments **at each phase** of the development process (requirements, design, coding, unit testing, integration testing) individually, rather than as a single whole-project estimate.

This provides more accurate phase-level planning and resource allocation.

---

### Summary of COCOMO:

| Feature | Basic | Intermediate | Detailed |
|---|---|---|---|
| Input | KLOC | KLOC + 15 cost drivers | KLOC + 15 cost drivers per phase |
| Accuracy | Low | Medium | High |
| Effort | Low | Medium | High |
| When used | Early estimation | Detailed planning | Phase-by-phase planning |

---

### Limitations of COCOMO:
1. KLOC estimation is subjective and imprecise.
2. Based on data from 1970s–1980s projects; may not reflect modern development.
3. Doesn't account for Agile, reuse, or COTS-based development well.
4. The 15 cost drivers involve subjective ratings.
5. Does not account for the effect of team communication overhead (Brooks' Law).

Despite these limitations, COCOMO remains one of the most extensively studied and applied cost estimation models in software engineering, and its successor **COCOMO II (1995)** addresses many of these limitations for modern software development contexts.

---

*End of Answer Sheet*

---

**Total Questions Attempted:**
- Section A: All 10 questions (2 marks each = 20 marks)
- Section B: All 5 questions (d, e answered as short notes) (10 marks each = 50 marks)
- Section C: All 5 question groups (10 marks each = 50 marks)
