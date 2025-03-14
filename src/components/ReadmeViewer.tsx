import ReactMarkdown from "react-markdown";

interface ReadmeViewerProps {
  content: string;
}

const ReadmeViewer: React.FC<ReadmeViewerProps> = ({ content }) => {
  return (
    <div className="prose max-w-full p-4 border rounded bg-gray-900 text-white shadow overflow-auto max-h-[500px]">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default ReadmeViewer;
