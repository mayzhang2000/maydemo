package com.maydemo.maydenomodblambda.handlers;

import com.amazonaws.codesamples.gsg.MoviesItemOps01;
import com.amazonaws.codesamples.gsg.MoviesItemOps02;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.maydemo.maydenomodb.bean.MovieQueryBean;
import com.maydemo.maydenomodb.bean.MovieRequestBean;
import com.maydemo.maydenomodb.bean.MovieResponseBean;

import java.util.HashMap;

public class GetMovieHandler implements RequestHandler<MovieQueryBean, MovieResponseBean> {

    public MovieResponseBean handleRequest(MovieQueryBean movieQueryBean, Context context) {
        //TODO: THE REsponse should be get back from the addItem
        try {
            MoviesItemOps02.get(movieQueryBean.getQuery(), movieQueryBean.getNameMap(), movieQueryBean.getValueMap());
        }catch (Exception e) {
            System.out.println (e.getStackTrace());
        }
        MovieResponseBean personResponse = new MovieResponseBean();
        personResponse.setMessage("Saved Successfully!!!");
        return personResponse;

    }

}

