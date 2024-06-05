import { devices } from "playwright";

export const browsers = [
  {
    name: "chromium",
    use: {
      ...devices["Desktop Chrome"],
    },
  },
  {
    name: "firefox",
    use: {
      ...devices["Desktop Firefox"],
    },
  },
  {
    name: "webkit",
    use: {
      ...devices["Desktop Safari"],
    },
  },
];
