---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    id: contact
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      # Show a call-to-action button under your biography? (optional)
      # button:
      #   text: Download CV
      #   url: uploads/resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      # Apply a gradient background
      css_class: hbx-bg-gradient
      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  
  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        <div class="text-justify">
        Use this area to speak to your mission. I'm a research scientist in the Moonshot team at DeepMind. I blog about machine learning, deep learning, and moonshots.

        I apply a range of qualitative and quantitative methods to comprehensively investigate the role of science and technology in the economy.

        Please reach out to collaborate 😃
        </div>
    design:
      columns: '1'

  - block: markdown
    content:
      title: "🎯 My Interest & Career Goal"
      subtitle: "나다 이의 연구 관심사와 앞으로의 비전"
      text: |-
        <div class="text-justify">
        저는 **인공지능(AI)**과 **의료 데이터 분석**, **휴먼-컴퓨터 인터랙션(HCI)**에 깊은 관심을 가지고 있습니다.  
        특히 의료 영상 및 생체 신호를 활용하여 사람의 건강 상태를 더 정확하게 진단하고,  
        의료 현장에서 실제로 도움을 줄 수 있는 **AI 기반 진료 보조 시스템**을 연구하고 있습니다.
        </div>

        <div class="text-justify">
        💡 **관심사(Interest):**  
        의료 인공지능, 멀티모달 데이터 분석, 딥러닝 모델 해석 가능성, 인간 중심 AI, 실시간 데이터 기반 예측 모델링
        </div>

        <div class="text-justify">
        🧭 **진로:**  
        임상 데이터 기반 AI 모델 개발 및 의료 현장에 실제로 적용되는 알고리즘 설계.  
        나아가 의료 기술의 신뢰성과 윤리성을 모두 고려하는 연구자로 성장하는 것이 목표입니다.
        </div>

        <div class="text-justify">
        🎓 ** 목표(Career Goal):**  
        의료 영상과 음성 데이터를 결합한 멀티모달 진단 AI 연구를 수행 중이며,  
        연구 효율화를 위해 React Native 기반 의료 기록 앱(Medi-Mate)을 직접 개발하여 실제 사용자 데이터를 수집·분석하고 있습니다.
        </div>

  - block: markdown
    content:
      title: "💡 My Research Highlights"
      subtitle: "제가 진행 중이거나 참여한 프로젝트 카드 보기"
      text: |-
        {{< cards-grid type="a" count="6" >}}

        <div class="text-justify">
        위 카드들은 제가 진행했던 주요 프로젝트를 간략히 보여줍니다.  
        예를 들어, 의료 데이터 분석을 위한 딥러닝 모델 개발,  
        AI 음성 요약 기반 진료 기록 앱 **Medi-Mate**,  
        그리고 실시간 건강 모니터링 시스템 등이 포함되어 있습니다.
        </div>

        <div class="text-justify">
        각 프로젝트는 기술적인 완성도뿐만 아니라 **사용자 중심 설계(User-centered Design)**와  
        **윤리적 AI 구현(Ethical AI Implementation)**을 중요한 가치로 삼고 있습니다.
        </div>

        <div class="text-justify">
        앞으로도 학문적 연구와 실용적 기술이 균형을 이루는  
        **의료 AI 연구자**로 성장하기 위해 꾸준히 탐구를 이어갈 예정입니다.
        </div>


  - block: collection
    id: project
    content:
      title: "Projects"
      filters:
        folders:
          - project
      sort_by: "date"
      view: masonry
    design:
      columns: '3'
  - block: collection
    id: blog
    content:
      title: "Blog"
      filters:
        folders:
          - blog
      sort_by: "date"
      view: compact
    design:
      columns: '3'

  
  - block: markdown
    markup: "html"
    content:
      title: "최근 관심사"
      text: |-
        <style>
          .slider-container {
            position: relative;
            width: 100%;
            max-height: 600px;
            overflow: hidden;
          }
          .slider-track {
            display: flex;
            transition: transform 0.7s ease-in-out;
          }
          .slide {
            min-width: 100%;
            position: relative;
          }
          .slide img {
            width: 100%;
            height: 500px;
            object-fit: cover;
          }
          .slide-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.4);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 20px;
          }
          .slider-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.4);
            border: none;
            color: white;
            font-size: 2rem;
            padding: 10px 18px;
            cursor: pointer;
            border-radius: 50%;
            transition: background 0.3s;
            z-index: 10;
          }
          .slider-btn:hover {
            background: rgba(0, 0, 0, 0.6);
          }
          .prev-btn { left: 20px; }
          .next-btn { right: 20px; }
          .slider-dots {
            position: absolute;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px;
          }
          .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: background 0.3s;
          }
          .dot.active {
            background: white;
          }
          .slide-overlay h2,
          .slide-overlay p {
            color: white !important;
          }

        </style>

        <div class="slider-container">
          <div class="slider-track">
            <div class="slide">
              <img src="https://images.unsplash.com/photo-1642952469120-eed4b65104be?auto=format&fit=crop&w=1740&q=80" />
              <div class="slide-overlay">
                <h2 class="text-3xl font-bold mb-2">알고리즘</h2>
                <p class="text-lg"></p>
              </div>
            </div>
            <div class="slide">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1740&q=80" />
              <div class="slide-overlay">
                <h2 class="text-3xl font-bold mb-2">공모전</h2>
              </div>
            </div>
            <div class="slide">
              <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1740&q=80" />
              <div class="slide-overlay">
                <h2 class="text-3xl font-bold mb-2">취업</h2>
              </div>
            </div>
          </div>

          <button class="slider-btn prev-btn">‹</button>
          <button class="slider-btn next-btn">›</button>

          <div class="slider-dots"></div>
        </div>

        <script>
          const track = document.querySelector('.slider-track');
          const slides = document.querySelectorAll('.slide');
          const prevBtn = document.querySelector('.prev-btn');
          const nextBtn = document.querySelector('.next-btn');
          const dotsContainer = document.querySelector('.slider-dots');
          let index = 0;
          let interval;

          // Dot 생성
          slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => moveToSlide(i));
            dotsContainer.appendChild(dot);
          });

          const dots = document.querySelectorAll('.dot');

          const updateSlider = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
          };

          const moveToSlide = (i) => {
            index = i;
            updateSlider();
            resetInterval();
          };

          const nextSlide = () => {
            index = (index + 1) % slides.length;
            updateSlider();
          };

          const prevSlide = () => {
            index = (index - 1 + slides.length) % slides.length;
            updateSlider();
          };

          nextBtn.addEventListener('click', nextSlide);
          prevBtn.addEventListener('click', prevSlide);

          const startAutoSlide = () => interval = setInterval(nextSlide, 5000);
          const resetInterval = () => {
            clearInterval(interval);
            startAutoSlide();
          };

          startAutoSlide();
        </script>


  
  # 8️⃣ Partial Custom Cards (HTML 기반 custom view 2개)
  - block: markdown
    markup: "html"   # ✅ 이 줄을 추가하세요 (가장 중요)
    id: universityclub
    content:
      title: "동아리"
      text: |-
        <style>
        /* 여기서부터는 그대로 두세요 */
        .club-section {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          background: transparent;
          padding: 30px 0;
        }
        .club-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          width: 90%;
          margin: 0 auto;
        }
        .club-card {
          width: 320px;
          background: white;
          border-radius: 14px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          overflow: hidden;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .club-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.2);
        }
        .club-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        </style>

        <div class="club-section">
          <div class="club-container">
            <div class="club-card">
              <img src="https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1742" alt="Concert silhouette">
              <h4>뮤지컬 동아리</h4>
              <p>뮤지컬플레이</p>
            </div>
            <div class="club-card">
              <img src="https://images.unsplash.com/photo-1614247912229-26a7e2114c0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370" alt="밴드 동아리">
              <h4>밴드 동아리</h4>
              <p>견우와 직녀</p>
            </div>
            <div class="club-card">
              <img src="https://images.unsplash.com/photo-1642952469120-eed4b65104be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740" alt="알고리즘 동아리">
              <h4>알고리즘 동아리</h4>
              <p>알프스</p>
            </div>
          </div>
        </div>




  - block: markdown
    content:
      title: ''
      text: |-
        <style>
        .fab {
          border-radius: 50%;
          padding: 22px;
          margin: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }
        .fab:hover {
          transform: scale(1.15);
          box-shadow: 0 6px 14px rgba(0,0,0,0.25);
        }
        .fab svg {
          font-size: 20px;
          color: white;
        }
        </style>

        <div style="position:fixed; bottom:35px; right:35px; z-index:999;">
          <!-- 🏠 홈 -->
          <a href="#top" class="fab" style="background:linear-gradient(135deg,#A7C7E7,#B7C9F2);" title="Home">
            {{< icon name="hero/home" pack="hero" >}}
          </a>

          <!-- Github -->
          <a href="https://github.com/nadajinny" class="fab" style="background:linear-gradient(135deg,#AFCBEB,#C6B8F2);" title="Github">
            {{< icon name="brands/github" pack="fab" >}}
          </a>

          <!-- 📝 블로그 -->
          <a href="#blog" class="fab" style="background:linear-gradient(135deg,#B7C3F2,#CBB8F2);" title="Blog">
            {{< icon name="hero/pencil-square" pack="hero" >}}
          </a>

          <!-- 💡 프로젝트 -->
          <a href="#project" class="fab" style="background:linear-gradient(135deg,#C3B7F2,#D5B8F2);" title="Projects">
            {{< icon name="hero/light-bulb" pack="hero" >}}
          </a>

          <!-- 동아리 -->
          <a href="#universityclub" class="fab" style="background:linear-gradient(135deg,#CFB7F2,#E0B8F2);" title="School">
            {{< icon name="hero/academic-cap" pack="hero" >}}
          </a>

          <!-- 📍 위치 -->
          <a href="#map" class="fab" style="background:linear-gradient(135deg,#DAB7F2,#F2B8E8);" title="Location">
            {{< icon name="hero/map-pin" pack="hero" >}}
          </a>
        </div>


  - block: markdown
    id: map
    content:
      title: "📍 Location"
      text: |-
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.121143956724!2d127.13188281121828!3d35.846032920789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35702330dc920b9d%3A0x1d0d425396006646!2z7KCE67aB64yA7ZWZ6rWQIOqzteqzvOuMgO2VmSA37Zi46rSA!5e0!3m2!1sko!2skr!4v1760321001816!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  - block: cta-card
    demo: true # Only display this section in the Hugo Blox Builder demo site
    content:
      title: 👉 Build your own academic website like this
      text: |-
        This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

        <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

        Easily build anything with blocks - no-code required!

        From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
      button:
        text: Get Started
        url: https://hugoblox.com/templates/
    design:
      card:
        # Card background color (CSS class)
        css_class: 'bg-primary-300'
        css_style: ''
---