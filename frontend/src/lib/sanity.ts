// ============================================================================================== //
// ===================================== API CONFIGURATION ====================================== //
// ============================================================================================== //

export async function sanityFetch(query: string) {
  const URL = process.env.NEXT_PUBLIC_SANITY_GRAPHQL || "";

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query }),
    }).then((res) => res.json());
    return response;
  } catch (error) {
    console.error(error);
    throw new Error(
      "There was an error fetching the data from Sanity. Please try again later."
    );
  }
}
