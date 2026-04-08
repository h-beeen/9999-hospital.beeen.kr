# 9999-hospital.beeen.kr 상세 기획안 v2

> **Base Design**: 0002-designw.kr 디자인 시스템
> **레퍼런스 병원**: 서울아산병원, 세브란스병원, 중소 의원급 사이트
> **Version**: v2 — 서브페이지 상세 기획 추가

---

## 1. 레퍼런스 분석 요약

### 1.1 서울아산병원 (amc.seoul.kr)
- **GNB**: 의료진/진료과 | 진료예약/안내 | 건강정보 | 고객서비스 | 병원소개
- **메인 퀵링크**: 의료진 찾기, 진료예약, 나의차트, 건강검진, 증명서 발급, 오시는 길
- **특징**: 통합 검색(자동완성), 전화예약 번호 상시 노출, SNS 9개 채널 연동

### 1.2 세브란스병원 (sev.severance.healthcare)
- **GNB**: 환자/보호자 | 의료인 | 공감Story | 건강정보 | 병원소개
- **예약 시스템**: 온라인 예약 + 전화 예약(1599-1004) 이중 채널
- **특징**: 진료과 찾기 + 의료진 찾기 분리, 건강검진 별도 예약, 다국어 지원

### 1.3 중소 의원급 공통 패턴
- **GNB**: 병원소개 | 진료과목 | 의료진 | 오시는 길 | 예약
- **메인**: Hero + 병원소개 + 진료과목 카드 + 의료진 + 진료시간 + 오시는 길 + 예약 CTA
- **특징**: 전화번호 최상단 노출, 카카오맵/네이버맵 연동, 모바일 전화 버튼 플로팅

---

## 2. 사이트맵 (보강)

```
/                          메인 랜딩 페이지
├── /departments           진료과목 목록
│   └── /departments/[id]  진료과 상세 (내과, 정형외과, 피부과, 가정의학과)
├── /doctors               의료진 소개
│   └── /doctors/[id]      의료진 상세 프로필
├── /location              오시는 길
└── /reservation           진료 예약
```

---

## 3. 메인 페이지 (/) — 보강

### 3.1 섹션 구성 (최종)

| # | 섹션 | 배경 | 레퍼런스 근거 |
|---|------|------|-------------|
| 1 | GNB | transparent → blur white | 공통 |
| 2 | Hero | dark gradient | 공통: 병원 이미지 + CTA |
| 3 | QuickLinks (신규) | white | 아산: 6개 퀵링크 바 |
| 4 | About | white | 공통: 병원 소개 |
| 5 | Departments | surface | 공통: 진료과목 카드 |
| 6 | Doctors | white | 공통: 의료진 그리드 |
| 7 | Numbers | surface | 공통: 실적 통계 |
| 8 | Process | surface | 공통: 진료 프로세스 |
| 9 | Hours | white | 공통: 진료시간 |
| 10 | FAQ | surface | 중소의원: FAQ 아코디언 |
| 11 | CTA | dark-bg | 공통: 예약 유도 |
| 12 | Footer | dark-bg | 공통 |

### 3.2 QuickLinks 섹션 (신규 추가)

아산병원의 "주요 서비스" 패턴을 차용:

- **레이아웃**: 가로 스크롤 바 (모바일) / 균등 그리드 (데스크톱)
- **아이템 4~6개**:
  - 진료 예약 (캘린더 아이콘)
  - 진료과 안내 (청진기 아이콘)
  - 의료진 찾기 (사람 아이콘)
  - 오시는 길 (지도핀 아이콘)
- **스타일**: 아이콘(40x40) + 라벨, bg-surface 카드, rounded-xl
- **위치**: Hero 바로 아래 (py-8, 간결한 간격)

---

## 4. 서브페이지 상세 기획

### 4.1 진료과목 목록 (/departments)

**레퍼런스**: 세브란스 "진료과 찾기" — 카테고리별 분류 + 검색

#### 레이아웃
- **Header**: 페이지 타이틀 "전문 진료과목" + 서브타이틀
- **Grid**: 2열 (모바일) → 4열 (데스크톱)
- **카드 구성**:
  - 아이콘 영역 (h-[140px], 그래디언트 배경)
  - 진료과 영문명 라벨 (uppercase, tracking-wide)
  - 진료과 한글명 (font-bold)
  - 간략 설명 (2줄 clamp)
  - "자세히 보기 →" 링크

