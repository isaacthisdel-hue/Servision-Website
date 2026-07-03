import { createFileRoute, redirect } from "@tanstack/react-router";

const GITHUB_USERNAME = "isaacthisdel-hue";

export const Route = createFileRoute("/ar/$slug")({
  beforeLoad: ({ params, location }) => {
    const fullPath = location.pathname;
    const arPath = fullPath.replace(/^\/ar\//, "");
    const parts = arPath.split("/").filter(Boolean);

    if (parts.length === 0) {
      throw redirect({ href: "https://www.servision.ca" });
    }

    const restaurantSlug = parts[0];
    const rest = parts.slice(1).join("/");
    const repoName = "ar-" + restaurantSlug;
    const githubPath = rest
      ? `/${repoName}/${rest}/`
      : `/${repoName}/`;

    throw redirect({
      href: `https://${GITHUB_USERNAME}.github.io${githubPath}`,
    });
  },
  component: () => null,
});
