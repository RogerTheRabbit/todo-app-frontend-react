export const SecureFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> => {
  const response = await fetch(input, { credentials: "include", ...init });
  console.log(response);
  if (!response.ok) {
    if (response.status === 401) {
      window.location.assign(
        `${import.meta.env.VITE_BASE_API_PATH}/auth/login`,
      );
    }
  }
  return response;
};
