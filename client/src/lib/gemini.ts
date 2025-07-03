import { apiRequest } from "./queryClient";

export interface ChatRequest {
  message: string;
  type: 'chat' | 'stimulasi' | 'dongeng' | 'milestone';
}

export interface ChatResponse {
  response: string;
  success: boolean;
}

export async function sendChatMessage(request: ChatRequest): Promise<ChatResponse> {
  const response = await apiRequest('POST', '/api/chat', request);
  return response.json();
}
