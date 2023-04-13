// Looks like there is no type definition for the responses https://www.tvmaze.com/threads/4647/api-response-models-documentation
// Using https://app.quicktype.io/ to generate them

export interface SearchResponse {
    score: number;
    show:  ShowResponse;
}

export interface ShowResponse {
    id:             number;
    url:            string;
    name:           string;
    type:           string;
    language:       string;
    genres:         string[];
    status:         string;
    runtime:        number | null;
    averageRuntime: number | null;
    premiered:      Date | null;
    ended:          Date | null;
    officialSite:   null | string;
    schedule:       Schedule;
    rating:         Rating;
    weight:         number;
    network:        Network | null;
    webChannel:     Network | null;
    dvdCountry:     null;
    externals:      Externals;
    image:          Image | null;
    summary:        null | string;
    updated:        number;
    _links:         Links;
}

export interface Links {
    self:             Href;
    previousepisode?: Href;
    nextepisode?:     Href;
}

export interface Href {
    href: string;
}

export interface Externals {
    tvrage:  number | null;
    thetvdb: number | null;
    imdb:    null | string;
}

export interface Image {
    medium:   string;
    original: string;
}

export interface Network {
    id:           number;
    name:         string;
    country:      Country | null;
    officialSite: null | string;
}

export interface Country {
    name:     string;
    code:     string;
    timezone: string;
}

export interface Rating {
    average: number | null;
}

export interface Schedule {
    time: string;
    days: string[];
}


