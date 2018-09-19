package com.maydemo.maydenomodblambda;

import com.maydemo.maydenomodb.bean.MovieQueryBean;
import com.maydemo.maydenomodb.bean.MovieRequestBean;
import com.maydemo.maydenomodblambda.handlers.GetMovieHandler;
import com.maydemo.maydenomodblambda.handlers.SaveMovieHandler;
import org.testng.annotations.Test;

import java.util.HashMap;

public class HandlerTest {
    @Test
    public void testSaveMovieHandler() {
        MovieRequestBean movieRequestBean = new MovieRequestBean();
        movieRequestBean.setYear(2018);
        movieRequestBean.setTitle("Forever Young");
        new SaveMovieHandler().handleRequest(movieRequestBean, null);
    }

    @Test
    public void testGetMovieHandler() {
        MovieQueryBean movieQueryBean = new MovieQueryBean();
        String query = "#yr = :yyyy";
        movieQueryBean.setQuery(query);

        HashMap<String, String> nameMap = new HashMap<String, String>();
        nameMap.put("#yr", "year");
        movieQueryBean.setNameMap(nameMap);

        HashMap<String, Object> valueMap = new HashMap<String, Object>();
        valueMap.put(":yyyy", 2018);
        movieQueryBean.setValueMap(valueMap);

        new GetMovieHandler().handleRequest(movieQueryBean, null);
    }
}
