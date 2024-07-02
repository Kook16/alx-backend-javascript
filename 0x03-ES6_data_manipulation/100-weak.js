export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Get the current count for the endpoint, or 0 if it doesn't exist
  const count = weakMap.get(endpoint) || 0;
  
  // Increment the count and set it back in the WeakMap
  weakMap.set(endpoint, count + 1);

  // Check if the count is 5 or more
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    return weakMap.get(endpoint);
  }
}
