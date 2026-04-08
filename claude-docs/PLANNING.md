# 9999-hospital.beeen.kr 기획안

> **Base Design Reference**: 0002-designw.kr (Design W Interior Design 웹사이트)
> **목적**: 병원 웹사이트 데모 — 인테리어 디자인 사이트의 디자인 시스템을 병원 도메인에 적용

---

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **프로젝트명** | 9999-hospital.beeen.kr |
| **기술 스택** | Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion |
| **도메인** | hospital.beeen.kr (데모) |
| **배포** | Vercel |
| **목적** | 중소 규모 병원/의원 랜딩 페이지 데모 |

---

## 2. 디자인 시스템 (0002-designw.kr 기반 적용)

### 2.1 컬러 팔레트

0002-designw.kr의 골드 악센트(#C8A97E) 기반 인테리어 팔레트를 **의료/신뢰감** 컨셉의 블루 팔레트로 전환합니다.

| 토큰 | designw.kr | hospital (변경) | 용도 |
|------|-----------|-----------------|------|
| **Primary** | `#1A1A1A` | `#1A2332` | 타이틀, 핵심 UI |
| **Primary-light** | `#333333` | `#2D3A4A` | 본문, 부제 |
| **Secondary** | `#6B6B6B` | `#5A6B7D` | 캡션, 보조 텍스트 |
| **Accent** | `#C8A97E` (골드) | `#2D8CF0` (블루) | CTA, 강조 포인트 |
| **Accent-dark** | `#B08E60` | `#1A6BC4` | 호버 상태 |
| **Accent-light** | — (신규) | `#E8F2FE` | 배지, 하이라이트 배경 |
| **Surface** | `#F7F7F5` | `#F5F7FA` | 섹션 배경 |
| **Surface-dark** | `#EFEFEC` | `#EBEEF2` | 카드 호버 배경 |
| **Border** | `#E0E0E0` | `#DDE3EA` | 구분선 |
| **Dark-BG** | `#111111` | `#0F1923` | 다크 섹션 (CTA) |
| **Success** | — (신규) | `#22C55E` | 예약 완료, 진료 상태 |

### 2.2 타이포그래피

designw.kr과 동일하게 **Pretendard Variable** 단일 폰트 시스템을 유지합니다.

| 용도 | Weight | Mobile | Desktop | Line Height |
|------|--------|--------|---------|-------------|
| Hero 타이틀 | ExtraBold (800) | 28px | 48-56px | 1.3 |
| 섹션 타이틀 | Bold (700) | 24px | 36-40px | 1.3 |
| 서브 타이틀 | SemiBold (600) | 16px | 20-24px | 1.3 |
| 본문 | Regular (400) | 15px | 16-18px | 1.7 |
| 캡션 | Medium (500) | 12px | 13-14px | 1.5 |
| CTA 버튼 | SemiBold (600) | 15px | 16px | — |

CSS 변수 (clamp 반응형):
```css
--text-hero: clamp(1.75rem, 5vw, 3.5rem)
--text-section: clamp(1.5rem, 4vw, 2.5rem)
--text-sub: clamp(1rem, 2vw, 1.5rem)
--text-body: clamp(0.9375rem, 1.2vw, 1.125rem)
--text-caption: clamp(0.75rem, 1vw, 0.875rem)
```

### 2.3 스페이싱 & 그리드

designw.kr과 동일한 4px 기반 스페이싱 시스템 유지:

| 토큰 | 값 | 용도 |
|------|-----|------|
| sp-xs | 4px | 아이콘/텍스트 간격 |
| sp-sm | 8px | 요소 패딩 |
| sp-md | 16px | 컴포넌트 간격 |
| sp-lg | 24px | 카드 패딩 |
| sp-xl | 40px | 섹션 요소 간격 |
| sp-2xl | 64px | 모바일 섹션 마진 |
| sp-3xl | 120px | 데스크톱 섹션 마진 |

**그리드**: Container max-width 1080px (designw.kr 동일)

### 2.4 애니메이션

designw.kr의 Framer Motion 패턴을 동일하게 적용:

| 요소 | 애니메이션 |
|------|-----------|
| 버튼 호버 | `scale(1.02)` + 색상 변경, 0.3s |
| 카드 호버 | `scale(1.05)` on image, 0.4s |
| 스크롤 진입 | `translateY(30px) → 0`, opacity 0→1, 0.6s |
| 카운트업 수치 | 0→target in 1.5s (easeOutQuart) |
| 스크롤 인디케이터 | bounce-down 2s infinite |

**Easing**: `cubic-bezier(0.22, 1, 0.36, 1)`

---

## 3. 페이지 구조

### 3.1 메인 페이지 (/) — 섹션 구성

designw.kr의 섹션 구조를 병원 도메인에 맞게 1:1 매핑합니다:

| # | designw.kr 섹션 | hospital 섹션 | 배경색 |
|---|----------------|--------------|--------|
| 1 | GNB | GNB | white → scroll 시 blur |
| 2 | Hero (비디오) | Hero (이미지/비디오) | 오버레이 |
| 3 | About | About (병원 소개) | white |
| 4 | Service (3 서비스) | Departments (4 진료과목) | surface |
| 5 | Works (포트폴리오) | Doctors (의료진 소개) | white |
| 6 | Numbers (통계) | Numbers (진료 실적) | surface |
| 7 | Process (4단계) | Process (진료 프로세스) | surface |
| 8 | — (신규) | Hours (진료시간) | white |
| 9 | — (신규) | FAQ (자주 묻는 질문) | surface |
| 10 | CTA | CTA (예약 유도) | dark-bg |
| 11 | Footer | Footer | dark-bg |

### 3.2 각 섹션 상세

#### Hero Section
- **배경**: 병원 외관 또는 로비 이미지 (gradient overlay)
- **오버레이**: `linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.55))`
- **콘텐츠**:
  - Label: "TRUSTED MEDICAL CARE" (white/70)
  - Title: "건강한 내일을 함께 만들어갑니다" (ExtraBold, white)
  - Subtitle: "환자 중심의 정확한 진단과 따뜻한 치료로 신뢰받는 의료 서비스를 제공합니다"
  - CTA: "진료 예약하기" (primary) + "전화 상담" (secondary)
- **반응형**: designw.kr Hero와 동일한 600px 높이, 모바일 버튼 스택

#### About Section
- **레이아웃**: 2-column (5:7 비율) — designw.kr 동일
- **이미지**: 병원 내부 사진 (좌측)
- **텍스트**: 병원 철학 및 소개 (우측)
- **카피**: "정확한 진단, 따뜻한 치료 — 환자 한 분 한 분에게 최선의 의료 서비스를 제공하기 위해 노력합니다."

#### Departments Section (← Service Section 대응)
- **배경**: `#F5F7FA`
- **레이아웃**: 4-column 그리드 (모바일: 2x2, 데스크톱: 1x4)
- **카드**: 아이콘 + 번호 배지 + 진료과명 + 설명
- **진료과목**: 내과, 정형외과, 피부과, 가정의학과
- **호버 효과**: 카드 그림자 + 악센트 보더 하이라이트

#### Doctors Section (← Works Section 대응)
- **레이아웃**: 4-column 그리드 (모바일: 2x2)
- **카드**: 의사 프로필 사진 + 이름 + 직함 + 전문 분야 + 약력
- **호버 효과**: 이미지 scale(1.05) + 그림자 강화

#### Numbers Section
- **배경**: `#F5F7FA`
- **그리드**: 4 columns (모바일: 2x2)
- **통계**:
  - 20+ 진료 경력 (년)
  - 50,000+ 연간 진료 환자
  - 99% 환자 만족도
  - 4개 전문 진료과목
- **카운트업 애니메이션**: designw.kr useCountUp 훅 재사용

#### Process Section
- **배경**: `#F5F7FA`
- **레이아웃**: 4단계 (designw.kr 동일 패턴)
- **프로세스**: 온라인 예약 → 접수 & 문진 → 진료 & 검사 → 치료 & 관리
- **스타일**: 번호 배지(accent bg) + 아이콘 + 타이틀 + 설명, 점선 커넥터

#### Hours Section (신규)
- **배경**: white
- **레이아웃**: 좌측 타이틀 + 우측 시간표 카드
- **내용**: 평일/토요일/일요일 진료시간, 점심시간 표시
- **응급실**: 24시간 운영 강조 배지

#### FAQ Section (신규)
- **배경**: `#F5F7FA`
- **레이아웃**: 아코디언 형태
- **내용**: 예약, 주차, 건강검진, 수납 관련 질문 4건
- **인터랙션**: 클릭 시 펼침/접힘 (Framer Motion AnimatePresence)

#### CTA Section
- **배경**: `#0F1923`
- **텍스트**: "지금 바로 진료를 예약하세요"
- **CTA**: "온라인 예약" 버튼 + 전화번호 링크 (02-1234-5678)
- **응급**: "응급 환자는 02-1234-9999로 연락해 주세요" 강조

#### Footer
- designw.kr Footer 패턴 동일
- 로고 + 태그라인 + 소셜 아이콘 (좌측)
- 연락처 + 주소 + 진료시간 요약 (우측)
- 저작권 + beeenLAB 브랜딩

### 3.3 서브 페이지

| 경로 | 페이지 | 비고 |
|------|--------|------|
| `/` | 메인 랜딩 | 모든 섹션 포함 |
| `/reservation` | 예약 페이지 | 날짜/시간/진료과목 선택 폼 |
| `/departments/[id]` | 진료과 상세 | 진료과 설명 + 담당 의료진 |

---

## 4. 컴포넌트 아키텍처

designw.kr의 컴포넌트 구조를 그대로 차용:

```
src/
├── app/
│   ├── globals.css          # 디자인 시스템 변수
│   ├── layout.tsx           # 루트 레이아웃 (Pretendard 폰트)
│   ├── page.tsx             # 메인 페이지
│   ├── reservation/
│   │   └── page.tsx         # 예약 페이지
│   └── departments/
│       └── [id]/
│           └── page.tsx     # 진료과 상세
├── components/
│   ├── ui/
│   │   ├── Button.tsx       # 6 variants (designw.kr 동일)
│   │   ├── Container.tsx    # max-width 1080px wrapper
│   │   └── SectionLabel.tsx # 영문 라벨 컴포넌트
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── DepartmentsSection.tsx
│   │   ├── DoctorsSection.tsx
│   │   ├── NumbersSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── HoursSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── CTASection.tsx
│   └── layout/
│       ├── GNB.tsx          # 스티키 헤더
│       ├── Footer.tsx       # 다크 푸터
│       ├── FloatingCTA.tsx  # 모바일 플로팅 예약 버튼
│       └── ScrollToTop.tsx
├── hooks/
│   ├── useCountUp.ts        # 카운트업 애니메이션
│   ├── useScrollPosition.ts # 스크롤 위치 추적
│   └── useMediaQuery.ts     # 반응형 훅
├── lib/
│   ├── constants.ts         # 네비게이션, 병원 정보
│   ├── data.ts              # 진료과목, 의료진, 통계, FAQ 등
│   └── utils.ts             # 유틸리티 함수
└── types/
    └── index.ts             # TypeScript 타입 정의
```

---

## 5. 주요 디자인 원칙 (0002-designw.kr 계승)

### 5.1 유지되는 원칙
- **Mobile First** 반응형 설계
- **clamp()** 기반 유동 타이포그래피
- **Framer Motion** 스크롤 트리거 애니메이션
- **최소 터치 타깃 44px** (접근성)
- **WCAG AA** 대비율 4.5:1 이상
- **넉넉한 여백** — 프리미엄 느낌
- **라이트/다크 섹션 교차** — 시각적 리듬감
- **이미지 그래디언트 오버레이** — 텍스트 가독성 확보

### 5.2 병원 도메인 특화 변경
- 골드(#C8A97E) → **블루(#2D8CF0)**: 의료 신뢰감 + 청결감
- 포트폴리오 갤러리 → **의료진 프로필 카드**
- 서비스 3개 → **진료과목 4개** (그리드 4열)
- **진료시간 섹션** 추가 (병원 필수 정보)
- **FAQ 아코디언** 추가 (환자 문의 대응)
- **응급 연락처** 강조 (CTA 섹션)
- 플로팅 CTA: 채팅 아이콘 → **예약 아이콘**

---

## 6. SEO & 메타데이터

```typescript
// LocalBusiness Schema
{
  "@type": "MedicalBusiness",
  "name": "Hospital Demo",
  "telephone": "02-1234-5678",
  "address": { ... },
  "openingHoursSpecification": [ ... ],
  "medicalSpecialty": ["InternalMedicine", "Orthopedics", "Dermatology", "FamilyMedicine"]
}
```

- **OG Image**: 1200x630px 병원 브랜딩 이미지
- **Title**: "Hospital Demo | 내과, 정형외과, 피부과, 가정의학과"
- **Viewport**: 반응형 device-width

---

## 7. 구현 우선순위

| 단계 | 작업 | 예상 난이도 |
|------|------|-----------|
| Phase 1 | 디자인 시스템 셋업 (globals.css, 공통 컴포넌트) | ★☆☆ |
| Phase 2 | GNB + Hero + Footer 레이아웃 | ★★☆ |
| Phase 3 | About + Departments + Doctors 섹션 | ★★☆ |
| Phase 4 | Numbers + Process + Hours 섹션 | ★★☆ |
| Phase 5 | FAQ + CTA + FloatingCTA | ★★☆ |
| Phase 6 | 예약 페이지 + 진료과 상세 | ★★★ |
| Phase 7 | SEO + 접근성 + 성능 최적화 | ★★☆ |
