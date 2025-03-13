const item28 = () => {
  interface State {
    pageText: string;
    isLoading: boolean;
    error?: string;
  }

  function renderPage(state: State) {
    if (state.isLoading) {
      return "Loading...";
    }
    if (state.error) {
      return `Error: ${state.error}`;
    }
    return state.pageText;
  }

  async function changePage(state: State, newPage: string) {
    state.isLoading = true;
    try {
      const response = await fetch(getUrlForPage(newPage));
      if (!response.ok) {
        throw new Error("Failed to fetch page");
      }
      const text = await response.text();
      state.isLoading = false;
      state.pageText = text;
    } catch (error) {
      state.error = "" + error;
    }
  }

  // 위 코드는 isLoading이 true이면서 동시에 error값이 설정되는 무효한 상태를 허용함. 따라서, render, changePage 둘 다 제대로 구현할 수 없게 된다.

  interface RequestPending {
    state: "pending";
  }
  interface RequestError {
    state: "error";
    error: string;
  }
  interface RequestSuccess {
    state: "ok";
    pageText: string;
  }
  type RequestState = RequestPending | RequestError | RequestSuccess;
  interface State2 {
    currentPage: string;
    requests: { [page: string]: RequestState };
  }

  function renderPage2(state: State2) {
    const { currentPage } = state;
    const requestState = state.requests[currentPage];
    switch (requestState.state) {
      case "pending":
        return `Loading...${currentPage}`;
      case "error":
        return `Error: ${requestState.error}`;
      case "ok":
        return requestState.pageText;
    }
  }

  async function changePage2(state: State2, newPage: string) {
    state.requests[newPage] = { state: "pending" };
    state.currentPage = newPage;
    try {
      const response = await fetch(getUrlForPage(newPage));
      if (!response.ok) {
        throw new Error(`Unable to load ${newPage}: ${response.statusText}`);
      }
      const pageText = await response.text();
      state.requests[newPage] = { state: "ok", pageText };
    } catch (error) {
      state.requests[newPage] = { state: "error", error: "" + error };
    }
  }
};
