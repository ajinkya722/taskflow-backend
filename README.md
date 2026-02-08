Why controller does not store tasks?
- It is supposed to control the request/response (input/output logic) and not the actual data which is request and response body
- Controllers are responsible only for translating HTTP requests into service calls and converting service responses into HTTP responses.
Storing or mutating data in controllers couples business logic to the transport layer, which makes the application harder to test, maintain, and scale.

Why service returns plain objects?
- Because we've not added multiple arrays inside or rather I would say we haven't yet formatted the response body
- Services return plain domain objects because they should be independent of how the data is ultimately presented over HTTP.
Formatting, status codes, and response structure belong to the controller layer, while services focus only on business rules and data manipulation.

What will break when we restart the server?
- getTasks will break as we're not storing anything in DB yet. (It won't actually break but I think it will show and empty array)
- On server restart, all task data will be lost because the service currently stores data in memory.
The API itself will continue to function correctly, but it will return an empty dataset, highlighting the need for persistent storage such as a database.