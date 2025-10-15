---
title: Read&Lead
summary: 2025 Kakao Tourism Data Contest
date: 2025-09-27
draft: false
# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com)'

authors:
  - admin

tags:
  - Contest
  - Web
  - Android
  - IOS
  - Project

content_meta:
  trending: true
---

Read&Lead is an AI-based **literary-themed travel & immersive cultural experience–sharing platform** that connects a city’s **history, culture, and places** through books.

{{< toc mobile_only=true is_open=true >}}

## Overview

1. Background & Need
2. Service Vision
3. Core Value Proposition
4. Key Features
5. Data & APIs Used
6. Target Customers
7. Initial Target Regions
8. Technical Overview
9. Expected Impact
10. Phased Roadmap
11. Success Metrics
12. Operations & Ethics
13. Conclusion



### Background & Need

- Trends like “Text-hip” and the **Seoul International Book Fair** are strengthening the movement to enjoy **books as trendy cultural content**.
- Influenced by works set in **real/historic spaces** (e.g., author Han Kang), demand is growing for organically linking works–spaces–travel.
- However, there is a lack of mechanisms to seamlessly connect the reading experience with the **actual settings of the works**, and non-metropolitan cities need **revitalized tourism content**.
- This project uses **books as the starting point** to integrate travel, experiences, and sharing, thereby supporting **regional cultural branding** and **reframing urban identity**.


### Service Vision

> **“Turn the experience of reading into the experience of walking.”**
> An **experience-expanding travel platform** where readers encounter beloved lines in real spaces and collect/share that emotion as content and badges.


### Core Value Proposition

1. **Literature-centered journey design**: Curate destinations from books to deepen emotional immersion.
2. **Real-time location interaction**: Upon arrival, automatically provide quotes, author notes, and background context.
3. **Collectible map (Gamification)**: Earn **book-cover and literary badges** at each stop → build your own literary map.
4. **Seamless shift to creation/sharing**: “Four-cut” photo templates, photo+quote cards, and auto-scrap turn **personal records into cultural content**.
5. **Expandable content graph**: Extend from literature to **film/drama/musicals/local cuisine** as a multi-domain graph.


### Core Value Proposition

1. **Literature-centered journey design**: Curate destinations from books to deepen emotional immersion.
2. **Real-time location interaction**: Upon arrival, automatically provide quotes, author notes, and background context.
3. **Collectible map (Gamification)**: Earn **book-cover and literary badges** at each stop → build your own literary map.
4. **Seamless shift to creation/sharing**: “Four-cut” photo templates, photo+quote cards, and auto-scrap turn **personal records into cultural content**.
5. **Expandable content graph**: Extend from literature to **film/drama/musicals/local cuisine** as a multi-domain graph.

### Key Features

**1) Book-based AI Travel Curation**

* Represent book metadata (ISBN/author/keywords) and local culture/landmarks with **vector embeddings** and recommend via **similarity matching**.
* Support bidirectional suggestions: “Book → Places/Courses/Exhibitions/Events” or “Destination → Related Books.”

**2) Location-based Literary Experience (Essential)**

* Use GPS/Maps API and geofencing to trigger **arrival events** that push quotes/audio/background explanations.
* Provide immersive on-site experiences like **line narration, scene summaries, and author interviews**.

**3) Book–City Collectible Map (Priority #2)**

* Collect **book covers/author autographs/special badges** upon visits; introduce rarity/seasonal badges.
* Visualize journeys on the **literary map** and compare with friends.

**4) Four-cut Literary Travel Content (Priority #3)**

* Auto-composition template with the **book line on top** and **on-site photo below**. Auto-insert hashtags/location/book metadata.

**5) SNS-linked Scrap (If feasible)**

* Link Instagram/blog to auto-clip photos/quotes/locations → create a **literary travel album**.

**6) Performances/Exhibitions/Recommended Books (Add-on)**

* Recommend **performances/exhibitions/book talks** by schedule/location; suggest themed **books to read together**.

**7) Content Domain Expansion (Add-on)**

* Expand courses to **film/drama locations, musical settings, local cuisine, and historical sites**



### Data & API Used(Examples)

