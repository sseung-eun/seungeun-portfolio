# 김승은 · IP·웹툰·캐릭터 굿즈 기획 포트폴리오

HTML/CSS/JS만 사용한 정적 사이트입니다(서버·라이브러리 없음, 서체 Pretendard만 CDN 사용).

## 실행
`index.html`을 더블클릭하거나, 폴더에서 `python3 -m http.server`를 실행해 `http://localhost:8000`을 엽니다.

## GitHub Pages 배포
1. GitHub에서 새 저장소를 만들고 이 폴더의 모든 파일을 올립니다(`index.html`이 저장소 루트에 있어야 합니다).
2. Settings → Pages → Source를 `Deploy from a branch`, Branch를 `main` / `(root)`로 저장합니다.
3. 1~2분 뒤 `https://<아이디>.github.io/<저장소명>/`에서 확인합니다.

## 수정 방법 (모두 `data/portfolio.js`)
- 프로필·학력·경력·자격증: `profile`, `tables`. 나이는 생년월일로 자동 계산됩니다.
- 이메일: `config`
- 프로젝트 문구: `projects[]`의 각 항목
- 사진: 아래 파일명으로 저장하거나 `images[].src`/`alt`를 수정. 파일이 없으면 자리표시자가 보입니다.
  - `assets/profile/profile.jpg`
  - `assets/kiddyland/photo-1.png`, `photo-2.png` (타 점포/근무 매장 SNS 업로드)
  - `assets/birthday-cafe/photo-1.jpg`, `photo-2.jpg`
  - `assets/esg-goods/photo-1.png`, `photo-2.png`
  - `assets/webtoon-cafe/photo-1.png`, `photo-2.png`
