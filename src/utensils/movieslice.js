import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovies :null,
        TrendingMovies:null,
        PopularMovies:null,
        TopRatedMovies:null,
        UpcomingMovies:null,
        AiringMovies:null,
        OnTheAirMovies:null,
        trailerVideo : null
     },
    reducers:{
        addNowPlayingMovies:(state,action) =>{
            state.nowPlayingMovies =action.payload;
        },
        addTrendingMovies:(state,action) =>{
            state.TrendingMovies =action.payload;
        },
        addPopularMovies:(state,action) =>{
            state.PopularMovies =action.payload;
        },
        addTopRatedMovies:(state,action) =>{
            state.TopRatedMovies =action.payload;
        },
        addUpcomingMovies:(state,action) =>{
            state.UpcomingMovies =action.payload;
        },
        addAiringMovies:(state,action) =>{
            state.AiringMovies =action.payload;
        },
        addOnTheAirMovies:(state,action) =>{
            state.OnTheAirMovies =action.payload;
        },
        addTrailerVideo:(state,action) => {
            state.trailerVideo = action.payload
        }
        }
    }
)

export const{addNowPlayingMovies, addTrendingMovies,  addUpcomingMovies, addAiringMovies,addPopularMovies,addTopRatedMovies,addOnTheAirMovies,addTrailerVideo} = movieSlice.actions

export  default movieSlice.reducer;