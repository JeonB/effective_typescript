const item25 = () => {
  const _cache: { [url: string]: string } = {};
  async function fetchWithCache(url: string) {
    if (_cache[url]) {
      return _cache[url];
    }
    const response = await fetch(url);
    const text = await response.text();
    _cache[url] = text;
    return text;
  }

  let requestStatus: "loading" | "success" | "error";
  async function getUser(userId: string) {
    requestStatus = "loading";
    const profile = await fetchWithCache(
      `https://api.github.com/users/${userId}`
    );
    requestStatus = "success";
    return profile;
  }
};
