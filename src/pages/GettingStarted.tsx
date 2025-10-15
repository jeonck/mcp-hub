
import React from 'react';

const Guide = () => {
  return (
    <div className="prose max-w-none">
      <h1>추가 팁: MCP 서버 활용을 위한 가이드</h1>
      
      <h2>왜 이 5개인가?</h2>
      <p>이 서버들은 사용량, 다재다능성, 커뮤니티 피드백을 기준으로 선정했습니다. GitHub(개발), Playwright(자동화), File System(기반), Cloudflare(클라우드), Vectorize(검색)으로 AI 에이전트의 핵심 영역을 커버하며, 전체 MCP 생태계(예: awesome-mcp-servers GitHub)에서 상위 5%에 해당합니다.</p>

      <h2>보안 고려사항</h2>
      <p>MCP 서버는 AI가 민감 데이터에 접근하므로, OAuth 2.1을 필수로 사용하세요. 로컬 실행 시 방화벽 설정과 Pomerium 같은 Zero Trust 도구로 보호.</p>

      <h2>시작하기</h2>
      <p>Claude Desktop 앱에서 MCP 설정 메뉴를 통해 서버 추가. ComposioHQ나 MCP Marketplace(예: mcpmarket.com)로 no-code 설치. 더 많은 서버는 GitHub의 modelcontextprotocol/servers나 wong2/awesome-mcp-servers를 확인하세요.</p>

      <h2>2025 트렌드</h2>
      <p>OAuth 2.1과 멀티-VM 지원(예: Supra Labs)이 강조되며, 데이터베이스 MCP(Google Toolbox)가 급부상 중입니다.</p>
    </div>
  );
};

export default Guide;
