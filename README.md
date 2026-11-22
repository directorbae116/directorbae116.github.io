# 배기원 감독 브랜드 허브 — baekiwon.com

GitHub Pages로 서비스되는 배기원 감독(116배감독) 브랜드 허브 사이트입니다.
도메인 `baekiwon.com` 연결 전까지는 <https://directorbae116.github.io/> 로 열립니다.

## 구조

```
index.html              단일 페이지 (HOME · ABOUT · FILMS · AI STUDIO · ARCHIVE · CONTACT)
assets/css/style.css    전체 스타일 (다크 네이비 #0d111a / #161b26 + 골드 #e0b861)
assets/js/main.js       내비게이션·모바일 메뉴·스크롤 등장 효과
assets/img/*.jpg        웹용 이미지 16장
assets/favicon.svg      파비콘
.nojekyll               GitHub Pages에서 Jekyll 처리 생략
```

## 이미지 파일 매핑

원본은 `downloads/imweb-assets/web/` (고해상 원본은 `downloads/imweb-assets/posters/`).

| 사이트 파일 | 원본 파일 | 쓰는 곳 |
|---|---|---|
| `hero-1.jpg` | `hero-1_대전로코-촬영현장.jpg` | 히어로 배경 |
| `hero-2.jpg` | `hero-2_DIAIF-AI영화제-GV.jpg` | AI STUDIO (DIAIF GV) |
| `about-ronda.jpg` | `about_배기원감독_론다.jpg` | ABOUT 인물 사진 |
| `about-marbella.jpg` | `about_배기원감독_마르베야.jpg` | ABOUT 보조 사진 |
| `ai-lecture.jpg` | `ai_강의현장.jpg` | AI STUDIO (강의·워크숍) |
| `ai-india-award.jpg` | `ai_하루-인도-수상.jpg` | ARCHIVE (인도 수상) |
| `festival-la.jpg` | `festival_LA웹페스트-무대.jpg` | AI STUDIO (영화제) |
| `film1.jpg` | `film1_나는원래대전에서로맨틱코미디_still.jpg` | FILMS ① |
| `film2.jpg` | `film2_인터뷰-사죄의날.jpg` | FILMS ② |
| `film3.jpg` | `film3_대전1960.jpg` | FILMS ③ |
| `film4.jpg` | `film4_하루.jpg` | FILMS ④ |
| `film5.jpg` | `film5_삼겹살.jpg` | FILMS ⑤ |
| `film6.jpg` | `film6_무전여행-현장.jpg` | FILMS ⑥ |
| `archive-yaksok.jpg` | `film0_약속-2011.jpg` | ARCHIVE 〈약속〉 |
| `archive-saebyeok.jpg` | `film0_새벽국경에서-2014.jpg` | ARCHIVE 〈새벽, 국경에서〉 |
| `archive-goksan.jpg` | `film_곡산사또정약용.jpg` | ARCHIVE 〈곡산사또 정약용〉 |

## 수정 방법

- 글자·작품 추가: `index.html`에서 해당 섹션을 직접 고친 뒤 커밋·푸시하면 1~2분 내 반영됩니다.
- 이미지 교체: 같은 파일명으로 `assets/img/`에 덮어쓰면 됩니다.
- 도메인 `baekiwon.com` 연결 시: 가비아 DNS에 `A` 레코드 4개
  (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)와
  `www` → `directorbae116.github.io` CNAME을 넣고, 저장소에 `CNAME` 파일(내용: `baekiwon.com`)을 추가한 뒤
  Settings → Pages → Custom domain에서 저장하고 Enforce HTTPS를 켭니다.

## 참고

- 원고 기준: `downloads/imweb-assets/원고_baekiwon_브랜드허브_리뉴얼.md`
- 이 사이트에는 다른 감독 각본 작품은 싣지 않습니다(공개 미합의).
