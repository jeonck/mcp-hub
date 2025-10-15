
import React from 'react';

const VectorizeServer = () => {
  return (
    <div className="prose max-w-none">
      <h1>Vectorize MCP Server</h1>
      <p>벡터 데이터베이스(Vectorize)를 MCP로 통합하는 서버. 2025년 10월 X 포스트에서 새롭게 출시되어 Substack과 Medium에서 "RAG의 게임 체인저"로 추천되며, Smithery.ai 사용량이 급증 중입니다.</p>
      
      <h2>주요 기능:</h2>
      <ul>
        <li>벡터 검색, 텍스트 추출, 의미론적 쿼리.</li>
        <li>실시간 데이터 인덱싱과 LLM 컨텍스트 제공.</li>
        <li>대규모 데이터 관리와 하이브리드 검색.</li>
      </ul>

      <h2>왜 유용한가?</h2>
      <p>AI의 지식 한계를 넘어 semantic search를 가능하게 합니다. 연구나 콘텐츠 생성에서 정확도를 50% 향상시키며, 예: "이 문서 클러스터에서 유사 항목 찾아" 명령으로 즉시 결과. 2025년 벡터 AI 트렌드(예: DeepSeek R1 통합)에 맞춰 "고급 검색의 표준"으로 부상했습니다.</p>

      <h2>설치 및 사용 팁:</h2>
      <p>Vectorize API 키 설정: <code>npx -y @vectorize/mcp-server --api-key=your_key</code>. Claude나 Cursor와 연동. 보안: JWT 토큰 기반 접근 제어와 API 호출 제한.</p>
    </div>
  );
};

export default VectorizeServer;
