
// export async function fetchData<Selected extends Endpoint>(endpoint: Selected) {
// 	const apiEndpoint = `${API_URL}${endpoint}`;

// 	console.info(`Fetching ${apiEndpoint}…`);
// 	return fetch(apiEndpoint)
// 		.then(
// 			(r) =>
// 				r.json() as unknown as Promise<
// 					ReturnType<EndpointsToOperations[Selected]>
// 				>,
// 		)
// 		.catch((e) => {
// 			console.error(e);
// 			throw Error('Invalid API data!');
// 		});
// }

// // NOTE: These helpers are useful for unifying paths, app-wide
// export function url(path = '') {
// 	return `${import.meta.env.SITE}${import.meta.env.BASE_URL}${path}`;
// }

// // TODO: Remove old local assets from git history (to make cloning snappier).
// export function asset(path: string) {
// 	// NOTE: Fetching remote assets from the Hugo admin dashboard Vercel dist.
// 	return `${REMOTE_ASSETS_BASE_URL}/${path}`;
// }
