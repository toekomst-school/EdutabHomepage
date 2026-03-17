<script lang="ts">
	import Github from '@lucide/svelte/icons/github';
	import Twitter from '@lucide/svelte/icons/twitter';
	import Instagram from '@lucide/svelte/icons/instagram';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';

	interface FooterLink {
		label: string;
		href: string;
	}

	interface FooterColumn {
		title: string;
		links: FooterLink[];
	}

	let productLinks = $derived<FooterLink[]>([
		{ label: m.nav_ecosystem(), href: localizeHref('/ecosystem') },
		{ label: m.nav_tablets(), href: localizeHref('/tablets') },
		{ label: m.nav_portal(), href: localizeHref('/portal') },
		{ label: m.nav_app_marketplace(), href: localizeHref('/app-marketplace') }
	]);

	let resourcesLinks = $derived<FooterLink[]>([
		{ label: m.nav_pricing(), href: localizeHref('/pricing') },
		{ label: m.nav_about(), href: localizeHref('/about') },
		{ label: m.nav_open_source(), href: localizeHref('/open-source') },
		{ label: m.nav_faq(), href: localizeHref('/faq') }
	]);
</script>

<footer class="footer">
	<div class="footer-container">
		<div class="footer-content">
			<!-- Grid Layout -->
			<div class="footer-grid">
				<!-- Logo & Description -->
				<div class="footer-brand">
					<a href={localizeHref('/')} class="footer-logo">
						<!-- 4-Square Green Grid Logo -->
						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							class="footer-logo-icon"
						>
							<rect x="3" y="3" width="12" height="12" rx="3" fill="#4CAF50"/>
							<rect x="17" y="3" width="12" height="12" rx="3" fill="#66BB6A"/>
							<rect x="3" y="17" width="12" height="12" rx="3" fill="#81C784"/>
							<rect x="17" y="17" width="12" height="12" rx="3" fill="#A5D6A7"/>
						</svg>
						<span class="footer-logo-text">
							EduTab
						</span>
					</a>
					<p class="footer-description">
						{m.footer_description()}
					</p>
				</div>

				<!-- Product Column -->
				<div class="footer-column">
					<h3 class="footer-heading">{m.footer_product()}</h3>
					<ul class="footer-links">
						{#each productLinks as link}
							<li>
								<a href={link.href} class="footer-link">
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Resources Column -->
				<div class="footer-column">
					<h3 class="footer-heading">{m.footer_resources()}</h3>
					<ul class="footer-links">
						{#each resourcesLinks as link}
							<li>
								<a href={link.href} class="footer-link">
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Social Column -->
				<div class="footer-column">
					<!-- Social Links -->
					<h3 class="footer-heading">{m.footer_follow_us()}</h3>
					<div class="footer-social">
						<a
							href="https://github.com/edutab"
							target="_blank"
							rel="noopener noreferrer"
							class="footer-social-link"
							aria-label={m.aria_github()}
						>
							<Github class="footer-social-icon" />
						</a>
						<a
							href="https://twitter.com/edutab"
							target="_blank"
							rel="noopener noreferrer"
							class="footer-social-link"
							aria-label={m.aria_twitter()}
						>
							<svg class="footer-social-icon" viewBox="0 0 24 24" fill="currentColor">
								<path d="m21.742 21.75-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714h-6.189l7.29 10.776-7.399 8.724h2.456l6.035-7.118 4.818 7.118h6.191z"/>
							</svg>
						</a>
						<a
							href="https://instagram.com/edutab"
							target="_blank"
							rel="noopener noreferrer"
							class="footer-social-link"
							aria-label={m.aria_instagram()}
						>
							<Instagram class="footer-social-icon" />
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="footer-bottom">
			<div class="footer-bottom-content">
				<p class="footer-copyright">
					&copy; {new Date().getFullYear()} {m.footer_copyright()}
				</p>
				<p class="footer-tagline">
					{m.footer_tagline()}
				</p>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background-color: rgb(38 38 38);
		color: rgb(163 163 163);
	}

	.footer-container {
		max-width: 80rem;
		margin-inline: auto;
		padding-inline: var(--space-section-x, 1rem);
	}

	.footer-content {
		padding-block: var(--space-section-y, 3rem);
	}

	/* Grid Layout - fluid columns */
	.footer-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-gap, 1rem);
	}

	@media (min-width: 48rem) {
		.footer-grid {
			grid-template-columns: repeat(4, 1fr);
			gap: var(--space-gap, 1.5rem);
		}
	}

	/* Brand section */
	.footer-brand {
		grid-column: span 2;
	}

	@media (min-width: 48rem) {
		.footer-brand {
			grid-column: span 1;
		}
	}

	.footer-logo {
		display: flex;
		align-items: center;
		gap: var(--space-gap-sm, 0.5rem);
		margin-bottom: var(--space-gap, 1rem);
	}

	.footer-logo-icon {
		width: 2rem;
		height: 2rem;
	}

	.footer-logo-text {
		font-family: var(--font-display, inherit);
		font-weight: 700;
		font-size: clamp(1.25rem, 2vw, 1.5rem);
		color: white;
	}

	.footer-description {
		font-size: var(--font-body-base, 0.875rem);
		color: rgb(163 163 163);
		line-height: 1.5;
	}

	/* Column headings */
	.footer-heading {
		font-weight: 600;
		color: white;
		margin-bottom: var(--space-gap, 1rem);
		font-size: var(--font-body-base, 0.875rem);
	}

	/* Link lists */
	.footer-links {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-gap-sm, 0.75rem);
	}

	.footer-links-legal {
		margin-bottom: var(--space-gap, 1.5rem);
	}

	.footer-link {
		font-size: var(--font-body-base, 0.875rem);
		color: rgb(163 163 163);
		transition: color 0.2s ease;
	}

	.footer-link:hover {
		color: rgb(144 238 144);
	}

	/* Social links */
	.footer-social {
		display: flex;
		align-items: center;
		gap: var(--space-gap, 1rem);
	}

	.footer-social-link {
		color: rgb(163 163 163);
		transition: color 0.2s ease;
	}

	.footer-social-link:hover {
		color: white;
	}

	.footer-social-icon {
		width: 1.25rem;
		height: 1.25rem;
	}

	/* Bottom bar */
	.footer-bottom {
		border-top: 1px solid rgb(56 56 56);
		padding-block: clamp(1rem, 3vw, 1.5rem);
	}

	.footer-bottom-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-gap, 1rem);
	}

	@media (min-width: 48rem) {
		.footer-bottom-content {
			flex-direction: row;
		}
	}

	.footer-copyright,
	.footer-tagline {
		font-size: var(--font-body-base, 0.875rem);
		color: rgb(115 115 115);
		text-align: center;
	}

	@media (min-width: 48rem) {
		.footer-copyright,
		.footer-tagline {
			text-align: left;
		}
	}
</style>