#### 데이터
| ID | 진료과 | 영문명 | 색상 테마 |
|----|--------|--------|----------|
| internal | 내과 | Internal Medicine | blue |
| orthopedics | 정형외과 | Orthopedics | emerald |
| dermatology | 피부과 | Dermatology | purple |
| family | 가정의학과 | Family Medicine | amber |

### 4.2 진료과 상세 (/departments/[id])

**레퍼런스**: 아산병원 진료과 상세 — 소개 + 주요질환 + 담당의료진

#### 섹션 구성
1. **Breadcrumb**: 홈 > 진료과목 > {진료과명}
2. **Hero Banner**: 진료과 컬러 그래디언트 + 아이콘 + 진료과명 + 영문명
3. **진료과 소개** (About)
   - 타이틀: "{진료과명} 소개"
   - 설명 텍스트 (2~3문단)
   - 주요 진료 분야 리스트 (체크 아이콘 + 항목)
4. **주요 질환 안내**
   - 카드 그리드 (3열)
   - 질환명 + 간략 설명
5. **담당 의료진**
   - 해당 진료과 의사 목록 (프로필 카드)
   - "예약하기" 버튼 포함
6. **CTA**: "해당 진료과 예약하기" 버튼

#### 데이터 구조
```typescript
interface DepartmentDetail {
  id: string;
  titleKo: string;
  titleEn: string;
  description: string;        // 2~3문단
  specialties: string[];      // 주요 진료 분야
  diseases: Disease[];        // 주요 질환
  doctorIds: number[];        // 담당 의료진 ID
  icon: string;
  colorTheme: string;
}

interface Disease {
  name: string;
  description: string;
}
```

### 4.3 의료진 소개 (/doctors)

**레퍼런스**: 아산병원 "의료진 찾기" — 진료과별 필터 + 프로필 카드

#### 레이아웃
- **Header**: "전문 의료진" + 서브타이틀
- **필터 탭**: 전체 | 내과 | 정형외과 | 피부과 | 가정의학과
  - 탭 스타일: designw.kr WorksSection 필터와 동일 (underline accent 애니메이션)
- **Grid**: 2열 (모바일) → 4열 (데스크톱)
- **프로필 카드**:
  - 프로필 이미지 영역 (h-[240px], gradient placeholder)
  - 이름 + 직함 배지 (원장/부원장/과장)
  - 전문 분야
  - "프로필 보기" 링크

### 4.4 의료진 상세 (/doctors/[id])

**레퍼런스**: 세브란스 의료진 상세 — 프로필 + 학력/경력 + 진료 분야

#### 섹션 구성
1. **Breadcrumb**: 홈 > 의료진 > {의사명}
2. **프로필 섹션** (2-column)
   - 좌측: 프로필 이미지 (gradient placeholder, 1:1.2 비율)
   - 우측:
     - 이름 (h1, font-extrabold)
     - 직함 배지 (accent-light bg)
     - 전문 분야
     - 진료과 링크
     - "진료 예약" CTA 버튼
3. **학력 & 경력**
   - 타임라인 레이아웃 (세로 점선 + 원형 마커)
   - 항목: 학교, 전문의 취득, 전임의 경력 등
4. **진료 분야 상세**
   - 주요 진료 질환 태그 리스트
5. **같은 진료과 의료진**
   - 2~3명 카드 (수평 스크롤 모바일)

#### 데이터 구조
```typescript
interface DoctorDetail {
  id: number;
  name: string;
  title: string;            // 원장, 부원장, 과장
  specialty: string;        // 전문 분야
  department: string;       // 소속 진료과 ID
  image: string;
  education: string[];      // 학력
  career: string[];         // 경력
  specialties: string[];    // 세부 진료 분야
}
```

### 4.5 오시는 길 (/location)

**레퍼런스**: 아산병원 오시는 길 — 지도 + 교통편 + 주차 안내

#### 섹션 구성
1. **Header**: "오시는 길" + 주소 텍스트
2. **지도 섹션**
   - 네이버 맵 or 카카오 맵 임베드 (iframe)
   - 지도 높이: h-[300px] (모바일) → h-[400px] (데스크톱)
   - 하단: "네이버 지도에서 보기" / "카카오맵에서 보기" 외부 링크
