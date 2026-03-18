/**
 * Opens the Chatwoot chat widget
 * Falls back gracefully if Chatwoot isn't loaded yet
 */
export function openChatwoot(): void {
	if (typeof window !== 'undefined' && (window as any).$chatwoot) {
		(window as any).$chatwoot.toggle('open');
	}
}