| Area     | API/Data                                                               | Use                                                         |
| -------- | ---------------------------------------------------------------------- | ----------------------------------------------------------- |
| Books    | National Library of Korea Recommendation API, Kakao Book Search        | Book metadata/related books, quote matching                 |
| Tourism  | Tour API (related attractions/audio guides/photos/visitors/big data)   | Curation, on-site audio, badge images, popularity weighting |
| Heritage | Cultural Heritage Administration (location/events/intangible heritage) | Heritage-based badges/on-site explanations                  |
| Culture  | MCST performances/exhibitions/recommended books, KOPIS                 | Recommendations by local schedule/genre                     |
| Maps     | Kakao Maps API                                                         | Geofencing, routing, literary map visualization             |
| SNS      | Instagram API, Daum Search API                                         | Auto-scrap/sharing, related post recommendations            |

> Additionally, expand to region-limited searches (Jeonbuk/Jeonju/festivals/local cuisine, etc.) and audio/history guides for foreign visitors.


### Target Customers

* **Literature lovers & experience-oriented consumers (women in their 20s–40s focus)**: Active in independent bookstores, transcription, and quote sharing.
* **Taste-driven travelers & emotion-led SNS consumers**: Use four-cut photos/curation as **self-branding** tools.


### Initial Target Regions (Pilot)

* **Jeonju**: *Hoonbul*, Choi Myeong-hee Literature Museum, links to traditional cultural assets and film sites.
* **Tongyeong**: Literary city identity with Kim Chun-soo, Yu Chi-hwan, etc.
* **Gwangju**: *Human Acts* and the May 18 historical spaces.
* **Jeju**: *To the Warm Horizon* (alt: *I Do Not Bid Farewell*), linked to the 4·3 Peace Memorial/ museums.


### Technical Overview

* **Recommendation**: SBERT/KoBERT embeddings + FAISS/Elasticsearch similarity search, complemented by collaborative filtering.
* **Geo-services**: Geofencing (radius/dwell/re-entry rules), Haversine distance calculations.
* **Content Engine**: Mapping places → quotes/audio/images; ranking by season/time/preferences.
* **Database**: **Graph/relational hybrid** for book–place–event (Neo4j + PostgreSQL recommended).
* **Backend**: FastAPI/Node, OAuth2 (SNS), cache (Redis), message queue (Celery/RQ).
* **App/Web**: React/React Native, Kakao Map SDK, push (Firebase/OneSignal).


### Expected Impact

* **Regional cultural branding**: Reinterpret urban identity with literature at the core and upgrade tourism content.
* **Increased visits/stay**: Real-time experiences, collectible maps, and performance linkages boost **revisits/time-on-site**.
* **UGC expansion**: Automated four-cut/scrap enables **organic promotion** and virality.
* **Data assetization**: Build a city cultural database via a **book–place–event knowledge graph**.


### Phased Roadmap (6 + 6 months)

**Phase 1 (0–6M)**: Jeonju Pilot

* Core features: (1) Book-based curation (2) On-site experience (3) Collectible map (beta)
* Data: Integrate Jeonju’s key literature/heritage/exhibition APIs; build baseline graph
* Metrics: MAU, arrival notification CTR, badge count, pilot NPS


**Phase 2 (7–12M)**: Expand to Gwangju · Tongyeong · Jeju

* Feature expansion: Four-cut/SNS scrap, performance/exhibition recommendations, multilingual support
* Partners: MOUs with local governments/tourism foundations/regional bookstores/literature museums; launch travel packages
* Metrics: City-wise dwell time, course completion rate, partnership revenue


### Success Metrics (KPI)

* **Recommendation accuracy/satisfaction** (save/completion rate), **on-site notification engagement** (audio/quote open rate)
* **Badge acquisition/map shares**, **UGC volume/SNS reach**
* **Local partner revenue/package sales**, **return visit rate**


### Operations & Ethics

* **Copyright/Quotations**: Partnerships with publishers/rightsholders; manage lawful quotation scope and storage.
* **Personal Data**: Minimize/anonimize location data; consent/opt-out mechanisms.
* **Historical/Memorial Sites**: Adhere to tone/copy guidelines for remembrance spaces.


### One-Page Summary (Executive Summary)

* A platform that **integrates** travel/experience/sharing with books as the starting point.
* Differentiation via **AI curation + location interaction + collectible maps**.
* Jeonju pilot → expansion to Gwangju/Tongyeong/Jeju; partnerships with municipalities/tourism bodies/travel agencies.
* Achieve both regional cultural branding and data assetization.