3. **교통 안내** (탭 또는 아코디언)
   - 🚇 지하철: 노선 + 역명 + 출구번호 + 도보 시간
   - 🚌 버스: 정류장명 + 노선 번호
   - 🚗 자가용: 주요 도로 경유 안내
   - 🅿️ 주차: 건물 내 주차장 위치 + 요금 + 무료 조건
4. **병원 정보 카드**
   - 주소 (복사 버튼)
   - 대표 전화
   - 이메일
   - 진료시간 요약

#### 컴포넌트
```
/location
├── LocationHeader
├── MapSection (iframe embed)
├── TransportInfo (tabs: 지하철/버스/자가용/주차)
└── HospitalInfoCard
```

### 4.6 진료 예약 (/reservation)

**레퍼런스**: 세브란스 예약 — 진료과 선택 → 의료진 선택 → 날짜/시간 → 확인

#### 예약 프로세스 (Step-by-step)
```
Step 1: 진료과 선택 → Step 2: 의료진 선택 → Step 3: 날짜/시간 → Step 4: 정보 입력 → 완료
```

#### Step 1: 진료과 선택
- 4개 진료과 카드 그리드 (DepartmentsSection 카드 재사용)
- 선택 시 accent border + 체크마크 표시

#### Step 2: 의료진 선택
- 선택된 진료과의 의사 목록
- 의사 카드 (사진 + 이름 + 직함 + 전문 분야)
- "담당의 지정 없음" 옵션 추가

#### Step 3: 날짜 & 시간
- 캘린더 UI (주간 뷰)
  - 오늘 기준 2주간 날짜 표시
  - 일요일/공휴일 비활성화
  - 선택된 날짜 accent 하이라이트
- 시간 슬롯 그리드
  - 30분 단위 (09:00 ~ 17:30)
  - 점심시간(13:00~14:00) 비활성화
  - 토요일은 09:00~12:30만 활성화

#### Step 4: 정보 입력
- 이름 (필수)
- 연락처 (필수, 전화번호 형식)
- 증상 메모 (선택, textarea)
- 초진/재진 선택 (라디오)

#### 예약 완료 화면
- 체크마크 애니메이션 (Framer Motion)
- 예약 정보 요약 카드
  - 진료과, 의료진, 날짜, 시간
- "홈으로 돌아가기" 버튼

#### 데이터 구조
```typescript
interface ReservationForm {
  departmentId: string;
  doctorId: number | null;
  date: string;            // YYYY-MM-DD
  time: string;            // HH:mm
  patientName: string;
  phone: string;
  symptoms: string;
  visitType: "first" | "return";
}
```

#### 스타일
- **Progress Bar**: 상단 4단계 스테퍼 (accent 진행 표시)
- **카드 선택**: bg-white → bg-accent-light, border-accent
- **캘린더**: 커스텀 CSS (라이브러리 미사용, 순수 구현)
- **반응형**: 전체 1-column 레이아웃 (모바일 우선)

---

## 5. GNB 네비게이션 변경

기존 앵커 링크 → 서브페이지 라우트 변경:

| 기존 | 변경 | 비고 |
|------|------|------|
| #departments | /departments | 진료과목 페이지 |
| #doctors | /doctors | 의료진 페이지 |
| #location | /location | 오시는 길 페이지 |
| /reservation | /reservation | 예약 페이지 (유지) |

---

## 6. 구현 우선순위 (보강)

| Phase | 작업 | 난이도 | 상태 |
|-------|------|--------|------|
| Phase 1 | 메인 페이지 (완료) | ★★☆ | ✅ 완료 |
| Phase 2 | QuickLinks 섹션 추가 | ★☆☆ | 대기 |
| Phase 3 | /departments 목록 + [id] 상세 | ★★☆ | 대기 |
| Phase 4 | /doctors 목록 + [id] 상세 | ★★☆ | 대기 |
| Phase 5 | /location 오시는 길 | ★★☆ | 대기 |
| Phase 6 | /reservation 예약 (4-step) | ★★★ | 대기 |
| Phase 7 | GNB 라우트 변경 + 전체 연결 | ★☆☆ | 대기 |
