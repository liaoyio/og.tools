import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "og.new",
    short_name: "og.new",
    description: "Generate beautiful Open Graph images with zero effort.",
    start_url: "/",
    display: "standalone",
  }
}
