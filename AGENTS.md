# Architecture rules

- Keep the LHL brand-introduction band in the shared ConstructionPage so both languages stay consistent without adding third-party branding to shared site chrome.
- Apply platform-host HTML noindex at the server entry using the incoming request URL, never forwarded headers or a global template rule; leave custom-host responses unchanged to preserve indexability.