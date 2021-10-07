// A mock function to mimic making an async request for data
export function getItemDelay(item = 'new') {
  return new Promise<{ data: string }>((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: item });
    }, 2000);
  });
}

export function getAllItemsDelay() {
  return new Promise<string[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(['ok1', 'ok2', 'ok3']);
    }, 2000);
  });
}