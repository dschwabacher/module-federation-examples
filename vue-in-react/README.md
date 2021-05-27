# vue-in-react Module Federation Demo

This example demos consumption of federated modules from a Webpack bundle. `layout` app (react based) depends on a component exposed by `home` app (vue based). 

---

# Running Demo

Run `yarn start` . This will build and serve both `home` and `layout` on ports 3002 and 3001 respectively.

- HOST (layout): [localhost:3001](http://localhost:3001/)
- REMOTE (home): [localhost:3002](http://localhost:3002/)
