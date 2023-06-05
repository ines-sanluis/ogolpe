export interface Genre {
    id: number,
    name: string
}

export interface Movie {
    title: string,
    backdrop_path: string,
    meida_type: string,
    release_date: string,
    first_air_date: string,
    genre_ids: number[],
    id: number,
    name: string,
    origin_country: string[],
    original_language: string,
    overview: string,
    popularity: string
    poster_path: string,
    vote_average: number,
    vote_count: number
}

export interface Element {
    type:
    | 'Bloopers'
    | 'Featurettes'
    | 'Behind the Scenes'
    | 'Clip'
    | 'Trailer'
    | 'Teaser'
}