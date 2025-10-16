import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GitHub, Play, Database, Cloud, Search } from 'react-feather';

interface ServerCardProps {
  path: string;
  title: string;
  icon: React.ReactElement; // React.ReactElement for JSX elements
}

const servers = [
  {
    path: '/servers/github',
    title: 'GitHub MCP Server',
    icon: <GitHub className="w-8 h-8 text-indigo-500" />
  },
  {
    path: '/servers/playwright',
    title: 'Playwright MCP Server',
    icon: <Play className="w-8 h-8 text-indigo-500" />
  },
  {
    path: '/servers/filesystem',
    title: 'File System MCP Server',
    icon: <Database className="w-8 h-8 text-indigo-500" />
  },
  {
    path: '/servers/cloudflare',
    title: 'Cloudflare MCP Server',
    icon: <Cloud className="w-8 h-8 text-indigo-500" />
  },
  {
    path: '/servers/vectorize',
    title: 'Vectorize MCP Server',
    icon: <Search className="w-8 h-8 text-indigo-500" />
  }
];

const Home = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <div className="text-center pt-20 md:pt-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          <span className="block">가장 유용한 MCP 서버 5가지</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mt-2">
            Model Context Protocol의 필수 도구들
          </span>
        </h1>
        <p className="mt-4 text-sm text-gray-500">(2025년 10월 업데이트)</p>
        <div className="mt-8 max-w-4xl mx-auto text-lg text-left text-gray-700 space-y-4">
            <p>
                Model Context Protocol(MCP)은 Anthropic에서 개발한 오픈 표준으로, AI 어시스턴트(예: Claude)가 외부 데이터 소스, 도구, API와 안전하게 상호작용할 수 있도록 설계되었습니다. 
                MCP 서버는 이러한 연결의 핵심으로, AI 에이전트가 실시간으로 데이터를 처리하고 작업을 자동화할 수 있게 합니다.
            </p>
            <p>
                2025년 10월 현재, MCP 생태계는 OAuth 2.1 인증 강화와 멀티-에이전트 지원으로 빠르게 진화 중이며, GitHub 저장소, 커뮤니티 리스트, 사용 데이터(Smithery.ai 등)를 기반으로 가장 인기 있고 유용한 서버를 재분석했습니다. 
                최근 트렌드는 클라우드 통합(Cloudflare, AWS), 벡터 검색(Vectorize), 데이터베이스 접근(Google Toolbox), 그리고 개발 워크플로 자동화(Flutter, GitHub)로 이동하고 있습니다.
            </p>
            <p>
                아래는 웹 검색과 X(트위터) 포스트 분석을 통해 추출한 가장 유용한 MCP 서버 5가지입니다. 이 서버들은 오픈소스이거나 무료로 시작할 수 있으며, Claude Desktop이나 다른 MCP 클라이언트와 쉽게 통합됩니다.
            </p>
        </div>
      </div>

      {/* Server Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servers.map((server) => (
          <ServerCard key={server.title} {...server} />
        ))}
      </div>
    </div>
  );
};

const ServerCard = ({ path, title, icon }: ServerCardProps) => (
  <Link to={path} className="block group">
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/80 h-full flex flex-col p-8 items-center text-center">
      <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-white mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <div className="mt-6 flex items-center justify-center text-indigo-600 font-medium">
        <span>자세히 보기</span>
        <ArrowRight className="group-hover:translate-x-1 transition-transform ml-2" size={20} />
      </div>
    </div>
  </Link>
);

export default Home;