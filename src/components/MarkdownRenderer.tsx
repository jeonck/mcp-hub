import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-markup'; // For XML/HTML

// Initialize Prism for syntax highlighting
marked.use({
  highlight: (code: string, lang: string) => {
    const language = Prism.languages[lang] || Prism.languages.javascript;
    return Prism.highlight(code, language, lang);
  },
  langPrefix: 'language-',
});

const MarkdownRenderer = () => {
  const { fileName } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      setLoading(true);
      setError(null);
      try {
        const baseUrl = import.meta.env.BASE_URL || '';
        const response = await fetch(`${baseUrl}markdowns/${fileName}.md`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        setContent(text);
      } catch (err) {
        console.error('Error loading markdown:', err);
        setError(`Failed to load markdown content for ${fileName}.md`);
        setContent(`# File Not Found\n\nThe requested file "${fileName}.md" was not found in the documentation.`);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [fileName]);

  if (loading) {
    return <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div></div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">{error}</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 capitalize">{fileName?.replace(/_/g, ' ')}</h1>
      <div 
        className="prose max-w-none markdown-content"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
    </div>
  );
};

export default MarkdownRenderer;