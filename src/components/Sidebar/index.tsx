/** biome-ignore-all lint/performance/noImgElement: false positive */
/** biome-ignore-all lint/a11y/useValidAnchor: false positive */

import { LogoutButton } from "./LogoutButton";

export const Sidebar = () => {
  return (
    <aside className="hidden md:flex w-64 bg-white border-r border-gray-200  flex-col shrink-0 z-20">
      <div className="h-16 flex items-center px-6 border-b border-gray-50/50">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" />
          <span className="font-bold text-lg tracking-tight ">Finance AI</span>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {/* ACTIVE MENU */}
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-white rounded-lg group shadow-sm shadow-blue-200
          bg-[radial-gradient(circle_at_center,#12A2CA,#199BC7,#5A63AB)]
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <title>Chat</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          <span className="text-sm font-medium">AI Chat</span>
        </a>

        {/* MENU ITEMS */}
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg group transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-gray-400 group-hover:text-gray-600"
          >
            <title>Projetos</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
            />
          </svg>
          <span className="text-sm font-medium">Projetos</span>
        </a>

        <div className="pt-4 mt-4 border-t border-gray-100">
          <span className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Configurações
          </span>

          <LogoutButton />
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className=" bg-[linear-gradient(90deg,#12A2CA,#199BC7,#5A63AB)] w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium">
            AU
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              Usuário Admin
            </p>
            <p className="text-xs text-gray-500 truncate">Usuário único</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
