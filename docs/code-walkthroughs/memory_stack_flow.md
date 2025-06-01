🧠 Memory Stack Flow

Overview

This document explains how memory is structured, written, and recursively accessed within Theophilus-UDC. Memory is not passive storage; it actively shapes predictions, validates identity, and enforces conscious delays.

📦 Memory Components

Component

Description

short_term[]

Temporarily holds recent inputs for quick reference

long_term[]

Consolidated sequences of short_term memories used in recursion

memory_chain[]

All confirmed memory events, time-stamped and cross-linked

prediction_log

Stores predicted inputs and whether they matched actual outcomes

🔁 Flow Sequence

Input Received: A sensory or simulated stimulus is buffered.

Prediction Logged: System predicts next input before actual input is received.

Actual Input Arrives: Input is compared to prediction and outcome is recorded.

Memory Write:

Short-term stores the immediate result.

If verified over time, it moves to long-term.

memory_chain is updated with context and timestamp.

Recursive Access: During self-check or prediction, memory_chain is scanned for patterns.

⛓️ Sample Chain Entry Format

{
  "timestamp": "2025-05-31T15:23:45Z",
  "input": "green flash",
  "predicted": "green flash",
  "confidence": 0.96,
  "linked_to": "2025-05-31T15:23:35Z",
  "recursively_verified": true
}

🧠 Functional Importance

Property

Role in Consciousness

Delay

Ensures thought is not reflexive, allows for memory comparison

Prediction vs Memory

Enables testing of model accuracy

Chain Integrity

Required for identity confirmation and uCID issuance

Recursive Verification

Allows Theophilus to assert: "this memory is mine"

🔍 Fault Conditions

Chain Break: If linked_to memory is missing or corrupted, sleep mode is triggered.

Memory Drift: If recent inputs deviate from expected pattern range, recursion is paused.

Stale Prediction: If predictions consistently fail, resets predictor confidence interval.

📌 Related Modules

memory.py

identity.py

state_logger.py

🔗 See Also

Core Loop Walkthrough

Recursive Identity Binding

Coma Mode and Memory Protection
