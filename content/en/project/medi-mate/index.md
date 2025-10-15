---
title: Medi-Mate
summary: 2025 SW·AI Competition Silver Award
date: 2025-10-14
draft: false
# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com)'

authors:
  - admin

tags:
  - Contest
  - Project

content_meta:
  trending: true
---


## 🩺 “소통이 어려운 환자를 위한 AI 기반 진료 보조 시스템”



{{< toc mobile_only=true is_open=true >}}

## Overview
1. Project Overview
2. Problem Definition
3. Solution Approach
4. System Architecture
5. Tech Stack
6. AI Post-Processing and Refinement Strategy
7. Social Value and Expected Impact
8. Demonstration Scenario
9. Conclusion

### 1️⃣ Project Overview

In modern healthcare settings, patients who have difficulty communicating verbally (such as those with hearing or speech impairments, the elderly, or foreign patients) face significant challenges in receiving medical care without the help of a guardian.

In particular, elderly patients often struggle to fill out hospital questionnaires or express their symptoms verbally, which can lead to inaccurate symptom descriptions.

Our goal is to “create a medical environment where all patients can receive treatment without communication barriers or guardians.”

To achieve this, we developed a medical assistance system that combines multi-modal communication (voice, text, image) with AI-based summarization technology.

### 2️⃣ Problem Definition


🔈 **Limitations in Communication**	

Patients with hearing impairments, unclear speech, or foreign language barriers often cannot clearly describe their symptoms to doctors.


🩹 **Dependency on Guardians**	

Without a guardian, treatment may not proceed properly, and miscommunication between the patient and doctor may occur.


📋 **Inefficient Questionnaires**

Hospital forms are complex and difficult to understand, leading patients to fill them out superficially.


### 3️⃣ Solution Approach

We combine non-verbal communication methods with AI summarization and speech recognition technologies to solve these problems.


**Visual Interaction–Based Support**

- Patients can express where and how much pain they feel using buttons or pictograms.
- Example: Touching the abdomen on a body diagram → automatically converts to “My stomach hurts.”


**Automatic AI Medical Summarization**
- The AI generates concise summaries for doctors, such as:
“The patient has experienced abdominal pain at level 3 since yesterday afternoon.”
- Doctor’s spoken diagnosis is transcribed and summarized in real time.


**Readable, Patient-Friendly Summaries**
- Converts medical terminology into simple, understandable sentences.
- Example: “This condition is gastritis” → “You have had stomach discomfort for a few days, which can be treated with medication.”


### 4️⃣ System Architecture


**📱 App (for Patients)**


**Step 1: Symtom Expression**

- Touch-based or pictogram input for pain location, intensity, and duration
- Automatically converted into descriptive sentences by AI


**Step 2: Real-Time Subtitle Display During Consultation**

- Speech recognition (Whisper / Wav2Vec 2.0) converts doctor and patient speech into captions
- Automatically translates medical jargon and highlights key symptoms

**Step 3: Post-Consultation Summary Screen**

- Summarization models (KoT5-small / BART-base) automatically summarize consultation content
- Provides results in sections: “Symptom Summary / Prescribed Medication / Doctor’s Instructions / Next Appointment”
- Downloadable and shareable with medical staff

**Step 4: Health Journal Recording**

- Records user health conditions, medication, diet, sleep, and mood
- Can be shared with guardians or doctors


**💻 Web (for Doctors and Guardians)**


**User	Main Functions**

**Doctor** -	Manage patient list, view symptom logs, and review medication history

**Guardian** -	Write and share patient health logs with doctors, view medical records


### 5️⃣ Tech Stack


| Function           | Technology Used                       |
| ------------------ | ------------------------------------- |
| Speech Recognition | Whisper small / Wav2Vec 2.0           |
| Text Summarization | KoT5-small / BART-base                |
| Speech Correction  | Naver Clova CSR + GPT Post-Processing |
| App Frontend       | React Native CLI                      |
| App Backend        | FastAPI + Firebase                    |
| Web Frontend       | React / TypeScript                    |
| Web Backend        | FastAPI + MongoDB                     |


### 6️⃣ AI Post-Processing and Refinement Strategy

1. Using N-best Candidates 
- Collect top N transcription results and select the most natural one based on context.

2. GPT-Based Correction
- Applied prompt: “Convert the doctor’s medical explanation into simple sentences understandable by elderly patients.”
- Corrects unclear speech or dialects and converts to standard language.


### 7️⃣  Social Value and Expected Impact

👵 **Improved Accessibility**: Enables communication for patients with hearing impairments or speech difficulties without guardians.

🏥 **Increased Efficiency for Medical Staff**: Helps doctors quickly and accurately grasp patient conditions.

💬 **Diversified Communication**: Expands from language-based consultations to visual and AI-assisted interactions.

🤝 **Foundation for Digital Healthcare**: Demonstrates practical application of AI in the medical field.


### 8️⃣  Demonstration Scenario (Example for Presentation)

**Patient(Elderly)** : Touches the abdomen on the screen → displays “My stomach hurts.”

**AI**: “The patient has been experiencing abdominal pain since yesterday afternoon.”

**Doctor**: “It seems to be indigestion. If pain persists after taking medication, we’ll run some tests.”

**AI Summary**:
- Diagnosis: Indigestion
- Instruction: Follow-up after 3 days of medication
- Explanation: Caused by stomach irritation, dietary control recommended



### ✨ Conclusion

This project is an AI-assisted medical consultation system designed for individuals excluded from healthcare due to communication barriers.

Our goal is not to create a “technology that speaks for you,” but a “technology that understands for you.”
T
shrough this, we aim to build a medical environment where patients, guardians, and doctors can all communicate seamlessly, without barriers.