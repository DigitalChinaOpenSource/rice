import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { ThreadList } from "../components/assistant-ui/thread-list";
import { Thread } from "../components/assistant-ui/thread";
import { TooltipProvider } from "../components/ui/tooltip";

export const Chat = () => {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  return (
    <TooltipProvider>
      <AssistantRuntimeProvider runtime={runtime}>
        <div className="grid h-[600px] grid-cols-[200px_1fr] gap-x-2 px-4 py-4">
          <ThreadList />
          <Thread />
        </div>
      </AssistantRuntimeProvider>
    </TooltipProvider>
  );
};
