import { sanityFetch } from "@/lib/sanity";
import { cache } from "react";

export const getHomePage = cache(async () => {
  const query = `query {
  allHome {
    _id
    seo {
      pagehandle
      title
      description
      keywords
    }
    hero {
      title
      subtitle
      backgroundImage {
        alt
        asset {
          url
        }
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
    aboutUs {
      title
      description
    }
    equipmentCategories {
      title
      categories {
        title
        image {
          alt
          asset {
            url
          }
        }
        link {
          current
        }
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
    }
    projectSteps {
      title
      subtitle
      steps {
        step
        title
        description
      }
    }
    pricingExamples {
      title
      dailyPrice {
        rows {
          cells
        }
      }
      weeklyPrice {
        rows {
          cells
        }
      }
      monthlyPrice {
        rows {
          cells
        }
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
    }
    homeReviews {
      title
      descriptionRaw
    }
    faq {
      title
      descriptionRaw
      image {
        alt
        asset {
          url
        }
      }
      faqItems {
        _key
        question
        answerRaw
      }
    }
    testimonials {
      feedback
      reviewerName
      designation
    }
    paymentMethods {
      paymentOptions {
        alt
        asset {
          url
        }
      }
      captionRaw
    }
  }
}
`;

  const response = await sanityFetch(query);
  return response.data?.allHome?.length > 0 ? response.data?.allHome[0] : null;
});
