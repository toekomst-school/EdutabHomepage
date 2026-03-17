<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import Button from './ui/button/button.svelte';
	import Mail from '@lucide/svelte/icons/mail';
	import User from '@lucide/svelte/icons/user';
	import Building2 from '@lucide/svelte/icons/building-2';
	import MessageSquare from '@lucide/svelte/icons/message-square';
	import Loader2 from '@lucide/svelte/icons/loader-2';
	import CheckCircle2 from '@lucide/svelte/icons/check-circle-2';
	import AlertCircle from '@lucide/svelte/icons/alert-circle';
	import X from '@lucide/svelte/icons/x';

	export interface ContactFormData {
		name: string;
		email: string;
		organization: string;
		message: string;
	}

	export interface ContactFormProps {
		submitEndpoint?: string;
		class?: string;
	}

	let { submitEndpoint = '/api/contact', class: className }: ContactFormProps = $props();

	// Form state
	let formData = $state<ContactFormData>({
		name: '',
		email: '',
		organization: '',
		message: ''
	});

	let isSubmitting = $state<boolean>(false);
	let submitStatus = $state<'idle' | 'success' | 'error'>('idle');
	let submitMessage = $state<string>('');
	let errors = $state<Partial<Record<keyof ContactFormData, string>>>({});
	let touched = $state<Partial<Record<keyof ContactFormData, boolean>>>({});

	// Validation functions
	function validateName(value: string): string | null {
		if (!value.trim()) return 'Name is required';
		if (value.trim().length < 2) return 'Name must be at least 2 characters';
		return null;
	}

	function validateEmail(value: string): string | null {
		if (!value.trim()) return 'Email is required';
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(value)) return 'Please enter a valid email address';
		return null;
	}

	function validateOrganization(value: string): string | null {
		// Organization is optional
		return null;
	}

	function validateMessage(value: string): string | string | null {
		if (!value.trim()) return 'Message is required';
		if (value.trim().length < 10) return 'Message must be at least 10 characters';
		if (value.trim().length > 5000) return 'Message must be less than 5000 characters';
		return null;
	}

	const validators: Record<keyof ContactFormData, (value: string) => string | null> = {
		name: validateName,
		email: validateEmail,
		organization: validateOrganization,
		message: validateMessage
	};

	function validateField(field: keyof ContactFormData) {
		const validator = validators[field];
		if (validator) {
			const error = validator(formData[field]);
			if (error) {
				errors[field] = error;
				return false;
			} else {
				errors[field] = undefined;
				return true;
			}
		}
		return true;
	}

	function validateAll(): boolean {
		let isValid = true;
		const fields: (keyof ContactFormData)[] = ['name', 'email', 'organization', 'message'];
		fields.forEach((key) => {
			if (!validateField(key)) {
				isValid = false;
			}
		});
		return isValid;
	}

	function handleFieldBlur(field: keyof ContactFormData) {
		touched[field] = true;
		validateField(field);
	}

	function handleInputChange(field: keyof ContactFormData, value: string) {
		formData[field] = value;
		// Clear error when user starts typing
		if (touched[field]) {
			validateField(field);
		}
	}

	async function handleSubmit() {
		// Mark all fields as touched
		touched = {
			name: true,
			email: true,
			organization: true,
			message: true
		};

		// Validate all fields
		if (!validateAll()) {
			submitStatus = 'error';
			submitMessage = 'Please fix the errors above and try again.';
			return;
		}

		isSubmitting = true;
		submitStatus = 'idle';

		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000));

			// In production, this would be an actual fetch call:
			// const response = await fetch(submitEndpoint, {
			// 	method: 'POST',
			// 	headers: { 'Content-Type': 'application/json' },
			// 	body: JSON.stringify(formData)
			// });
			// if (!response.ok) throw new Error('Submission failed');

			// Success
			submitStatus = 'success';
			submitMessage =
				'Thank you for your message! We\'ll get back to you within 1-2 business days.';

			// Reset form
			formData = {
				name: '',
				email: '',
				organization: '',
				message: ''
			};
			touched = {};
			errors = {};
		} catch (error) {
			submitStatus = 'error';
			submitMessage =
				'Something went wrong. Please try again or contact us directly at support@edutab.io.';
			console.error('Form submission error:', error);
		} finally {
			isSubmitting = false;
		}
	}

	function resetForm() {
		formData = {
			name: '',
			email: '',
			organization: '',
			message: ''
		};
		touched = {};
		errors = {};
		submitStatus = 'idle';
		submitMessage = '';
	}

	// Character count for message field
	let messageCharCount = $derived(formData.message.length);
	let messageCharCountValid = $derived(messageCharCount >= 10 && messageCharCount <= 5000);
