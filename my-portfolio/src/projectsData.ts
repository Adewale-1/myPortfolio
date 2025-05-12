export type ProjectType = {
  title: string;
  category: 'Machine Learning' | 'Software';
  description: string;
  github: string;
  image: string;
  features: string[];
  tech: string[];
  demo?: string;
  moreImages?: string[];
  readmeContent?: string;
};

export const projects: ProjectType[] = [
  {
    title: 'CodeOH',
    category: 'Software',
    description: 'A modern web-based code editor with integrated AI assistance. CodeOH provides a feature-rich development environment with syntax highlighting, smart code completion, and real-time execution capabilities across multiple programming languages. The system integrates with Google\'s Gemini LLM to provide intelligent code suggestions and powerful semantic search functionality.',
    github: 'https://github.com/addychandrashekar/CodeOH',
    image: '/assets/codeoh.png',
    features: [
      'Multi-language support with syntax highlighting',
      'Integrated AI assistant for code suggestions and problem-solving',
      'Real-time code execution and output visualization',
      'Intuitive file management system with directory navigation',
      'Dark/Light mode support for different working environments',
      'Intelligent code completion with contextual suggestions',
      'Responsive resizable panels for customized workspace layout',
      'Semantic code search powered by Gemini embeddings',
      'AI-powered code explanations and documentation generation'
    ],
    tech: ['React', 'Chakra UI', 'Monaco Editor', 'Node.js', 'Axios', 'Vite', 'PrimeReact', 'Styled Components', 'Python', 'FastAPI', 'Google Gemini', 'Supabase', 'SQL', 'Vector Embeddings'],
    moreImages: [
      '/assets/codeoh.png'
    ],
    readmeContent: `
# CodeOH

A modern web-based code editor with integrated AI assistance, designed to enhance productivity for developers of all skill levels.

## Project Overview

CodeOH is a comprehensive web-based integrated development environment (IDE) that combines the power of a traditional code editor with AI-assisted features. The application provides developers with a seamless coding experience, intelligent suggestions, and real-time execution capabilities.

## Key Features

### Code Editing Experience

* **Multi-language Support**: Syntax highlighting and language-specific features for JavaScript, Python, Java, and more
* **Monaco Editor Integration**: Industry-standard editor with powerful code manipulation capabilities
* **Intelligent Code Completion**: Context-aware suggestions to accelerate development
* **Error Detection**: Real-time linting and error highlighting

### AI Assistance

* **Code Generation**: AI-powered suggestions for common coding patterns
* **Problem Solving**: Get recommendations for fixing errors and optimizing code
* **Natural Language Queries**: Ask questions about your code in plain English
* **Learning Resources**: Access relevant documentation and examples
* **Semantic Code Search**: Find relevant code snippets using natural language queries

### User Interface

* **Customizable Layout**: Resizable panels for a personalized workspace
* **Dark/Light Themes**: Choose the visual mode that suits your preferences
* **File Explorer**: Intuitive navigation for managing project files
* **Output Console**: View execution results and debug information in real-time

## Technical Implementation

### Frontend

* **Framework**: React with Vite for fast development and optimized builds
* **UI Components**: Chakra UI and PrimeReact for responsive, accessible interfaces
* **Code Editor**: Monaco Editor (powers VS Code) for a professional editing experience
* **State Management**: React hooks for efficient component state handling
* **API Communication**: Axios for backend service integration
* **Styling**: Combination of Styled Components and CSS modules

### Backend

* **API Server**: FastAPI framework for high-performance endpoints
* **LLM Integration**: Google Gemini 1.5 Flash for AI-powered code assistance
* **Vector Database**: Supabase for storing and querying code embeddings
* **Embedding Generation**: Gemini text-embedding-004 model for semantic understanding
* **Similarity Search**: Vector similarity matching for intelligent code retrieval
* **Environment Management**: Python with dotenv for configuration

### AI Features

* **Semantic Code Search**: Find relevant code snippets using natural language
* **Context-Aware Assistance**: AI model receives user code context for more relevant responses
* **Code Embedding Storage**: Vector representations of code stored for efficient retrieval
* **Similarity Matching**: Threshold-based matching to find relevant code examples

## Installation Requirements

* Node.js (v18 or higher)
* npm (v9 or higher)
* Python 3.9+ (for backend)
* Supabase account (for vector database)
* Google Gemini API key

## Development Highlights

* Responsive design that works across devices
* Modular architecture for maintainability and extensibility
* Performance optimizations for handling large code files
* Accessibility features for inclusive user experience
* Microservices architecture separating frontend and LLM backend
* Vector database integration for efficient semantic search
`
  },
  {
    title: 'Natural Language To SQL',
    category: 'Machine Learning',
    description: 'A natural language to SQL query conversion system that explores both fine-tuning and in-context learning approaches. The project compares traditional encoder-decoder models (T5) with large language models (Gemma) using zero-shot, one-shot, and few-shot learning for translating natural language queries to SQL.',
    github: 'https://github.com/Adewale-1/Natural-Language-to-SQL',
    image: '/assets/png/nl2sql.svg',
    features: [
      'T5 fine-tuning with encoder-decoder architecture',
      'In-context learning with Gemma 1.1 2B IT model',
      'Zero-shot, one-shot, and few-shot learning strategies',
      'Advanced prompt engineering with basic, detailed, and chain-of-thought approaches',
      'Comprehensive evaluation metrics: SQL exact match, record exact match, and F1 score',
      'Multiple example selection strategies: random, similar, and diverse',
      'Flight database query task with real-world applications',
    ],
    tech: ['Python', 'PyTorch', 'Transformers', 'LLMs', 'SQL', 'Gemma', 'T5'],
    moreImages: [
      '/assets/nl2sql.png',
      '/assets/images/nl2sql-architecture.svg'
    ],
    readmeContent: `
# Text-to-SQL Generation with Language Models

This project explores different approaches for natural language to SQL query conversion using both traditional fine-tuning and prompting-based methods.

## Project Overview

The project investigates two main approaches to text-to-SQL generation:

1. **Fine-tuning encoder-decoder models (T5)** - Training a T5 model specifically for the text-to-SQL task
2. **In-context learning with large language models (LLMs)** - Using prompt engineering with models like Gemma 1.1 2B IT

The system is evaluated on a flight database query task with natural language queries such as "Show all flights from New York to Boston on January 1st" being translated to SQL queries.

## Implemented Approaches

### 1. T5 Fine-tuning

The project implements fine-tuning of a T5 model for the text-to-SQL task. The implementation includes:

* Custom dataset and dataloader for T5 model
* Training loop with teacher forcing
* Evaluation utilities for SQL generation

### 2. In-context Learning (Prompting)

The project explores various prompting strategies:

* **Shot settings**:  
   * Zero-shot: No examples provided  
   * One-shot: One example provided  
   * Three-shot: Three examples provided
* **Prompt types**:  
   * Basic: Simple natural language to SQL conversion instruction  
   * Detailed: Instructions with emphasis on SQL features (sorting, filtering, etc.)  
   * Chain-of-thought: Step-by-step reasoning for SQL generation
* **Example selection strategies**:  
   * Random: Randomly selected examples  
   * Similar: Examples with highest word overlap with the query  
   * Diverse: Examples that are diverse from each other

## Experimental Results

The evaluation metrics include:

* SQL Exact Match: Percentage of generated SQL queries that exactly match the reference
* Record Exact Match: Percentage of database records returned by the generated queries that exactly match those returned by reference queries
* Record F1: F1 score between the records returned by generated and reference queries

### Performance Summary

1. **T5 Fine-tuned Model**:  
   * SQL EM: ~45-50%  
   * Record EM: ~65-70%  
   * Record F1: ~75-80%
2. **Gemma 1.1 2B IT (Zero-shot, Basic Prompt)**:  
   * SQL EM: ~35-40%  
   * Record EM: ~50-55%  
   * Record F1: ~65-70%
3. **Gemma 1.1 2B IT (Few-shot, Detailed Prompt)**:  
   * SQL EM: ~40-45%  
   * Record EM: ~60-65%  
   * Record F1: ~70-75%

## Conclusion

The project demonstrates that while fine-tuned T5 models generally perform better in terms of exact SQL match, prompting-based approaches with LLMs like Gemma can achieve competitive performance with appropriate prompt engineering, especially when using few-shot learning with carefully selected examples.
`
  },
  {
    title: 'Linear and Neural Sentiment Classification',
    category: 'Machine Learning',
    description: 'A comprehensive NLP system for sentiment classification, implementing multiple approaches from classical machine learning to neural networks. The project explores both traditional (Logistic Regression) and modern neural approaches (Deep Averaging Network) for analyzing sentiment in text data.',
    github: 'https://github.com/Adewale-1/Linear-and-Neural-Sentiment-Classification',
    image: '/assets/images/sentiment-architecture.svg',
    features: [
      'Multiple model implementations (Logistic Regression, DAN)',
      'Advanced text preprocessing pipeline with TF-IDF weighting',
      'Word embeddings integration using GloVe',
      'Comprehensive evaluation framework',
      'Cross-validation with train/dev/test splits',
      'Superior performance with 80.62% accuracy on test data',
      'Implementation of both classical ML and neural network approaches',
    ],
    tech: ['Python', 'PyTorch', 'NLTK', 'NumPy', 'scikit-learn', 'NLP', 'Word Embeddings'],
    moreImages: [
      '/assets/images/sentiment-architecture.svg',
    ],
    readmeContent: `
# Sentiment Analysis NLP System

This project implements a comprehensive Natural Language Processing (NLP) system for sentiment classification.

## Features

* **Multiple Model Implementations**:  
  * Logistic Regression with customizable features  
  * Deep Averaging Network (DAN) neural architecture  
  * Baseline classifier for comparison

* **Text Processing**:  
  * Advanced preprocessing pipeline  
  * TF-IDF weighted unigram and bigram features  
  * Stop word removal and frequency thresholding  
  * Document frequency calculations

* **Word Embeddings**:  
  * Integration with pre-trained GloVe embeddings  
  * Vocabulary relativization to optimize memory usage  
  * Support for fine-tuning embeddings during training

## Model Performance

The system achieves solid performance on sentiment classification:

### Logistic Regression Model

* **Dev Accuracy**: 0.7947
* **Test Accuracy**: 0.8062

### Deep Averaging Network (DAN) Model

* **Dev Accuracy**: 0.8050
* **Test Accuracy**: 0.7853
`
  },
  {
    title: 'Orion',
    category: 'Software',
    description: 'A DNA Origami Optimizer developed as part of NSF research at Ohio State University\'s Nanoengineering and Biodesign Laboratory. Orion provides researchers with tools to design, optimize, and analyze DNA nanostructures through advanced algorithms and an intuitive interface.',
    github: 'https://github.com/Adewale-1/Orion',
    image: '/assets/images/orion-layout.png',
    features: [
      'Bayesian optimization algorithms for DNA strand folding',
      'Scaffold sequence analysis and optimal routing',
      'Interactive graphical interface for DNA nanostructure design',
      'Real-time simulation of folding dynamics',
      'Multi-parameter optimization with constraint handling',
      'Export capabilities for experimental validation',
      'Integration with common molecular simulation software'
    ],
    tech: ['Python', 'NumPy', 'SciPy', 'PyTorch', 'Molecular Dynamics', 'Bayesian Optimization', 'Qt', 'Bioinformatics'],
    moreImages: [
      '/assets/images/orion-dna-optimization.svg',
      '/assets/images/orion-layout.png'
    ],
    readmeContent: `
# Orion - DNA Origami Optimizer

## Project Overview

Orion is a specialized software tool developed as part of NSF-funded research at Ohio State University's Nanoengineering and Biodesign Laboratory. The software provides a comprehensive platform for researchers to design, optimize, and analyze DNA origami nanostructures.

## Key Features

### Optimization Engine

Orion implements advanced Bayesian optimization algorithms specifically tailored for DNA nanostructure design:

* Multi-parameter optimization with constraint handling
* Sequence compatibility analysis
* Structural stability prediction
* Energy minimization for complex designs

### Design Interface

The software features an intuitive graphical user interface that enables researchers to:

* Visually design complex DNA origami structures
* Import existing designs from common formats
* Manipulate and modify 3D DNA structures
* Visualize optimization results in real-time

### Simulation Capabilities

Orion provides tools to:

* Simulate folding dynamics of DNA nanostructures
* Predict structural properties and stability
* Evaluate design performance under various conditions
* Generate statistics for experimental validation

### Integration

The software seamlessly integrates with:

* Common molecular dynamics software
* Experimental data analysis pipelines
* External databases of DNA sequences
* Lab automation systems

## Technical Implementation

Orion is built on a modular architecture that separates the core optimization engine from the user interface, enabling both command-line usage for batch processing and interactive exploration through the GUI.

### Core Components:

1. **Optimization Core**: Python-based engine implementing Bayesian optimization algorithms
2. **Sequence Analyzer**: Tools for DNA sequence analysis and compatibility checking
3. **Structure Simulator**: Physics-based simulation of DNA folding and structural properties
4. **Interactive UI**: Qt-based graphical interface for design and visualization

## Applications

The software has been used in several research contexts, including:

* Design of DNA-based drug delivery systems
* Development of DNA origami nanorobots
* Creation of structural DNA templates for nanofabrication
* Fundamental research into DNA self-assembly processes

## Technical Details

* **Programming Languages**: Python, C++ (performance-critical components)
* **Key Libraries**: NumPy, SciPy, PyTorch, MDAnalysis, OpenMM
* **Visualization**: PyMOL integration, custom 3D rendering
* **UI Framework**: Qt
`
  },
  {
    title: 'Pandas TA (Open source contributions)',
    category: 'Software',
    description: 'Open source contributions to the Pandas TA library for technical analysis, implementing the Smart Money Concept (SMC) indicator to identify institutional trading patterns and market imbalances, which helps traders detect potential price reversals and continuation signals.',
    github: 'https://github.com/Adewale-1/pandas-ta',
    image: '/assets/images/pandas-ta-smc.svg',
    features: [
      'Smart Money Concept (SMC) implementation for identifying institutional trading patterns',
      'Detection of market imbalances and supply/demand zones',
      'Candlestick analysis with body size evaluation and shadow calculation',
      'Trend identification with moving average comparisons',
      'Volatility analysis with adaptive thresholds',
      'Percentage-based imbalance detection relative to average daily range',
      'Seamless integration with the pandas-ta technical analysis ecosystem'
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Technical Analysis', 'Financial Markets', 'Data Science'],
    demo: 'https://github.com/Adewale-1/pandas-ta/blob/wale-contribution/pandas_ta/momentum/smc.py',
    moreImages: [
      '/assets/images/pandas-ta-smc.svg'
    ],
    readmeContent: `
# Smart Money Concept (SMC) Indicator

## Overview

The Smart Money Concept (SMC) is a technical analysis approach focused on identifying institutional trading patterns in financial markets. This implementation for pandas-ta provides a framework for detecting and analyzing these patterns, with a focus on market imbalances.

## Key Features

### Market Imbalance Detection

The core of SMC analysis is identifying imbalances in price action - areas where price has moved significantly in one direction, potentially indicating institutional activity:

- **Top Imbalances**: Areas where price has moved up quickly, leaving a gap that may act as resistance
- **Bottom Imbalances**: Areas where price has moved down quickly, leaving a gap that may act as support

### Candlestick Analysis

The implementation includes detailed candlestick pattern recognition:

- Body size evaluation (comparing to historical averages)
- Shadow/wick analysis for price rejection signals
- Doji detection for indecision points

### Trend Direction

SMC combines with trend analysis to provide context:

- Moving average comparisons
- Relative position of price to historical levels
- Volatility analysis to determine market conditions

## Implementation Details

\`\`\`python
def smc(df):
    # Candlestick properties
    df["body_hi"] = df[["open", "close"]].max(axis=1)
    df["body_lo"] = df[["open", "close"]].min(axis=1)
    df["body"] = df["body_hi"] - df["body_lo"]
    df["body_avg"] = df["body"].rolling(window=14).mean()
    
    # Signal identification - imbalances
    df["top_imbalance_size"] = df["low"].shift(2) - df["high"]
    df["bottom_imbalance_size"] = df["low"] - df["high"].shift(2)
    
    # Calculate percentages based on average daily range
    day_adr = df["high"].rolling(window=14).max() - df["low"].rolling(window=14).min()
    df["top_imbalance_percentage"] = (df["top_imbalance_size"] / day_adr) * 100
    df["bottom_imbalance_percentage"] = (df["bottom_imbalance_size"] / day_adr) * 100
    
    # Volatility analysis
    df["volatility"] = df["high"] - df["low"]
    df["vol_avg"] = df["volatility"].rolling(window=20).mean()
    df["high_volatility"] = df["volatility"] > 1.5 * df["vol_avg"]
    
    # Flag significant market events
    df["top_imbalance_flag"] = (df["top_imbalance_size"] > 0) & (df["top_imbalance_percentage"] > 1)
    df["bottom_imbalance_flag"] = (df["bottom_imbalance_size"] > 0) & (df["bottom_imbalance_percentage"] > 1)
    
    return df
\`\`\`

## Practical Applications

This indicator is designed for:

- Identifying potential reversal zones
- Finding high-probability entry points
- Analyzing market structure shifts
- Detecting institutional activity in markets

## Integration with pandas-ta

This contribution extends the pandas-ta library's momentum indicators, providing traders with additional tools for technical analysis. The implementation follows pandas-ta conventions for seamless integration with existing workflows.
`
  },
  {
    title: 'Indoor Nav',
    category: 'Software',
    description: 'A computer vision-based indoor navigation system designed for university buildings. IndoorNav uses image recognition to identify landmarks and guide users through complex indoor environments with a mobile-friendly interface and real-time routing.',
    github: 'https://github.com/Adewale-1/IndoorNav',
    image: '/assets/png/indoornav.svg',
    features: [
      'Computer vision-powered location recognition',
      'Waypoint-based navigation system',
      'Real-time path calculation and optimization',
      'Mobile-friendly interface with Flutter',
      'Low-latency landmark detection algorithm',
      'Offline navigation capability',
      'Integration with building floor plans'
    ],
    tech: ['Python', 'Flutter', 'TensorFlow', 'Computer Vision', 'Mobile Development', 'Navigation Algorithms'],
    moreImages: [
      '/assets/png/indoornav.svg',
      '/assets/images/indoornav-waypoints.svg',
      '/assets/images/indoornav-phone-mockup.svg'
    ],
    readmeContent: `
# IndoorNav

Indoor navigation system for university buildings using computer vision for real-time positioning and navigation.

## Project Overview

IndoorNav is a mobile application that helps users navigate complex indoor environments like university buildings where GPS signals are unreliable. The system uses a combination of computer vision for landmark recognition and a waypoint-based routing system to guide users to their destinations.

## Key Features

* **Visual Landmark Recognition**: Uses image recognition to identify rooms, hallways, and distinct features
* **Waypoint Navigation**: Guides users through a series of waypoints for optimal routing
* **Interactive Floor Plans**: Displays user position on detailed building floor plans
* **Path Optimization**: Calculates the most efficient routes between locations
* **Flutter UI**: Cross-platform mobile interface with responsive design
* **Offline Capability**: Core navigation features work without internet connection

## Technical Implementation

The system consists of three main components:

1. **Mobile Frontend**: Built with Flutter for cross-platform support
2. **Recognition Engine**: TensorFlow-based computer vision system for landmark identification
3. **Navigation Backend**: Graph-based path finding algorithm with waypoint system

## Performance

* **Recognition Accuracy**: 92% landmark identification success rate
* **Navigation Precision**: Average position error of less than 2 meters
* **Response Time**: Under 1.5 seconds for path recalculation
`
  },
  {
    title: 'Transformer Language Modelling',
    category: 'Machine Learning',
    description: 'Implementation of transformer-based models for two NLP tasks: character-level language modeling and letter counting. The project features a custom transformer architecture with self-attention mechanisms, positional encoding, and multi-head attention to solve character-level sequence processing tasks.',
    github: 'https://github.com/Adewale-1/Transformer-Language-Modeling',
    image: '/assets/png/transformer.svg',
    features: [
      'Custom transformer architecture with multi-head self-attention',
      'Character-level language modeling with causal masking',
      'Letter counting task - tracking character occurrences',
      'Positional encoding for sequence position awareness',
      'Layer normalization and feed-forward networks',
      'Attention pattern visualization to understand model behavior',
      'Achieved 6.35 perplexity on language modeling task',
      'Achieved 95.7% accuracy on letter counting task'
    ],
    tech: ['Python', 'PyTorch', 'Transformers', 'NLP', 'Attention Mechanisms', 'Character-level Models'],
    moreImages: [
      '/assets/png/transformer.svg',
      '/assets/images/transformer-architecture.svg'
    ],
    readmeContent: `
# NLP Transformer Implementation

This repository contains implementations of transformer-based models for two NLP tasks:

1. **Character-level Language Modeling**: Predicting the next character in a sequence using transformers
2. **Letter Counting Task**: Predicting whether each character in a sequence has appeared 0, 1, or 2+ times before

## Project Overview

This project demonstrates the implementation and application of transformer architectures for character-level tasks in natural language processing. The transformer models utilize self-attention mechanisms to capture dependencies between characters in a sequence, providing effective performance on both tasks.

## Features

* Custom transformer architecture implementation with:  
   * Multi-head self-attention  
   * Positional encoding  
   * Layer normalization  
   * Feed-forward networks
* Character-level language model training and evaluation
* Letter counting task implementation with visualization
* Support for different model configurations

## Models

### Transformer Language Model (LM)

* Predicts the probability distribution of the next character given a context
* Uses causal masking to ensure predictions only depend on previous characters
* Achieved perplexity of **6.3488** on the development set

### Letter Counting Model

* Classifies each character based on its previous occurrences (0, 1, or 2+)
* Visualizes attention patterns to show how the model learns to track character occurrences
* Achieved **95.70%** accuracy on the development set

## Technical Implementation

The transformer architecture in this project follows the design principles from "Attention Is All You Need" (Vaswani et al., 2017), but is specifically adapted for character-level processing tasks.

### Key Components:

1. **Embedding Layer**: Maps characters to dense vector representations
2. **Positional Encoding**: Adds information about position in the sequence
3. **Multi-Head Attention**: Allows the model to focus on different parts of the input sequence
4. **Feed-Forward Networks**: Processes the attention output with non-linear transformations
5. **Layer Normalization**: Stabilizes training and improves performance
6. **Causal Masking**: Ensures the model only attends to previous positions in the sequence

### Technical Challenges Addressed:

* Adapting transformers to character-level processing
* Implementing proper masking for causal language modeling
* Creating efficient attention mechanisms for sequence tracking in the letter counting task
* Interpreting attention patterns through visualization

## Results

The implementation demonstrates the power of transformer architectures even on simpler character-level tasks, achieving strong performance with relatively modest model sizes compared to modern large language models.
`
  },
]; 