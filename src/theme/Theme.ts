export class Theme {
	primary: string;
	on_primary: string;
	primary_container: string;
	on_primary_container: string;
	secondary: string;
	on_secondary: string;
	secondary_container: string;
	on_secondary_container: string;
	tertiary: string;
	on_tertiary: string;
	tertiary_container: string;
	on_tertiary_container: string;
	background: string;
	on_background: string;
	surface: string;
	on_surface;
	surface_variant: string;
	on_surface_variant: string;


	constructor(primary: string, secondary: string, tertiary: string) {
		this.primary = primary;
		this.secondary = secondary;
		this.tertiary = tertiary;
	}
}