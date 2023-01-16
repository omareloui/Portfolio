import fs from "node:fs/promises";
import { random } from "@utils";

import type { APIRoute } from "astro";

import type { Quote } from "@type";

export const get: APIRoute = async function get() {
  let quotes: Quote[] = [];

  try {
    await fs.access("./public/quotes.json", fs.constants.F_OK);
    await read();
  } catch (e) {
    await refetch();
  }

  async function refetch() {
    const _quotes = await (await fetch("https://type.fit/api/quotes")).json();
    await fs.writeFile(
      "./public/quotes.json",
      JSON.stringify({ quotes: _quotes }, null, 2)
    );
    quotes = _quotes;
  }

  async function read() {
    const quotesString = await fs.readFile("./public/quotes.json", {
      encoding: "utf8",
    });
    quotes = JSON.parse(quotesString).quotes;
  }

  const randomQuote = quotes[random(0, quotes.length)];

  return new Response(JSON.stringify(randomQuote, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
