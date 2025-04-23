import { sanityFetch } from "@/lib/sanity";
import { cache } from "react";

export const getSettingData = cache(async () => {
  const query = `query {
  allSitesettings {
    header {
      logo {
        alt
        asset {
          url
        }
      }
      menu {
        type
        label
        slug {
          current
        }
        url
      }
      button {
        type
        btnType
        label
        slug {
          current
        }
        url
      }
      button2 {
        type
        btnType
        label
        slug {
          current
        }
        url
      }
    }
    footer {
      title
      menu {
        type
        label
        slug {
          current
        }
        url
      }
      cvr
      caption
      button {
        type
        btnType
        label
        slug {
          current
        }
        url
      }
    }
  }
}
`;

  const response = await sanityFetch(query);
  return response.data?.allSitesettings?.length > 0
    ? response.data?.allSitesettings[0]
    : null;
});
