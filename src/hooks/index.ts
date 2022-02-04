import { sequence } from '@sveltejs/kit/hooks';
import { handleLanguageAccessibility } from './lang';

// noinspection JSUnusedGlobalSymbols
export const handle = sequence(handleLanguageAccessibility);
