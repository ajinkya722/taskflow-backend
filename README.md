Why controller does not store tasks?
- Controllers are responsible only for translating HTTP requests into service calls and converting service responses into HTTP responses.
Storing or mutating data in controllers couples business logic to the transport layer, which makes the application harder to test, maintain, and scale.

Why service returns plain objects?
- Services return plain domain objects because they should be independent of how the data is ultimately presented over HTTP.
Formatting, status codes, and response structure belong to the controller layer, while services focus only on business rules and data manipulation.

What will break when we restart the server?
- On server restart, all task data will be lost because the service currently stores data in memory.
The API itself will continue to function correctly, but it will return an empty dataset, highlighting the need for persistent storage such as a database.

Why is validation done in controller?
- Validation is done in the controller because it is the first entry point for HTTP requests. Controllers act as a boundary layer that ensures incoming requests are structurally and semantically valid before passing them to the service layer. This prevents invalid or malformed data from reaching business logic and allows the API to return consistent, meaningful HTTP error responses early.

What problems does this prevent?
- Controller-level validation prevents invalid or incomplete data from propagating into the service and persistence layers. It avoids unnecessary execution of business logic, reduces runtime errors, and ensures predictable API behavior. This also improves security and stability by rejecting bad requests early with proper HTTP status codes instead of failing deeper in the system.

What would happen if frontend skipped validation?
- If the frontend skips validation but backend validation exists, the backend will still reject invalid requests and return appropriate error responses. However, if both frontend and backend validations are missing, invalid data can reach the service layer, potentially causing runtime errors, data corruption, or unexpected application behavior.