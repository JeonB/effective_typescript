function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function asyncFunction() {
  console.log("Start");
  await delay(2000);
  console.log("End");
}

// asyncFunction();
