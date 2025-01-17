import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "JwarRef GitHub": "https://github.com/GCT-Studios/JwarRef",
      "Bushido Discord": "https://discord.gg/UeYGhJ9v",
      "Quartz GitHub": "https://github.com/jackyzha0/quartz",
      "Quartz Discord": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.FeatIcons(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      title: "Sections",
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["definitions","LRB"])
        return !omit.has(node.name.toLowerCase())
      }
    }
    )),
  ],
  right: [
//    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      title: "Sections",
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["definitions","LRB"])
        return !omit.has(node.name.toLowerCase())
      }
    }
    )),
  ],
  right: [],
}
