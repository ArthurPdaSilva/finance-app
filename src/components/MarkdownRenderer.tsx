"use client";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type MarkdownRendererProps = {
  markdown: string;
};

export function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert w-full max-w-none overflow-hidden lg:prose-lg prose-th:text-white prose-td:text-slate-200">
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          li: ({ node, ...props }) => (
            <li className="[&>p]:mb-0 [&>p]:inline" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul
              className="list-disc list-outside ml-6 mb-2 mt-2 last:mb-0 space-y-1"
              {...props}
            />
          ),
          table: ({ node, ...props }) => (
            <div className="my-4 w-full overflow-x-auto rounded-lg border border-white/20 bg-white/5">
              <table
                className="w-full border-collapse text-left text-sm"
                {...props}
              />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead
              className="bg-white/10 text-white uppercase font-bold"
              {...props}
            />
          ),
          tbody: ({ node, ...props }) => (
            <tbody className="divide-y divide-white/10" {...props} />
          ),
          tr: ({ node, ...props }) => (
            <tr className="hover:bg-white/5 transition-colors" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="px-4 py-3 border-b border-white/20" {...props} />
          ),
          td: ({ node, ...props }) => <td className="px-4 py-3" {...props} />,
          p: ({ node, ...props }) => (
            <p className="mb-4 leading-relaxed" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-bold mb-4" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-2xl font-bold mb-4" {...props} />
          ),
          hr: ({ node, ...props }) => <hr className="mb-4" {...props} />,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
