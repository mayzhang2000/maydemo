package com.maydemo.maydenomodblambda.handlers;

import com.amazonaws.codesamples.gsg.MoviesItemOps01;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.maydemo.maydenomodb.bean.MovieRequestBean;
import com.maydemo.maydenomodb.bean.MovieResponseBean;

public class SaveMovieHandler implements RequestHandler<MovieRequestBean, MovieResponseBean> {

    public MovieResponseBean handleRequest(MovieRequestBean personRequest, Context context) {
        //TODO: THE REsponse should be get back from the addItem
        MoviesItemOps01.addItem(personRequest);
        MovieResponseBean personResponse = new MovieResponseBean();
        personResponse.setMessage("Saved Successfully!!!");
        return personResponse;
    }

}

