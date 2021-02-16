export const Username = async (name) => {
  const url = [
    "https://mb71r4j683.execute-api.ap-northeast-1.amazonaws.com/test/usernames?lookup",
    name,
  ].join("=");
  const result = await fetch(url, {
    method: "GET",
    headers: {
      "x-token": "xxx",
    },
  });
  const un = await result.json();
  return un;
};
