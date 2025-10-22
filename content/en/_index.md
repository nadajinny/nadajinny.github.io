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
      button:
        text: Download CV
        url: /uploads/leejinsun.pdf
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
    id: CurrentStudy
    content:
      title: '📚 My Current Study'
      subtitle: ''
      text: |-
        <div class="text-center">
          Computer Graphics<br>
          Web Service Design<br>
          Introductory Project<br>
          Machine Learning<br>
          Genetic Algorithm<br>
          Software Engineering<br>
          Data Mining<br>
          Big Data Analysis in Modern Society
        </div>


    design:
      columns: '1'

  - block: markdown
    id: career-goal
    content:
      title: "🎯 My Interest & Career Goal"
      subtitle: "Lee Jinsun’s Recent Interests and Future Vision"
      text: |-
        <div class="text-justify">
        I am deeply interested in participating in competitions and bootcamps.  
        In particular, I am passionate about developing projects that go beyond my current technical topics  
        and address real-world needs.  
        Currently, I am taking part in five competitions and one bootcamp pre-course.
        </div>

        <div class="text-justify">
        💡 <b>Interests:</b>  
        YouTube channels such as “Emotional Stability – Kim Hamjji”, gaming, competitions, and bootcamps.
        </div>

        <div class="text-justify">
        🧭 <b>Career Path:</b>  
        I aspire to become a software developer who creates applications that truly meet users’ needs. 
        </div>

        <div class="text-justify">
        🎓 <b>Career Goal:</b>  
        Before graduating, I hope to develop and deploy my own application,  
        gather user feedback, and continuously maintain and improve it.  
        I also want to promote my work personally and study how software products  
        can effectively reach and impact people.
        </div>


  - block: markdown
    id: project-highlights
    content:
      title: "💡 My Project Highlights"
      subtitle: "Explore My Ongoing and Completed Projects"
      text: |-
        {{< cards-grid types="a, b, c" >}}
        <div class="text-justify">
          The cards above provide a brief overview of the main projects I have worked on.  
          For example, they include <b>Chatterpals</b>, a platform for language learning through real-world websites;  
          <b>Medi-Mate</b>, an AI-powered medical voice summary app;  
          and <b>Read&Lead</b>, a project that combines travel and reading experiences.
        </div>

        <div class="text-justify">
          Each project values not only technical excellence but also <b>user-centered design</b>  
          and development aligned with its purpose.
        </div>

        <div class="text-justify">
          I plan to continue exploring and growing as a software developer  
          who strives to balance academic research with practical innovation.
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

  # 템플릿의 버전 문제로 인해 슬라이더가 별도로 사용 불가능하여 html로 구현하였습니다. 
  - block: markdown
    id: interest
    markup: "html"
    content:
      title: "Recent Interest"
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
                <h2 class="text-3xl font-bold mb-2">Algorithm</h2>
                <p class="text-lg"></p>
              </div>
            </div>
            <div class="slide">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1740&q=80" />
              <div class="slide-overlay">
                <h2 class="text-3xl font-bold mb-2">Contest</h2>
              </div>
            </div>
            <div class="slide">
              <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1740&q=80" />
              <div class="slide-overlay">
                <h2 class="text-3xl font-bold mb-2">Employment</h2>
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
      title: "Club"
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
              <h4>Musical Club</h4>
              <p>Musical Play</p>
            </div>
            <div class="club-card">
              <img src="https://images.unsplash.com/photo-1614247912229-26a7e2114c0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370" alt="밴드 동아리">
              <h4>Band Club</h4>
              <p>Head Over Heels</p>
            </div>
            <div class="club-card">
              <img src="https://images.unsplash.com/photo-1642952469120-eed4b65104be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740" alt="알고리즘 동아리">
              <h4>Algorithm Club</h4>
              <p>Alps</p>
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
