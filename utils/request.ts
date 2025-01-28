import { RequestError } from "@/types/api-request";
import { RequestCreationOfPostType } from "@/types/api-request/post";

/**
 *
 * @param route
 * @param method
 * @returns
 */
const requestBase = async <T>(
  route: string,
  method: string,
  requestBody?: string,
): Promise<T | RequestError> => {
  let response;

  try {
    response = await fetch(route, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: requestBody ? requestBody : undefined,
    });

    if (response.ok === false) throw new Error();
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return { error: response?.statusText || "확인되지 않은 에러" };
  }
};

/**
 *
 */
const requestPostList = async () => {
  const response = requestBase("/api/posts", "GET");

  return response;
};

const requestCreationPost = async (rawRequest: RequestCreationOfPostType) => {
  const request = JSON.stringify(rawRequest);
  const response = await requestBase("/api/posts", "POST", request);

  return response;
};

export { requestPostList, requestCreationPost };
