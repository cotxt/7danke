# cotxt/7danke → 7danke.com

아래는 실행할 설정이며, 이미 적용됐다는 뜻은 아닙니다. 원본 HTML의 디자인을 보존한 배포본입니다.

## GitHub Pages

GitHub에서 `cotxt/7danke` 저장소를 열고 기존 파일과 Pages 설정을 먼저 확인합니다. 기존 소스를 보호하기 위해 새 배포용 브랜치 `7danke-landing`을 사용하는 방식을 제안합니다. 같은 이름의 브랜치가 있다면 그 내용을 확인하기 전 덮어쓰지 마세요.

배포 브랜치 루트에 `index.html`, `assets/`, `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`을 커밋합니다. ZIP의 상위 폴더를 통째로 중첩해서 올리지 마세요. README와 이 문서는 배포에 필수는 아닙니다.

Settings → Pages에서 다음과 같이 설정합니다.

| 항목 | 값 |
|---|---|
| Source | Deploy from a branch |
| Branch | 실제 파일을 올린 브랜치: 예) 7danke-landing |
| Folder | / (root) |
| Custom domain | 7danke.com |

CNAME 파일만 넣었다고 도메인 연결이 끝나지는 않습니다. 실제 Pages 설정과 DNS가 모두 맞아야 합니다. 기본 브랜치와 다른 기존 소스를 삭제하지 마세요.

## DNS

먼저 GitHub에서 Custom domain을 등록하고, 그다음 도메인을 실제 관리하는 업체에서 DNS를 변경합니다. 아래는 연결에 사용할 값입니다. 현재 레코드를 확인한 결과가 아닙니다.

| 유형 | 이름 | 값 |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | cotxt.github.io |

`@`는 7danke.com 자체를 뜻합니다. `www`의 대상에 `https://`나 `/7danke`를 넣지 않습니다. 기존 웹 연결용 A·AAAA·CNAME 충돌을 확인하되, 이메일용 MX·TXT와 다른 서비스 레코드를 삭제하지 않습니다. 와일드카드 `*`도 추가하지 않습니다.

IPv6를 연결하는 경우 AAAA는 `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`입니다. 다른 서버를 향하는 오래된 AAAA가 남아 있지 않은지 확인합니다.

## HTTPS와 최종 확인

DNS 전파와 인증서 준비 후 Pages에서 Enforce HTTPS를 켭니다. 설정 반영에 시간이 필요할 수 있습니다. `https://7danke.com`이 실제로 열리는지, `https://www.7danke.com`이 의도한 대표 주소로 이동하는지, 맵기 선택과 버튼이 동작하는지 확인해야 배포 완료입니다.

도메인 소유권 검증 TXT를 추가할 때에는 GitHub 계정에 표시된 실제 값을 사용하세요. 비밀번호나 토큰을 대화창에 보내지 마세요.

공식 설정 근거(2026-09-28 확인):
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

폰트 CDN 근거:
https://github.com/orioncactus/pretendard