</script>

<div class={cn('w-full', className)}>
	<form
		onsubmit={(e) => {
			e.preventDefault();
			handleSubmit();
		}}
		class="space-y-6"
	>
		<!-- Name Field -->
		<div class="space-y-2">
			<label for="name" class="block text-sm font-medium text-neutral-900">
				Name <span class="text-accent-red">*</span>
			</label>
			<div class="relative">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<User class="size-5 text-neutral-400" aria-hidden="true" />
				</div>
				<input
					id="name"
					type="text"
					name="name"
					value={formData.name}
					oninput={(e) => handleInputChange('name', e.currentTarget.value)}
					onblur={() => handleFieldBlur('name')}
					disabled={isSubmitting}
					class={cn(
						'block w-full rounded-lg border py-2.5 pl-10 pr-3 text-sm',
						'transition-colors duration-200',
						'focus:outline-none focus:ring-2 focus:ring-primary-coral focus:ring-offset-2',
						'disabled:cursor-not-allowed disabled:opacity-50',
						errors.name && touched.name
							? 'border-accent-red bg-accent-red/5 focus:border-accent-red focus:ring-accent-red'
							: 'border-neutral-300 bg-white focus:border-primary-coral hover:border-neutral-400'
					)}
					placeholder="Your full name"
					required
					aria-invalid={!!(errors.name && touched.name)}
					aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
				/>
			</div>
			{#if errors.name && touched.name}
				<p id="name-error" class="mt-1.5 flex items-center gap-1 text-sm text-accent-red">
					<AlertCircle class="size-4 shrink-0" aria-hidden="true" />
					<span>{errors.name}</span>
				</p>
			{/if}
		</div>

		<!-- Email Field -->
		<div class="space-y-2">
			<label for="email" class="block text-sm font-medium text-neutral-900">
				Email <span class="text-accent-red">*</span>
			</label>
			<div class="relative">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<Mail class="size-5 text-neutral-400" aria-hidden="true" />
				</div>
				<input
					id="email"
					type="email"
					name="email"
					value={formData.email}
					oninput={(e) => handleInputChange('email', e.currentTarget.value)}
					onblur={() => handleFieldBlur('email')}
					disabled={isSubmitting}
					class={cn(
						'block w-full rounded-lg border py-2.5 pl-10 pr-3 text-sm',
						'transition-colors duration-200',
						'focus:outline-none focus:ring-2 focus:ring-primary-coral focus:ring-offset-2',
						'disabled:cursor-not-allowed disabled:opacity-50',
						errors.email && touched.email
							? 'border-accent-red bg-accent-red/5 focus:border-accent-red focus:ring-accent-red'
							: 'border-neutral-300 bg-white focus:border-primary-coral hover:border-neutral-400'
					)}
					placeholder="you@school.eu"
					required
					aria-invalid={!!(errors.email && touched.email)}
					aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
				/>
			</div>
			{#if errors.email && touched.email}
				<p id="email-error" class="mt-1.5 flex items-center gap-1 text-sm text-accent-red">
					<AlertCircle class="size-4 shrink-0" aria-hidden="true" />
					<span>{errors.email}</span>
				</p>
			{/if}
		</div>

		<!-- School/Organization Field -->
		<div class="space-y-2">
			<label for="organization" class="block text-sm font-medium text-neutral-900">
				School / Organization
			</label>
			<div class="relative">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<Building2 class="size-5 text-neutral-400" aria-hidden="true" />
				</div>
				<input
					id="organization"
					type="text"
					name="organization"
					value={formData.organization}
					oninput={(e) => handleInputChange('organization', e.currentTarget.value)}
					onblur={() => handleFieldBlur('organization')}
					disabled={isSubmitting}
					class={cn(
						'block w-full rounded-lg border py-2.5 pl-10 pr-3 text-sm',
						'transition-colors duration-200',
						'focus:outline-none focus:ring-2 focus:ring-primary-coral focus:ring-offset-2',
						'disabled:cursor-not-allowed disabled:opacity-50',
						errors.organization && touched.organization
							? 'border-accent-red bg-accent-red/5 focus:border-accent-red focus:ring-accent-red'
							: 'border-neutral-300 bg-white focus:border-primary-coral hover:border-neutral-400'
					)}
					placeholder="St. European School"
					aria-invalid={!!(errors.organization && touched.organization)}
				/>
			</div>
			{#if errors.organization && touched.organization}
				<p id="organization-error" class="mt-1.5 flex items-center gap-1 text-sm text-accent-red">
					<AlertCircle class="size-4 shrink-0" aria-hidden="true" />
					<span>{errors.organization}</span>
				</p>
			{/if}
		</div>

		<!-- Message Field -->
		<div class="space-y-2">
			<label for="message" class="block text-sm font-medium text-neutral-900">
				Message <span class="text-accent-red">*</span>
			</label>
			<div class="relative">
				<div class="pointer-events-none absolute top-3 left-3">
					<MessageSquare class="size-5 text-neutral-400" aria-hidden="true" />
				</div>
				<textarea
					id="message"
					name="message"
					rows={6}
					value={formData.message}
					oninput={(e) => handleInputChange('message', e.currentTarget.value)}
					onblur={() => handleFieldBlur('message')}
					disabled={isSubmitting}
					class={cn(
						'block w-full rounded-lg border py-2.5 pl-10 pr-3 text-sm',
						'transition-colors duration-200',
						'focus:outline-none focus:ring-2 focus:ring-primary-coral focus:ring-offset-2',
						'disabled:cursor-not-allowed disabled:opacity-50',
						'resize-y',
						errors.message && touched.message
							? 'border-accent-red bg-accent-red/5 focus:border-accent-red focus:ring-accent-red'
							: 'border-neutral-300 bg-white focus:border-primary-coral hover:border-neutral-400'
					)}
					placeholder="Tell us about your needs, ask a question, or request a demo..."
					required
					aria-invalid={!!(errors.message && touched.message)}
					aria-describedby={errors.message && touched.message ? 'message-error' : 'message-count'}
				></textarea>
			</div>
			<div class="flex items-center justify-between">
				{#if errors.message && touched.message}
					<p id="message-error" class="flex items-center gap-1 text-sm text-accent-red">
						<AlertCircle class="size-4 shrink-0" aria-hidden="true" />
						<span>{errors.message}</span>
					</p>
				{:else}
					<p id="message-count" class="text-sm text-neutral-500">
						{messageCharCount} / 5000 characters
					</p>
				{/if}
			</div>
		</div>

		<!-- Submit/Success/Error Messages -->
		{#if submitStatus === 'success'}
			<div
				role="alert"
				aria-live="polite"
				class="flex items-start gap-3 rounded-lg bg-accent-green/10 border border-accent-green/20 p-4"
			>
				<CheckCircle2 class="size-5 shrink-0 text-accent-green" aria-hidden="true" />
				<div class="flex-1">
					<p class="font-medium text-accent-green">Message sent successfully!</p>
					<p class="mt-1 text-sm text-neutral-700">{submitMessage}</p>
				</div>
				<button
					type="button"
					onclick={resetForm}
					class="text-neutral-400 hover:text-neutral-600 transition-colors"
					aria-label="Close success message"
				>
					<X class="size-5" />
				</button>
			</div>
		{:else if submitStatus === 'error'}
			<div
				role="alert"
				aria-live="assertive"
				class="flex items-start gap-3 rounded-lg bg-accent-red/10 border border-accent-red/20 p-4"
			>
				<AlertCircle class="size-5 shrink-0 text-accent-red" aria-hidden="true" />
				<div class="flex-1">
					<p class="font-medium text-accent-red">Submission failed</p>
					<p class="mt-1 text-sm text-neutral-700">{submitMessage}</p>
				</div>
			</div>
		{/if}

		<!-- Submit Button -->
		<div class="flex flex-col gap-3 sm:flex-row">
			<Button
				type="submit"
				disabled={isSubmitting}
				variant="default"
				size="lg"
				class="flex-1 sm:flex-none"
			>
				{#if isSubmitting}
					<Loader2 class="size-5 animate-spin" aria-hidden="true" />
					<span>Sending...</span>
				{:else}
					<span>Send Message</span>
				{/if}
			</Button>
			{#if submitStatus !== 'idle'}
				<button
					type="button"
					onclick={resetForm}
					class="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-coral focus:ring-offset-2"
				>
					Clear Form
				</button>
			{/if}
		</div>

		<!-- Privacy Note -->
		<p class="text-xs text-neutral-500">
			By submitting this form, you agree to our
			<a href="/privacy" class="text-primary-coral hover:underline">Privacy Policy</a>.
			Your data is stored on EU servers and never shared with third parties.
		</p>
	</form>
</div>
