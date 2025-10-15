
import React from 'react';

const GitHubServer = () => {
  return (
    <div className="prose max-w-none">
      <h1>GitHub MCP Server</h1>
      <p>GitHub API를 MCP를 통해 노출하는 서버로, AI가 코드 저장소와 직접 상호작용할 수 있게 합니다. 2025년 10월 MCP Market 리더보드에서 Top 1을 유지하며, 개발자 커뮤니티에서 여전히 필수 도구로 꼽힙니다.</p>
      
      <h2>주요 기능:</h2>
      <ul>
        <li>이슈/PR 관리, 코드 검색, 커밋/푸시 자동화.</li>
        <li>OAuth 2.1 기반 인증으로 보안 강화(최근 업데이트).</li>
        <li>브랜치 생성, 코드 리뷰 요약 등.</li>
      </ul>

      <h2>왜 유용한가?</h2>
      <p>소프트웨어 개발 워크플로우를 혁신합니다. AI가 GitHub에서 코드를 분석하고 수정 제안하거나, 자동으로 버그를 고치는 데 사용됩니다. 예: "이 PR을 리뷰해"라고 하면 AI가 코드를 다운로드해 분석. Vercel과 통합 시 대규모 프로젝트에 적합하며, 2025년 기준으로 개발자 생산성을 40% 이상 높인다는 보고가 있습니다. X 포스트에서 "AI 개발의 핵심 파트너"로 언급될 만큼 실전적입니다.</p>

      <h2>설치 및 사용 팁:</h2>
      <p>GitHub Personal Access Token 필요. 명령어: <code>npx -y @modelcontextprotocol/server-github --env GITHUB_TOKEN=your_token</code>. ComposioHQ를 통해 no-code 설정 가능. 보안: 토큰 범위 제한(예: repo 읽기 전용)과 OAuth 2.1 활성화.</p>
    </div>
  );
};

export default GitHubServer;
