import { http, HttpResponse } from "msw";
import { menu, tables } from "./data";

export const handlers = [
  http.get("/api/v1/menu", () => {
    return HttpResponse.json(menu);
  }),

  http.get("/api/v1/tables", () => {
    return HttpResponse.json(tables);
  }),

  http.post("/api/v1/booking", async ({ request }) => {
    const body = await request.json();

    return HttpResponse.json({
      id: Date.now(),
      status: "success",
      ...body,
    });
  }),
];
