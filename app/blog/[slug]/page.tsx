async function getData(slug: string) {
  // console.log("___ getData slug: ", slug);

  // TODO: use slug for data fetching to get correct data from some API
  const res = await fetch("https://api.github.com/repos/vercel/next.js");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);
  // console.log("___ data: ", data);

  const getKeys = (data: any, is_object: boolean): any => {
    return Object.entries(data).map(([key, value]) => {
      if (Array.isArray(value)) {
        return (
          <div className="flex" key={key}>
            <p className="text-neutral-500 pr-2">{key}: </p>
            <ul>
              {value.map((v) => {
                return <li key={v}>{v}</li>;
              })}
            </ul>
          </div>
        );
      }
      if (!value) {
        return (
          <div className="flex" key={key}>
            <p className="text-neutral-500 pr-2">{key}: </p>
            <p>{null}</p>
          </div>
        );
      }
      if (
        typeof value === "object" &&
        !Array.isArray(value) &&
        value !== null
      ) {
        return getKeys(value, true);
      }
      if (typeof value === "string" || typeof value === "number") {
        return (
          <div
            className={`flex ${is_object ? "pl-4 bg-neutral-200" : ""}`}
            key={key}
          >
            <p className="text-neutral-500 pr-2">{key}: </p>
            <p>{value}</p>
          </div>
        );
      }
    });
  };

  return (
    <div>
      <h1 className="mt-2 text-xl text-center">Blog post</h1>
      <h2 className="mt-2 text-xl text-center">slug: {params.slug}</h2>
      {getKeys(data, false)}
    </div>
  );
};
export default BlogPost;
