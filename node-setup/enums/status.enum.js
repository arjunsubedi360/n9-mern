export const HttpStatusEnum = {
    OK: 200, //Success response
    CREATED: 201, // Success and created
    NO_CONTENT: 204, // No content
    BAD_REQUEST: 400, // Bad payload from client
    UNAUTHORIZED: 401, // authentication
    FORBIDDEN: 403, // permission not given on route
    NOT_FOUND: 404, // page not found
    INTERNAL_SERVER_ERROR: 500, // Db or server issue
    BAD_GATEWAY: 502, // bad gateway
    SERVICE_UNAVAILABLE: 503 // service not available
  };
  

