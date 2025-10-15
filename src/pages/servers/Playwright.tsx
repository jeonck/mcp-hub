
import React from 'react';

const PlaywrightServer = () => {
  return (
    <div className="prose max-w-none">
      <h1>Playwright MCP Server</h1>
      <p>Playwright 라이브러리를 기반으로 한 브라우저 자동화 서버. Awesome-mcp-servers와 MCP Market 랭킹(Top 5)에서 높은 순위를 차지하며, 웹 상호작용에 특화되어 2025년에도 강세를 보입니다.</p>
      
      <h2>주요 기능:</h2>
      <ul>
        <li>브라우저 제어(클릭, 스크롤, 폼 입력).</li>
        <li>스크린샷/비디오 캡처, JavaScript 실행.</li>
        <li>크로스 브라우저 지원(Chrome, Firefox 등)과 헤드리스 모드 최적화.</li>
      </ul>

      <h2>왜 유용한가?</h2>
      <p>AI가 웹을 '직접' 탐색하고 작업을 수행합니다. 웹 스크래핑, 테스트 자동화, e-commerce 봇에 필수적입니다. 예: "이 사이트에서 가격 추출해"라고 하면 자동 실행. 최근 멀티-에이전트 지원으로 복잡한 워크플로(예: UI 테스트 + 데이터 검증)에서 안정성이 높아졌으며, Reddit과 X에서 "브라우저 MCP의 표준"으로 평가됩니다.</p>

      <h2>설치 및 사용 팁:</h2>
      <p>Node.js 환경: <code>npx -y playwright-mcp-server</code>. 헤드리스 모드 추천. 보안: 샌드박스 활성화로 악성 스크립트 차단과 OAuth 토큰 검증 추가.</p>
    </div>
  );
};

export default PlaywrightServer;
