export interface Album {
	id?: number;
	user_id?: number | null;
	author?: string;
	title?: string;
	imagePath?: string;
}
export interface AlbumsCollection{
	title: string;
	flat: boolean;
	albums: Album[];
}