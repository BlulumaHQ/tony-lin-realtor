import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/zh-tw")({
  component: () => <Outlet />,
});