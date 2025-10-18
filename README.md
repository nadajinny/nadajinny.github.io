# 이진선 포트폴리오 사이트

HugoBlox 기반으로 구축된 이진선의 개인 포트폴리오이자 블로그입니다. 한국어를 기본으로, 영어 콘텐츠까지 제공하며 학업·프로젝트·대회 활동을 한 자리에서 확인할 수 있습니다. 배포 주소는 [https://nadajinny.github.io](https://nadajinny.github.io)입니다.

## 주요 특징
- 한국어·영어 이중 언어 지원 및 각 언어별 메뉴 구성.
- Tailwind CSS v4와 커스텀 SCSS/CSS(`assets/`)를 활용한 디자인 커스터마이징.
- `cards-grid` 숏코드와 커스텀 슬라이더 등 직접 제작한 블록 컴포넌트 사용.
- 프로젝트, 블로그, 경험, 강의 등 섹션을 Hugo 컬렉션으로 관리하여 콘텐츠 확장이 용이.
- GitHub Pages·Netlify 등 정적 호스팅 환경에서 바로 배포 가능.

## 개발 환경 요구 사항
- Hugo Extended `>= 0.124`
- Node.js `>= 18`, [pnpm](https://pnpm.io/) (`packageManager`는 `pnpm@10.14.0`으로 지정)
- Go 모듈 의존성을 위한 Go CLI
- (선택) 이미지 리사이즈를 위한 도구(ex. ImageMagick)

## 빠른 시작
1. Hugo Extended와 pnpm을 설치합니다.
2. JavaScript 의존성 설치:
   ```bash
   pnpm install
   ```
3. 로컬 개발 서버 실행:
   ```bash
   pnpm dev
   ```
   브라우저에서 `http://localhost:1313`으로 접속하고 `?lang=en`을 붙이면 영어 페이지를 미리볼 수 있습니다.
4. 배포용 정적 파일 빌드:
   ```bash
   pnpm build
   ```
   결과물은 `public/` 디렉터리에 생성됩니다.

## 프로젝트 구조와 주요 파일 역할
```text
nadajinny.github.io
├── README.md
├── go.mod
├── package.json              # Tailwind/TW CLI 및 pnpm 설정 (optional)
├── public/                   # Hugo 빌드 결과물 (자동 생성)
├── content
│   ├── ko
│   │   └── _index.md         # 한국어 랜딩 페이지
│   └── en
│       ├── _index.md         # 영어 랜딩 페이지
│       ├── authors
│       │   └── admin
│       │       └── _index.md
│       ├── project/          # 프로젝트 카드 및 상세 페이지
│       └── blog/             # 블로그 글
├── config
│   └── _default
│       ├── params.yaml       # SEO, OG 이미지, 테마 컬러 등
│       ├── hugo.yaml         # 사이트 기본 설정 및 다국어 옵션
│       ├── menus.ko.yaml     # 한국어 네비게이션
│       └── menus.en.yaml     # 영어 네비게이션
├── layouts
│   ├── partials
│   │   ├── header.html       # 헤더 커스터마이징
│   │   ├── lang-switcher.html  # 언어 전환 UI
│   │   └── slider
│   │       └── block.html    # 커스텀 슬라이더 블록
│   ├── _default
│   │   └── _markup
│   │       └── render-block-slider.html  # 슬라이더 렌더러 지정
│   └── shortcodes
│       └── cards-grid.html   # 프로젝트 카드 숏코드
├── assets
│   ├── css
│   │   └── custom.css        # Tailwind 엔트리포인트
│   └── scss
│       └── custom.scss       # 추가 SCSS 스타일
├── static
│   ├── uploads
│   │   ├── icon.png
│   │   ├── social_preview.jpg
│   │   ├── leejinsun.pdf
│   │   └── ndjinny_cv.pdf
│   └── google*.html          # 검색 콘솔 인증 파일
├── netlify.toml              # Netlify 배포 설정 (optional)
└── 기타 스크립트/설정 파일
```

- `content/ko/_index.md`, `content/en/_index.md`: 각 언어 랜딩 페이지 섹션과 문구를 관리합니다.
- `content/en/project/`, `content/en/blog/`: 프로젝트와 블로그 글을 Markdown으로 관리합니다.
- `content/en/authors/admin/_index.md`: 프로필 이미지, 연락처, SNS 등 작성자 정보를 정의합니다.
- `config/_default/hugo.yaml`: 사이트 타이틀, 기본 언어, 빌드 옵션 등 전역 설정을 담습니다.
- `config/_default/menus.{ko,en}.yaml`: 언어별 네비게이션 메뉴 구조를 설정합니다.
- `layouts/shortcodes/cards-grid.html`: 메인 페이지 프로젝트 카드용 커스텀 숏코드입니다.
- `layouts/partials/slider/block.html` 및 `layouts/_default/_markup/render-block-slider.html`: 슬라이더 블록의 구조와 렌더링을 제어합니다.
- `assets/css/custom.css`, `assets/scss/custom.scss`: Tailwind 기반 스타일과 추가 커스텀 스타일을 정의합니다.
- `static/uploads/*.pdf`, `static/uploads/icon.png`: 이력서와 아이콘 등 정적 파일이 위치합니다.
- `public/`: `pnpm build` 실행 시 생성되는 최종 정적 사이트 출력물이 저장됩니다.

## 콘텐츠 편집 가이드
- 홈 섹션 순서, 소개 문구 등은 `content/<lang>/_index.md`에서 수정합니다.
- 프로젝트·블로그·강의 등은 각 폴더에 Markdown 파일을 추가하거나 수정하여 업데이트합니다.
- 업로드된 CV는 `static/uploads/` 경로의 PDF를 교체하면 링크가 자동 반영됩니다.
- 메뉴 이름과 순서는 `config/_default/menus.<lang>.yaml`에서 조정합니다.
- 다국어 추가 시 `config/_default/languages.yaml`에 언어 코드를 등록하고, 해당 언어 폴더를 `content/` 아래에 생성합니다.

## 스타일 & 컴포넌트 작업
- Tailwind 유틸리티는 `assets/css/custom.css`에서, 세밀한 커스텀 스타일은 `assets/scss/custom.scss`에서 관리합니다. `pnpm dev`를 실행한 상태에서 수정하면 즉시 반영됩니다.
- 최근 관심사 슬라이더는 `content/<lang>/_index.md`에 HTML 블록으로 직접 구현되어 있습니다. 재사용이 필요하다면 별도의 partial로 추출하는 것을 권장합니다.
- 사이트 전반의 컬러 팔레트와 SEO 메타 정보는 `config/_default/params.yaml`에서 중앙 관리합니다.
- 레이아웃을 확장하려면 `layouts/partials/`에 새로운 템플릿을 추가하거나 HugoBlox 블록을 오버라이드합니다.

## 배포
- **GitHub Pages**: `pnpm build` 후 `public/` 디렉터리를 `gh-pages` 브랜치에 푸시하거나, GitHub Actions로 빌드 파이프라인을 구성합니다.
- **Netlify**: 저장소를 연결한 뒤 Build Command를 `pnpm build`, Publish Directory를 `public/`로 설정하면 `netlify.toml` 기본 설정을 그대로 활용할 수 있습니다.
- 도메인 변경 시 `config/_default/hugo.yaml`의 `baseURL` 값을 반드시 최신 배포 주소로 맞춰주세요.

## 참고 문서
- HugoBlox 문서: https://docs.hugoblox.com/
- Tailwind CSS v4: https://tailwindcss.com/docs
- Hugo 다국어 가이드: https://gohugo.io/content-management/multilingual/
