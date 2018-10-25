Common use of "state-less" components

Ensure components are flow typed

Components should be considered to be a "dumb" as possible. This allows for easier updating as well as simplifies the testing of the application
to ensure its stability

- Stateless components should not contain any mapping. It should all be passed.
- Condintions should be kept to a minimum.
- - Condions should be kept to boolean on passed string text.
