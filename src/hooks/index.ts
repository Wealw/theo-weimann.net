import { sequence } from '@sveltejs/kit/hooks';
import { handleLanguageAccessibility, handleLanguageRedirection } from './lang';

// noinspection JSUnusedGlobalSymbols
export const handle = sequence(handleLanguageRedirection, handleLanguageAccessibility);
