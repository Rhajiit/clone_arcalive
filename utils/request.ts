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
  body?: object,
): Promise<T | RequestError> => {
  let response;
  const JSON_BODY = body ? JSON.stringify(body) : null;

  try {
    response = await fetch(route, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON_BODY ? JSON_BODY : undefined,
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

const requestCreationPost = async (request: RequestCreationOfPostType) => {
  const response = await requestBase("/api/posts", "POST", request);

  return response;
};

export { requestPostList, requestCreationPost };
