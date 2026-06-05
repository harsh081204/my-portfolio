import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Brain, Cpu, Database, Award, GitPullRequest, Code, Check } from 'lucide-react';

const AutoMLBlog = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="blog-wrapper" style={{ background: 'var(--ds-white)', minHeight: '100vh', padding: '0.5rem 0 6rem 0' }}>
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
            <Clock size={14} /> 10 min read
          </span>
          <span className="badge badge-featured" style={{ fontSize: '0.7rem' }}>Machine Learning Engineering</span>
        </div>

        {/* Title */}
        <h1 className="t-display" style={{ 
          fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', 
          lineHeight: '1.15', 
          color: 'var(--ds-ink)', 
          marginBottom: '1.5rem',
          fontWeight: '700'
        }}>
          Building a Modular AutoML Pipeline with Bayesian Optimization
        </h1>
        <p className="t-body" style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.7', 
          color: 'var(--ds-muted)', 
          marginBottom: '3rem',
          fontFamily: 'Inter, sans-serif'
        }}>
          Moving beyond Jupyter Notebooks: engineering an automated ML platform using Optuna, custom preprocessors, out-of-fold stacking ensembles, and clean pipeline serialization.
        </p>

        {/* Main Content Body */}
        <div className="blog-content" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', fontFamily: 'Inter, sans-serif' }}>
          
          {/* Section: Introduction */}
          <section>
            <p className="blog-p">
              In modern machine learning, model design has shifted from a manual art form to an optimization search problem. Writing boilerplate code to handle missing numerical features, encode categorical columns, run cross-validation grid searches, and build ensembled models consumes valuable engineering bandwidth.
            </p>
            <p className="blog-p">
              The <strong>AutoML Pipeline</strong> project was engineered to solve this. Instead of unstructured Jupyter files, it provides a clean, modular Python codebase containing decoupled pipeline blocks for preprocessing, hyperparameter search, ensembling, and validation. The end product is a fully serialized sklearn-style model pipeline ready for production microservice deployment.
            </p>
          </section>

          {/* Section: Pipeline Architecture */}
          <section>
            <h2 className="blog-h2">1. Modular Architecture: Decoupled Components</h2>
            <p className="blog-p">
              To keep the codebase maintainable and extensible, the system divides ML operations into isolated, unit-testable modules. This contrasts with monolithic scripts that mix preprocessing details with model fitting.
            </p>
            
            {/* Topology Diagram */}
            <div style={{ 
              background: 'var(--ds-ink)', 
              color: '#d4d8db', 
              padding: '2rem 1.5rem', 
              borderRadius: 'var(--radius-lg)', 
              marginBottom: '1.5rem', 
              overflowX: 'auto' 
            }}>
              <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', whiteSpace: 'pre', lineHeight: '1.4' }}>
{` [Raw Data CSV] 
        │
        ▼ (Preprocessor Module)
┌─────────────────────────────────────────────────────────────┐
│                   1. Data Preprocessing                     │
│  - Automatic Numerical/Categorical Detection                │
│  - Imputes Nulls (Mean/Mode) & Normalizes Features          │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼ (Tuner Module)
┌─────────────────────────────────────────────────────────────┐
│                  2. Bayesian Optimization                   │
│  - Optuna Trial Search (Tree-structured Parzen Estimator)   │
│  - Dynamically Adjusts Bounds per Algorithm                 │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼ (Ensemble Module)
┌─────────────────────────────────────────────────────────────┐
│                 3. Meta-Model Ensembling                    │
│  - Out-of-Fold (OOF) Prediction Matrix generation           │
│  - Trains Meta-Estimator (Logistic / Linear Regression)     │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼ (Serialization Module)
┌─────────────────────────────────────────────────────────────┐
│                   4. Model Serialization                    │
│  - joblib dumps entire pipeline wrapper as pkl              │
└─────────────────────────────────────────────────────────────┘`}
              </div>
            </div>

            <p className="blog-p">
              Each module implements clean interfaces that interact seamlessly with the parent execution engine in <code>main.py</code>. This modular layout allows us to switch from a Blending Ensemble to a Stacking Ensemble, or adjust preprocessing imputation parameters without altering the model training sequence.
            </p>
          </section>

          {/* Section: Preprocessing */}
          <section>
            <h2 className="blog-h2">2. Automated Feature Engineering & Task Detection</h2>
            <p className="blog-p">
              The preprocessing stage uses automated analysis to classify features. Features are detected as numerical or categorical by evaluating data types and distinct value ratios.
            </p>
            <p className="blog-p">
              Once categorized, raw inputs are run through standard Scikit-Learn transformers:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }} className="t-body">
              <li><strong>Numerical Path:</strong> Missing values are imputed using the column median to prevent outlier disruption, followed by <code>StandardScaler</code> normalization.</li>
              <li><strong>Categorical Path:</strong> Missing values are filled with a default label, followed by <code>OneHotEncoder</code> representing labels as binary vectors.</li>
            </ul>
          </section>

          {/* Section: Bayesian Optimization */}
          <section>
            <h2 className="blog-h2">3. Bayesian Optimization via Optuna</h2>
            <p className="blog-p">
              Grid Search is slow and spends computation checking useless combinations. Random Search is fast but ignores historical trial results. The AutoML Pipeline leverages <strong>Optuna</strong> to perform Bayesian optimization via the Tree-structured Parzen Estimator (TPE) algorithm.
            </p>
            <p className="blog-p">
              The tuner evaluates historical trial scores to guide subsequent parameter adjustments. This focuses searches on high-performance regions. Different parameter search distributions are defined based on the underlying estimator:
            </p>

            <div className="code-block-header">
              <span>automl/tuner.py</span>
              <span>Python</span>
            </div>
            <pre className="blog-code-pre">
{`def param_space(trial):
    model_name = type(model).__name__.lower()
    
    if 'randomforest' in model_name:
        return {
            'n_estimators': trial.suggest_int('n_estimators', 50, 500),
            'max_depth': trial.suggest_int('max_depth', 3, 15),
            'min_samples_split': trial.suggest_int('min_samples_split', 2, 20),
            'min_samples_leaf': trial.suggest_int('min_samples_leaf', 1, 10),
        }
    elif 'xgb' in model_name:
        return {
            'n_estimators': trial.suggest_int('n_estimators', 50, 500),
            'max_depth': trial.suggest_int('max_depth', 3, 15),
            'learning_rate': trial.suggest_float('learning_rate', 0.01, 0.3, log=True),
            'subsample': trial.suggest_float('subsample', 0.6, 1.0),
            'colsample_bytree': trial.suggest_float('colsample_bytree', 0.6, 1.0),
        }
    elif hasattr(model, 'C'): # Logistic Regression
        return {
            'C': trial.suggest_float('C', 0.1, 10.0, log=True),
        }
    return {}`}
            </pre>
          </section>

          {/* Section: Stacking Ensembles */}
          <section>
            <h2 className="blog-h2">4. Out-of-Fold Stacking Ensembles</h2>
            <p className="blog-p">
              Ensemble methods provide better generalization by combining predictions from multiple base models. Simply averaging model predictions (blending) often gives equal weight to poor estimators.
            </p>
            <p className="blog-p">
              AutoML Pipeline implements a robust **Stacking Ensemble**. Stacking uses out-of-fold (OOF) predictions to train a meta-model. This prevents data leakage and overfitting:
            </p>

            <div className="code-block-header">
              <span>automl/ensemble.py</span>
              <span>Python</span>
            </div>
            <pre className="blog-code-pre">
{`class StackingEnsemble:
    def fit(self, X, y):
        meta_features = []
        n_samples = len(X)
        n_folds = min(3, n_samples // 2)
        
        # 1. Generate out-of-fold predictions using cross_val_predict
        for model in self.base_models:
            if self.task == "classification":
                oof_preds = cross_val_predict(
                    model, X, y, cv=n_folds, method="predict_proba"
                )
                meta_features.append(oof_preds[:, 1]) # Probability of class 1
            else:
                oof_preds = cross_val_predict(
                    model, X, y, cv=n_folds, method="predict"
                )
                meta_features.append(oof_preds)
            
            # Fit the base model on complete data
            model.fit(X, y)

        # 2. Transpose predictions to create meta-feature matrix
        self.meta_X = np.array(meta_features).T
        
        # 3. Train meta-estimator on base model predictions
        self.meta_model.fit(self.meta_X, y)`}
            </pre>
          </section>

          {/* Key Takeaways */}
          <section style={{ borderTop: '1px solid var(--ds-border)', paddingTop: '2.5rem', marginTop: '1.5rem' }}>
            <h3 className="t-h2" style={{ marginBottom: '1rem' }}>Key Takeaways</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="t-body" style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <Check size={18} className="text-navy" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>Bayesian Optimization via Optuna converges on optimal hyperparameters significantly faster than Grid Search.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <Check size={18} className="text-navy" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>Out-of-fold stacking prevents data leakage by ensuring the meta-estimator is trained on predictions from unseen data.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <Check size={18} className="text-navy" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>Modular pipelines allow scaling features, swapping algorithms, and adjusting hyperparameters independently.</span>
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
                  The primary users are data scientists, machine learning engineers, and software developers who need a robust, modular, and dependency-light Python engine to rapidly prototype, optimize, and build baseline models for tabular datasets.
                </p>
              </div>
              <div>
                <h3 className="t-h3" style={{ marginBottom: '0.5rem', color: 'var(--ds-navy)' }}>What problem does the project actually solve?</h3>
                <p className="blog-p" style={{ fontSize: '0.95rem', margin: 0 }}>
                  It automates repetitive ML steps: detecting task configurations, clean feature imputation and normalization, executing bayesian parameter sweeps, and setting up stacking ensembles. This reduces the time to establish an optimized baseline model from hours to seconds.
                </p>
              </div>
              <div>
                <h3 className="t-h3" style={{ marginBottom: '0.5rem', color: 'var(--ds-navy)' }}>Are there any similar players in the market and if yes how is our project unique?</h3>
                <p className="blog-p" style={{ fontSize: '0.95rem', margin: 0 }}>
                  Yes, enterprise AutoML tools like Google Cloud Vertex AI, H2O.ai, and Auto-Sklearn perform similar tasks. This project is unique because it is lightweight, modular, and does not require complex cluster deployments. Each pipeline step is exposed as a clean Scikit-Learn transformer, allowing developers to extend components and run optimizations locally without proprietary vendor dependencies.
                </p>
              </div>
              <div>
                <h3 className="t-h3" style={{ marginBottom: '0.5rem', color: 'var(--ds-navy)' }}>How is it useful to anyone?</h3>
                <p className="blog-p" style={{ fontSize: '0.95rem', margin: 0 }}>
                  It provides developers with a structured baseline framework. Instead of manually writing GridSearch loops or hardcoding preprocessing pipelines for new datasets, developers can feed their data to this pipeline and export a serialized, production-ready model pickle ready for integration with microservices.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
};

export default AutoMLBlog;
