# Coinbase Exchange API SDK (unofficial)

> Since Coinbase doesn't have an official SDK for Node.js, we created one.

---

## What does it do?

It simplifies the use of the Coinbase Exchange API (Pro), defining the interface of all available attributes for HTTP body objects, query parameters, URLs, and (the most important part) authentication.

It exposes all this in a simple way, abstracting all the manual work of interacting with the Coinbase Exchange API.

Use it like:

```javascript
const cb = new CoinbaseExchangeApi({ key: "", secret: "", passphrase: "", environment: "" });
```
<sub>The environment defaults to <i>"dev"</i>. When it's using <i>"dev"</i>, it refers to the Sandbox environment. Set it to <i>"prod"</i> to use the production API.</sub>

After this, you can use all the endpoints and methods of [the API reference](https://docs.cloud.coinbase.com/exchange/reference).

For example, looking at the documentation, you have chosen to use the "Get Conversion fee Rates" of the "Conversions" endpoint/method.

So, using this package, you can use it this way:

```javascript
cb.conversions.getConversionFeeRates();
```

It's entirely based on the documentation, so every section and every section's methods are used exactly in the same way here, but using the camel-case convention.

Also, the lint of the code will always show you what data needs to be passed (IDs, body, or query params), also providing the interfaces for that (so you will always know which data is required and what are all the available options).

## Supporting the development

This work was done by [@TaylorHo](https://github.com/TaylorHo), and it's in constant improvement.

If you have encountered some error or something that doesn't feel right, open an issue or, even better, a PR solving the issue.

You can give thanks to our work here on [Github Sponsors](https://github.com/sponsors/hotaydev).

Thanks for using this package <3!
