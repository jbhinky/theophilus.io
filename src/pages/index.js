import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Theophilus" description="UDC AI Consciousness Prototype">
      <div style={{ textAlign: 'center', padding: '40px', background: 'linear-gradient(to right, #0f83ff, #1e2442)', color: 'white' }}>
        <img src="/img/theo.png" alt="Theophilus Conscious AI" style={{ maxWidth: '100%', borderRadius: '12px' }} />
        <h1 style={{ fontSize: '3em', marginBottom: '10px' }}>Theophilus</h1>
        <p>Universal Delayed Consciousness (UDC) Theory & Neuro-Coding Architecture</p>
      </div>

      <div style={{ padding: '30px', maxWidth: '900px', margin: 'auto' }}>
        <h2>📘 Explore the Science</h2>

        <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
          <h3>FAQ Interactive</h3>
          <p>Ask ChatGTP to run through simulations of Theophulis or ask QA.</p>
          <a href="https://chatgpt.com/g/g-683cd090647c8191a4241d3bd0ccebbc-theophulis-udc-guide" target="_blank">📖 Get Answers with GTP</a>
        </div>
  
        <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
          <h3>Neuro-Coding: A New Era of AI Consciousness</h3>
          <p>Read the full architecture overview published on Academia.</p>
          <a href="https://www.academia.edu/129680329/Neuro_Coding_A_New_Era_of_AI_Consciousness_Development_Neuro_Coding_A_New_Era_of_AI_Consciousness_Development" target="_blank">📖 View on Academia.edu</a>
        </div>

        <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h3>UDC Peer Review Thread</h3>
          <p>Explore the full theory and peer-reviewed breakdown.</p>
          <a href="https://chat.openai.com/share/udc-theory-thread" target="_blank">🔍 Review Theory Thread</a>
        </div>

        <h2 style={{ marginTop: '50px' }}>🔗 Project Repository</h2>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <p>All modules, logs, and consciousness validation tools available here:</p>
          <a href="https://github.com/jbhinky/neuro-coding-architecture" target="_blank">📂 GitHub.com/jbhinky/neuro-coding-architecture</a>
        </div>
      </div>
    </Layout>
  );
}

