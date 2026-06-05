import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, ShieldCheck, Database, Cpu, GitPullRequest, AlertTriangle, Layers, BookOpen, Check } from 'lucide-react';

const PayFlowBlog = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="blog-wrapper" style={{ background: 'var(--ds-white)', minHeight: '100vh', padding: '6rem 0 6rem 0' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        
        {/* Back Button */}
        <button 
          onClick={onBack} 
          className="blog-back-btn"
          style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: 'none',
            color: 'var(--ds-muted)',
            fontFamily: 'Outfit, sans-serif',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer',
            padding: '0.5rem 0',
            marginBottom: '2rem',
            transition: 'color 0.2s ease'
          }}
        >
          <ArrowLeft size={16} /> Back to projects
        </button>

        {/* Article Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem', color: 'var(--ds-muted)', fontSize: '0.85rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Calendar size={14} /> June 2026
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Clock size={14} /> 12 min read
          </span>
          <span className="badge badge-featured" style={{ fontSize: '0.7rem' }}>System Design Deep Dive</span>
        </div>

        {/* Title */}
        <h1 className="t-display" style={{ 
          fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', 
          lineHeight: '1.15', 
          color: 'var(--ds-ink)', 
          marginBottom: '1.5rem',
          fontWeight: '700'
        }}>
          Architecting a Distributed, Idempotent Payment System in Go
        </h1>
        <p className="t-body" style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.7', 
          color: 'var(--ds-muted)', 
          marginBottom: '3rem',
          fontFamily: 'Inter, sans-serif'
        }}>
          How to handle money safely over unreliable networks: a staff-level engineering exploration of double-entry ledger databases, row-level concurrency control, idempotency state machines, and eventual consistency.
        </p>

        {/* Main Content Body */}
        <div className="blog-content" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', fontFamily: 'Inter, sans-serif' }}>
          
          {/* Section: Introduction */}
          <section>
            <p className="blog-p">
              In distributed systems, handling financial transactions is the ultimate trial of endurance. Every network boundary introduces the threat of partial failure. A client request times out, leaving the client in the dark: <em>Did the payment charge go through or did it drop?</em> A network retry occurs: <em>How do we prevent double-charging?</em> A concurrent transfer initiates: <em>How do we protect account balances from race conditions?</em>
            </p>
            <p className="blog-p">
              <strong>PayFlow</strong> was built to explore these exact challenges. It is not a generic mock dashboard but an operational system composed of 6 Go microservices designed to model the backend architecture of production gateways like Stripe or Shopify. This write-up details the trade-offs, locking models, and messaging topologies implemented to ensure data integrity.
            </p>
          </section>

          {/* Section: Architectural Blueprint */}
          <section>
            <h2 className="blog-h2">1. The Topology: microservices & Decoupled Latency</h2>
            <p className="blog-p">
              To guarantee high availability and fault isolation, PayFlow splits its workloads into specialized domains. In-flight payment authorization sits on the hot path and must execute with minimal latency. Conversely, transaction auditing, ledger analytics, and customer receipts are asynchronous events.
            </p>
            
            {/* Diagram */}
            <div style={{ 
              background: 'var(--ds-ink)', 
              color: '#d4d8db', 
              padding: '2rem 1.5rem', 
              borderRadius: 'var(--radius-lg)', 
              marginBottom: '1.5rem', 
              overflowX: 'auto' 
            }}>
              <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', whiteSpace: 'pre', lineHeight: '1.4' }}>
{` [Client API Request] 
         │
         ▼  (HTTPS Router / TLS Termination)
 ┌─────────────────────────────────────────────────────────────┐
 │                        API Gateway                          │
 │  - Throttles via Redis Token Bucket Lua Script              │
 │  - Verifies JWT Signature (Auth Context Propagation)        │
 └──────────────────────────────┬──────────────────────────────┘
                                │ (Reverse Proxy Routing)
         ┌──────────────────────┼──────────────────────┐
         ▼                      ▼                      ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   User Service   │  │  Order Service   │  │ Payment Service  │
│  - Auth & RBAC   │  │  - State Machine │  │  - PostgreSQL DB │
│  - JWT & bcrypt  │  │  - Order Cache   │  │  - Ledger Writes │
└──────────────────┘  └─────────┬────────┘  └──────────┬───────┘
                                │                      │
                                └──────────┬───────────┘
                                           │ (Event Emitting)
                                           ▼
                               ┌──────────────────────┐
                               │     Apache Kafka     │
                               └──────────┬───────────┘
                                          │ (Event Streams)
                               ┌──────────┴──────────┐
                               ▼                     ▼
                     ┌──────────────────┐  ┌──────────────────┐
                     │  Analytics Svc   │  │ Notification Svc │
                     │  - Aggregates    │  │  - Worker Pools  │
                     │  - Metrics       │  │  - Dead-Letter Q │
                     └──────────────────┘  └──────────────────┘`}
              </div>
            </div>

            <p className="blog-p">
              By separating the **Payment Service** from the **Notification Service** via **Apache Kafka**, we ensure that a sudden outage in our email delivery service doesn't drop payments or cause API latency spikes. The payment service records the transaction, commits it to the database, emits a <code>payment.succeeded</code> event to Kafka, and immediately responds <code>200 OK</code> to the caller.
            </p>
          </section>

          {/* Section: Rate Limiter */}
          <section>
            <h2 className="blog-h2">2. Preventing System Exhaustion: Atomic Rate Limiting</h2>
            <p className="blog-p">
              Hot endpoints like <code>/payments/charge</code> are highly attractive targets for fraud campaigns and credential stuffing. Standard rate limiting libraries implemented in-memory fall short when scaling horizontal pods. We require a distributed rate limiter.
            </p>
            <p className="blog-p">
              A naive implementation in Redis does a lookup (<code>GET</code>), checks if the quota is exceeded, and then sets the new value (<code>SET</code>). Under concurrent load, this introduces a classic <strong>check-then-act race condition</strong>, allowing traffic spikes to slip past the limit.
            </p>

            <div className="blog-note-card warning">
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <AlertTriangle size={20} style={{ color: '#d97706', flexShrink: 0 }} />
                <div>
                  <strong>The Concurrency Trap:</strong> Two concurrent requests read Redis at the same millisecond, both seeing a count of 9 (limit is 10). Both proceed to increment the key, resulting in 11 requests being processed. We solve this by executing the token logic atomically using a Redis Lua script.
                </div>
              </div>
            </div>

            <p className="blog-p">
              The API Gateway executes the following Lua script inside Redis' single-threaded event loop, guaranteeing absolute atomicity:
            </p>

            <div className="code-block-header">
              <span>redis_token_bucket.lua</span>
              <span>Lua</span>
            </div>
            <pre className="blog-code-pre">
{`local key = KEYS[1]
local limit = tonumber(ARGV[1])
local current = tonumber(redis.call('get', key) or "0")

if current + 1 > limit then
    return 0 -- Rejected
else
    redis.call("INCRBY", key, 1)
    if current == 0 then
        redis.call("EXPIRE", key, 60) -- Set window duration (1 min)
    end
    return 1 -- Accepted
end`}
            </pre>
          </section>

          {/* Section: Double-Entry Bookkeeping */}
          <section>
            <h2 className="blog-h2">3. Financial Integrity: Double-Entry & Row Locking</h2>
            <p className="blog-p">
              In financial software, balance is not a static column you update. Storing balance as a single value (e.g. <code>UPDATE accounts SET balance = balance - 100</code>) destroys auditability. If a bug or race condition alters the balance, the history of why and when that shift occurred is lost.
            </p>
            <p className="blog-p">
              PayFlow implements a strict <strong>Double-Entry Ledger System</strong>. A user account's current balance is mathematically derived as the sum of all historical credits and debits:
            </p>
            <div style={{ padding: '1.25rem', background: 'var(--ds-surface)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', textAlign: 'center' }}>
              <span className="t-mono" style={{ fontSize: '1rem', background: 'none', color: 'var(--ds-ink)', fontWeight: '600' }}>
                Account Balance = Σ(All Credits) - Σ(All Debits)
              </span>
            </div>
            <p className="blog-p">
              Every charge requires three atomic operations wrapped inside a database transaction:
            </p>
            <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }} className="t-body">
              <li>Acquire a row-level lock on the source account to prevent concurrent modifications (preventing the double-spend scenario).</li>
              <li>Deduct from the source account and credit the destination (merchant) account.</li>
              <li>Insert immutable audit records into the <code>ledger_entries</code> table for both side balances.</li>
            </ol>

            <div className="code-block-header">
              <span>payment_repository.go</span>
              <span>Go / pgx</span>
            </div>
            <pre className="blog-code-pre">
{`// 1. Begin Database Transaction
dbTx, err := r.db.Begin(ctx)
if err != nil {
    return err
}
defer dbTx.Rollback(ctx)

// 2. Lock Source Wallet using FOR UPDATE to prevent race conditions
var srcBalance int64
err = dbTx.QueryRow(ctx, 
    "SELECT balance FROM accounts WHERE id = $1 FOR UPDATE", 
    srcAccountID,
).Scan(&srcBalance)

if srcBalance < tx.Amount {
    return errors.New("insufficient funds")
}

// 3. Deduct Source Wallet
_, err = dbTx.Exec(ctx, 
    "UPDATE accounts SET balance = balance - $1, updated_at = NOW() WHERE id = $2", 
    tx.Amount, srcAccountID,
)

// 4. Credit Merchant Wallet
_, err = dbTx.Exec(ctx, 
    "UPDATE accounts SET balance = balance + $1, updated_at = NOW() WHERE id = $2", 
    tx.Amount, destAccountID,
)

// 5. Write Immutable Ledger Audit Trail
_, err = dbTx.Exec(ctx, \`
    INSERT INTO ledger_entries (id, transaction_id, account_id, amount, type, created_at)
    VALUES ($1, $2, $3, $4, 'DEBIT', NOW())\`, 
    uuid.New(), tx.ID, srcAccountID, tx.Amount,
)

// 6. Commit transaction atomically
return dbTx.Commit(ctx)`}
            </pre>

            <p className="blog-p">
              By using the <code>FOR UPDATE</code> locking clause, database engine blocks concurrent transactions matching that specific account ID until the current transaction commits or rolls back. This prevents balance drift and guarantees serializable transaction integrity.
            </p>
          </section>

          {/* Section: Idempotency Engine */}
          <section>
            <h2 className="blog-h2">4. Designing a High-Reliability Idempotency Engine</h2>
            <p className="blog-p">
              In real-world networks, requests fail. When a client sends a <code>/charge</code> request and the connection drops before receiving a response, the client must retry. Without idempotency, this retry would lead to a second debit.
            </p>
            <p className="blog-p">
              PayFlow implements an **Idempotency Engine** at the service boundary. Every mutation requires a client-generated <code>Idempotency-Key</code> header. We process requests through a state machine managed via the transactions table:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', margin: '1.5rem 0' }} className="grid-responsive">
              <div className="card" style={{ padding: '1.25rem', textAlign: 'center', borderTop: '4px solid var(--ds-accent)' }}>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>1. Check Key</strong>
                <span className="t-body" style={{ fontSize: '0.85rem' }}>Look up the key. If absent, insert key and set status to <code>PENDING</code>.</span>
              </div>
              <div className="card" style={{ padding: '1.25rem', textAlign: 'center', borderTop: '4px solid var(--ds-navy)' }}>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>2. Handle In-Flight</strong>
                <span className="t-body" style={{ fontSize: '0.85rem' }}>If status is <code>PENDING</code>, reject concurrent retry attempts with HTTP 409 (Conflict).</span>
              </div>
              <div className="card" style={{ padding: '1.25rem', textAlign: 'center', borderTop: '4px solid #10b981' }}>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>3. Cache Terminal</strong>
                <span className="t-body" style={{ fontSize: '0.85rem' }}>On completion (Success/Failure), cache payload. Future retries yield this cached response.</span>
              </div>
            </div>

            <p className="blog-p">
              This pattern ensures that a client retry never runs duplicate processing logic, protecting merchants and customers alike.
            </p>
          </section>

          {/* Section: Event-Driven Kafka */}
          <section>
            <h2 className="blog-h2">5. Reliable Event Distribution with Apache Kafka</h2>
            <p className="blog-p">
              Once a payment succeeds, the system emits events to trigger downstream operations (like sending receipts or aggregating daily revenue dashboards). Instead of making inline HTTP calls, the Payment Service acts as a Kafka producer.
            </p>
            <p className="blog-p">
              To guarantee that events are not lost, we configure the producer with high delivery guarantees:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }} className="t-body">
              <li><strong>acks=all:</strong> Ensures all in-sync Kafka brokers acknowledge the event write before confirmation.</li>
              <li><strong>Idempotent Producer:</strong> Prevents duplicate events in Kafka if a network hiccup causes the producer to retry publishing.</li>
            </ul>
            <p className="blog-p">
              Downstream, the **Notification Service** consumes these messages. If a transient error occurs (e.g. email provider API rate-limit), the consumer uses an exponential backoff retry system. If retries fail repeatedly, the event is redirected to a **Dead-Letter Queue (DLQ)** topic for manual inspection and replay, preventing queue head-of-line blocking.
            </p>
          </section>

          {/* Section: Performance & Summary */}
          <section>
            <h2 className="blog-h2">6. Concurrency Mechanics in Go</h2>
            <p className="blog-p">
              To maximize horizontal scaling, microservices like the Notification Service utilize custom <strong>Bounded Worker Pools</strong> in Go. This design throttles resource exhaustion by restricting the number of concurrent active outbound HTTP connections:
            </p>
            <div className="code-block-header">
              <span>worker_pool.go</span>
              <span>Go</span>
            </div>
            <pre className="blog-code-pre">
{`type WorkerPool struct {
    maxWorkers int
    jobQueue   chan Job
    wg         sync.WaitGroup
}

func (wp *WorkerPool) Start() {
    for i := 0; i < wp.maxWorkers; i++ {
        wp.wg.Add(1)
        go func() {
            defer wp.wg.Done()
            for job := range wp.jobQueue {
                processJob(job) // Bounded execution
            }
        }()
    }
}

func (wp *WorkerPool) Shutdown() {
    close(wp.jobQueue) // Graceful shutdown signal
    wp.wg.Wait()       // Wait for workers to finish current in-flight jobs
}`}
            </pre>
            <p className="blog-p">
              This pool ensures that we control network and CPU resource allocations under heavy event bursts, maintaining microservice performance profiles.
            </p>
          </section>

          {/* Conclusion */}
          <section style={{ borderTop: '1px solid var(--ds-border)', paddingTop: '2.5rem', marginTop: '1.5rem' }}>
            <h3 className="t-h2" style={{ marginBottom: '1rem' }}>Key Takeaways</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="t-body" style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <Check size={18} className="text-navy" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>Balances should always be calculated projections derived from immutable ledgers.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <Check size={18} className="text-navy" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>Idempotency engines must handle request state tracking at the boundary to eliminate network-induced duplicates.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <Check size={18} className="text-navy" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>Atomic transaction execution using Redis Lua scripting protects shared data without distributed locks.</span>
              </div>
            </div>
          </section>

          {/* Project Q&A Section */}
          <section style={{ borderTop: '1px solid var(--ds-border)', paddingTop: '2.5rem' }}>
            <h2 className="blog-h2">Architectural FAQ & Deep-Dive Summary</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1.5rem' }}>
              <div>
                <h3 className="t-h3" style={{ marginBottom: '0.5rem', color: 'var(--ds-navy)' }}>Who is the main user of the app?</h3>
                <p className="blog-p" style={{ fontSize: '0.95rem', margin: 0 }}>
                  The primary users are backend engineers, systems architects, and technical leaders looking for a fully-implemented reference blueprint of a high-concurrency microservices system. It is designed to act as a runnable laboratory to study reliability primitives, ACID-compliant ledger transactions, and event-driven patterns in Go.
                </p>
              </div>
              <div>
                <h3 className="t-h3" style={{ marginBottom: '0.5rem', color: 'var(--ds-navy)' }}>What problem does the project actually solve?</h3>
                <p className="blog-p" style={{ fontSize: '0.95rem', margin: 0 }}>
                  It addresses the core challenges of reliability and consistency in payment processing: preventing double charges during client retry attempts, eliminating balance drifts or race conditions under concurrent checkouts, protecting servers from malicious burst traffic, and isolating slow outbound integrations (e.g. notifications/email API calls) from the primary checkout transaction flow.
                </p>
              </div>
              <div>
                <h3 className="t-h3" style={{ marginBottom: '0.5rem', color: 'var(--ds-navy)' }}>Are there any similar players in the market and if yes how is our project unique?</h3>
                <p className="blog-p" style={{ fontSize: '0.95rem', margin: 0 }}>
                  Yes, commercial services like Stripe, Adyen, and Shopify's backend orchestrate these flows globally, but their architectures are proprietary. Open-source educational projects are often either oversimplified toy examples or overly complex Kubernetes configurations. PayFlow is unique because it sits in the middle: it uses actual SQL queries with row-level locks (<code>FOR UPDATE</code>), real Redis Lua script locks, and active Kafka producers/consumers, all packaged inside a runnable <code>docker-compose</code> setup.
                </p>
              </div>
              <div>
                <h3 className="t-h3" style={{ marginBottom: '0.5rem', color: 'var(--ds-navy)' }}>How is it useful to anyone?</h3>
                <p className="blog-p" style={{ fontSize: '0.95rem', margin: 0 }}>
                  It provides developers with a production-grade benchmark playground. Instead of read-only learning, developers can spin up the containers, run integration tests, simulate failures (e.g., stopping the email service to watch Kafka buffering), profile database performance under load, and walk into technical interviews with concrete systems design experience.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
};

export default PayFlowBlog;
