/**
 * EduTab Animation Type Definitions
 * Provides TypeScript types for animation utilities
 */

/**
 * Easing function names for animations
 */
export type EasingFunction =
	| 'spring'          // Bouncy, playful cubic-bezier(0.68, -0.55, 0.265, 1.55)
	| 'spring-gentle'   // Gentler bounce cubic-bezier(0.34, 1.56, 0.64, 1)
	| 'spring-snappy'   // Quick bounce cubic-bezier(0.5, 1.5, 0.5, 1)
	| 'smooth'          // Fluid cubic-bezier(0.4, 0, 0.2, 1)
	| 'smooth-in'       // Fluid enter cubic-bezier(0.4, 0, 1, 1)
	| 'smooth-out'      // Fluid exit cubic-bezier(0, 0, 0.2, 1)
	| 'snappy'          // Quick, responsive cubic-bezier(0.19, 1, 0.22, 1)
	| 'snappy-in'       // Quick enter cubic-bezier(0.19, 1, 1, 1)
	| 'snappy-out'      // Quick exit cubic-bezier(0, 0, 0.22, 1)
	| 'enter'           // Element appearing cubic-bezier(0, 0, 0.2, 1)
	| 'exit'            // Element leaving cubic-bezier(0.4, 0, 1, 1)
	| 'linear'          // No easing
	| 'in'              // Standard ease-in
	| 'out'             // Standard ease-out
	| 'in-out';         // Standard ease-in-out

/**
 * Animation duration presets
 */
export type AnimationDuration =
	| 'instant'    // 100ms
	| 'fast'        // 200ms
	| 'normal'      // 300ms
	| 'slow'        // 500ms
	| 'slower';     // 800ms

/**
 * Animation delay presets
 */
export type AnimationDelay =
	| 'none'        // 0ms
	| 'short'       // 50ms
	| 'normal'      // 100ms
	| 'medium'      // 150ms
	| 'long'        // 200ms
	| 'longer';     // 300ms

/**
 * Keyframe animation names
 */
export type KeyframeAnimation =
	| 'fade-up'
	| 'fade-down'
	| 'fade-in'
	| 'fade-out'
	| 'scale-in'
	| 'scale-out'
	| 'scale-in-spring'
	| 'slide-in-right'
	| 'slide-in-left'
	| 'slide-in-top'
	| 'slide-in-bottom'
	| 'bounce'
	| 'shake'
	| 'spin'
	| 'pulse'
	| 'ping'
	| 'float'
	| 'wiggle'
	| 'shimmer';

/**
 * Animation direction for reveal animations
 */
export type AnimationDirection =
	| 'up'
	| 'down'
	| 'left'
	| 'right'
	| 'scale';

/**
 * Duration values in milliseconds
 */
export const DURATION_MS = {
	instant: 100,
	fast: 200,
	normal: 300,
	slow: 500,
	slower: 800
} as const;

/**
 * Delay values in milliseconds
 */
export const DELAY_MS = {
	none: 0,
	short: 50,
	normal: 100,
	medium: 150,
	long: 200,
	longer: 300
} as const;

/**
 * Cubic-bezier easing function values
 */
export const EASING_VALUES = {
	spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
	'spring-gentle': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
	'spring-snappy': 'cubic-bezier(0.5, 1.5, 0.5, 1)',
	smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
	'smooth-in': 'cubic-bezier(0.4, 0, 1, 1)',
	'smooth-out': 'cubic-bezier(0, 0, 0.2, 1)',
	snappy: 'cubic-bezier(0.19, 1, 0.22, 1)',
	'snappy-in': 'cubic-bezier(0.19, 1, 1, 1)',
	'snappy-out': 'cubic-bezier(0, 0, 0.22, 1)',
	enter: 'cubic-bezier(0, 0, 0.2, 1)',
	exit: 'cubic-bezier(0.4, 0, 1, 1)',
	linear: 'linear',
	in: 'cubic-bezier(0.4, 0, 1, 1)',
	out: 'cubic-bezier(0, 0, 0.2, 1)',
	'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
} as const;

/**
 * Animation configuration object
 */
export interface AnimationConfig {
	/** Keyframe animation name */
	keyframe?: KeyframeAnimation;
	/** Duration preset */
	duration?: AnimationDuration;
	/** Easing function */
	easing?: EasingFunction;
	/** Delay preset */
	delay?: AnimationDelay;
	/** Custom duration in milliseconds (overrides duration preset) */
	customDuration?: number;
	/** Custom delay in milliseconds (overrides delay preset) */
	customDelay?: number;
}

/**
 * Get CSS transition string from animation config
 */
export function getTransitionString(
	property: string | string[],
	config: AnimationConfig = {}
): string {
	const { duration = 'normal', easing = 'smooth', customDuration } = config;
	const durationMs = customDuration ?? DURATION_MS[duration];
	const easingValue = EASING_VALUES[easing];

	const props = Array.isArray(property) ? property.join(', ') : property;

	return `${props} ${durationMs}ms ${easingValue}`;
}

/**
 * Get CSS animation string from animation config
 */
export function getAnimationString(config: AnimationConfig = {}): string {
	const {
		keyframe = 'fade-in',
		duration = 'normal',
		easing = 'smooth',
		delay = 'none',
		customDuration,
		customDelay
	} = config;

	const durationMs = customDuration ?? DURATION_MS[duration];
	const delayMs = customDelay ?? DELAY_MS[delay];
	const easingValue = EASING_VALUES[easing];

	return `${keyframe} ${durationMs}ms ${easingValue} ${delayMs}ms`;
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
	if (typeof window === 'undefined') return false;
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
